import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import es from "../locales/es.json";


/* This code snippet is initializing the i18next library for internationalization in a React
application. Here's a breakdown of what each part is doing: */
i18n.use( initReactI18next ).init( {
    resources: {
        en: { translation: en },
        es: { translation: es }
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: {
        escapeValue: false
    }
} );


export default i18n;