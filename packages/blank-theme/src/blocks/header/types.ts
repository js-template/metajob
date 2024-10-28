export type LogoFormatsProps = {
   thumbnail?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      provider_metadata: {
         public_id: string
         resource_type: string
      }
   }
}

export type LogoAttributesProps = {
   name: string
   alternativeText: string | null
   caption: string | null
   width: number
   height: number
   formats: LogoFormatsProps | null
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: string | null
   provider: string
   provider_metadata: {
      public_id: string
      resource_type: string
   }
   createdAt: string
   updatedAt: string
}

export type LogoDataProps = {
   id: number
   attributes: LogoAttributesProps
}

export type LogoProps = {
   data: LogoDataProps
}

export type MenuItemProps = {
   id: number
   label: string
   link: string
   type: string | null
   target: string | null
   icon: string
   disabled: boolean
   child?: MenuItemProps[]
}

export type ButtonItemProps = {
   id: number
   label: string
   link: string
   type: string | null
   target: string | null
   icon: string
   disabled: boolean
}

export type PublicHeaderProps = {
   data: PublicHeaderDataProps
   language?: string
   changeLang: (lang: string) => void
   changeDirection: (dir: "rtl" | "ltr") => void
   useSession: any
   signOut: () => Promise<void>
}

export type PublicHeaderDataProps = {
   id: number
   __component: string
   dark_mode: boolean
   notification: boolean
   light_logo: {
      id: number
      link: string
      logo: LogoProps
      xs_width: number
      sm_width: number
      md_width: number
   }
   dark_logo: {
      id: number
      link: string
      logo: LogoProps
      xs_width: number
      sm_width: number
      md_width: number
   }
   MainMenu: MenuItemProps[]
   langMenu: MenuItemProps[]
   userMenu: MenuItemProps[]
   Button: ButtonItemProps[]
}
