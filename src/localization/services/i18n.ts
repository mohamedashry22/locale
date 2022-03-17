import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { defaultLanguage, defaultNameSpace, keySeparator } from '../useLocales.types'
import { nameSpaceNames, resources } from '../services/init'

export function initI18n(locale?: string): void {
  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      ns: nameSpaceNames,
      defaultNS: defaultNameSpace,
      lng: locale,
      resources,
      compatibilityJSON: 'v3',
      fallbackLng: defaultLanguage,
      keySeparator: keySeparator,
      interpolation: { escapeValue: false },
    })
}
