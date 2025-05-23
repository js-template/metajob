import React, { Fragment } from "react"
import type { Metadata } from "next"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export default async function Home() {
   const language = await getLanguageFromCookie()

   const { data, error } = await find("api/padma-backend/public-frontpage", {
      populate: {
         blocks: {
            populate: "*"
         }
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

   const blocks = data?.data?.blocks || []

   return (
      <Fragment>
         {/* Render the components dynamically using blockComponentMapping */}
         {blocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               //@ts-ignore
               return <ComponentToRender key={index} language={language} block={block} />
            }
            return null // Handle case where component mapping is missing
         })}
      </Fragment>
   )
}

// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
   // const language = await getLanguageFromCookie()
   // *** fetch seo data

   const product = await find("api/padma-backend/public-frontpage", {
      populate: {
         seo: {
            populate: "*"
         }
      }
   })

   return StrapiSeoFormate(product?.data?.data?.seo)
}
