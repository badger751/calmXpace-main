const translations: Record<string, Record<string, string>> = {
    en: {
      home: "Home",
      national: "National",
      uttarPradesh: "Uttar Pradesh",
      state: "State",
      crime: "Crime",
      entertainment: "Entertainment",
      sports: "Sports",
      lifestyle: "Lifestyle",
      membershipPlan: "Membership Plan",
      ePaper: "E-paper",
      video: "Video",
      live: "LIVE",
    },
    hi: {
      home: "मुखपृष्ठ",
      national: "राष्ट्रीय",
      uttarPradesh: "उत्तर प्रदेश",
      state: "राज्य",
      crime: "अपराध",
      entertainment: "मनोरंजन",
      sports: "खेल",
      lifestyle: "जीवन शैली",
      membershipPlan: "सदस्यता योजना",
      ePaper: "ई-पेपर",
      video: "वीडियो",
      live: "लाइव",
    },
    // Add more translations here
  };
  
  export const translatePage = (languageCode: string, setTranslation: (newTranslations: Record<string, string>) => void) => {
    const translatedContent = translations[languageCode];
    if (translatedContent) {
      setTranslation(translatedContent);
    } else {
      console.warn(`Translation for language code '${languageCode}' is not available.`);
    }
  };
  