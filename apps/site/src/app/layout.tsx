import NextAuthSessionProvider from "@/context/SessionProvider"
import { NextThemeConfigProvider } from "@/next-theme"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import CssBaseline from "@mui/material/CssBaseline"
import { auth } from "auth"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"
import { Toaster } from "react-hot-toast"
import "/public/icon/icon.css"
// React Perfect Scrollbar CSS
import "react-perfect-scrollbar/dist/css/styles.css"
import { GlobalProvider } from "@/context/store"
import { cookies } from "next/headers"
import NextTopLoader from "nextjs-toploader"
import { find } from "@/lib/strapi"
import { StyledEngineProvider } from "@mui/material/styles"

export default async function RootLayout(props: { children: React.ReactNode }) {
   const session = await auth()
   const cookieStore = cookies()
   const Lang = cookieStore.get("lang")

   const language = Lang ? Lang.value : "en"

   const dir = cookieStore.get("direction")
   const direction = dir ? dir.value : "ltr"

   // get the layout data from the server
   const { data } = await find(
      "api/layout",
      {
         populate: "deep",
         publicationState: "live",
         locale: [language]
      },
      "no-store"
   )

   return (
      <html lang={language} dir={direction}>
         <body dir={direction}>
            <StyledEngineProvider injectFirst>
               <GlobalProvider layout={data?.data?.attributes || null}>
                  <NextAuthSessionProvider session={session}>
                     <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                        <NextThemesProvider>
                           <NextThemeConfigProvider direction={direction}>
                              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                              <CssBaseline />
                              <NextTopLoader
                                 // FIXME: Change color to primary color not static color
                                 color='#1CAF57'
                                 zIndex={9999}
                                 initialPosition={0.8}
                                 crawlSpeed={200}
                                 height={3}
                                 crawl={true}
                                 showSpinner={true}
                                 easing='ease'
                                 speed={200}
                                 showAtBottom={false}
                              />

                              {props.children}
                              <Toaster />
                           </NextThemeConfigProvider>
                        </NextThemesProvider>
                     </AppRouterCacheProvider>
                  </NextAuthSessionProvider>
               </GlobalProvider>
            </StyledEngineProvider>
         </body>
      </html>
   )
}
