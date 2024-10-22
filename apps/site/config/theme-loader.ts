//const activeTheme = "@padma/metajob-ui"

let activeThemeComponents: Record<string, any> = {} // Use 'any' for React components

// Load the active theme components
export const loadActiveTheme = async () => {
   const { getPublicComponents } = await import("@padma/metajob-ui") // Use the activeTheme variable

   // Set the activeThemeComponents to the loaded components
   const activeThemeComponents = getPublicComponents
   return activeThemeComponents
}

// Get the theme component by its key
export const getThemeComponent = (componentKey: string): any | null => {
   return activeThemeComponents[componentKey] || null // Access the outer scoped variable
}
