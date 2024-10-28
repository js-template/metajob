import { Fragment } from "react"
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export const dynamicParams = false // true | false,

export default async function DynamicPages({
   params
}: {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const pageSlug = params?.slug
   // Load the active theme and get public components
   const { getPublicComponents } = await loadActiveTheme()

   const language = getLanguageFromCookie()

   const { data, error } = await find(
      "api/pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: "deep",
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   const blocks = data?.data[0]?.attributes?.blocks || []

   // *** if blocks is empty, return 404 ***
   if (!blocks || blocks?.length === 0) {
      return notFound()
   }
   // *** if error, return error page ***
   // if (error) {
   //    throw error;
   // }

   return (
      <Fragment>
         {blocks?.map((block: any, index: number) => {
            const BlockConfig = getPublicComponents[block.__component as keyof typeof getPublicComponents]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               //@ts-ignore
               return <ComponentToRender key={index} block={block} language={language} />
            }
            return null // Handle the case where the component mapping is missing
         })}
      </Fragment>
   )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
   const { data, error } = await find("api/pages", {
      fields: ["slug"],
      filters: {
         slug: {
            $ne: null
         }
      },
      publicationState: "live",
      locale: ["en"]
   })

   return data?.data?.map((post: any) => ({
      slug: post?.attributes?.slug || ""
   }))
}

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug
   const language = getLanguageFromCookie()

   // ***fetch seo data
   const product = await find(
      "api/pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: {
            seo: {
               populate: "*"
            }
         },
         publicationState: "live",
         locale: language ? [language] : ["en"]
      },
      "no-store"
   )

   if (!product?.data?.data?.[0]?.attributes?.seo) {
      return {
         title: product?.data?.data?.[0]?.attributes?.title || "Title not found",
         description: `Description ${product?.data?.data[0]?.attributes?.title}` || "Description not found"
      }
   }
   return StrapiSeoFormate(product?.data?.data?.[0]?.attributes?.seo, `/${pageSlug}`)
}
