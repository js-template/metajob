export type IReviewsData = {
   data: ISingleReview[]
}
export type ISingleReview = {
   id: number
   attributes: {
      name: string
      designation: string
      review: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      avatar: {
         data: {
            id: number
            attributes: {
               name: string
               alternativeText: string | null
               caption: string | null
               width: number
               height: number
               formats: any // If formats is an object, you can define its structure here
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
   }
}
