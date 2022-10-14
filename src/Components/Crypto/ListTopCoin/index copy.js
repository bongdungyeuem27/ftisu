import React, { useState, useRef, useEffect, memo } from "react";
import "./listtopcoin.css";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  topDailyVolumeData,
  getCoinDataApiByMarket,
} from "../../../api/crypto";
import { Link } from "react-router-dom";
import { API_CRYPTOCOMPARE_HOME } from "../../../common/constant/index";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../common/helper/number";
import { FIATS } from "../../../Redux/constrants/fiatConst";
import { CRYPTOS } from "../../../common/constant/index";
import { LANGUAGES } from "../../../Redux/constrants/languageConst";
import { dynamicString } from "../../../common/helper/string";
import { useSearchParams } from "react-router-dom";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};
const itemsInOnePage = 100;
const maxScreenElement = 10;
const maxPage = 8;
export default (function Index(props) {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(
    searchParams.get("page") === null ? 1 : parseInt(searchParams.get("page"))
  );
  const language = useSelector((state) => state.language.language);
  // Chứa các từ ngữ đa ngôn ngữ
  const [keywords, setKeywords] = useState();
  // const [maxScreenElement] = useState(Math.round(window.screen.height / 74));
  const pageApiLoaded = useRef(0);
  const fiat = useSelector((state) => state.fiat.fiat);
  const [fiatObject, setFiatObject] = useState(
    FIATS.find((x) => x.key === fiat)
  );
  const [stopRender, setStopRender] = useState(false);

  const fetchMoreData = () => {
  
    if (items.length >= itemsInOnePage) {
      setStopRender(true);
      console.log("stop render");
      return;
    }

    topDailyVolumeData(
      props.fiatObject.key,
      maxScreenElement,
      ((page - 1) * itemsInOnePage) / maxScreenElement + pageApiLoaded.current
    )
      .then(async (success) => {
        console.log(success.data)
        if (success.data.Message === "Err:No Data") {
          setStopRender(true);
          console.log("stop render");
          return;
        }
        setItems(items.concat(success.data.Data));

        pageApiLoaded.current += 1;
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    <div id="overview">
      <InfiniteScroll
        pageStart={0}
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={!stopRender && <h4>Loading...</h4>}
      >
        
        <table id="coin-table" className="h7vnx2-2 czTsgW cmc-table  ">
          <colgroup>
            <col />
            <col
              style={{ width: "50px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col
              style={{ width: "250px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col />
            <col
              style={{ width: "84px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col
              style={{ width: "84px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col
              style={{ width: "200px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col
              style={{ width: "200px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col
              style={{ width: "200px", minWidth: "auto", maxWidth: "auto" }}
            />
            <col />
            {/* <col
              style={{ width: "50px", minWidth: "auto", maxWidth: "auto" }}
            /> */}
          </colgroup>
          <thead>
            <tr>
              <th className="stickyTop" />
              <th className="stickyTop" style={{ textAlign: "left" }}>
                <div className="s8fs2i-0 bOfkjI">
                  <div className="s8fs2i-1 gbtfIe">
                    <p
                      className="sc-1eb5slv-0 iKUzJY rank-column-title"
                      fontSize={0}
                      color="text"
                    >
                      #
                    </p>
                    <span className="icon-Caret-up" />
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "left" }}>
                <div className="s8fs2i-0 bOfkjI">
                  <div className="s8fs2i-1 gbtfIe">
                    <p
                      className="sc-1eb5slv-0 iKUzJY"
                      fontSize={0}
                      color="text"
                    >
                      {keywords?._name}
                    </p>
                  </div>
                </div>
              </th>
              <th className="stickyTop">
                <div className="s8fs2i-0 pEXWP">
                  <div className="s8fs2i-1 gbtfIe">
                    <p
                      className="sc-1eb5slv-0 iKUzJY"
                      fontSize={0}
                      color="text"
                    >
                      {keywords?._price}
                    </p>
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "right" }}>
                <div>
                  <div className="s8fs2i-0 pEXWP">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        24h %
                      </p>
                    </div>
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "right" }}>
                <div>
                  <div className="s8fs2i-0 pEXWP">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        7d %
                      </p>
                    </div>
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "right" }}>
                <div className="s8fs2i-0 pEXWP">
                  <div className="s8fs2i-1 gbtfIe">
                    <p
                      className="sc-1eb5slv-0 iKUzJY"
                      fontSize={0}
                      color="text"
                    >
                      {keywords?._market_cap}
                    </p>
                  </div>
                  <div className="sbsk6s-2 cGlIZe" aria-expanded="false">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height={16}
                      width={16}
                      viewBox="0 0 24 24"
                      color="neutral4"
                      className="sc-16r8icm-0 kLSxec"
                    >
                      <path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "right" }}>
                <div className="s8fs2i-0 pEXWP">
                  <div className="s8fs2i-1 gbtfIe">
                    <p
                      className="sc-1eb5slv-0 iKUzJY"
                      fontSize={0}
                      color="text"
                    >
                      {keywords?._volume24h}
                    </p>
                  </div>
                  <div className="sbsk6s-2 cGlIZe" aria-expanded="false">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      height={16}
                      width={16}
                      viewBox="0 0 24 24"
                      color="neutral4"
                      className="sc-16r8icm-0 kLSxec"
                    >
                      <path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z" />
                    </svg>
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "right" }}>
                <div className="s8fs2i-0 pEXWP">
                  <div className="s8fs2i-1 gbtfIe">
                    <p
                      className="sc-1eb5slv-0 iKUzJY"
                      fontSize={0}
                      color="text"
                    >
                      {keywords?._supply}
                    </p>
                  </div>
                  <div className="sbsk6s-2 cGlIZe" aria-expanded="false">
                    <span className="icon-Info" />
                  </div>
                </div>
              </th>
              <th className="stickyTop" style={{ textAlign: "right" }}>
                <p
                  style={{ fontSize: "12px" }}
                  color="text"
                  fontSize={1}
                  className="sc-1eb5slv-0 hykWbK"
                >
                  {keywords?._last_7days}
                </p>
              </th>
              <th className="stickyTop" />
            </tr>
          </thead>
          <tbody>
            {items.map((value, key) => {
              if (!value.RAW) {
                value.RAW = {};
                value.RAW[fiatObject.value] = {};
              }
              return (
                <tr key={key}>
                  <td>
                    <span className="sc-80eeb0-1 iuAjRY">
                      <span className="icon-Star" />
                    </span>
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <p
                      color="text2"
                      fontSize={0}
                      className="sc-1eb5slv-0 etpvrL"
                    >
                      {(page - 1) * itemsInOnePage + key + 1}
                    </p>
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <div display="flex" className="sc-16r8icm-0 escjiH">
                      <Link
                        to={`/currencies/${value.CoinInfo.FullName.toLowerCase()}`}
                        className="cmc-link"
                      >
                        <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                          <img
                            className="coin-logo"
                            src={`${API_CRYPTOCOMPARE_HOME}${value.CoinInfo.ImageUrl}?width=24`}
                            loading="lazy"
                            alt="logo"
                          />
                          <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                            <p
                              fontWeight="semibold"
                              color="text"
                              fontSize={1}
                              className="sc-1eb5slv-0 iworPT"
                            >
                              {value.CoinInfo.FullName}
                            </p>
                            <div
                              data-nosnippet="true"
                              className="sc-1teo54s-2 fZIJcI"
                            >
                              <div className="sc-1teo54s-3 etWhyV">
                                {key + 1}
                              </div>
                              <p
                                color="text3"
                                className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                                fontSize={1}
                              >
                                {value.CoinInfo.Name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="sc-16r8icm-0 bKmQGi">
                        <div data-nosnippet="true" aria-expanded="false">
                          <div className="sc-1x3bens-0 hRpznX">
                            <button
                              style={{
                                whiteSpace: "nowrap",
                                background: "var(--theme-light-blue)",
                                color: "var(--theme-light-blue-font)",
                              }}
                              className="x0o17e-0 kPvqGV"
                            >
                              Mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="sc-131di3y-0 cLgOOr">
                      <a
                        href="/vi/currencies/bitcoin/markets/"
                        className="cmc-link"
                      >
                        <span>
                          {" "}
                          {fiatObject.sign}
                          {numberWithCommas(
                            value.RAW[fiatObject.value].PRICE > 1
                              ? Math.round(
                                  value.RAW[fiatObject.value].PRICE * 100
                                ) / 100
                              : value.RAW[fiatObject.value].PRICE
                          )}
                        </span>
                      </a>
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span
                      className={
                        value.RAW[fiatObject.value].CHANGEDAY < 0
                          ? "hzgCfk number-negative"
                          : "hzgCfk number-positive"
                      }
                    >
                      <span className="icon-Caret-down" />
                      {(
                        Math.round(
                          (value.RAW[fiatObject.value].CHANGEDAY /
                            value.RAW[fiatObject.value].OPEN24HOUR) *
                            100
                        ) / 100
                      ).toLocaleString()}
                      %
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <span className="sc-15yy2pl-0 kAXKAX">
                      <span className="icon-Caret-up" />
                      AAA{/* */}%
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <p
                      color="text"
                      style={{ whiteSpace: "nowrap" }}
                      fontSize={1}
                      className="sc-1eb5slv-0 hykWbK"
                    >
                      <span className="sc-1ow4cwt-0 iosgXe">$799.02B</span>
                      <span
                        data-nosnippet="true"
                        className="sc-1ow4cwt-1 ieFnWP"
                      >
                        {fiatObject?.sign}
                        {numberWithCommas(
                          Math.round(value.RAW[fiatObject.value].MKTCAP * 100) /
                            100
                        )}
                      </span>
                    </p>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                      <a
                        href="/vi/currencies/bitcoin/markets/"
                        className="cmc-link"
                      >
                        <p
                          fontSize={1}
                          className="sc-1eb5slv-0 hykWbK font_weight_500"
                          color="text"
                        >
                          {fiatObject?.sign}
                          {Math.round(
                            value.RAW[fiatObject.value].TOTALVOLUME24HTO
                          ).toLocaleString()}
                        </p>
                      </a>
                      <div data-nosnippet="true">
                        <p
                          color="text2"
                          fontSize={0}
                          className="sc-1eb5slv-0 etpvrL"
                        >
                          {Math.round(
                            value.RAW[fiatObject.value].TOTALVOLUME24H
                          )
                            .toString()
                            .toLocaleString()}{" "}
                          {value.CoinInfo.Name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div
                      style={{ cursor: "pointer" }}
                      className="sc-16r8icm-0 g5oqcc-0 drLITg"
                    >
                      <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                        <p
                          fontSize={1}
                          fontWeight="medium"
                          color="text"
                          className="sc-1eb5slv-0 kZlTnE"
                        >
                          {numberWithCommas(
                            Math.round(
                              value.RAW[fiatObject.value].SUPPLY * 100
                            ) / 100
                          )}{" "}
                          {value.CoinInfo.Name}
                        </p>
                      </div>
                      <div width={160} className="qlsl66-0 jrRnei">
                        <div width={145} className="qlsl66-1 gntWGK" />
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <a
                      href="/vi/currencies/bitcoin/?period=7d"
                      className="cmc-link"
                    >
                      <img
                        src={`https://images.cryptocompare.com/sparkchart/${
                          value.CoinInfo.Name
                        }/${
                          fiatObject.value
                        }/latest.png?ts=${new Date().getTime()}`}
                        alt="bitcoin-7d-price-graph"
                        className="h7vnx2-0 bCltOL isUp"
                        loading="lazy"
                      />
                    </a>
                  </td>
                  {/* <td>
                    <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                      <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                        <span className="icon-More-Vertical" />
                      </button>
                    </div>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>

      {stopRender && (
        <>
          {/* mobile page choose */}
          <div className="sc-4r7b5t-2 bAteBr my-container">
            <div className="sc-1t7mu4i-0 kMMdbd">
              <ul className="pagination">
                <li className="previous">
                  <a
                    href={page > 1 && `/?page=${page - 1}`}
                    className="chevron"
                    tabIndex={0}
                    role="button"
                    aria-disabled="false"
                    aria-label="Previous page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height={14}
                      width={14}
                      viewBox="0 0 24 24"
                      className="sc-16r8icm-0 dWGZqy"
                    >
                      <path
                        d="M15 6L9 12L15 18"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                {page !== 1 && (
                  <li className="page">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 1"
                      href="/?page=1"
                    >
                      1
                    </a>
                  </li>
                )}
                {page - 2 > 1 && (
                  <li className="break">
                    <a role="button" tabIndex={0}>
                      ...
                    </a>
                  </li>
                )}
                {/* {page - 3 > 1 && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 2 is your current page"
                        aria-current="page"
                        href={`/?page=${page - 3}`}
                      >
                        {page - 3}
                      </a>
                    </li>
                  )} */}
                {page - 2 > 1 && (
                  <li className="page">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 2 is your current page"
                      aria-current="page"
                      href={`/?page=${page - 2}`}
                    >
                      {page - 2}
                    </a>
                  </li>
                )}
                {page - 1 > 1 && (
                  <li className="page">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 2 is your current page"
                      aria-current="page"
                      href={`/?page=${page - 1}`}
                    >
                      {page - 1}
                    </a>
                  </li>
                )}
                <li className="page active">
                  <a
                    role="button"
                    tabIndex={0}
                    aria-label="Page 2 is your current page"
                    aria-current="page"
                  >
                    {page}
                  </a>
                </li>
                {page + 1 < maxPage && (
                  <li className="page">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 2 is your current page"
                      aria-current="page"
                      href={`/?page=${page + 1}`}
                    >
                      {page + 1}
                    </a>
                  </li>
                )}
                {page + 2 < maxPage && (
                  <li className="page">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 2 is your current page"
                      aria-current="page"
                      href={`/?page=${page + 2}`}
                    >
                      {page + 2}
                    </a>
                  </li>
                )}
                {page + 2 < maxPage && (
                  <li className="break">
                    <a role="button" tabIndex={0}>
                      ...
                    </a>
                  </li>
                )}
                {page !== maxPage && (
                  <li className="page">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 100"
                      href={`/?page=${maxPage}`}
                    >
                      {maxPage}
                    </a>
                  </li>
                )}

                <li className="next">
                  <a
                    className="chevron"
                    tabIndex={0}
                    role="button"
                    aria-disabled="false"
                    aria-label="Next page"
                    href={page < maxPage && `/?page=${page + 1}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height={14}
                      width={14}
                      viewBox="0 0 24 24"
                      className="sc-16r8icm-0 dWGZqy"
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
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* pc page */}
          <div className="sc-16r8icm-0 sc-4r7b5t-0 gJbsQH my-container">
            <p color="text" fontSize={1} className="sc-1eb5slv-0 hykWbK">
              {keywords?._showing} {(page - 1) * itemsInOnePage + 1} -{" "}
              {(page - 1) * itemsInOnePage + items.length}
            </p>
            <div className="sc-4r7b5t-3 bvcQcm">
              <div className="sc-1t7mu4i-0 kMMdbd">
                <ul className="pagination">
                  <li className="previous">
                    <a
                      href={page > 1 && `/?page=${page - 1}`}
                      className="chevron"
                      tabIndex={0}
                      role="button"
                      aria-disabled="false"
                      aria-label="Previous page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height={14}
                        width={14}
                        viewBox="0 0 24 24"
                        className="sc-16r8icm-0 dWGZqy"
                      >
                        <path
                          d="M15 6L9 12L15 18"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                  {page !== 1 && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 1"
                        href="/?page=1"
                      >
                        1
                      </a>
                    </li>
                  )}
                  {page - 2 > 1 && (
                    <li className="break">
                      <a role="button" tabIndex={0}>
                        ...
                      </a>
                    </li>
                  )}
                  {/* {page - 3 > 1 && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 2 is your current page"
                        aria-current="page"
                        href={`/?page=${page - 3}`}
                      >
                        {page - 3}
                      </a>
                    </li>
                  )} */}
                  {page - 2 > 1 && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 2 is your current page"
                        aria-current="page"
                        href={`/?page=${page - 2}`}
                      >
                        {page - 2}
                      </a>
                    </li>
                  )}
                  {page - 1 > 1 && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 2 is your current page"
                        aria-current="page"
                        href={`/?page=${page - 1}`}
                      >
                        {page - 1}
                      </a>
                    </li>
                  )}
                  <li className="page active">
                    <a
                      role="button"
                      tabIndex={0}
                      aria-label="Page 2 is your current page"
                      aria-current="page"
                    >
                      {page}
                    </a>
                  </li>
                  {page + 1 < maxPage && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 2 is your current page"
                        aria-current="page"
                        href={`/?page=${page + 1}`}
                      >
                        {page + 1}
                      </a>
                    </li>
                  )}
                  {page + 2 < maxPage && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 2 is your current page"
                        aria-current="page"
                        href={`/?page=${page + 2}`}
                      >
                        {page + 2}
                      </a>
                    </li>
                  )}
                  {page + 2 < maxPage && (
                    <li className="break">
                      <a role="button" tabIndex={0}>
                        ...
                      </a>
                    </li>
                  )}
                  {page !== maxPage && (
                    <li className="page">
                      <a
                        role="button"
                        tabIndex={0}
                        aria-label="Page 100"
                        href={`/?page=${maxPage}`}
                      >
                        {maxPage}
                      </a>
                    </li>
                  )}

                  <li className="next">
                    <a
                      className="chevron"
                      tabIndex={0}
                      role="button"
                      aria-disabled="false"
                      aria-label="Next page"
                      href={page < maxPage && `/?page=${page + 1}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        height={14}
                        width={14}
                        viewBox="0 0 24 24"
                        className="sc-16r8icm-0 dWGZqy"
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
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sc-16r8icm-0 sc-4r7b5t-1 entgiO">
              <p color="text2" fontSize={1} className="sc-1eb5slv-0 htiVYl">
                Show rows
              </p>
              <div className="sc-16r8icm-0 tu1guj-0 cSTqvK">
                100
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height={14}
                  width={14}
                  viewBox="0 0 24 24"
                  className="sc-16r8icm-0 dWGZqy"
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
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
});
