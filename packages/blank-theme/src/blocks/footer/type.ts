export type ContactInfoProps = {
   id: number
   title: string
   icon: string
}

export type styleProps = {
   id: number
   color: string | null
   backgroundColor: string | null
   mobile: number
   tab: number
   desktop: number
}

export type FooterMenuItemProps = {
   id: number
   label: string
   link: string
   type: string | null
   target: string
   icon: string
   disabled: boolean
}

export type FooterSectionProps = {
   id: number
   title: string
   description?: string | null
   location?: ContactInfoProps
   phone?: ContactInfoProps
   email?: ContactInfoProps
   FooterMenu?: FooterMenuItemProps[]
   style?: styleProps
}

export type SocialLinkProps = {
   id: number
   label: string
   link: string
   type: string | null
   target: string
   icon: string
   disabled: boolean
}

export type FooterBottomProps = {
   id: number
   brand_name: string | null
   social_link: SocialLinkProps[]
}

export type FooterBlockProps = {
   data: FooterBlockDataProps
}

export type FooterBlockDataProps = {
   id: number
   __component: string
   FooterGrid: number
   copyright: boolean
   FooterOne: FooterSectionProps
   FooterTwo: FooterSectionProps
   FooterThree: FooterSectionProps
   FooterFour: FooterSectionProps | null
   FooterBottom: FooterBottomProps
}
