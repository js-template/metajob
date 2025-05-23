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

import { find } from "@/lib/strapi"
import { StyledEngineProvider } from "@mui/material/styles"
import { getLanguageFromCookie } from "@/utils/language"
import SidebarSetting from "@/components/common/sidebar-setting"

export default async function RootLayout(props: { children: React.ReactNode }) {
   const session = await auth()
   const cookieStore = cookies()

   const language = await getLanguageFromCookie()

   const dir = cookieStore.get("direction")
   const direction = dir ? dir.value : "ltr"

   // get the layout data from the server
   const { data, error } = await find(
      "api/padma-backend/layout",
      {
         populate: "*",
         locale: language ?? "en"
      },
      "no-store"
   )
   const showSettingBar = process.env.NEXT_PUBLIC_SHOW_SETTING_BAR

   return (
      <html lang={language} dir={direction} suppressHydrationWarning={true}>
         <body dir={direction}>
            <StyledEngineProvider injectFirst>
               <GlobalProvider layout={data?.data || null}>
                  <NextAuthSessionProvider session={session}>
                     <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                        <NextThemesProvider>
                           <NextThemeConfigProvider direction={direction}>
                              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                              <CssBaseline />

                              {props.children}
                              {showSettingBar && <SidebarSetting />}
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
