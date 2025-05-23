import React, { Fragment } from "react"
import { notFound } from "next/navigation"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { Metadata, ResolvingMetadata } from "next"
import { loadActiveTheme } from "config/theme-loader"

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ params }: { params: { slug: string } }) {
   const pageSlug = params?.slug

   // redirect to 404 page if no pageSlug found
   if (!pageSlug || pageSlug === "null") {
      notFound()
   }

   const language = await getLanguageFromCookie()

   // *** get blog-details data from strapi ***
   const { data: detailsData, error: detailsErro } = await find("api/padma-backend/posts", {
      filters: {
         slug: {
            $eq: pageSlug
         }
      },
      populate: "*",
      publicationState: "live",
      locale: language ?? "en"
   })

   const pageDetailsData = detailsData?.data?.[0]

   // *** get  blogs-details-page data from strapi ***
   const { data: blogPageData, error: blogPageError } = await find("api/padma-backend/post-setting", {
      // populate: "*",
      populate: {
         blocks: {
            populate: "*"
         }
      },
      publicationState: "live",
      locale: language ?? "en"
   })

   const activeTheme = await loadActiveTheme()
   // Define as an empty object by default
   let getPublicComponents: Record<string, any> = {}

   if (activeTheme) {
      getPublicComponents = activeTheme.getPublicComponents
   } else {
      console.error("Active theme could not be loaded!", blogPageError)
   }

   // if (error) {
   //    return <div>Something went wrong</div>
   // }
   const blocks = blogPageData?.data?.blocks || []

   return (
      <Fragment>
         {/* Render the components dynamically using blockComponentMapping */}
         {blocks?.map((block: any, index: number) => {
            // @ts-ignore
            const BlockConfig = getPublicComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               return <ComponentToRender key={index} block={block} data={pageDetailsData} language={language} />
            }
            return null // Handle missing component mapping case
         })}
      </Fragment>
   )
}

// *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug
   const language = await getLanguageFromCookie()
   // *** fetch seo data
   const { data } = await find("api/padma-backend/posts", {
      filters: {
         slug: {
            $eq: pageSlug
         }
      },
      populate: {
         seo: {
            populate: "*"
         }
      }
   })

   // if seo is not available, return default data
   if (!data?.data?.[0]?.seo) {
      return {
         title: data?.data?.[0]?.title || "Title not found",
         description: data?.data?.[0]?.short_description || "Description not found"
      }
   }

   return StrapiSeoFormate(data?.data?.[0]?.seo, `/blog/${pageSlug}`)
}
