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

// export const checklike = (makhachhang, masanpham) => {
//   return axiosServices.get(
//     `${API_ENDPOINT}/kiemtrayeuthich?makhachhang=${makhachhang}&masanpham=${masanpham}`
//   );
// };

// export const like = (makhachhang, masanpham) => {
//     return axiosServices.get(
//       `${API_ENDPOINT}/yeuthich?makhachhang=${makhachhang}&masanpham=${masanpham}`
//     );
//   };

// export const unlike = (makhachhang, masanpham) => {
//     return axiosServices.get(
//       `${API_ENDPOINT}/boyeuthich?makhachhang=${makhachhang}&masanpham=${masanpham}`
//     );
//   };
