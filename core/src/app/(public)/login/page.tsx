import type { Metadata } from "next"
import LoginBody from "./body"
import { getLanguageFromCookie } from "@/utils/language"
import { find } from "@/lib/strapi"
import { StrapiSeoFormate } from "@/lib/strapiSeo"

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

   return <LoginBody error={searchParams?.error} callbackUrl={searchParams?.callbackUrl} block={block} />
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
      metaTitle: seoData?.metaTitle || "Login - MetaJobs",
      metaDescription:
         seoData?.metaDescription || "MetaJobs is a job board for developers, designers, and other tech professionals."
   }
   return StrapiSeoFormate(seoDataPre)
}
