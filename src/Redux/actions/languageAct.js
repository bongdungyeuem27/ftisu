import * as languages from "../constrants/languageConst";

export const changeLanguage = (language) => {
  document.documentElement.lang=languages.LANGUAGES.find(x=>x.key===language).value;
  return {
    type: languages.CHANGE_LANGUAGE,
    language:language
  };
};

export const changeLanguageReport = (language) => {
  return  (dispatch) => {
    dispatch(changeLanguage(language));
  };
};