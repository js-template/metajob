export type ICompanyFilterData = {
   id: number
   __component: string
   title: string
   description: string | null
   search: string
   industry: string[]
   company_size: string[]
   revenue: string[]
   showFilter: boolean
   average_salary: string[]
   button?: {
      id: number
      label: string
      link: string | null
      type: string | null
      target: string | null
      icon: {
         data: any | null
      }
   }
   companies: {
      data: ISingleCompany[]
   }
}

export type ISingleCompany = {
   id: number
   attributes: {
      name: string
      tagline: string
      email: string
      phone: string
      avg_price: string
      website: string
      social_links?: [
         {
            link: string
            type: string
         }
      ]
      company_size: string
      revenue: string
      location: {
         lat: number | null
         lng: number | null
         place_id: string
         address: string
      }
      about: {
         type: string
         children: {
            text: string
            type: string
         }[]
      }[]
      createdAt: string
      updatedAt: string
      publishedAt: string
      logo: {
         data: {
            id: number
            attributes: {
               name: string
               alternativeText: string | null
               caption: string | null
               width: number
               height: number
               formats: {
                  thumbnail?: {
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
               } | null
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
      industry: {
         data: {
            id: number
            attributes: {
               title: string
               description: string | null
               slug: string | null
               createdAt: string
               updatedAt: string
               publishedAt: string
               locale: string
               image: {
                  data: {
                     id: number
                     attributes: {
                        name: string
                        alternativeText: string | null
                        caption: string | null
                        width: number
                        height: number
                        formats: any | null
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
               link: any | null
               seo: any | null
               localizations: {
                  data: any[]
               }
            }
         }
      }
      slug: string
      user: any
   }
}

export type ICompanyFilterFromData = {
   selectedIndustry: string
   selectedCompanySize: string
   selectedAverageSalary: string
   selectedRevenue: string
   companyName?: string
}

export type IFilterSectionProps = {
   title?: string
   search?: string
   industry?: string[]
   company_size?: string[]
   average_salary?: string[]
   revenue?: string[]
   button?: {
      id?: number
      label?: string | null
      link?: string | null
      type?: string | null
      target?: string | null
      icon?: {
         data?: any | null
      }
   }
   formData: ICompanyFilterFromData
   setFormData: (data: ICompanyFilterFromData) => void
   loading: boolean
   //handleFilter: (e: React.FormEvent<HTMLFormElement>) => void;
}
