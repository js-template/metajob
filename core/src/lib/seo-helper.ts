// lib/jsonLdFormatter.ts
export type JsonLdBase = {
   "@context"?: "https://schema.org"
   "@type"?: string
   [key: string]: any
}

/**
 * Formats the data into JSON-LD format.
 * @param type Schema.org type (default "WebSite")
 * @param data Additional fields for the JSON-LD
 * @returns A full JSON-LD object
 */
export const jsonLdFormatter = (seoData: Record<string, any>, type: string = "WebSite", data?: any): JsonLdBase => {
   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ""

   switch (type) {
      case "ItemList":
         return {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: seoData?.metaTitle || "",
            description: seoData?.metaDescription || "",
            url: seoData?.canonicalURL || baseUrl || ""
         }

      case "JobPosting":
         return {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: seoData?.metaTitle || data?.title || "",
            description: seoData?.metaDescription || data?.description || "",
            datePosted: data?.createdAt || "",
            validThrough: data?.endDate || "",
            employmentType: data?.type?.title || "Full Time",
            hiringOrganization: {
               "@type": "Organization",
               name: data?.company?.name || "",
               sameAs: data?.company?.website || ""
            },
            baseSalary: data?.price && {
               "@type": "MonetaryAmount",
               currency: "USD",
               value: {
                  "@type": "QuantitativeValue",
                  value: data?.price || 0,
                  unitText: "YEAR"
               }
            }
         }

      case "Organization":
         return {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: seoData?.metaTitle || data?.name || "",
            description: seoData?.metaDescription || data?.description || "",
            url: data?.website || baseUrl,
            logo: data?.logo?.url || "",
            sameAs: getSocialLinksFromArray(data?.social_links) || []
         }

      case "Person":
         return {
            "@context": "https://schema.org",
            "@type": "Person",
            name: seoData?.metaTitle || data?.name || "",
            jobTitle: data?.tagline || "",
            description: data?.about || "",
            telephone: data?.user?.phone || ""
         }

      case "BlogPosting":
         return {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: seoData?.metaTitle || data?.title || "",
            description: seoData?.metaDescription || data?.short_description || "",
            datePublished: data?.publishedAt,
            dateModified: data?.updatedAt || data?.publishedAt || "",
            image: seoData?.metaImage?.url || data?.featuredImage?.url || "",
            author: {
               "@type": "Person",
               name: data?.user?.first_name || data?.user?.username || ""
            }
         }

      default:
         return {
            "@context": "https://schema.org",
            "@type": type,
            name: seoData?.metaTitle || "",
            description: seoData?.metaDescription || "",
            url: seoData?.canonicalURL || baseUrl || "",
            thumbnailUrl: seoData?.metaImage?.url || ""
         }
   }
}

export function getSchemaTypeByCollectionModel(collectionModel: string): string {
   if (!collectionModel) return "WebPage"

   if (collectionModel.includes("/jobs")) return "JobPosting"
   if (collectionModel.includes("/companies")) return "Organization"
   if (collectionModel.includes("/resumes")) return "Person"
   if (collectionModel.includes("/posts")) return "BlogPosting"

   return "WebPage" // fallback type
}

export const getSocialLinksFromArray = (socialLinks: { id: number; type: string; link: string }[]): string[] => {
   if (!Array.isArray(socialLinks)) return []

   return socialLinks.map((link) => link.link).filter((link) => link && link.startsWith("http"))
}
