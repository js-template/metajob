import { redirect } from "next/navigation"
import { auth } from "@/context/auth"
import { Fragment } from "react"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export default async function ProfilePage() {
   const session = await auth()
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // *** If the user role is not an candidate or employer, redirect to the dashboard
   if (session?.user?.role?.type !== "candidate" && session?.user?.role?.type !== "employer") {
      redirect("/dashboard")
   }
   const userId = session?.user?.id as unknown as string

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPrivateComponents: Record<string, any> = {}

   if (activeTheme) {
      getPrivateComponents = activeTheme.getPrivateComponents
   } else {
      console.error("Active theme could not be loaded!")
   }

   return (
      <>
         {/* Render the components dynamically using blockComponentMapping */}
         {[{ __component: "block.auth-profile" }]?.map((block: any, index: number) => {
            // @ts-ignore
            const BlockConfig = getPrivateComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return <ComponentToRender key={index} block={block} session={session} language={language} />
            }
            return null
         })}
      </>
   )
}
