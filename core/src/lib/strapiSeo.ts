const { NEXTAUTH_URL } = process.env

// *** StrapiSeo type ***
export type StrapiSeo = {
   metaTitle: string
   metaDescription: string
   keywords: string
   metaRobots: string
   canonicalURL: string
   metaImage: {
      url: string
      alternativeText: string
      width: number
      height: number
   }
}

// *** StrapiSeoFormate function ***
/**
 * @param {StrapiSeo} seoData
 * @param {string} path
 * @returns {Object}
 * @description
 * This function is used to format the StrapiSeo data to the format that is required by the SEO component.
 * It takes the StrapiSeo data and path as an argument and returns the formatted data.
 * If the path is not provided, it will use the NEXTAUTH_URL as the default path.
 * The function returns an object with the title, description, keywords, robots, icons, and alternates.
 * The title, description, and keywords are taken from the StrapiSeo data.
 * The robots are taken from the StrapiSeo data and split into index and follow.
 * The icons are set to the default favicon.
 * The canonical URL is taken from the StrapiSeo data, if not provided, it will use the NEXTAUTH_URL and the path.
 * The function returns the formatted data.
 * @example
 * StrapiSeoFormate(seoData, path);
 * // returns { title: 'title', description: 'description', keywords: ['keyword1', 'keyword2'], robots: { index: true, follow: true }, icons: { icon: '/favicon.ico' }, alternates: { canonical: 'https://example.com' } }
 * @example
 * StrapiSeoFormate(seoData);
 * // returns { title: 'title', description: 'description', keywords: ['keyword1', 'keyword2'], robots: { index: true, follow: true }, icons: { icon: '/favicon.ico' }, alternates: { canonical: 'https://example.com/path' } }
 */
export const StrapiSeoFormate = (seoData: StrapiSeo, path?: string) => {
   // *** If the StrapiSeo data is not provided, return the default data ***
   const title = pathToTitleFormatter(path || "")
   if (!seoData) {
      return {
         title: `${title} - Page`,
         description: `${title} - Page Description`
      }
   }

   // *** Return the formatted data ***
   return {
      title: seoData?.metaTitle || "",
      description: seoData?.metaDescription || "",
      keywords: seoData?.keywords?.split(",") || [],
      robots: {
         index: seoData?.metaRobots?.split(",")[0] === "index" ? true : false,
         follow: seoData?.metaRobots?.split(",")[1] === "follow" ? true : false
      },
      icons: {
         icon: "/favicon.ico"
      },
      alternates: {
         canonical: seoData?.canonicalURL || `${NEXTAUTH_URL}${path || ""}`
      },
      openGraph: {
         title: seoData?.metaTitle || "",
         description: seoData?.metaDescription || "",
         url: seoData?.canonicalURL || `${NEXTAUTH_URL}${path || ""}`,
         images: [
            {
               url: seoData?.metaImage?.url || "",
               width: seoData?.metaImage?.width || 1200,
               height: seoData?.metaImage?.height || 630,
               alt: seoData?.metaImage?.alternativeText || seoData?.metaTitle || "OG Image"
            }
         ]
      }
   }
}

const pathToTitleFormatter = (path: string): string => {
   if (path === "" || path === "/") {
      return "Home"
   }
   // *** Split the path by '/' and filter out empty segments ***
   const segments = path.split("/").filter((segment) => segment)

   // *** Join the segments with spaces and capitalize each word ***
   return segments.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join(" ")
}
