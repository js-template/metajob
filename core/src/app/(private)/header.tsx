import { find } from "@/lib/strapi"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export default async function PrivateLayoutHeader() {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // fetch private header data
   const { data, error } = await find(
      "api/padma-backend/private-layout",
      {
         populate: {
            header: { populate: "*" }
         },
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
   const blocks = data?.data?.header || []

   return (
      <>
         {blocks?.map((block: { __component: keyof typeof getPrivateComponents }, index: number) => {
            const BlockConfig = getPrivateComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               //@ts-ignore
               return <ComponentToRender key={index} block={block} language={language} />
            }
            return null // Handle case where component mapping is missing
         })}
      </>
   )
}
