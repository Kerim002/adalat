// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationTM from "./locales/tm.json";
import translationRU from "./locales/ru.json";

i18n.use(initReactI18next).init({
  lng: localStorage.getItem("language") || "tm",
  resources: {
    tm: { translation: translationTM },
    en: { translation: translationEN },
    ru: { translation: translationRU },
  },
  fallbackLng: "tm",
});

export default i18n;
