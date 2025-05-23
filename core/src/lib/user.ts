"use server"
import { cookies } from "next/headers"

interface FormData {
   email: string
   password: string
}

interface SignUpFormData {
   email: string
   username: string
   password: string
   role: number
}

/**
 * Sign in a user with the provided form data.
 * @param {FormData} formData - The form data containing the user's email and password.
 * @returns {Promise<Object>} - A promise that resolves to an object with the sign-in result.
 */
export const SignIn = async (formData: FormData) => {
   if (!formData) return

   //   update the State to setLoading(true) and then setLoading(false) after the fetch

   const authToken = process.env.STRAPI_AUTH_TOKEN

   const email = formData.email
   const password = formData?.password
   try {
      // Set loading state or perform any necessary actions before the API call
      // setLoading(true);

      // Make an API call to your authentication endpoint (replace with your actual API endpoint)
      const response = await fetch(`${process.env.STRAPI_ENDPOINT}/api/auth/local?populate=*`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
         },
         cache: "no-cache",
         body: JSON.stringify({
            identifier: email,
            password: password
         })
      })
      // Check if the API call was successful
      if (response.ok) {
         // Parse the response JSON
         const data = await response.json()

         // Assuming your API returns a JWT token in the response
         const jwtToken = data?.jwt

         cookies().set({
            name: "jwt",
            value: jwtToken,
            httpOnly: true,
            path: "/"
         })

         return {
            message: "success",
            data: jwtToken,
            isLoggedIn: true
         }
      } else {
         // Handle unsuccessful login (e.g., display an error message)
         return {
            message: "failed",
            data: null,
            isLoggedIn: false
         }
      }
   } catch (error) {
      // Handle any unexpected errors during the API call
      return {
         message: "failed",
         data: null,
         isLoggedIn: false
      }
   }
}

/**
 * Sign up a user with the provided form data.
 * @param {SignUpFormData} formData - The form data containing the user's `email`, `username`, and `password`.
 * @returns {Promise<Object>} - A promise that resolves to an object with the sign-up result.
 */
export const SignUp = async (formData: SignUpFormData) => {
   //   update the State to setLoading(true) and then setLoading(false) after the fetch

   const authToken = process.env.STRAPI_AUTH_TOKEN

   const email = formData.email
   const username = formData.username
   const password = formData?.password
   const role = formData?.role

   try {
      // Set loading state or perform any necessary actions before the API call
      // setLoading(true);

      // Make an API call to your authentication endpoint (replace with your actual API endpoint)
      const response = await fetch(`${process.env.STRAPI_ENDPOINT}/api/auth/local/register`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
         },
         cache: "no-cache",
         body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            role: role
         })
      })

      // Check if the API call was successful
      if (response.ok) {
         // Parse the response JSON
         const data = await response.json()

         // Assuming your API returns a JWT token in the response
         const jwtToken = data?.jwt

         cookies().set({
            name: "jwt",
            value: jwtToken,
            httpOnly: true,
            path: "/"
         })

         return {
            message: "success",
            data: data,
            isLoggedIn: true
         }
      } else {
         // Handle unsuccessful login (e.g., display an error message)
         return {
            message: "failed",
            data: null,
            isLoggedIn: false
         }
      }
   } catch (error) {
      // Handle any unexpected errors during the API call
      return {
         message: "failed",
         data: null,
         isLoggedIn: false
      }
   }
}

/**
 * Signs out the user by deleting the JWT cookie and redirecting to the home page.
 * @returns {Promise<{message: string, isLoggedIn: boolean}>} - A promise that resolves to an object with a success message and the user's login status.
 */
export const SignOut = async () => {
   //  delete the cookie and redirect to the home page
   const cookieStore = cookies()
   cookieStore.delete("jwt")
   return {
      message: "success",
      isLoggedIn: false
   }
}

/**
 * Retrieves user data from the server.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<{data: any, error: {message: string, data: any}}>} - The user data and any error that occurred.
 */
export const getUser = async (token: string) => {
   try {
      let Token: string = ""
      if (token) {
         Token = token
      } else {
         const cookie = cookies()
         const jwt = cookie.get("jwt")
         Token = jwt?.value as string
      }

      const response = await fetch(`${process.env.STRAPI_ENDPOINT}/api/users/me?populate=*`, {
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
         }
      })

      const data = await response.json()

      if (response.ok) {
         return {
            data: data,
            error: null
         }
      }

      return {
         data: null,
         error: {
            message: "Something wrong",
            data
         }
      }
   } catch (error) {
      return {
         data: null,
         error: {
            message: "Something wrong",
            error
         }
      }
   }
}
