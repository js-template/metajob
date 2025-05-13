import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { loadActiveTheme } from "config/theme-loader"

export const dynamicParams = true // true | false,

export default async function DynamicPages({
   params
}: {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const pageSlug = params?.slug

   const language = await getLanguageFromCookie()

   const { data, error } = await find(
      "api/padma-backend/private-pages",
      {
         filters: {
            slug: {
               $eq: pageSlug
            }
         },
         populate: {
            blocks: {
               populate: "*"
            }
         },
         locale: language ?? "en"
      },
      "no-store"
   )

   const activeTheme = await loadActiveTheme()
   const getPrivateComponents = activeTheme?.getPrivateComponents || {}

   const blocks = data?.data[0]?.blocks || []

   // *** if blocks is empty, return 404 ***
   if (!blocks || blocks?.length === 0) {
      return notFound()
   }
   //*** if error, return error page ***
   if (error) {
      throw error
   }

   return (
      <>
         {blocks?.map((block: any, index: number) => {
            const BlockConfig = getPrivateComponents[block.__component as keyof typeof getPrivateComponents]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig

               //@ts-ignore
               return <ComponentToRender key={index} block={block} language={language} />
            }
            return null // Handle the case where the component mapping is missing
         })}
      </>
   )
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
   const { data, error } = await find("api/padma-backend/private-pages", {
      fields: ["slug"],
      filters: {
         slug: {
            $ne: null
         }
      }
   })

   return data?.data?.map((post: any) => ({
      slug: post?.slug || ""
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
   const language = await getLanguageFromCookie()

   // ***fetch seo data
   const product = await find(
      "api/padma-backend/private-pages",
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
         }
      },
      "no-store"
   )
   if (!product?.data?.data?.[0]?.seo) {
      return {
         title: product?.data?.data?.[0]?.title || "Title not found",
         description: `Description ${product?.data?.data[0]?.title}` || "Description not found"
      }
   }

   return StrapiSeoFormate(product?.data?.data?.[0]?.seo, `/${pageSlug}`)
}
