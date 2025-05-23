"use client"
import ar from "@/dictionaries/ar"
import en from "@/dictionaries/en"
import es from "@/dictionaries/es"
import { layoutDataTypeProps } from "@/types/layout"
import { useMediaQuery } from "@mui/material"
import { getCookie, setCookie } from "cookies-next"
import { Locale, i18n } from "i18n-config"
import { useRouter } from "next/navigation"
import { ReactNode, createContext, useContext, useEffect, useState } from "react"

type Props = {
   children: ReactNode
   language?: Locale
   layout?: layoutDataTypeProps | null
}

// NOTE: Global context props
interface contextProps {
   lang: Locale
   dictionaries?: any
   setDictionaries?: any
   changeLang: (lang: Locale) => void
   direction?: "ltr" | "rtl"
   changeDirection?: (direction: "ltr" | "rtl") => void
   hydration: boolean
   setHydration: (hydration: boolean) => void
   jobFilter?: boolean
   setJobFilter?: (jobFilter: boolean) => void
   layoutData?: layoutDataTypeProps | null | undefined
   primaryColor: string
   setPrimaryColor?: (val: string) => void
}

// NOTE: Global context store
const GlobalContext = createContext<contextProps>({
   lang: "en",
   dictionaries:
      i18n.defaultLocale === "en" ? en : i18n.defaultLocale === "ar" ? ar : i18n.defaultLocale === "es" ? es : en,
   setDictionaries: () => {},
   changeLang: () => {},
   direction: "ltr",
   changeDirection: () => {},
   hydration: false,
   setHydration: () => {},
   jobFilter: true,
   setJobFilter: () => {},
   layoutData: null,
   primaryColor: "#1CAF57",
   setPrimaryColor: () => {}
})

// NOTE: Global provider for context store
export const GlobalProvider = ({ children, language, layout }: Props) => {
   const [lang, setLang] = useState<Locale>(language ?? "en")
   const [direction, setDirection] = useState<"ltr" | "rtl">("ltr")
   const [dictionaries, setDictionaries] = useState(lang === "en" ? en : lang === "ar" ? ar : lang === "es" ? es : en)
   const [jobFilter, setJobFilter] = useState<boolean>(true) // NOTE: Job filter state
   const [hydration, setHydration] = useState(false)
   const router = useRouter()
   const isMobile = useMediaQuery("(max-width: 768px)")
   const isTablet = useMediaQuery("(max-width: 1024px)")
   // ?? layout data from the server
   const [layoutData, setLayoutData] = useState<layoutDataTypeProps | null | undefined>(layout)
   const [primaryColor, setPrimaryColor] = useState("#1CAF57")

   // NOTE: Set the jobFilter state to false if the screen size is less than 1024px
   useEffect(() => {
      if (isMobile || isTablet) {
         setJobFilter(false)
      } else {
         setJobFilter(true)
      }
   }, [isMobile, isTablet])

   // NOTE: Set the hydration state to true
   useEffect(() => {
      setHydration(true)
   }, [])

   // Region for setting the language
   useEffect(() => {
      const getLang = getCookie("lang")
      if (getLang) {
         setLang(getLang as Locale)
      }

      const getDirection = getCookie("direction")
      if (getDirection) {
         setDirection(getDirection as "ltr" | "rtl")
      }

      // NOTE: Set the lang cookie if it doesn't exist
      const internalId = setInterval(() => {
         const getLang = getCookie("lang")
         if (!getLang) {
            setCookie("lang", lang)
            setDictionaries(lang === "en" ? en : lang === "ar" ? ar : lang === "es" ? es : en)
         }

         // NOTE: Set the direction cookie if it doesn't exist
         const getDirection = getCookie("direction")
         if (!getDirection) {
            setCookie("direction", direction)
         }
      }, 500)

      return () => {
         clearInterval(internalId)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   // NOTE: Change the language function handler
   const changeLang = (lang: Locale) => {
      setLang(lang)
      setDirection(lang === "ar" ? "rtl" : "ltr")
      setDictionaries(lang === "en" ? en : lang === "ar" ? ar : lang === "es" ? es : en)
      setCookie("lang", lang, {
         maxAge: 30 * 24 * 60 * 60,
         path: "/"
      })
      setCookie("direction", lang === "ar" ? "rtl" : "ltr", {
         maxAge: 30 * 24 * 60 * 60,
         path: "/"
      })
      router.push("/")
   }

   // NOTE: Change the direction function handler
   const changeDirection = (direction: "ltr" | "rtl") => {
      setDirection(direction)
      setCookie("direction", direction)
   }

   // NOTE: Automatically change the language based on the cookie lang value
   useEffect(() => {
      const getLang = getCookie("lang")
      if (getLang) {
         setLang(getLang as Locale)
         setDictionaries(getLang === "en" ? en : getLang === "ar" ? ar : getLang === "es" ? es : en)
      } else {
         setCookie("lang", lang, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/"
         })
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   // NOTE: Return the global context provider
   return (
      <GlobalContext.Provider
         value={{
            lang,
            changeLang,
            dictionaries,
            setDictionaries,
            direction,
            changeDirection,
            hydration,
            setHydration,
            jobFilter,
            setJobFilter,
            layoutData,
            primaryColor,
            setPrimaryColor
         }}>
         {children}
      </GlobalContext.Provider>
   )
}

// NOTE: Global context hook
export const useGlobalContext = () => useContext(GlobalContext)
