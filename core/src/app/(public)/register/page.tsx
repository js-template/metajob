import type { Metadata } from "next"
import RegisterBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"

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

   return <RegisterBody block={block} />
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
      metaTitle: seoData?.metaTitle || "Register - MetaJobs",
      metaDescription:
         seoData?.metaDescription || "MetaJobs is a job board for developers, designers, and other tech professionals."
   }
   return StrapiSeoFormate(seoDataPre)
}
