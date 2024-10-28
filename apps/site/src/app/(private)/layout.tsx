import React from "react"
import DashboardLayoutBody from "./body"
import { find } from "@/lib/strapi"
import { loadActiveTheme } from "config/theme-loader"
import { getLanguageFromCookie } from "@/utils/language"

export default async function PrivateLayout(props: { children: React.ReactNode }) {
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
   const { getPrivateComponents } = await loadActiveTheme()

   return (
      <DashboardLayoutBody data={data} language={language} currentThemeComponents={getPrivateComponents} {...props} />
   )
}
