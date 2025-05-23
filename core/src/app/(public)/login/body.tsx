"use client"
import { useEffect, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import toast from "react-hot-toast"

import { useRouter } from "next/navigation"
import { PageLoader } from "@/components/loader/pageLoader"
import { LoginCard } from "@/components/login-card"

type Props = {
   error: string | undefined
   callbackUrl: string | undefined
   block: {
      title?: string
      email_placeholder?: string
      password_placeholder?: string
      required_placeholder?: string
      button_placeholder?: string
      or_placeholder?: string
      signup_link_placeholder?: string
      provider_option?: boolean
      signup_helper_placeholder?: string
      style?: {
         color?: any
         secondary_color?: string
         backgroundColor?: any
         section_padding?: number
      }
   } | null
}
const LoginBody = ({ callbackUrl, error, block }: Props) => {
   const { status } = useSession()
   const router = useRouter()

   const [loading, setLoading] = useState(false)

   useEffect(() => {
      const closeId = setTimeout(() => {
         if (error) {
            if (error === "CredentialsSignin") {
               toast.error("Email or password is incorrect", {
                  duration: 5000,
                  position: "top-center",
                  style: {
                     borderRadius: "6px",
                     boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                     border: "1px solid rgba(0, 0, 0, 0.1)",
                     color: "#F87171"
                  }
               })

               return
            }

            if (error === "EmailCreateAccount") {
               toast.error("Email is already in use", {
                  duration: 5000,
                  position: "top-center",
                  style: {
                     borderRadius: "6px",
                     boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                     border: "1px solid rgba(0, 0, 0, 0.1)",
                     color: "#F87171"
                  }
               })

               return
            }

            if (error === "CallbackRouteError") {
               toast.error("Maybe you are trying a wrong account", {
                  duration: 5000,
                  position: "top-center",
                  style: {
                     borderRadius: "6px",
                     boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                     border: "1px solid rgba(0, 0, 0, 0.1)",
                     color: "#F87171"
                  }
               })

               return
            }

            toast.error("Something went wrong", {
               duration: 5000,
               position: "top-center",
               style: {
                  borderRadius: "6px",
                  boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  color: "#F87171"
               }
            })
         }
      }, 100)

      return () => {
         clearTimeout(closeId)
      }
   }, [error])

   // redirect after login
   if (status === "authenticated") {
      router.push("/dashboard")
      return <PageLoader />
   }

   // *** email,password login handler
   const loginHandler = async (data: { username: string; password: string }) => {
      setLoading(true)
      await signIn("credentials", {
         username: data?.username,
         password: data?.password,
         redirect: true,
         callbackUrl: callbackUrl || process.env.NEXTAUTH_URL
      }).then(() => {
         setLoading(false)
      })
   }

   // *** google login handler
   const handleGoogleLogin = () => {
      signIn("google", {
         callbackUrl: callbackUrl ?? process.env.NEXTAUTH_URL
      })
   }
   // *** facebook login handler
   const handleFacebookLogin = () => {
      signIn("facebook", {
         callbackUrl: callbackUrl ?? process.env.NEXTAUTH_URL
      })
   }

   // *** linkedin login handler
   const handleLinkedinLogin = () => {
      signIn("linkedin", {
         callbackUrl: callbackUrl ?? process.env.NEXTAUTH_URL
      })
   }

   return (
      <LoginCard
         loginHandler={loginHandler}
         googleLoginHandler={handleGoogleLogin}
         facebookLoginHandler={handleFacebookLogin}
         // linkedinLoginHandler={handleLinkedinLogin}
         loading={loading}
         block={block}
      />
   )
}

export default LoginBody
