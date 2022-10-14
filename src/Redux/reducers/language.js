import * as languages from "../constrants/languageConst";

const initialState = {
  language: languages.LANGUAGES.find(x=>x.key==="VI").key
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case languages.CHANGE_LANGUAGE: {
      return {
        ...state,
        language:action.language
      };
    }

    default:
      document.documentElement.lang=languages.LANGUAGES.find(x=>x.key===state.language).value;
      return state;
  }
};
export default reducer;
