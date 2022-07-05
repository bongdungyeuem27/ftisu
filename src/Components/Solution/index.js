import React, { useState, useRef, useEffect } from "react";
import "./solution.css";
import { useSelector } from "react-redux";
import { LANGUAGES } from "../../Redux/constrants/languageConst";
import blockchain from "./images/blockchain.png";
import forecast from "./images/forecast.png";

export default function Index() {
  const language = useSelector((state) => state.language.language);

  const [keywords, setKeywords] = useState();
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
    <div className="hm-solutions">
      <div className="hm-solutions__container swui-container ">
        <h2 className="swui-h2 hm-solutions__title text-center">
          {keywords?._document_resource}
        </h2>
        <div className="hm-solutions__cards mt-5">
          <a
            href="/corp/research/"
            target="_blank"
            className="hm-solutions__card hover1"
            data-test="solutions_card-1"
          >
            <span className="hm-solutions__card-body">
              <span className="hm-solutions__card-icon">
              <img className="solution-icon"
                  src={blockchain}
                ></img>
              </span>
              <span className="hm-solutions__card-info">
                <h3 className="hm-solutions__card-title">
                  Blockchain Document
                </h3>
                <ul className="hm-solutions__card-list">
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    SolidityProgramming
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Project Smart CV
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Smart Contact
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    DApps
                  </li>
                </ul>
              </span>
            </span>
            <span className="hm-solutions__card-footer">
              <a
                className="swui-link swui-link--brand swui-link--secondary hm-solutions__card-button"
                type="button"
                target="_blank"
                href="https://github.com/nhutminh9799/SolidityProgramming"
              >
                Github
                <span className="swui-link__no-break" />
                <svg
                  className="swui-link__arrow"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M3 7.375h7.606L7.112 3.881 8 3l5 5-5 5-.881-.881 3.487-3.494H3v-1.25Z" />
                </svg>
              </a>
            </span>
          </a>
          <a
            href="/corp/marketing/"
            target="_blank"
            className="hm-solutions__card hover1"
            data-test="solutions_card-2"
          >
            <span className="hm-solutions__card-body">
              <span className="hm-solutions__card-icon">
              <img className="solution-icon"
                  src={forecast}
                ></img>
              </span>
              <span className="hm-solutions__card-info">
                <h3 className="hm-solutions__card-title">Data Analysis Document</h3>
                <ul className="hm-solutions__card-list">
                  <li className="body-text body-text--sm hm-solutions__card-item">
                  Descriptive Statistics
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                  Statistical Inference Forecast Technology
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                  Machine Learning & AI
                  </li>
                </ul>
              </span>
            </span>
            <span className="hm-solutions__card-footer">
              <a
                className="swui-link swui-link--brand swui-link--secondary hm-solutions__card-button"
                type="button"
                target="_blank"
                href="https://github.com/VHNhat/Cryptocurrency-Prediction"
              >
                Github
                <span className="swui-link__no-break" />
                <svg
                  className="swui-link__arrow"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M3 7.375h7.606L7.112 3.881 8 3l5 5-5 5-.881-.881 3.487-3.494H3v-1.25Z" />
                </svg>
              </a>
            </span>
          </a>

          {/* <a
            href="/corp/shopper/"
            target="_blank"
            className="hm-solutions__card hover1"
            data-test="solutions_card-3"
          >
            <span className="hm-solutions__card-body">
              <span className="hm-solutions__card-icon">
                <svg
                  width={82}
                  height={82}
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hm-solutions__card-image"
                >
                  <circle cx={41} cy={41} r={41} fill="#C343FF" />
                  <mask
                    id="purchase_svg__a"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={82}
                    height={82}
                  >
                    <circle cx={41} cy={41} r={41} fill="#C343FF" />
                  </mask>
                  <g mask="url(#purchase_svg__a)">
                    <path
                      d="M65.836 92.73h-71.3c-.758 0-1.37-.535-1.37-1.193l1.746-65.83h70.551l1.746 65.83c-.004.661-.615 1.194-1.373 1.194z"
                      fill="url(#purchase_svg__paint0_linear)"
                    />
                    <path
                      d="M44.388 36.392c1.4 0 2.536-1.088 2.536-2.429 0-1.34-1.135-2.428-2.536-2.428-1.4 0-2.535 1.087-2.535 2.428s1.135 2.429 2.535 2.429zm-28.4 0c1.4 0 2.535-1.088 2.535-2.429 0-1.34-1.135-2.428-2.535-2.428-1.4 0-2.536 1.087-2.536 2.428s1.135 2.429 2.536 2.429z"
                      fill="#C343FF"
                    />
                    <path
                      d="M30.114 63.75c-8.555 0-15.514-7.47-15.514-16.655V35.85c0-.629.532-1.138 1.189-1.138s1.189.51 1.189 1.138v11.245c0 7.929 5.892 14.377 13.136 14.377 7.241 0 13.136-6.448 13.136-14.377V35.85c0-.629.532-1.138 1.189-1.138s1.189.51 1.189 1.138v11.245c0 9.184-6.959 16.654-15.514 16.654z"
                      fill="url(#purchase_svg__paint1_linear)"
                    />
                    <path
                      d="M57.694 19.879l7.803 5.828H-5.09l7.771-5.828h55.013z"
                      fill="url(#purchase_svg__paint2_linear)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="purchase_svg__paint0_linear"
                      x1="56.559"
                      y1="26.678"
                      x2="31.485"
                      y2="105.736"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity="0.16" />
                    </linearGradient>
                    <linearGradient
                      id="purchase_svg__paint1_linear"
                      x1="30.695"
                      y1="35.906"
                      x2="31.16"
                      y2="69.904"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="0.656" stopColor="#fff" />
                    </linearGradient>
                    <linearGradient
                      id="purchase_svg__paint2_linear"
                      x1="-15.176"
                      y1="10.89"
                      x2="57.118"
                      y2="46.925"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="hm-solutions__card-info">
                <h3 className="hm-solutions__card-title">eCommerce</h3>
                <ul className="hm-solutions__card-list">
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Customer journey
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Brand performance
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Product optimization
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    On-site search
                  </li>
                </ul>
              </span>
            </span>
            <span className="hm-solutions__card-footer">
              <button
                className="swui-link swui-link--brand swui-link--secondary hm-solutions__card-button"
                type="button"
              >
                Learn more
                <span className="swui-link__no-break" />
                <svg
                  className="swui-link__arrow"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M3 7.375h7.606L7.112 3.881 8 3l5 5-5 5-.881-.881 3.487-3.494H3v-1.25Z" />
                </svg>
              </button>
            </span>
          </a>
          <a
            href="/corp/investors/"
            target="_blank"
            className="hm-solutions__card hover1"
            data-test="solutions_card-4"
          >
            <span className="hm-solutions__card-body">
              <span className="hm-solutions__card-icon">
                <svg
                  width={82}
                  height={82}
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hm-solutions__card-image"
                >
                  <circle cx={41} cy={41} r={41} fill="#00CA9A" />
                  <mask
                    id="investors_svg__a"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={82}
                    height={82}
                  >
                    <circle cx={41} cy={41} r={41} fill="#00CA9A" />
                  </mask>
                  <g mask="url(#investors_svg__a)">
                    <path
                      d="M21.515 29.758H18.7V19.145c0-.332-.286-.6-.64-.6-.354 0-.64.268-.64.6v10.613h-2.816c-.636 0-1.152.485-1.152 1.082v28.674c0 .597.516 1.082 1.152 1.082h2.816v7.81c0 .332.286.6.64.6.354 0 .64-.268.64-.6v-7.81h2.816c.636 0 1.153-.485 1.153-1.081V30.84c0-.597-.517-1.082-1.152-1.082z"
                      fill="url(#investors_svg__paint0_linear)"
                    />
                    <path
                      d="M5.29 43.375H2.32v-3.404c0-.333-.286-.6-.64-.6-.354 0-.64.267-.64.6v3.404h-2.774c-.606 0-1.096.46-1.096 1.03v20.364c0 .569.49 1.03 1.096 1.03H1.04v12.214c0 .332.286.6.64.6.354 0 .64-.267.64-.6v-12.21h2.97c.606 0 1.096-.461 1.096-1.03V44.404c0-.569-.49-1.029-1.096-1.029z"
                      fill="url(#investors_svg__paint1_linear)"
                    />
                    <path
                      d="M68.953 21.73h-2.979v-5.406c0-.333-.285-.601-.64-.601-.354 0-.64.268-.64.6v5.407h-2.786c-.602 0-1.088.457-1.088 1.021v9.572c0 .565.486 1.021 1.088 1.021h2.786v10.213c0 .332.286.6.64.6.355 0 .64-.268.64-.6V33.344h2.979c.601 0 1.088-.456 1.088-1.02v-9.572c0-.565-.487-1.022-1.088-1.022z"
                      fill="url(#investors_svg__paint2_linear)"
                    />
                    <path
                      d="M37.8 45.534h-2.816v-7.208c0-.333-.286-.601-.64-.601-.355 0-.64.268-.64.6v7.21h-2.817c-.635 0-1.152.484-1.152 1.08v15.86c0 .597.517 1.081 1.152 1.081h2.817v14.818c0 .333.285.601.64.601.354 0 .64-.268.64-.6v-14.82H37.8c.636 0 1.152-.484 1.152-1.081v-15.86c0-.596-.516-1.08-1.152-1.08z"
                      fill="url(#investors_svg__paint3_linear)"
                    />
                    <path
                      d="M54.15 36.567h-2.982v-15.42c0-.332-.286-.6-.64-.6-.354 0-.64.268-.64.6v15.42h-2.79c-.598 0-1.08.452-1.08 1.013v21.999c0 .56.482 1.013 1.08 1.013h2.79v2.603c0 .332.286.6.64.6.354 0 .64-.268.64-.6v-2.6h2.983c.597 0 1.08-.452 1.08-1.012V37.58c.003-.56-.483-1.013-1.08-1.013z"
                      fill="url(#investors_svg__paint4_linear)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="investors_svg__paint0_linear"
                      x1="18.015"
                      y1="28.265"
                      x2="18.015"
                      y2="77.651"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="investors_svg__paint1_linear"
                      x1="1.778"
                      y1="39.37"
                      x2="1.778"
                      y2="78.614"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="investors_svg__paint2_linear"
                      x1="65.43"
                      y1="15.723"
                      x2="65.227"
                      y2="87.901"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="investors_svg__paint3_linear"
                      x1="34.344"
                      y1="37.725"
                      x2="34.166"
                      y2="100.326"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="investors_svg__paint4_linear"
                      x1="50.318"
                      y1="30.439"
                      x2="50.318"
                      y2="91.318"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="hm-solutions__card-info">
                <h3 className="hm-solutions__card-title">Investing</h3>
                <ul className="hm-solutions__card-list">
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Investment ideation
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Investment monitoring
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Forecasting
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Due diligence
                  </li>
                </ul>
              </span>
            </span>
            <span className="hm-solutions__card-footer">
              <button
                className="swui-link swui-link--brand swui-link--secondary hm-solutions__card-button"
                type="button"
              >
                Learn more
                <span className="swui-link__no-break" />
                <svg
                  className="swui-link__arrow"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M3 7.375h7.606L7.112 3.881 8 3l5 5-5 5-.881-.881 3.487-3.494H3v-1.25Z" />
                </svg>
              </button>
            </span>
          </a>
          <a
            href="/corp/sales/"
            target="_blank"
            className="hm-solutions__card hover1"
            data-test="solutions_card-5"
          >
            <span className="hm-solutions__card-body">
              <span className="hm-solutions__card-icon">
                <svg
                  width={82}
                  height={82}
                  viewBox="0 0 82 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hm-solutions__card-image"
                >
                  <circle cx={41} cy={41} r={41} fill="#FFA800" />
                  <mask
                    id="sales_svg__a"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={82}
                    height={82}
                  >
                    <circle cx={41} cy={41} r={41} fill="#FFB800" />
                  </mask>
                  <g mask="url(#sales_svg__a)">
                    <path
                      d="M68.476 50.245L30.522 55.14a.959.959 0 01-.242 0l-37.427-4.896c-.961 0-1.74-.763-1.74-1.706l.965-23.237c0-.502.414-.907.926-.907h75.322c.512 0 .925.405.925.907l.965 23.237c0 .943-.779 1.706-1.74 1.706z"
                      fill="url(#sales_svg__paint0_linear)"
                    />
                    <path
                      d="M46.82 24.653h-2.843v-6.506c0-.903-.734-1.637-1.636-1.637H19.505c-.902 0-1.636.734-1.636 1.637v6.506h-2.844v-6.506a4.484 4.484 0 014.48-4.48H42.34a4.485 4.485 0 014.48 4.48v6.506z"
                      fill="url(#sales_svg__paint1_linear)"
                    />
                    <path
                      d="M68.476 50.245l-37.811 4.878-.14.018a.954.954 0 01-.245 0l-37.426-4.896c-.357 0-.688-.106-.964-.287V80a2 2 0 002 2h73.55a2 2 0 002-2V49.958a1.76 1.76 0 01-.964.287z"
                      fill="url(#sales_svg__paint2_linear)"
                    />
                    <path
                      d="M24.83 49.408h13.066c.457 0 .825.374.825.831v6.993c0 .46-.371.831-.825.831H24.831a.828.828 0 01-.825-.831v-6.993a.83.83 0 01.825-.831z"
                      fill="url(#sales_svg__paint3_linear)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="sales_svg__paint0_linear"
                      x1="30.665"
                      y1="24.395"
                      x2="38.287"
                      y2="96.328"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity="0.17" />
                    </linearGradient>
                    <linearGradient
                      id="sales_svg__paint1_linear"
                      x1="30.93"
                      y1="15.831"
                      x2="30.923"
                      y2="24.653"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity="0.42" />
                    </linearGradient>
                    <linearGradient
                      id="sales_svg__paint2_linear"
                      x1="26.311"
                      y1="91.838"
                      x2="30.439"
                      y2="40.379"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="0.125" stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity="0.28" />
                    </linearGradient>
                    <linearGradient
                      id="sales_svg__paint3_linear"
                      x1="32.58"
                      y1="56.158"
                      x2="32.58"
                      y2="45.551"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="hm-solutions__card-info">
                <h3 className="hm-solutions__card-title">Sales</h3>
                <ul className="hm-solutions__card-list">
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Lead generation
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Lead enrichment
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Sales engagement
                  </li>
                  <li className="body-text body-text--sm hm-solutions__card-item">
                    Fraud detection
                  </li>
                </ul>
              </span>
            </span>
            <span className="hm-solutions__card-footer">
              <button
                className="swui-link swui-link--brand swui-link--secondary hm-solutions__card-button"
                type="button"
              >
                Learn more
                <span className="swui-link__no-break" />
                <svg
                  className="swui-link__arrow"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M3 7.375h7.606L7.112 3.881 8 3l5 5-5 5-.881-.881 3.487-3.494H3v-1.25Z" />
                </svg>
              </button>
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
}
