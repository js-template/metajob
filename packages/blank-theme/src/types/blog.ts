export type IPostBlock = {
   id: number
   __component: string
   title: string
   description: string | null
   style?: {
      id: 25
      color?: any
      backgroundColor?: any
      mobile: number
      tab: number
      desktop: number
   }
   empty?: {
      id: number
      title: string
      description: string
   }
   button?: {
      label: string
      link: string
   }
   posts: IPosts
}
type ImageFormat = {
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

type FeaturedImage = {
   id: number
   attributes: {
      name: string
      alternativeText: string | null
      caption: string | null
      width: number
      height: number
      formats: {
         thumbnail: ImageFormat
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

type Attributes = {
   title: string
   slug: string
   description: any[]
   short_description: string
   excerpt: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   featuredImage: {
      data: FeaturedImage
   }
   gallery: {
      data: null | any // Adjust this if the gallery structure changes
   }
   seo: null | any // Adjust this if the SEO structure changes
   user: {
      data: {
         id?: number
         attributes: {
            username: string
            avatar: {
               data: {
                  attributes: {
                     url: string
                  }
               }
            }
         }
      }
   }
   post_categories: {
      data: [
         {
            id?: number
            attributes: {
               title: string
               slug: string
            }
         }
      ]
   }
}

export type ISinglePost = {
   id?: number
   attributes: Attributes
}

export type IPosts = {
   data: ISinglePost[]
}
