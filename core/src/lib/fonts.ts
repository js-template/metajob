import { Jost, Roboto, Inter } from "next/font/google"

export const jost = Jost({
   weight: ["300", "400", "500", "600", "700"],
   display: "swap",
   subsets: ["latin"]
})
export const roboto = Roboto({
   weight: ["300", "400", "500", "700"],
   display: "swap",
   subsets: ["latin"]
})
export const inter = Inter({
   weight: ["300", "400", "500", "600", "700"],
   display: "swap",
   subsets: ["latin"]
})

export const fontMap = {
   Jost: jost,
   Roboto: roboto,
   Inter: inter
}

export const getFontFamily = (name: string | null | undefined) =>
   fontMap[name as keyof typeof fontMap]?.style.fontFamily ?? fontMap.Jost.style.fontFamily
