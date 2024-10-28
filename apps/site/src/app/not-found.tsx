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
   title: "Page Not Found | MUI Next.js Boilerplate",
   description: "Page not found for MUI Next.js Boilerplate"
}

export default async function NotFound(props: { children: React.ReactNode }) {
   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   // get the layout data from the server
   const { data } = await find(
      "api/layout",
      {
         populate: "deep",
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   // Load the active theme and get public components
   const { getPublicComponents } = await loadActiveTheme()

   return <NotFoundBody data={data} language={language} currentThemeComponents={getPublicComponents} {...props} />
}
