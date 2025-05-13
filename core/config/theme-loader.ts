import { settings, themeResolver } from "../../padma.settings"

type ThemeComponents = {
   getPublicComponents: Record<string, any>
   getPrivateComponents: Record<string, any>
}

export const loadActiveTheme = async (): Promise<ThemeComponents | null> => {
   try {
      if (!settings.activeTheme) {
         throw new Error("Active theme is not defined in the settings.")
      }

      const themeModuleLoader = themeResolver[settings.activeTheme]

      if (!themeModuleLoader) {
         throw new Error(`Theme "${settings.activeTheme}" is not supported or not found.`)
      }

      const themeModule = await themeModuleLoader()

      if (!themeModule.getPublicComponents || !themeModule.getPrivateComponents) {
         throw new Error("The theme module is missing required exports.")
      }

      return {
         getPublicComponents: themeModule.getPublicComponents,
         getPrivateComponents: themeModule.getPrivateComponents
      }
   } catch (error: any) {
      console.error("Error loading active theme:", error.message)
      return null
   }
}
