//const activeTheme = "@padma/metajob-ui"

let activeThemeComponents: Record<string, any> = {} // Use 'any' for React components

// Load the active theme components
export const loadActiveTheme = async () => {
   // @ts-ignore
   const { getPublicComponents, getPrivateComponents } = await import("@padma/blank-theme") // Use the activeTheme variable

   // Set the activeThemeComponents to the loaded components
   const activeThemeComponents = getPublicComponents
   return { getPrivateComponents, getPublicComponents }
}

// Get the theme component by its key
export const getThemeComponent = (componentKey: string): any | null => {
   return activeThemeComponents[componentKey] || null // Access the outer scoped variable
}
