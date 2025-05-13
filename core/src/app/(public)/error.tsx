"use client"
import { startTransition } from "react"
import { useRouter } from "next/navigation"
import ErrorSection from "@/components/errors/error-section"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
   const router = useRouter()

   //handle load function
   const reloadHandler = () => {
      startTransition(() => {
         router.refresh()
         reset()
      })
   }

   return <ErrorSection reloadHandler={reloadHandler} sectionType='public' />
}

export default Error
