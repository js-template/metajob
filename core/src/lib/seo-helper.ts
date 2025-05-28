// lib/jsonLdFormatter.ts
export type JsonLdBase = {
   "@context"?: "https://schema.org"
   "@type"?: string
   [key: string]: any
}

/**
 * Formats the data into JSON-LD format.
 *
 * @param type Schema.org type (default "WebSite")
 * @param data Additional fields for the JSON-LD
 * @returns A full JSON-LD object
 */
export const jsonLdFormatter = (data: Record<string, any>, type: string = "WebSite"): JsonLdBase => {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""

   if (type === "ItemList") {
      return {
         "@context": "https://schema.org",
         "@type": "ItemList",
         name: data?.metaTitle || "",
         description: data?.metaDescription || "",
         url: data?.canonicalURL || baseUrl || ""
      }
   }

   return {
      "@context": "https://schema.org",
      "@type": type,
      name: data?.metaTitle || "",
      description: data?.metaDescription || "",
      url: data?.canonicalURL || baseUrl || "",
      thumbnailUrl: data?.metaImage?.url || ""
   }
}
