// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationTM from "./locales/tm.json";
import translationRU from "./locales/ru.json";

const storedLanguage = localStorage.getItem("language");
let parsedLanguage = "tm"; // Default language

if (storedLanguage) {
  try {
    const parsed = JSON.parse(storedLanguage);
    if (parsed.state && parsed.state.language) {
      parsedLanguage = parsed.state.language;
    }
  } catch (error) {
    // Handle parsing errors, e.g., log the error or use a default language
    console.error("Error parsing language:", error);
  }
}

i18n.use(initReactI18next).init({
  lng: parsedLanguage,
  resources: {
    tm: { translation: translationTM },
    en: { translation: translationEN },
    ru: { translation: translationRU },
  },
  fallbackLng: "tm",
});

export default i18n;
