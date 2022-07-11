import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import "./Currency.css";
import MyLoader from "../../common/MyLoader/index";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../common/helper/number";
import { FIATS } from "../../Redux/constrants/fiatConst";
import { CRYPTOS } from "../../common/constant/index";
import { LANGUAGES } from "../../Redux/constrants/languageConst";
import { dynamicString } from "../../common/helper/string";
import {
  getCurrentPrice,
  getCoinDataApi,
  getCoinImage,
} from "../../api/crypto";
import { API_CRYPTOCOMPARE_HOME } from "../../common/constant/index";
import Caculator from "./Caculator";
import * as cryptoInfo from "./cryptoInfo";
import { Link } from "react-router-dom";

export default function Index() {
  const MyChart = lazy(() => import("./MyChart"));
  const TabStatistical = lazy(() => import("./TabStatistical"));
  const headerRef = useRef(null);
  const { currency } = useParams();
  const fiat = useSelector((state) => state.fiat.fiat);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [dataCoinApi, setDataCoinApi] = useState();

  const language = useSelector((state) => state.language.language);
  // Chứa các từ ngữ đa ngôn ngữ
  const [keywords, setKeywords] = useState();
  // object chứa các từ vựng về crypto
  const [cryptoObject, setCryptoObject] = useState(
    CRYPTOS.find((x) => x.name.toLocaleLowerCase() === currency)
  );
  // object chứa các từ vựng về fiat
  const [fiatObject, setFiatObject] = useState(
    FIATS.find((x) => x.key === fiat)
  );

  useEffect(() => {
    getCoinDataApi(cryptoObject.key, fiatObject.key)
      .then((success) => {
        setDataCoinApi(success.data.Data);
        console.log(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (headerRef == null) return;
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef?.current?.classList?.add("popped");
      } else {
        headerRef?.current?.classList?.remove("popped");
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  useEffect(() => {
    getCurrentPrice(cryptoObject.key, fiatObject.key)
      .then((success) => {
        setCurrentPrice(success.data.USD);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Language
  useEffect(() => {
    import(
      `./keyword/${LANGUAGES.find((x) => x.key === language).value}/index.js`
    )
      .then((res) => {
        setKeywords(res.default);
      })
      .catch((rej) => {
        console.log(rej);
        setKeywords(undefined);
      });
  }, [language]);
  return (
    <section className="currency">
      {/* Tiêu đề */}
      <div className="sc-16r8icm-0 eMxKgr my-container">
        <div className="n78udj-0 jskEGI">
          <div className="sc-16r8icm-0 kjciSH top-summary-container">
            <div className="sc-16r8icm-0 kDzKwW nameSection">
              <div className="sc-16r8icm-0 gpRPnR nameHeader">
                <img
                  src={`${API_CRYPTOCOMPARE_HOME}${dataCoinApi?.CoinInfo.ImageUrl}?width=32`}
                  height={32}
                  width={32}
                  alt=""
                />
                <h2 className="sc-1q9q90x-0 jCInrl h1" color="text">
                  {cryptoObject?.name}
                  <small className="nameSymbol">{cryptoObject?.value}</small>
                </h2>
                <span className="sc-80eeb0-1 iuAjRY">
                  <button
                    className="x0o17e-0 eCXbyL sc-7pvt85-0 ccOrkS"
                    style={{ width: "auto", padding: "0px 8px" }}
                  >
                    <i class="fa-thin fa-star"></i>
                  </button>
                </span>
              </div>
              <div
                display="flex"
                style={{ flexWrap: "wrap" }}
                className="sc-16r8icm-0 bILTHz"
              >
                <div className="namePill namePillPrimary">
                  {keywords?._rank} {cryptoInfo[cryptoObject.name.toLowerCase()].rank}
                </div>
              </div>
            </div>
            <div className="sc-16r8icm-0 kjciSH priceSection">
              <h1 className="priceHeading">
                {dynamicString(keywords?._price, {
                  crypto: cryptoObject?.name,
                })}
                {/* */} <small>{cryptoObject?.value}</small>
              </h1>
              <div className="sc-16r8icm-0 kjciSH priceTitle">
                <div className="priceValue ">
                  <span>
                    {fiatObject?.sign}
                    {numberWithCommas(currentPrice)}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "5px 10px",
                  }}
                  className={
                    dataCoinApi?.AggregatedData.CHANGEDAY < 0
                      ? "gEePkg button-negative"
                      : "gEePkg button-postive"
                  }
                >
                  {dataCoinApi?.AggregatedData.CHANGEDAY < 0 ? (
                    <i class="fa-solid fa-caret-down"></i>
                  ) : (
                    <i class="fa-solid fa-caret-up"></i>
                  )}{" "}
                  {Math.round(
                    Math.abs(
                      dataCoinApi?.AggregatedData.CHANGEDAY /
                        dataCoinApi?.AggregatedData.OPEN24HOUR
                    ) * 100
                  ) / 100}
                  {/* */}%
                </span>
              </div>
              <div className="n78udj-3 emihhf" ref={headerRef}>
                <span>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    height={24}
                    width={24}
                    alt="BTC"
                  />
                  &nbsp;&nbsp;<b>{cryptoObject?.name}</b>&nbsp;
                  {cryptoObject?.value}
                </span>
                <span>
                  <div className="imn55z-0 hCqbVS price">
                    <span>Price: </span>
                    <div>
                      {fiatObject?.sign}
                      {numberWithCommas(currentPrice)}
                    </div>
                    &nbsp;
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                      className={
                        dataCoinApi?.AggregatedData.CHANGEDAY < 0
                          ? "gEePkg button-negative"
                          : "gEePkg button-postive"
                      }
                    >
                      {dataCoinApi?.AggregatedData.CHANGEDAY < 0 ? (
                        <i class="fa-solid fa-caret-down"></i>
                      ) : (
                        <i class="fa-solid fa-caret-up"></i>
                      )}{" "}
                      {Math.round(
                        Math.abs(
                          dataCoinApi?.AggregatedData.CHANGEDAY /
                            dataCoinApi?.AggregatedData.OPEN24HOUR
                        ) * 100
                      ) / 100}
                      {/* */}%
                    </span>
                  </div>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <button
                      className="x0o17e-0 eCXbyL sc-7pvt85-0 ccOrkS"
                      style={{ width: "auto", padding: "0px 8px" }}
                    >
                      Add to Main Watchlist &nbsp;
                      <span className="icon-Star" />
                    </button>
                  </span>
                </span>
              </div>
            </div>
            <div className="sc-16r8icm-0 hMKivi linksSection">
              <div className="sc-10up5z1-0 fnmeDB">
                <div className="sc-16r8icm-0 sc-10up5z1-1 eUVvdh">
                  <div className="heading hideOnDesktop">Liên kết</div>
                  <div className="mobileContent">
                    <div className="links-text">
                      {keywords?._website}, {keywords?._explorers},{" "}
                      {keywords?._community}, {keywords?._etc}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      className="sc-16r8icm-0 eVwNUa modalTriggerMobile"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <ul className="content">
                    <li>
                      <a
                        className="link-button"
                        rel="nofollow noopener"
                        href={cryptoInfo[cryptoObject.name.toLowerCase()].website}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z" />
                          <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z" />
                          <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z" />
                        </svg>
                        <div className="buttonName">bitcoin.org</div>
                        <div className="sc-16r8icm-0 sc-10up5z1-3 iTgjYQ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 coGWQa"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <button className="link-button" aria-expanded="false">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">Trình duyệt</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button className="link-button" aria-expanded="false">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M12 12C9.7912 12 8 10.1681 8 7.90909V7.09091C8 4.83191 9.7912 3 12 3C14.2088 3 16 4.83191 16 7.09091V7.90909C16 10.1681 14.2088 12 12 12Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 19.2884C20 17.8156 19.0424 16.5205 17.6528 16.1335C16.1376 15.7105 14.0688 15.2727 12 15.2727C9.9312 15.2727 7.8624 15.7105 6.3472 16.1335C4.9576 16.5205 4 17.8156 4 19.2884V21H20V19.2884Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">{keywords?._community}</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                    <li />
                    <li>
                      <a
                        className="link-button"
                        lang="vi"
                        rel="nofollow noopener"
                        href={cryptoInfo[cryptoObject.name.toLowerCase()].source}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M7 8L3 12L7 16M17 8L21 12L17 16"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 19L14 5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">
                          {keywords?._source_code}
                        </div>
                        <div className="sc-16r8icm-0 sc-10up5z1-3 iTgjYQ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 coGWQa"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-button"
                        lang="vi"
                        rel="nofollow noopener"
                        href={cryptoInfo[cryptoObject.name.toLowerCase()].whitepaper}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M13.75 3H6.75C6.28587 3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V8.4M13.75 3L19 8.4M13.75 3V8.4H19M15.5 12.9H8.5M15.5 16.5H8.5M10.25 9.3H8.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">
                          {keywords?._white_paper}
                        </div>
                        <div className="sc-16r8icm-0 sc-10up5z1-3 iTgjYQ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 coGWQa"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div display="none" className="sc-16r8icm-0 kHmOmq">
                  <div className="sc-90sd2b-0 kzTgpF">
                    <div className="sc-90sd2b-1 dWBXwc">
                      <div className="sc-90sd2b-2 kZmzHf">
                        <h4 color="text" className="sc-1q9q90x-0 jBqXqt">
                          {dynamicString(keywords?._links)}
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 jZwKai sc-90sd2b-3 evVqNC"
                        >
                          <path
                            d="M18 6L6 18M18 18L6 6"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="sc-90sd2b-4 guFTCp">
                        <div className="sc-16r8icm-0 eMxKgr">
                          <div className="sc-16r8icm-0 jKrmxw">
                            <div className="sc-16r8icm-0 iyfDkY">
                              <h6 className="modalHeading">Liên kết</h6>
                            </div>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://bitcoin.org/"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z" />
                                <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z" />
                                <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z" />
                              </svg>
                              bitcoin.org
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://github.com/bitcoin/bitcoin"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M7 8L3 12L7 16M17 8L21 12L17 16"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10 19L14 5"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {keywords?._source_code}
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://bitcoin.org/bitcoin.pdf"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M13.75 3H6.75C6.28587 3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V8.4M13.75 3L19 8.4M13.75 3V8.4H19M15.5 12.9H8.5M15.5 16.5H8.5M10.25 9.3H8.5"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Sách trắng
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div className="sc-16r8icm-0 jKrmxw">
                            <div className="sc-16r8icm-0 iyfDkY">
                              <h6 className="modalHeading">Trình duyệt</h6>
                            </div>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="noopener"
                              href="https://blockchain.coinmarketcap.com/chain/bitcoin"
                              target="_blank"
                            >
                              blockchain.coinmarketcap.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://blockchain.info/"
                              target="_blank"
                            >
                              blockchain.info
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://live.blockcypher.com/btc/"
                              target="_blank"
                            >
                              live.blockcypher.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://blockchair.com/bitcoin"
                              target="_blank"
                            >
                              blockchair.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://explorer.viabtc.com/btc"
                              target="_blank"
                            >
                              explorer.viabtc.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div className="sc-16r8icm-0 jKrmxw">
                            <div className="sc-16r8icm-0 iyfDkY">
                              <h6 className="modalHeading">
                                {keywords?._community}
                              </h6>
                            </div>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://bitcointalk.org"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M12 12C9.7912 12 8 10.1681 8 7.90909V7.09091C8 4.83191 9.7912 3 12 3C14.2088 3 16 4.83191 16 7.09091V7.90909C16 10.1681 14.2088 12 12 12Z"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20 19.2884C20 17.8156 19.0424 16.5205 17.6528 16.1335C16.1376 15.7105 14.0688 15.2727 12 15.2727C9.9312 15.2727 7.8624 15.7105 6.3472 16.1335C4.9576 16.5205 4 17.8156 4 19.2884V21H20V19.2884Z"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              bitcointalk.org
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://reddit.com/r/bitcoin"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M22 11.8218C22 10.396 20.9167 9.23762 19.5833 9.23762C19 9.23762 18.5 9.41584 18.0833 9.77228C16.5833 8.79208 14.75 8.16832 12.75 8.07921L13.75 4.60396L16.5833 5.31683C16.6667 6.38614 17.5 7.27723 18.5833 7.27723C19.6667 7.27723 20.5833 6.29703 20.5833 5.13861C20.5833 3.9802 19.6667 3 18.5833 3C17.8333 3 17.1667 3.44554 16.8333 4.15842L13.5 3.35644C13.25 3.26733 12.9167 3.44554 12.8333 3.71287L11.5833 8.07921C9.5 8.16832 7.41667 8.70297 5.91667 9.77228C5.5 9.41584 5 9.23762 4.41667 9.23762C3.08333 9.23762 2 10.396 2 11.8218C2 12.7129 2.41667 13.5149 3 13.9604C3 14.1386 3 14.4059 3 14.5842C3 16.3663 4 17.9703 5.75 19.2178C7.41667 20.3762 9.66667 21 12 21C14.3333 21 16.5833 20.3762 18.25 19.2178C20 17.9703 21 16.3663 21 14.5842C21 14.4059 21 14.2277 21 14.0495C21.5833 13.5149 22 12.7129 22 11.8218ZM18.6667 4.15842C19.1667 4.15842 19.5833 4.60396 19.5833 5.13861C19.5833 5.67327 19.1667 6.11881 18.6667 6.11881C18.1667 6.11881 17.75 5.67327 17.75 5.13861C17.75 4.60396 18.1667 4.15842 18.6667 4.15842ZM7.66667 13.4257C7.66667 12.6238 8.33333 12 9 12C9.75 12 10.3333 12.7129 10.3333 13.4257C10.3333 14.1386 9.75 14.8515 9 14.8515C8.33333 14.8515 7.66667 14.2277 7.66667 13.4257ZM15.3333 17.6139C14.6667 18.3267 13.5833 18.6832 12.0833 18.6832C10.5833 18.6832 9.5 18.3267 8.83333 17.6139C8.58333 17.3465 8.58333 16.9901 8.83333 16.8119C9.08333 16.5446 9.41667 16.5446 9.58333 16.8119C10.0833 17.3465 10.9167 17.6139 12.0833 17.6139C13.25 17.6139 14.0833 17.3465 14.5833 16.8119C14.8333 16.5446 15.1667 16.5446 15.3333 16.8119C15.5 17.0792 15.5 17.4356 15.3333 17.6139ZM15 14.8515C14.25 14.8515 13.5833 14.2277 13.5833 13.4257C13.5833 12.6238 14.25 12 15 12C15.75 12 16.3333 12.7129 16.3333 13.4257C16.3333 14.1386 15.75 14.8515 15 14.8515Z"
                                  fill="currenColor"
                                />
                              </svg>
                              Reddit
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="none" className="sc-16r8icm-0 kHmOmq">
                  <div className="sc-90sd2b-0 kzTgpF">
                    <div className="sc-90sd2b-1 dWBXwc">
                      <div className="sc-90sd2b-2 kZmzHf">
                        <h4 color="text" className="sc-1q9q90x-0 jBqXqt">
                          Bitcoin Thẻ
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 jZwKai sc-90sd2b-3 evVqNC"
                        >
                          <path
                            d="M18 6L6 18M18 18L6 6"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="sc-90sd2b-4 guFTCp">
                        <div className="sc-16r8icm-0 csifPj">
                          <div className="sc-16r8icm-0 hgKnTV">
                            <h6 className="modalHeading">Algorithm</h6>
                            <div className="sc-10up5z1-2 iEatlr">
                              <a href="/vi/view/pow/" className="cmc-link">
                                <div className="tagBadge">PoW</div>
                              </a>
                              <a href="/vi/view/sha-256/" className="cmc-link">
                                <div className="tagBadge">SHA-256</div>
                              </a>
                            </div>
                          </div>
                          <div className="sc-16r8icm-0 hgKnTV">
                            <h6 className="modalHeading">Category</h6>
                            <div className="sc-10up5z1-2 iEatlr">
                              <a
                                href="/vi/view/store-of-value/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">Store Of Value</div>
                              </a>
                              <a
                                href="/vi/view/state-channel/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">State Channel</div>
                              </a>
                              <a
                                href="/vi/view/coinbase-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Coinbase Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/three-arrows-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Three Arrows Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/polychain-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Polychain Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/binance-labs-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Binance Labs Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/blockchain-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Blockchain Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/boostvc-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  BoostVC Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/cms-holdings-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  CMS Holdings Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/dcg-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">DCG Portfolio</div>
                              </a>
                              <a
                                href="/vi/view/dragonfly-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  DragonFly Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/electric-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Electric Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/fabric-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Fabric Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/framework-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Framework Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/galaxy-digital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Galaxy Digital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/huobi-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Huobi Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/alameda-research-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Alameda Research Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/a16z-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">a16z Portfolio</div>
                              </a>
                              <a
                                href="/vi/view/1confirmation-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  1Confirmation Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/winklevoss-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Winklevoss Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/usv-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">USV Portfolio</div>
                              </a>
                              <a
                                href="/vi/view/placeholder-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Placeholder Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/pantera-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Pantera Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/multicoin-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Multicoin Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/paradigm-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Paradigm Portfolio
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="sc-16r8icm-0 hgKnTV">
                            <h6 className="modalHeading">Others</h6>
                            <div className="sc-10up5z1-2 iEatlr">
                              <a href="/vi/view/mineable/" className="cmc-link">
                                <div className="tagBadge">Mineable</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần Tool Carousel */}
      <div className="sc-16r8icm-0 sc-2a8jfd-3 kfTTiy">
        <div className="my-container routeSwitcher">
          <span>
            <a
              href="/vi/currencies/near-protocol/"
              style={{ backgroundColor: "#3861FB" }}
              className="x0o17e-0 kzspeM sc-1dmz9yx-0 eystbV cmc-link"
            >
              Tổng quan
            </a>
            <a
              href="/vi/currencies/near-protocol/markets/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Thị trường
            </a>
            <a
              href="/vi/currencies/near-protocol/historical-data/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Dữ Liệu Lịch Sử Thị Trường
            </a>
            <a
              href="/vi/currencies/near-protocol/project-info/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Project Info
            </a>
            <a
              rel="nofollow"
              href="/vi/currencies/near-protocol/wallets/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Ví
            </a>
            <a
              href="/vi/currencies/near-protocol/news/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Tin tức
            </a>
            <a
              rel="nofollow"
              href="/vi/currencies/near-protocol/social/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Mạng xã hội
            </a>
            <a
              rel="nofollow"
              href="/vi/currencies/near-protocol/ratings/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Xếp hạng
            </a>
            <a
              rel="nofollow"
              href="/vi/currencies/near-protocol/onchain-analysis/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Phân tích
            </a>
            <a
              rel="nofollow"
              href="/vi/currencies/near-protocol/price-estimates/"
              style={{ backgroundColor: "transparent" }}
              className="x0o17e-0 DChGS sc-1dmz9yx-0 cckSAk cmc-link"
            >
              Price Estimates
            </a>
          </span>
        </div>
      </div>

      {/* phần nội dung */}
      <div className="sc-16r8icm-0 jKrmxw my-container">
        <div display=",,flex" className="sc-16r8icm-0 sc-19zk94m-1 gRSJaB">
          {/* left */}
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
            className="sc-16r8icm-0 dSXRna"
          >
            <div className="sc-19zk94m-2 cEhSvA">
              <div className="sc-117f5dm-0 cjTISQ">
                <h3 color="text" className="sc-1q9q90x-0 fyQGwp">
                  {dynamicString(keywords?._chart_title, {
                    crypto: cryptoObject?.name,
                    fiat: fiatObject?.value,
                  })}
                </h3>
              </div>
              <div className="sc-16r8icm-0 kjciSH table-control-left table-control-chart-type">
                <Suspense fallback={<MyLoader></MyLoader>}>
                  <MyChart></MyChart>
                </Suspense>
              </div>
            </div>

            {/* caculator */}
            <Caculator></Caculator>
          </div>

          {/* right */}
          <div className="sc-16r8icm-0 iutcov border-box-shadow">
            <Suspense fallback={<MyLoader></MyLoader>}>
              {cryptoObject &&
                fiatObject &&
                keywords &&
                dataCoinApi &&
                currentPrice && (
                  <TabStatistical
                    currentPrice={currentPrice}
                    dataCoinApi={dataCoinApi}
                    cryptoObject={cryptoObject}
                    fiatObject={fiatObject}
                    keywords={keywords}
                  ></TabStatistical>
                )}
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
