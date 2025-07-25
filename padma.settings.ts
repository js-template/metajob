export const settings = {
  activeTheme: "@jstemplate/metajob-theme", // Default active theme
};

export const themeResolver: Record<string, () => Promise<any>> = {
  "@padmadev/blank-theme": () => import("@padmadev/blank-theme"),
  // @ts-ignore
  "@jstemplate/metajob-theme": () => import("@jstemplate/metajob-theme"),
};
