"use client"
import { useGlobalContext } from "@/context/store"
import { Box } from "@mui/material"
import React from "react"
import { signOut, useSession } from "next-auth/react"

const LayoutBody = ({
   data,
   currentThemeComponents,
   children,
   language
}: {
   data: any
   currentThemeComponents: any
   children: React.ReactNode
   language: string
}) => {
   const { changeLang, changeDirection } = useGlobalContext()
   // ?? get the public-header from the layout data
   const headerBlock = data?.data?.attributes?.header?.find((block: any) => block.__component === "block.public-header")

   // ?? get the footer from the layout data
   const footerBlock = data?.data?.attributes?.footer?.find((block: any) => block.__component === "block.footer")

   return (
      <main>
         {headerBlock && (
            <>
               {currentThemeComponents["block.public-header"]
                  ? currentThemeComponents["block.public-header"].component({
                       data: headerBlock,
                       language: language,
                       changeLang: changeLang,
                       changeDirection: changeDirection,
                       useSession: useSession,
                       signOut: signOut
                    })
                  : null}
            </>
         )}
         <Box>{children}</Box>
         {footerBlock && <footer>{currentThemeComponents["block.footer"]?.component({ data: footerBlock })}</footer>}
      </main>
   )
}

export default LayoutBody
