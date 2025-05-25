import { getFontFamily } from "@/lib/fonts"
import { ThemeOptions, Theme } from "@mui/material"

type IThemeSettings = {
   light_primary_main?: string
   light_primary_light?: string
   light_secondary?: string
   light_divider?: string
   light_background_default?: string
   light_background_paper?: string
   dark_primary_main?: string
   dark_primary_light?: string
   dark_secondary?: string
   dark_divider?: string
   dark_background_default?: string
   dark_background_paper?: string
   font_family?: string
   light_text_primary?: string
   light_text_secondary?: string
   dark_text_primary?: string
   dark_text_secondary?: string
}
type IKey = keyof IThemeSettings

export const mergeThemeSettings = (
   baseTheme: Theme,
   backendTheme: IThemeSettings,
   mode: "light" | "dark"
): ThemeOptions => {
   const updatedTheme = { ...baseTheme }
   const palette = { ...(baseTheme.palette || {}) }

   const apply = (key: IKey, path: string[]) => {
      if (!backendTheme) return
      const value = backendTheme[key]
      if (!value) return

      let current = palette as any

      for (let i = 0; i < path.length - 1; i++) {
         current[path[i]] = current[path[i]] || {}
         current = current[path[i]]
      }
      current[path[path.length - 1]] = value
   }

   const fields = [
      [`${mode}_primary_main`, ["primary", "main"]],
      [`${mode}_primary_light`, ["primary", "light"]],
      [`${mode}_secondary`, ["secondary", "main"]],
      [`${mode}_divider`, ["divider"]],
      [`${mode}_background_default`, ["background", "default"]],
      [`${mode}_background_paper`, ["background", "paper"]],
      [`${mode}_text_primary`, ["text", "primary"]],
      [`${mode}_text_secondary`, ["text", "secondary"]]
   ] as [IKey, string[]][]

   fields.forEach(([key, path]) => apply(key, path))

   // Inject updated palette
   updatedTheme.palette = palette

   // Inject updated font family
   if (backendTheme?.font_family) {
      const fontFamily = getFontFamily(backendTheme.font_family)
      updatedTheme.typography = {
         ...baseTheme.typography,
         fontFamily: fontFamily,
         h1: { ...baseTheme?.typography?.h1, fontFamily },
         h2: { ...baseTheme?.typography?.h2, fontFamily },
         h3: { ...baseTheme?.typography?.h3, fontFamily },
         h4: { ...baseTheme?.typography?.h4, fontFamily },
         h5: { ...baseTheme?.typography?.h5, fontFamily },
         h6: { ...baseTheme?.typography?.h6, fontFamily },
         subtitle1: { ...baseTheme?.typography?.subtitle1, fontFamily },
         subtitle2: { ...baseTheme?.typography?.subtitle2, fontFamily },
         body1: { ...baseTheme?.typography?.body1, fontFamily },
         body2: { ...baseTheme?.typography?.body2, fontFamily },
         button: { ...baseTheme?.typography?.button, fontFamily },
         caption: { ...baseTheme?.typography?.caption, fontFamily },
         overline: { ...baseTheme?.typography?.overline, fontFamily }
      }
   }

   return updatedTheme
}
