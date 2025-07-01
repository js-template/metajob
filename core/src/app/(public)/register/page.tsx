import type { Metadata } from "next"
import RegisterBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { jsonLdFormatter } from "@/lib/seo-helper"

const Register = async () => {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // fetch register data
   const { data, error } = await find("api/metajob-backend/auth-setting", {
      populate: {
         register: { populate: "*" }
      },
      locale: language ?? "en"
   })
   const block = data?.data?.register?.[0] || null

   // Format the SEO data into JSON-LD
   const dataJsonLd = jsonLdFormatter(data?.data?.register?.[0]?.seo, "WebPage")

   return (
      <>
         {/* page JSON-LD  */}
         <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(dataJsonLd) }} />

         <RegisterBody block={block} />
      </>
   )
}
export default Register

// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // fetch register data
   const { data } = await find("api/metajob-backend/auth-setting", {
      populate: {
         register: { populate: "*" }
      },
      locale: language ?? "en"
   })
   const seoData = data?.data?.register?.[0]?.seo

   const seoDataPre = {
      ...seoData,
      metaTitle: seoData?.metaTitle || "Register - Page",
      metaDescription: seoData?.metaDescription || "Register - Page description"
   }
   return StrapiSeoFormate(seoDataPre)
}
