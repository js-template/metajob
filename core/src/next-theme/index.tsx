"use client"
import { ThemeProvider } from "@mui/material"
import { useTheme } from "next-themes"
import React, { useEffect, useMemo, useState } from "react"
import { darkTheme, lightTheme } from "../theme"
import { useGlobalContext } from "@/context/store"
import { mergeThemeSettings } from "@/utils/theme-utils"

type Props = {
   children: React.ReactNode
   direction: string
   settingData?: any
}

export const NextThemeConfigProvider = ({ children, direction, settingData }: Props) => {
   const { primaryColor } = useGlobalContext()
   const { resolvedTheme } = useTheme()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   // Dynamically inject light theme
   const newLightTheme = useMemo(() => {
      const updatedLightTheme = mergeThemeSettings(lightTheme, settingData, "light")
      return {
         ...updatedLightTheme,
         direction,
         ...(primaryColor && {
            palette: {
               ...updatedLightTheme.palette,
               primary: {
                  ...updatedLightTheme?.palette?.primary,
                  main: primaryColor
               }
            }
         })
      }
   }, [direction, settingData, primaryColor])

   // Dynamically inject dark theme
   const newDarkTheme = useMemo(() => {
      const updatedDarkTheme = mergeThemeSettings(darkTheme, settingData, "dark")
      return {
         ...updatedDarkTheme,
         direction,
         ...(primaryColor && {
            palette: {
               ...updatedDarkTheme.palette,
               primary: {
                  ...updatedDarkTheme?.palette?.primary,
                  main: primaryColor
               }
            }
         })
      }
   }, [direction, settingData, primaryColor])

   const theme = useMemo(
      () => (resolvedTheme === "light" ? newLightTheme : newDarkTheme),
      [newLightTheme, newDarkTheme, resolvedTheme]
   )

   if (!mounted) return <div style={{ visibility: "hidden" }} />

   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
