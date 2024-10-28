// ?? ImageFormat props
type imageProps = {
   data: {
      id: number
      attributes: {
         name: string
         alternativeText: string | null
         caption: string | null
         width: number
         height: number
         formats: null | Record<string, unknown>
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
   }
}

export type linkItemProps = {
   label: string
   link: string
   type?: string
   target?: string
   icon: string
   disabled?: boolean
   child?: {
      label: string
      link: string
      target: string
      icon: string
      disabled: boolean
   }[]
}

export type footerSectionProps = {
   id: number
   title: string
   FooterMenu: linkItemProps[]
}

export type socialLinkProps = {
   id: number
   label: string
   link: string
   type: string
   target: string
   icon: string
}

export type layoutDataTypeProps = {
   locale: string
   TopBar: {
      announcement: string | null
      menu: linkItemProps[]
   }
   light_logo: {
      id: number
      link: string
      logo: imageProps
   } | null
   dark_logo: {
      id: number
      link: string
      logo: imageProps
   } | null
   MainMenu: linkItemProps[]
   Button: linkItemProps[]
   userMenu: linkItemProps[]
   langMenu: linkItemProps[]
   candidateSidebar: linkItemProps[]
   employerSidebar: linkItemProps[]
   FooterOne: {
      id: number
      title: string
      description: string
      location: {
         id: number
         title: string
         icon: string | null
      }
      phone: {
         id: number
         title: string
         icon: string | null
      }
      email: {
         id: number
         title: string
         icon: string | null
      }
   }
   FooterTwo: footerSectionProps
   FooterThree: footerSectionProps
   FooterFour: footerSectionProps
   FooterTop: {
      id: number
      title: string
      logo: imageProps
      search: {
         id: number
         title: string | null
         searchByWords: string
         searchByLocation: string | null
         button: string
         link: string | null
         categories: {
            data: any[]
         }
      }
   }
   FooterBottom: {
      id: number
      brand_name: string | null
      social_link: socialLinkProps[]
   }
}
