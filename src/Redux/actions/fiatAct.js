import * as fiats from "../constrants/fiatConst";

export const changeFiat = (fiat) => {
  fiat = fiats.FIATS.find((x) => x.key === fiat).key;
  return {
    type: fiats.CHANGE_FIAT,
    fiat: fiat,
  };
};

export const changeFiatReport = (fiat) => {
  return (dispatch) => {
    dispatch(changeFiat(fiat));
  };
};
