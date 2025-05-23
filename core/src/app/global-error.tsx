"use client"
import { startTransition } from "react"
import ErrorSection from "@/components/errors/error-section"

const GlobalError = () => {
   //handle load function
   const reloadHandler = () => {
      startTransition(() => {
         if (typeof window !== "undefined") {
            window.location.reload()
         }
      })
   }
   return (
      <html>
         <body>
            <ErrorSection reloadHandler={reloadHandler} sectionType='global' />
         </body>
      </html>
   )
}

export default GlobalError
