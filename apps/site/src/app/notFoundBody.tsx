"use client"
import { signOut, useSession } from "next-auth/react"
import { Box, Button, Container, Paper, Typography } from "@mui/material"
import { useGlobalContext } from "@/context/store"
import NextLink from "next/link"

const NotFoundBody = ({
   data,
   currentThemeComponents,
   children,
   language
}: {
   data: any
   currentThemeComponents: any
   children: React.ReactNode
   language: string
}) => {
   const { changeLang, changeDirection } = useGlobalContext()
   // ?? get the public-header from the layout data
   const headerBlock = data?.data?.attributes?.header?.find((block: any) => block.__component === "block.public-header")

   // ?? get the footer from the layout data
   const footerBlock = data?.data?.attributes?.footer?.find((block: any) => block.__component === "block.footer")

   return (
      <main>
         {headerBlock && (
            <>
               {currentThemeComponents["block.public-header"]
                  ? currentThemeComponents["block.public-header"].component({
                       data: headerBlock,
                       language: language,
                       changeLang: changeLang,
                       changeDirection: changeDirection,
                       useSession: useSession,
                       signOut: signOut
                    })
                  : null}
            </>
         )}
         <Container maxWidth='lg'>
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "85vh"
               }}>
               <Paper
                  sx={{
                     maxWidth: "500px",
                     width: "100%",
                     p: 4,
                     display: "flex",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     borderRadius: 3
                  }}>
                  <Typography
                     variant='h3'
                     component='h3'
                     sx={{
                        fontWeight: 700,
                        mb: 2
                     }}>
                     Page Not Found
                  </Typography>
                  <Typography
                     variant='body1'
                     component={"p"}
                     sx={{
                        textAlign: "center",
                        opacity: 0.7
                     }}>
                     Sorry, we couldn&apos;t find the page you were looking for. Go back to the previous page or return
                     home.
                  </Typography>
                  <Box
                     sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                        gap: 2
                     }}>
                     <Button variant='contained' color='primary' component={NextLink} href='/'>
                        Return Home
                     </Button>
                     <Button onClick={() => window.history.back()}>Go Back</Button>
                  </Box>
               </Paper>
            </Box>
         </Container>
         {footerBlock && <footer>{currentThemeComponents["block.footer"]?.component({ data: footerBlock })}</footer>}
      </main>
   )
}

export default NotFoundBody
