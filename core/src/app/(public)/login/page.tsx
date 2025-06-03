import type { Metadata } from "next"
import LoginBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"
import { jsonLdFormatter } from "@/lib/seo-helper"

type Props = {
   searchParams?: Record<"callbackUrl" | "error", string>
}

const LoginPage = async ({ searchParams }: Props) => {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // fetch login data
   const { data, error } = await find("api/metajob-backend/auth-setting", {
      populate: {
         login: { populate: "*" }
      },
      locale: language ?? "en"
   })
   const block = data?.data?.login?.[0] || null

   // Format the SEO data into JSON-LD
   const dataJsonLd = jsonLdFormatter(data?.data?.login?.[0]?.seo, "WebPage")

   return (
      <>
         {/* page JSON-LD  */}
         <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(dataJsonLd) }} />

         <LoginBody error={searchParams?.error} callbackUrl={searchParams?.callbackUrl} block={block} />
      </>
   )
}

export default LoginPage

// *** generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
   // fetch the language from cookies or session
   const language = await getLanguageFromCookie()

   // fetch login data
   const { data } = await find("api/metajob-backend/auth-setting", {
      populate: {
         login: { populate: "*" }
      },
      locale: language ?? "en"
   })
   const seoData = data?.data?.login?.[0]?.seo

   const seoDataPre = {
      ...seoData,
      metaTitle: seoData?.metaTitle || "Login - Page",
      metaDescription: seoData?.metaDescription || "Login - Page description"
   }
   return StrapiSeoFormate(seoDataPre)
}
