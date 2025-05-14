import { find } from "@/lib/strapi"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export default async function PublicLayoutHeader() {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   const { data, error } = await find(
      // fetch public header data
      "api/padma-backend/layout",
      {
         populate: {
            header: { populate: "*" }
         },
         locale: language ?? "en"
      }
   )

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
   } else {
      console.error("Active theme could not be loaded!")
   }
   const blocks = data?.data?.header || []

   return (
      <>
         {blocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
            const BlockConfig = getPublicComponents[block.__component]

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
