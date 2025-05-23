"use client"
import React from "react"
import { signIn, useSession } from "next-auth/react"
import { SignUp } from "@/lib/user"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { PageLoader } from "@/components/loader/pageLoader"
import { SignUpCard } from "@/components/signup-card"

type Props = {
   block: {
      title?: string
      username_title?: string
      username_placeholder?: string
      email_title?: string
      email_placeholder?: string
      password_title?: string
      password_placeholder?: string
      confirm_password_title?: string
      confirm_password_placeholder?: string
      required_placeholder?: string
      button_placeholder?: string
      or_placeholder?: string
      login_helper_placeholder?: string
      login_link_placeholder?: string
      provider_option?: boolean
      style?: {
         color?: any
         secondary_color?: string
         backgroundColor?: any
         section_padding?: number
      }
   } | null
}

const RegisterBody = ({ block }: Props) => {
   const router = useRouter()
   const { status } = useSession()

   const [loading, setLoading] = React.useState(false)

   // redirect after login
   if (status === "authenticated") {
      router.push("/dashboard")
      return <PageLoader />
   }

   // *** email,password signUp  handler
   const handleSignUp = async (data: any) => {
      setLoading(true)
      if (data.password !== data.confirmPassword) {
         toast.error("Password and Confirm Password does not match")
         setLoading(false)
         return
      }
      if (data?.password?.length < 6) {
         toast.error("Password must be at least 6 characters long")
         setLoading(false)
         return
      }
      let modifiedData = {
         username: data?.username,
         email: data?.email,
         password: data?.password,
         role: data?.role
      }
      try {
         // Use the getUser function to perform the login
         const result = await SignUp(modifiedData)
         if (result.isLoggedIn) {
            toast.success("Account created successfully")
            router.push("/login")
         } else {
            toast.error("Username or Email already exists")
            setLoading(false)
         }
         // Redirect to the dashboard upon successful login
      } catch (error) {
         // Handle any unexpected errors during the login process
         toast.error("Username or Email already exists")
         setLoading(false)
         // reset()
      }
   }

   // *** google signUp handler
   const handleGoogleSignUp = () => {
      signIn("google", {
         callbackUrl: process.env.NEXTAUTH_URL
      })
   }
   // *** facebook signUp handler
   const handleFacebookSignUp = () => {
      signIn("facebook", {
         callbackUrl: process.env.NEXTAUTH_URL
      })
   }

   // *** linkedin signUp handler
   const handleLinkedinSignUp = () => {
      signIn("linkedin", {
         callbackUrl: process.env.NEXTAUTH_URL
      })
   }

   return (
      <SignUpCard
         block={block}
         loading={loading}
         signUpHandler={handleSignUp}
         googleSignUpHandler={handleGoogleSignUp}
         facebookSignUpHandler={handleFacebookSignUp}
         // linkedinSignUpHandler={handleLinkedinSignUp}
      />
   )
}

export default RegisterBody
