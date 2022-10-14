import React, { useState, useEffect } from "react";
import "./ShowLanguage.css";
import MyModal from "../MyModal";
import * as languages from "../../Redux/constrants/languageConst";
import { useSelector, useDispatch } from "react-redux";
import * as languageConst from "../../Redux/constrants/languageConst";
import * as languageAct from "../../Redux/actions/languageAct";
import { LANGUAGES } from "../../Redux/constrants/languageConst";

export default function ShowLanguageMobile(props) {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const changeLanguage = (lang) => {
    dispatch(languageAct.changeLanguageReport(lang));
  };

  const [keywords, setKeywords] = useState();
  useEffect(() => {
    import(
      `./keyword/${LANGUAGES.find((x) => x.key === language).value}/showLanguage.js`
    )
      .then((res) => {
        setKeywords(res.default);
      })
      .catch((rej) => {
        console.log(rej);
        setKeywords(undefined);
      });
  },[language])
  return (
    <MyModal
      toggle={props.toggle}
      style={{
        maxWidth: "unset",
        width: window.innerWidth > 991 ? "500px" : "100%",
        height: window.innerWidth > 991 ? "unset" : "100%",
      }}
      title={keywords?._select_language}
      render={
        <div className="XuJWe ">
          <div className="">
            <form className="bvgmfz-0 glLXAQ">
              <div className="fvnhew-0 iPvcpq cmc-input-group jBaqVU">
                <input
                  placeholder={keywords?._find}
                  autoComplete="off"
                  spellCheck="false"
                  className="ykm2vq-1 fAWiaZ cmc-input"
                ></input>
                <span className="cmc-icon__wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="16px"
                    width="16px"
                    viewBox="0 0 24 24"
                    className="sc-16r8icm-0 coGWQa cmc-icon"
                    pointerEvents="none"
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
                </span>
              </div>
            </form>
            <div className="sc-1cm3a78-0 dsmLjZ">
              <div className="sc-1b4wplq-3 eSrHmB">
                <p>{keywords?._popular_language}</p>
                {languages.LANGUAGES.map((value, i) => {
                  return (
                    <div key={i} className="rz95fb-3 rz95fb-4 YsYKS">
                      <span
                        className="cmc-language-picker__option"
                        onClick={() => {
                          changeLanguage(value.key)
                        }}
                      >
                        {value.name} &nbsp;<span>{value.value}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      }
    ></MyModal>
  );
}
