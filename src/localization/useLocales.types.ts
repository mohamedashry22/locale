import * as common from './locales/common'
import * as global from './locales/global'

export const loadedNameSpaces = {
  common,
  global,
  // .... add your modules
};

export type SupportedLocale = 'en' | 'it';

export const defaultLanguage: SupportedLocale = 'en';

export const defaultNameSpace: NameSpace = "common";

export const keySeparator = '.';

export type NameSpace = keyof typeof loadedNameSpaces;

export type Translation = { [key: string]: string | Translation };

export type LoadedResources = { [locale in SupportedLocale]: Translation };

export type Translations = {
  [nameSpace in NameSpace]: Translation
};

export type I18nResource = {
  [locale in SupportedLocale]: Translations
};

type AllLoadedNameSpaceType = typeof loadedNameSpaces[NameSpace];

type AllLoadedNameSpaceTypeByLanguage = AllLoadedNameSpaceType[typeof defaultLanguage];

type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export type RecursiveKeyOf<TObj extends Record<string, unknown>> = {
  [TKey in keyof TObj & (string | number)]: TObj[TKey] extends unknown[]
    ? `${TKey}`
    : TObj[TKey] extends Record<string, unknown>
    ? `${TKey}${typeof keySeparator}}`
    : `${TKey}`
}[keyof TObj & (string | number)];

type FlattenTypedKey = UnionToIntersection<AllLoadedNameSpaceTypeByLanguage>;

export type TranslationKey = RecursiveKeyOf<FlattenTypedKey>;

