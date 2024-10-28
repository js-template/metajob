"use client"
export const fetcher = async (url: string) => {
   const response = await fetch(url)

   if (!response.ok) {
      throw new Error("An error occurred while fetching the data.")
   }
   const result = await response.json()

   // Return the nested data
   const blocks = result?.data

   return blocks
}
