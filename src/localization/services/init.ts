import _ from "lodash";

import { loadedNameSpaces , NameSpace , LoadedResources , 
    SupportedLocale , Translation , I18nResource , Translations} from '../useLocales.types'

function adaptLoadedResources() {
    const flatNameSpaces = Object.entries(loadedNameSpaces) as [
      NameSpace,
      LoadedResources
    ][];
    const flatResources = flatNameSpaces.map((nameSpace) => {
      const locales = Object.entries(nameSpace[1]) as [
        SupportedLocale,
        Translation
      ][];
      return locales.reduce<I18nResource>((accumulator, locale) => {
        accumulator[locale[0]] = {
          [`${nameSpace[0]}`]: locale[1],
        } as Translations;
        return accumulator;
      }, {} as I18nResource);
    });
  
    return _.spread(_.partial(_.merge, {}))(flatResources);
}

export const resources: I18nResource = adaptLoadedResources();
export const nameSpaceNames = Object.keys(loadedNameSpaces) as NameSpace[];

export const nameSpaces: Record<NameSpace, NameSpace> = nameSpaceNames.reduce(
  (record, ns) => Object.assign(record, { [ns]: ns }),
  {} as Record<NameSpace, NameSpace>
);
