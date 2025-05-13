import { cookies } from "next/headers"

export const getLanguageFromCookie = async () => {
   const cookieStore = cookies()
   const langCookie = cookieStore.get("lang")
   return langCookie ? langCookie.value : "en"
}
