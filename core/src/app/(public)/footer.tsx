import PublicFooter from "@/components/layouts/public-footer"
import { find } from "@/lib/strapi"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export default async function PublicLayoutFooter() {
   const language = await getLanguageFromCookie()

   const { data, error } = await find("api/padma-backend/layout", {
      populate: {
         footer: { populate: "*" }
      },
      locale: language ?? "en"
   })

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
   } else {
      console.error("Active theme could not be loaded!")
   }
   const blocks = data?.data?.footer || []

   return (
      <>
         <PublicFooter blocks={blocks} getPublicComponents={getPublicComponents} />
      </>
   )
}
