"use client"
import { separateBlocks } from "@/utils/common"
import { Container, Grid, Stack } from "@mui/material"
import { useTheme } from "next-themes"
import React from "react"

type Props = {
   blocks: any[]
   getPublicComponents: Record<string, any>
}

const PublicFooter = ({ blocks, getPublicComponents }: Props) => {
   const { theme: mode } = useTheme()

   //    filter the footer main-blocks and copyWrite-block
   const { targetData: copyWriteBlock, restData: footerBlocks } = separateBlocks(blocks, "widget.copyright-bar")

   return (
      <Stack
         sx={{
            bgcolor: (theme) =>
               mode === "dark"
                  ? theme.palette.background.paper
                  : mode === "light"
                    ? theme.palette.text.primary
                    : theme.palette.secondary.main
         }}>
         <Container maxWidth='lg' sx={{ py: 4 }}>
            {/* footer main widgets  */}
            <Grid container spacing={4}>
               {footerBlocks?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
                  const BlockConfig = getPublicComponents[block.__component]

                  if (BlockConfig) {
                     const { component: ComponentToRender } = BlockConfig
                     //@ts-ignore
                     return <ComponentToRender key={index} block={block} />
                  }
                  return null // Handle case where component mapping is missing
               })}
            </Grid>
            {/* copyWrite widget  */}
            {copyWriteBlock?.map((block: { __component: keyof typeof getPublicComponents }, index: number) => {
               const BlockConfig = getPublicComponents[block.__component]

               if (BlockConfig) {
                  const { component: ComponentToRender } = BlockConfig
                  //@ts-ignore
                  return <ComponentToRender key={index} block={block} />
               }
               return null
            })}
         </Container>
      </Stack>
   )
}

export default PublicFooter
