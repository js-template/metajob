export type IListFilterData = {
   [x: string]: any
   id: number
   __component: string
   job_type: string[]
   sort: string[]
   title: string
   description: string | null
   button: Button
   categories: ICategories
   search: Search
   // jobs: IJobData
   jobs: {
      id: number
      relationId: number
   }[]
}

type Button = {
   id: number
   label: string
   link: string | null
   type: string | null
   target: string | null
   icon: Icon
}

type Icon = {
   data: null | IconData
}

type IconData = {
   id: number
   attributes: IconAttributes
}

type IconAttributes = {
   name: string
   alternativeText: string | null
   caption: string | null
   width: number
   height: number
   formats: null
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: string | null
   provider: string
   provider_metadata: ProviderMetadata
   createdAt: string
   updatedAt: string
}

type ProviderMetadata = {
   public_id: string
   resource_type: string
}

export type ICategories = {
   data: ISingleCategory[]
}
export type ICategories2 = {
   data: ISingleCategory
}

export type ISingleCategory = {
   id?: number
   attributes: CategoryAttributes
}

type CategoryAttributes = {
   title: string
   description: string | null
   slug: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   locale: string
   image: Image
   link: Link | null
   seo: null
   localizations: Localizations
}

type Image = {
   data: ImageData
}

type ImageData = {
   id: number
   attributes: ImageAttributes
}

type ImageAttributes = {
   name: string
   alternativeText: string | null
   caption: string | null
   width: number
   height: number
   formats: null
   hash: string
   ext: string
   mime: string
   size: number
   url: string
   previewUrl: string | null
   provider: string
   provider_metadata: ProviderMetadata
   createdAt: string
   updatedAt: string
}

//

type JobDescription = {
   type: "paragraph"
   children: Array<{
      text: string
      type: "text"
   }>
}

type Location = {
   coordinates?: {
      lat: number
      lng: number
   }
   place_id: string
   description: string
   address?: string
}

type JobAttributes = {
   title: string
   description: string
   status?: "open" | "closed" | "draft"
   // description: JobDescription[]
   startDate: Date
   endDate: Date
   price: string // You might want to use number if you plan to perform arithmetic operations
   location: Location
   createdAt: string // Consider using Date
   updatedAt: string // Consider using Date
   publishedAt: string // Consider using Date
   working_hours: string
   type: string[]
   vacancy: number
   slug: string
   owner: any
   salary: string
   company: ICompanyData
   category: ICategories2
   tags: {
      data: {
         id: number
         attributes: {
            createdAt: string
            updatedAt: string
            publishedAt: string
            title: string
            value: string
         }
      }[]
   }
}
export type IJobData = {
   data: {
      id: number
      attributes: JobAttributes
   }[]
}

export type ISingleList = {
   id?: number
   attributes: JobAttributes
}

type Link = {
   id: number
   label: string | null
   link: string | null
   type: string | null
   target: string | null
   icon: Icon
}

type Localizations = {
   data: any[]
}

type Search = {
   id: number
   title: string | null
   searchByWords: string
   searchByLocation: string
   button: Button | null
   link: Link | null
   categories: ICategories
}

//
type CompanyLogo = {
   data: {
      id: number
      attributes: {
         name: string
         alternativeText: string | null
         caption: string | null
         width: number
         height: number
         formats: {
            thumbnail: {
               ext: string
               url: string
               hash: string
               mime: string
               name: string
               path: string | null
               size: number
               width: number
               height: number
               provider_metadata: {
                  public_id: string
                  resource_type: string
               }
            }
         }
         hash: string
         ext: string
         mime: string
         size: number
         url: string
         previewUrl: string | null
         provider: string
         provider_metadata: {
            public_id: string
            resource_type: string
         }
         createdAt: string
         updatedAt: string
      }
   }
}

type CompanyLocation = {
   lat: number | null
   lng: number | null
   place_id: string
   description: string
}

type CompanyDescription = {
   type: "paragraph"
   children: Array<{
      text: string
      type: "text"
   }>
}

export type ICompanyAttributes = {
   name: string
   tagline: string
   email: string
   phone: string
   website: string
   facebook: string
   twitter: string
   company_size: string
   revenue: string
   location: CompanyLocation
   about: CompanyDescription[]
   avg_salary: string
   createdAt: string // Consider using Date
   updatedAt: string // Consider using Date
   publishedAt: string // Consider using Date
   logo: CompanyLogo
   industry: ICategories
}

type ICompanyData = {
   data: {
      id: number
      attributes: ICompanyAttributes
   }
}
