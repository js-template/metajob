"use client"
import { useGlobalContext } from "@/context/store"
import { SignOut } from "@/lib/user"
import { signOut, useSession } from "next-auth/react"

export default function DashboardLayoutBody({
   data,
   currentThemeComponents,
   children,
   language
}: {
   data: any
   currentThemeComponents: any
   children: React.ReactNode
   language: string
}) {
   const { changeLang, changeDirection } = useGlobalContext()
   // ?? get the private-header from the layout data
   const headerBlock = data?.data?.attributes?.header?.find(
      (block: any) => block.__component === "block.private-header"
   )

   // ?? get the private_sidebar_menus from the layout data
   const privateSidebarMenus = data?.data?.attributes?.private_sidebar_menus

   return (
      <>
         {(headerBlock || privateSidebarMenus) && (
            <>
               {currentThemeComponents["block.private-header"]
                  ? currentThemeComponents["block.private-header"].component({
                       SignOut: SignOut,
                       headerData: headerBlock,
                       sidebarMenus: privateSidebarMenus,
                       language: language,
                       changeLang: changeLang,
                       changeDirection: changeDirection,
                       children: children,
                       useSession: useSession,
                       signOut: signOut
                    })
                  : null}
            </>
         )}
      </>
   )
}
