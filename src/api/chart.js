import axiosServices from "./axiosServices";
import { API_ENDPOINT_LARAVEL } from "../common/constant/index";

export const getDataCandlestick = (type, day, month, year) => {
  // console.log('url', `${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getData?day=${day}&month=${month}&year=${year}`)
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getDataCandlestick?day=${day}&month=${month}&year=${year}`);
};

export const getDataClose = (type, day, month, year) => {
  // console.log('url', `${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getData?day=${day}&month=${month}&year=${year}`)
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getDataClose?day=${day}&month=${month}&year=${year}`);
};

export const getDataVolume = (type, day, month, year) => {
  // console.log('url', `${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getData?day=${day}&month=${month}&year=${year}`)
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getDataVolume?day=${day}&month=${month}&year=${year}`);
};
export const getLstm = (type) => {
  // console.log('url', `${API_ENDPOINT_LARAVEL}/api/crypto/${type}/getData?day=${day}&month=${month}&year=${year}`)
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/lstm/getModel`);
};
export const getGru = (type) => {
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/gru/getModel`);
};
export const getProphet = (type) => {
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/prophet/getModel`);
};  
export const getArima = (type) => {
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/arima/getModel`);
};  
export const getArimaLstm = (type) => {
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/arima_lstm/getModel`);
};  
export const getArimaSvr = (type) => {
  return axiosServices.get(`${API_ENDPOINT_LARAVEL}/api/crypto/${type}/arima_svr/getModel`);
};  