"use server"
import { cookies } from "next/headers"
// @ts-ignore
import qs from "qs"

const apiUrl = process.env.STRAPI_ENDPOINT || ""

/**
 * Function to get data by id
 * @param model  model name as like strapi model name `pages`, `messages`...
 * @param id  id of the data
 * @param query  query object to filter data
 * @param cache  cache type `force-cache`, `no-cache`, `no-store`
 * @param revalidate  revalidate time in seconds
 * @returns  {data, error}
 * @example
 * const { data, error } = await findOne("pages", 1, { filters: { slug: { $eq: "home" } } }, "force-cache", 60);
 */
export const findOne = async (
   model: string,
   id: number,
   query: any = {},
   cache: "force-cache" | "no-cache" | "no-store" = "force-cache",
   revalidate?: number
) => {
   const queryString = qs.stringify(query, {
      arrayFormat: "indices",
      encode: false,
      indices: false
   })

   try {
      const response = await fetch(`${apiUrl}/${model}/${id}?${queryString}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`
         },
         ...{
            ...(revalidate ? {} : { cache }),
            ...(revalidate
               ? {
                    next: {
                       revalidate: revalidate
                    }
                 }
               : {})
         }
      })

      if (!response.ok) {
         throw new Error(`Failed to fetch data: ${response.statusText}`)
      }

      const data = await response.json()
      return { data, error: null }
   } catch (error: any) {
      console.error(`Error during API call: ${error.message}`)
      return {
         data: null,
         error: error.message || "An error occurred during data fetch"
      }
   }
}

/**
 * Function to get data
 * @param model  model name as like strapi model name `pages`, `messages`...
 * @param query  query object to filter data
 * @param cache  cache type `force-cache`, `no-cache`, `no-store`
 * @param revalidate  revalidate time in seconds
 * @returns  {data, error}
 * @example
 * const { data, error } = await find("pages", { filters: { slug: { $eq: "home" } } }, "force-cache", 60);
 */
export const find = async (
   model: string,
   query: any = {},
   cache: "force-cache" | "no-cache" | "no-store" = "force-cache",
   revalidate?: number
) => {
   const queryString = qs.stringify(query, {
      arrayFormat: "indices",
      encode: false,
      indices: false
   })

   try {
      const response = await fetch(`${apiUrl}/${model}/?${queryString}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}`
         },
         ...{
            ...(revalidate ? {} : { cache }),
            ...(revalidate
               ? {
                    next: {
                       revalidate: revalidate
                    }
                 }
               : {})
         }
      })

      if (!response.ok) {
         throw new Error(`Failed to fetch data: ${response.statusText}`)
      }

      const data = await response.json()

      return { data, error: null }
   } catch (error: any) {
      console.error(`Error during API call: ${error.message}`)
      return {
         data: null,
         error: error.message || "An error occurred during data fetch"
      }
   }
}

/**
 * Function to delete an entry by ID
 * @param model  model name as in Strapi model name, e.g., `restaurants`, `pages`, `messages`
 * @param id     ID of the entry to delete
 * @returns  {data, error} Returns the deleted entry data or an error if the operation fails
 * @example
 * const { data, error } = await deleteEntry("restaurants", "1");
 */

export const deleteEntry = async (model: string, id: number) => {
   try {
      const response = await fetch(`${apiUrl}/${model}/${id}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.STRAPI_AUTH_TOKEN}` // Replace with your token
         }
      })

      if (!response.ok) {
         throw new Error(`Failed to delete entry: ${response.statusText}`)
      }

      const data = await response.json()
      return { data, error: null }
   } catch (error: any) {
      console.error(`Error during API call: ${error.message}`)
      return {
         data: null,
         error: error.message || "An error occurred during delete request"
      }
   }
}

/**
 * Function to post new ads
 * @param postData
 * @param revalidatePath path string
 * @param revalidateType page | layout
 * @returns {message,data, error}
 */
export const createEntry = async (
   model: string,
   postInput: any,
   revalidatePath?: string,
   revalidateType?: "page" | "layout"
) => {
   try {
      const cookieStore = cookies()
      const jwtToken = cookieStore.get("jwt")
      const token = jwtToken ? jwtToken.value : { value: "" }
      //const Lang = cookieStore.get("lang");
      //const language = Lang ? Lang.value : "en";

      const requestData = await fetch(
         // `${process.env.STRAPI_ENDPOINT}/api/resumes/`,
         `${process.env.STRAPI_ENDPOINT}/api/${model}`,
         {
            method: "POST",
            body: JSON.stringify(postInput),
            headers: {
               "Content-Type": "application/json",
               // FIXME: This token should be replaced with JWT token
               Authorization: `Bearer ${token}`
            },
            cache: "no-store"
         }
      )

      const resData = await requestData.json()

      if (!requestData.ok) {
         return {
            data: null,
            error: requestData.statusText || "Server Error",
            message: resData?.error?.message || "Creation Failed"
         }
      }
      const data = resData?.data

      // if (revalidatePath && revalidateType) {
      //   userRevalidate(revalidatePath, revalidateType);
      // }

      return {
         message: "Created Successfully",
         data: data,
         error: null
      }
   } catch (error: any) {
      return {
         data: null,
         error: error?.message || "Server Error"
      }
   }
}

/**
 * Function to update data
 * @param model
 * @param id
 * @param updatedData
 * @param revalidatePath path string
 * @param revalidateType page | layout
 * @returns {message,data, error}
 */
export const updateOne = async (
   model: string,
   id: number,
   updatedData: any,
   revalidatePath?: string,
   revalidateType?: "page" | "layout"
) => {
   const cookie = cookies()
   const jwt = cookie.get("jwt")
   const token = jwt?.value as string

   if (!jwt) {
      return {
         data: null,
         error: "You are not authenticated"
      }
   }

   try {
      const response = await fetch(`${apiUrl}/api/${model}/${id}`, {
         method: "PUT",
         body: JSON.stringify(updatedData),
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         },
         cache: "no-store"
      })

      const resData = await response?.json()

      if (!response.ok) {
         throw new Error(resData?.error?.message || "Failed to update")
      }
      //  if (revalidatePath && revalidateType) {
      //     userRevalidate(revalidatePath, revalidateType);
      //  }

      return {
         message: "Successfully Updated",
         data: resData?.data,
         error: null
      }
   } catch (error: any) {
      return {
         data: null,
         error: error?.message || "Failed to update"
      }
   }
}

/**
 * Function to upload image to the server
 * @param fileInput Input `files` formData object is required to upload image
 * @example
 * const fileInput = new FormData();
 * fileInput.append("files", files);
 * const { data, error } = await uploadImage(fileInput);
 */
export const uploadImage = async (fileInput: FormData) => {
   const cookie = cookies()
   const jwt = cookie.get("jwt")
   const token = jwt?.value as string

   if (!jwt) {
      return {
         data: null,
         error: "You are not authenticated"
      }
   }

   try {
      const response = await fetch(`${apiUrl}/api/upload`, {
         method: "POST",
         body: fileInput,
         headers: {
            Authorization: `Bearer ${token}`
         }
      })
      const resData = await response?.json()

      if (!response.ok) {
         throw new Error(resData?.error?.message || "Failed to update")
      }

      return {
         data: resData,
         success: true,
         error: null
      }
   } catch (error: any) {
      return {
         success: false,
         data: null,
         error: error.message || "An error occurred during image upload"
      }
   }
}
