import { MetadataRoute } from "next"
import { find } from "@/lib/strapi"
import { getLanguageFromCookie } from "@/utils/language"

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""
   const language = await getLanguageFromCookie()

   //================= public pages routes ====================
   const { data: publicPageDataAll } = await find("api/padma-backend/public-pages", {
      populate: "*",
      locale: language ?? "en"
   })
   const publicPageData = publicPageDataAll?.data || []
   const publicPageRoutes: MetadataRoute.Sitemap = publicPageData.map((publicPage: { slug: string }) => ({
      url: `${baseUrl}/${publicPage?.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "weekly"
   }))

   //================= details pages routes ====================
   const { data: permalinkDataAll } = await find("api/padma-backend/permalink", {
      populate: "*",
      locale: language ?? "en"
   })
   const singlePages = permalinkDataAll?.data?.singlePage || []

   const dynamicRoutes: MetadataRoute.Sitemap = []

   for (const singlePage of singlePages) {
      if (!singlePage?.collectionModel || !singlePage?.slug) continue

      try {
         const { data: itemsDataAll } = await find(`${singlePage?.collectionModel}`, {
            fields: ["slug"],
            locale: language ?? "en"
         })

         const items = itemsDataAll?.data || []

         items.forEach((item: any) => {
            dynamicRoutes.push({
               url: `${baseUrl}/${singlePage?.slug}/${item.slug}`,
               lastModified: new Date().toISOString(),
               priority: 0.8,
               changeFrequency: "weekly"
            })
         })
      } catch (err) {
         console.warn(`❌ Failed to fetch ${singlePage?.collectionModel}:`, err)
      }
   }

   //================= static pages routes ====================
   const staticRoutes: MetadataRoute.Sitemap = ["", "/login", "/register"].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      priority: path === "" ? 1 : 0.8,
      changeFrequency: "weekly"
   }))

   //================= combine all ====================
   return [...staticRoutes, ...publicPageRoutes, ...dynamicRoutes]
}
