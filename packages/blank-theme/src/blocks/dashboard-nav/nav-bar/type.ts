export type MenuItemProps = {
   id: number
   label: string
   link: string
   type: string | null
   target: string | null
   icon: string
   disabled: boolean
   child: MenuItemProps[]
}

export type SharedMenusProps = {
   id: number
   __component: string
   role: string
   menus: MenuItemProps[]
}

export type SharedMenuList = SharedMenusProps[]
