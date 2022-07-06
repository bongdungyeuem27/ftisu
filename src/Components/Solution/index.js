import React, { useState, useRef, useEffect } from "react";
import "./solution.css";
import { useSelector } from "react-redux";
import { LANGUAGES } from "../../Redux/constrants/languageConst";
import blockchain from "./images/blockchain.png";
import forecast from "./images/forecast.png";
import { Link } from "react-router-dom"

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

       
        </div>
      </div>
    </div>
  );
}
