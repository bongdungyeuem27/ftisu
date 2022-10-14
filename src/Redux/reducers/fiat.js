import * as fiats from "../constrants/fiatConst";

const initialState = {
  fiat: fiats.FIATS.find((x) => x.key === "usd").key,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case fiats.CHANGE_FIAT: {
      return {
        ...state,
        fiat: action.fiat,
      };
    }

    default:
      return {
        ...state,
        fiat: fiats.FIATS.find((x) => x.key === state.fiat).key,
      };
  }
};
export default reducer;
