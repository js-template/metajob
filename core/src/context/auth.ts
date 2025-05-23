import { getUser, SignIn } from "@/lib/user"
import type { NextAuthConfig } from "next-auth"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import LinkedInProvider from "next-auth/providers/linkedin"

type authType = "credentials" | "facebook" | "google" | "linkedin"

// *** NextAuth providers names
export const AuthProviders: authType[] = ["credentials", "facebook", "google", "linkedin"]

export const config = {
   secret: process.env.NEXTAUTH_SECRET,
   session: {
      strategy: "jwt",
      maxAge: 24 * 60 * 60 // 24 Hours
   },
   providers: [
      CredentialsProvider({
         name: "Credentials",
         credentials: {
            username: { label: "Email", type: "email", placeholder: "Email Address" },
            password: { label: "Password", type: "password" }
         },
         async authorize(
            credentials: {
               username: string
               password: string
            } & any,
            req
         ) {
            // local authentication logic
            const result = await SignIn({
               email: credentials.username,
               password: credentials.password
            })
            if (result?.isLoggedIn) {
               const data = await getUser(result.data)

               if (data?.error) {
                  return Promise.resolve(null)
               }

               return Promise.resolve({
                  ...data.data,
                  jwtToken: result.data
               })
            }

            // *** If no valid credentials are returned, return null
            return Promise.resolve(null)
         }
      }),
      // *** Add other providers here
      FacebookProvider({
         clientId: process.env.FACEBOOK_CLIENT_ID,
         clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      LinkedInProvider({
         clientId: process.env.LINKEDIN_CLIENT_ID,
         clientSecret: process.env.LINKEDIN_CLIENT_SECRET
      })
   ],

   // *** callbacks for session and jwt
   callbacks: {
      async signIn({ account }: any) {
         // Perform your sign-in logic here...
         if (account?.provider === "credentials") {
            return true
         }

         const result = await fetch(
            `${process.env.STRAPI_ENDPOINT}/api/auth/${account?.provider}/callback?access_token=${account?.access_token}`
         )

         const data = await result.json()
         // If sign-in is not successful, return false
         if (data?.error) {
            return false
         }

         // If sign-in is successful, return true
         return true
      },
      authorized({ request, auth }: any) {
         const { pathname } = request.nextUrl
         // *** Here add your protracted URL
         /**
          * Under the dashboard pages is protracted
          */
         if (pathname.includes("/dashboard")) return !!auth
         return true
      },
      // *** add user role to jwt token
      async jwt({ token, user, trigger, session, account }: any) {
         if (user && account.provider !== "credentials") {
            // *** get user by access token
            const response = await fetch(
               `${process.env.STRAPI_ENDPOINT}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`,
               {
                  headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`
                  }
               }
            )
            if (response.ok) {
               const data = await response.json()
               // get user info by jwt token
               const { data: user, error } = await getUser(data.jwt)
               if (error) {
                  throw new Error("Error getting user")
               }

               // *** trigger is update
               if (trigger === "update") {
                  token = {
                     ...token,
                     ...session
                  }
               }

               return {
                  ...token,
                  ...user,
                  jwtToken: data.jwt
               }
            }

            return false
         }

         // *** trigger is update
         if (trigger === "update") {
            token = {
               ...token,
               ...session
            }
         }
         return {
            ...token,
            ...user // use the user object to populate jwt token
         }
      },
      session({ session, token }: any) {
         return {
            ...session,
            user: {
               ...session.user,
               name: token?.name ?? token?.username,
               email: token?.email,
               id: token?.id as number,
               role: token?.role,
               username: token?.username,
               provider: token?.provider,
               confirmed: token?.confirmed,
               blocked: token?.blocked,
               createdAt: token?.createdAt,
               updatedAt: token?.updatedAt,
               jwtToken: token?.jwtToken,
               membership: token?.membership
            }
         }
      }
   },

   // *** Default sign-in page
   pages: {
      signIn: "/login",
      error: "/login"
   }
} as NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
