import type { Metadata } from "next"
import NotFoundBody from "./notFoundBody"
import { getLanguageFromCookie } from "@/utils/language"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"

// REVIEW: Meta data Should not be static
//FIXME: Page should be dynamic

// will be dynamic page and filtered by slug
// slug- 404-page
export const metadata: Metadata = {
   title: "Page Not Found",
   description: "Page not found on the website"
}

export default async function NotFound(props: { children: React.ReactNode }) {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // get the layout data from the server
   const { data } = await find(
      "api/padma-backend/layout",
      {
         populate: "*",
         // publicationState: "live",
         locale: language ?? "en"
      },
      "no-store"
   )

   const activeTheme = await loadActiveTheme()

   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
   } else {
      console.error("Active theme could not be loaded!")
   }

   return <NotFoundBody data={data} language={language} currentThemeComponents={getPublicComponents} {...props} />
}
