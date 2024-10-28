import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { getLanguageFromCookie } from "@/utils/language"
import { Metadata } from "next"
import Body from "./body"
import { auth } from "@/context/auth"
import { redirect } from "next/navigation"
import _ from "lodash"
import { loadActiveTheme } from "config/theme-loader"

// *** generate metadata type

// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
   const language = getLanguageFromCookie()

   // fetch data
   const product = await find(
      "api/dashboard-home",
      {
         populate: "deep",
         publicationState: "live",
         locale: [language]
      },
      "no-store"
   )

   if (!product?.data?.data[0]?.attributes?.seo) {
      return {
         title: product?.data?.data[0]?.attributes?.title || "Title not found",
         description: product?.data?.data[0]?.attributes?.description || "Description not found"
      }
   }

   return StrapiSeoFormate(product?.data?.data[0]?.attributes?.seo, "dashboard-home")
}

export default async function DashboardPage({
   params
}: {
   params: { page: string }
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const session = await auth()

   if (!session) {
      redirect("/login")
   }

   // fetch the language from cookies or session
   const language = getLanguageFromCookie()

   const { data, error } = await find(
      "api/dashboard-home",
      {
         populate: "deep"
      },
      "no-store"
   )

   // Get the role from session and determine the correct block to render
   const userRole = session?.user?.role?.type?.toLowerCase()

   const blocksData = _.get(data, "data.attributes", {})
   const role1 = blocksData?.role1
   const role2 = blocksData?.role2

   // Choose blocks based on role
   const blocks =
      userRole === role1 ? blocksData?.role1Components : userRole === role2 ? blocksData?.role2Components : []

   const styles = blocksData?.styles

   // Load the active theme and get public components
   const { getPrivateComponents } = await loadActiveTheme()

   return (
      <>
         <Body
            blocks={blocks}
            styles={styles}
            session={session}
            language={language}
            currentThemeComponents={getPrivateComponents}
         />
      </>
   )
}
