export interface IUser {
   id?: number
   firstName: string
   lastName: string
   email: string
   phone: string
   role: {
      id?: number
      name: string
      type: string
   }
   avatar?: {
      id?: number
      url: string
   }
}

type UserRole = {
   id: number
   name: string
   description: string
   type: string
   createdAt: Date
   updatedAt: Date
}

type User = {
   name: string
   email: string
   id: string
   role: UserRole
   username: string
   provider: string
   confirmed: boolean
   blocked: boolean
   createdAt: Date
   updatedAt: Date
   jwtToken: string
   membership: string | null
}

export type IUserSession = {
   user: User
   expires: Date
}
