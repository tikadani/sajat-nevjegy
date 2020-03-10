defaultLanguage: 'en', // Default language if no language available
nameOfSelectorFrame: 'LANGUAGE', // Name of the language selector frame element
idOfScript: 'language_script', // ID of the script element
flagPath: 'region-flags/png/', // Where are the flag images as EN.png

cookieKeyName: 'languageSelectorValue', // Cookie name for selected language
cookieExpirationDays: 3650,

styleId: 'languageSelectorStyle',

// null = no language selector | frame element of selectors
frameElementsOfSelectorFlags: null,

// null = no selectors | array of language selectors or empty array if no selectors
elementsOfLanguageSelectors: null,

elementOfScript: null,

actualLanguage: null,
languageList: {},
languageArray: new Array(),
languageHreflangs: {}, // Elements of all hreflang elements at head

debugMode: false