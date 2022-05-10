import * as languages from "../constrants/languageConst";

export const changeLanguage = (language) => {
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