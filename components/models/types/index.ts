interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Demonyms {
  [key: string]: {
    f: string;
    m: string;
  };
}

interface Translations {
  [key: string]: {
    official: string;
    common: string;
  };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

export interface CountryInterface {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: string[]; side: string };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
  borders: string[];
}
