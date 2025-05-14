import { find } from "@/lib/strapi"
import Body from "./body"
import React, { Suspense } from "react"
import { auth } from "@/context/auth"
import { redirect } from "next/navigation"
import { loadActiveTheme } from "config/theme-loader"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { Metadata, ResolvingMetadata } from "next/types"
import { getLanguageFromCookie } from "@/utils/language"
import { PrivateHomePageLoader } from "@/components/loader/private-home-loader"

// *** generate metadata type
type Props = {
   params: { slug: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

export default async function DashboardPage({
   params
}: {
   params: { page: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const language = await getLanguageFromCookie()

   // Get user session
   const session = await auth()
   if (!session) {
      redirect("/login")
   }

   const userRole = session?.user?.role?.name?.toLowerCase()

   if (!userRole) {
      return <div>You are not allowed to access this page.</div>
   }

   // Define which role components to fetch
   const roleComponentField =
      userRole === "candidate" ? "role1Components" : userRole === "employer" ? "role2Components" : null

   if (!roleComponentField) {
      return <div>You are not allowed to access this page.</div>
   }

   // Fetch only relevant role components
   const { data, error } = await find(
      "api/padma-backend/private-frontpage",
      {
         populate: {
            [roleComponentField]: {
               populate: "*"
            },
            style: {
               populate: "*"
            }
         },
         locale: language ?? "en"
      },
      "no-store"
   )

   if (error) {
      return <div>Error loading dashboard. Please try again later.</div>
   }

   const roleComponents = data?.data?.[roleComponentField] || []

   if (roleComponents.length === 0) {
      console.warn(`No components found for role: ${userRole}`)
   }

   const activeTheme = await loadActiveTheme()
   const getPrivateComponents = activeTheme?.getPrivateComponents || {}

   return (
      <Suspense fallback={<PrivateHomePageLoader />}>
         <Body
            blocks={roleComponents} // Pass the filtered role components
            session={session}
            currentThemeComponents={getPrivateComponents}
            style={data?.data?.style}
         />
      </Suspense>
   )
}

// // *** generate metadata for the page
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
   const pageSlug = params?.slug

   // ***fetch seo data
   const product = await find(
      "api/padma-backend/private-frontpage",
      {
         populate: {
            seo: {
               populate: "*"
            }
         }
      },
      "no-store"
   )
   if (!product?.data?.data?.seo) {
      return {
         title: product?.data?.data?.title || "Title not found",
         description: `Description ${product?.data?.data?.description}` || "Description not found"
      }
   }

   return StrapiSeoFormate(product?.data?.data?.seo, `/${pageSlug}`)
}
