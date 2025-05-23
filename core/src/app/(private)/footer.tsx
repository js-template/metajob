import { useGlobalContext } from "@/context/store"
import { find } from "@/lib/strapi"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"
import { locale } from "moment"

export default async function PrivateLayoutFooter() {
   const language = await getLanguageFromCookie()
   const { data, error } = await find(
      // : API call need to Fix. It will be private Header
      "api/padma-backend/private-layout",
      {
         populate: "*",
         locale: language ?? "en"
      },
      "no-store"
   )

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPrivateComponents: Record<string, any> = {}

   if (activeTheme) {
      getPrivateComponents = activeTheme.getPrivateComponents
   } else {
      console.error("Active theme could not be loaded!")
   }
   const blocks = data?.data?.footer || []

   return (
      <>
         {blocks?.map((block: { __component: keyof typeof getPrivateComponents }, index: number) => {
            const BlockConfig = getPrivateComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               //@ts-ignore
               return <ComponentToRender key={index} block={block} />
            }
            return null // Handle case where component mapping is missing
         })}
      </>
   )
}
