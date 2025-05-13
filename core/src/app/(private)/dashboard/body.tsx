import React from "react"
import { Grid } from "@mui/material"
import { Session } from "next-auth"

interface BodyProps {
   blocks: any[]
   style?: {
      columnSpacing: number | null
      rowSpacing: number | null
      spacing: number | null
      wrap: "nowrap" | "wrap" | "wrap-reverse" | null
      zeroMinWidth: boolean | null
      columns: number | null
   }
   session: Session | null
   language?: string
   currentThemeComponents: any
}

const Body: React.FC<BodyProps> = ({ blocks, style, session, language, currentThemeComponents }) => {
   return (
      <>
         <Grid
            container
            {...(style?.columnSpacing && { columnSpacing: style?.columnSpacing })}
            {...(style?.rowSpacing && { rowSpacing: style?.rowSpacing })}
            {...(style?.spacing && { spacing: style?.spacing })}
            {...(style?.zeroMinWidth && { zeroMinWidth: style?.zeroMinWidth })}
            {...(style?.columns && { columns: style?.columns })}
            {...(style?.wrap && { wrap: style?.wrap })}
            sx={{ mb: 4 }}>
            {blocks?.map((block: { __component: keyof typeof currentThemeComponents }, index: number) => {
               const BlockConfig = currentThemeComponents[block.__component]
               if (BlockConfig) {
                  const { component: ComponentToRender } = BlockConfig

                  return <ComponentToRender key={index} block={block} session={session} language={language} />
               }
               return null // Handle the case where the component mapping is missing
            })}
         </Grid>
      </>
   )
}

export default Body
