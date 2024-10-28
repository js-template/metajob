"use client"
import React from "react"
import { Grid } from "@mui/material"
import { Session } from "next-auth"
import useSWR from "swr"
import { privetPageFetcher } from "./utils"
import { useGlobalContext } from "@/context/store"

interface BodyProps {
   blocks: any[]
   language?: string
   styleData?: {
      columnSpacing: number | null
      rowSpacing: number | null
      spacing: number | null
      wrap: "nowrap" | "wrap" | "wrap-reverse" | null
      zeroMinWidth: boolean | null
      columns: number | null
   }
   pageSlug: string
   session: Session | null
   currentThemeComponents: any
}

const Body: React.FC<BodyProps> = ({ blocks, language, styleData, pageSlug, session, currentThemeComponents }) => {
   const { direction } = useGlobalContext()

   const queryParams = {
      populate: "deep",
      filters: {
         slug: {
            $eq: pageSlug
         }
      },
      //  FIXME: must need filter by role
      publicationState: "live"
      //locale: ["en"]
   }

   // Convert queryParams to a string for the URL
   const queryString = encodeURIComponent(JSON.stringify(queryParams))

   // Construct the API URL
   const apiUrl = `/api/find?model=api/private-pages&query=${queryString}&cache=no-store`

   const { data, isLoading } = useSWR(apiUrl, privetPageFetcher, {
      fallbackData: {
         blocks: blocks,
         styles: styleData
      },
      revalidateIfStale: false,
      keepPreviousData: true
   })

   return (
      <Grid
         container
         {...(data?.styles?.columnSpacing && { columnSpacing: data?.styles.columnSpacing })}
         {...(data?.styles?.rowSpacing && { rowSpacing: data?.styles.rowSpacing })}
         {...(data?.styles?.spacing && { spacing: data?.styles.spacing })}
         {...(data?.styles?.zeroMinWidth && { zeroMinWidth: data?.styles.zeroMinWidth })}
         {...(data?.styles?.columns && { columns: data?.styles.columns })}
         {...(data?.styles?.wrap && { wrap: data?.styles.wrap })}
         sx={{ mb: 4 }}>
         {data?.blocks?.map((block: { __component: keyof typeof currentThemeComponents }, index: number) => {
            const BlockConfig = currentThemeComponents[block.__component]

            if (BlockConfig) {
               const { component: ComponentToRender } = BlockConfig
               return <ComponentToRender key={index} block={block} session={session} language={language} />
            }
            return null // Handle the case where the component mapping is missing
         })}
      </Grid>
   )
}

export default Body
