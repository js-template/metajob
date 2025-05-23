"use client"
import { ThemeProvider } from "@mui/material"
import { useTheme } from "next-themes"
import React, { useEffect, useMemo, useState } from "react"
import { darkTheme, lightTheme } from "../theme"
import { useGlobalContext } from "@/context/store"

export const NextThemeConfigProvider = ({ children, direction }: { children: React.ReactNode; direction: string }) => {
   const { primaryColor } = useGlobalContext()
   const { resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   // Dynamically inject primaryColor into light theme
   const newLightTheme = useMemo(() => {
      return {
         ...lightTheme,
         direction,
         palette: {
            ...lightTheme.palette,
            primary: {
               ...lightTheme.palette.primary,
               main: primaryColor
            }
         }
      }
   }, [direction, primaryColor])

   // Dynamically inject primaryColor into dark theme
   const newDarkTheme = useMemo(() => {
      return {
         ...darkTheme,
         direction,
         palette: {
            ...darkTheme.palette,
            primary: {
               ...darkTheme.palette.primary,
               main: primaryColor
            }
         }
      }
   }, [direction, primaryColor])

   const theme = useMemo(
      () => (resolvedTheme === "light" ? newLightTheme : newDarkTheme),
      [newLightTheme, newDarkTheme, resolvedTheme]
   )

   if (!mounted) return <div style={{ visibility: "hidden" }} />

   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
