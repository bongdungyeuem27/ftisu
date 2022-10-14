import axiosServices from "./axiosServices";
import { API_CRYPTOCOMPARE_ENDPOINT, API_COINRANKING_ENDPOINT } from "../common/constant/index";
import { CRYPTOS } from "../common/constant/index"; 

export const getCurrentPrice = (crypto, fiat) => {
  return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}/data/price?fsym=${crypto}&tsyms=${fiat}`);
};

export const getCoinDataApi = (crypto, fiat) => {
  return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}/data/top/exchanges/full?fsym=${crypto}&tsym=${fiat}&limit=1`);
  // return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}/data/generateAvg?fsym=${crypto}&tsym=${fiat}&e=Kraken`);
};
export const topDailyVolumeData = (fiat, limit, page) => {
  return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}/data/top/mktcapfull?limit=${limit}&tsym=${fiat}&page=${page}`);
};
export const getCoinDataApiByMarket = (crypto, fiat, market) => {
  return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}/data/generateAvg?fsym=${crypto}&tsym=${fiat}&e=${market}`);
};
export const getRankingCoin = (limit, offset) =>{
  return axiosServices.get(`${API_COINRANKING_ENDPOINT}/v2/coins?limit=${limit}&offset=${offset}`);
}
// export const getCoinImage = (path, width) => {
//   return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}${path}?width=${width}`);
//   // return axiosServices.get(`${API_CRYPTOCOMPARE_ENDPOINT}/data/generateAvg?fsym=${crypto}&tsym=${fiat}&e=Kraken`);
// };

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
