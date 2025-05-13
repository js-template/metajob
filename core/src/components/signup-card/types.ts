export type IUserRole = {
   id: number
   name: string
   description: string
   type: string
   createdAt: string
   updatedAt: string
   nb_users: number
}

export type IRegisterBLock = {
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
