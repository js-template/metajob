import { type DefaultSession } from "next-auth"

type role = {
   id: number
   name: string
   description: string
   type: string
   createdAt: string
   updatedAt: string
}

declare module "@auth/core" {
   interface Session {
      user: {
         /** The user's postal address. */
         id: number
         username: string
         email: string
         provider: string
         password: string
         resetPasswordToken: string
         confirmationToken: string
         confirmed: boolean
         blocked: boolean
         role: role
         created_by: string
         updated_by: string
         created_at: any
         updated_at: any
         jwtToken: string
      } & DefaultSession["user"] // To keep the default types
   }

   interface User {
      id: number
      username: string
      email: string
      provider: string
      password: string
      resetPasswordToken: string
      confirmationToken: string
      confirmed: boolean
      blocked: boolean
      role: role
      created_by: string
      updated_by: string
      created_at: any
      updated_at: any
      jwtToken: string
   }
}

declare module "next-auth" {
   interface Session {
      user: {
         /** The user's postal address. */
         id: number
         username: string
         email: string
         provider: string
         password: string
         resetPasswordToken: string
         confirmationToken: string
         confirmed: boolean
         blocked: boolean
         role: role
         created_by: string
         updated_by: string
         created_at: any
         updated_at: any
         jwtToken: string
      } & DefaultSession["user"] // To keep the default types
   }

   interface User {
      id: number
      username: string
      email: string
      provider: string
      password: string
      resetPasswordToken: string
      confirmationToken: string
      confirmed: boolean
      blocked: boolean
      role: role
      created_by: string
      updated_by: string
      created_at: any
      updated_at: any
      jwtToken: string
   }
}

declare module "@auth/core/jwt" {
   /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
   interface JWT {
      id: number
      username: string
      email: string
      provider: string
      password: string
      resetPasswordToken: string
      confirmationToken: string
      confirmed: boolean
      blocked: boolean
      role: role
      created_by: string
      updated_by: string
      created_at: any
      updated_at: any
      jwtToken: string
   }
}
