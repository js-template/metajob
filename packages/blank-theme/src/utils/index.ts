export const getLanguageValue = (ln: "ar" | "en" | "es" | "") => {
   if (ln === "") {
      return ""
   }
   const languageList = { ar: "Arabic", en: "English", es: "Spanish" }
   const lanValue = languageList[ln]
   return lanValue
}
