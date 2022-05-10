import React, { useState, useEffect } from "react";
import "./ShowLanguage.css";
import MyModal from "../MyModal";

export default function ShowLanguageMobile(props) {
  return (
    <MyModal
      toggle={props.toggle}
      style={{
        maxWidth: "unset",
        width: window.innerWidth > 991 ? "848px" : "100%",
        height: window.innerWidth > 991 ? "unset" : "100%",
      }}
      title="Chọn ngôn ngữ"
      render={
        <div className="XuJWe ">
          <div className="">
            <form className="bvgmfz-0 glLXAQ">
              <div className="fvnhew-0 iPvcpq cmc-input-group jBaqVU">
                <input
                  placeholder="Tìm kiếm"
                  autoComplete="off"
                  spellCheck="false"
                  className="ykm2vq-1 fAWiaZ cmc-input"
                />
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
                <p>Ngôn ngữ phổ biến</p>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/">
                    English&nbsp;<span>en</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/ru/">
                    Русский&nbsp;<span>ru</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/vi/">
                    Tiếng Việt&nbsp;<span>vi</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/tr/">
                    Türkçe&nbsp;<span>tr</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/es/">
                    Español&nbsp;<span>es</span>
                  </a>
                </div>
              </div>
              <div className="sc-1b4wplq-3 eSrHmB">
                <p>Tất cả ngôn ngữ</p>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/cs/">
                    čeština&nbsp;<span>cs</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/da/">
                    dansk&nbsp;<span>da</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/de/">
                    Deutsch&nbsp;<span>de</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/el/">
                    ελληνικά&nbsp;<span>el</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/">
                    English&nbsp;<span>en</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/es/">
                    Español&nbsp;<span>es</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/fr/">
                    Français&nbsp;<span>fr</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/hi/">
                    हिन्दी&nbsp;<span>hi</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/hu/">
                    magyar&nbsp;<span>hu</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/id/">
                    Bahasa Indonesia&nbsp;<span>id</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/it/">
                    Italiano&nbsp;<span>it</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/ja/">
                    日本語&nbsp;<span>ja</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/ko/">
                    한국어&nbsp;<span>ko</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/nl/">
                    Nederlands&nbsp;<span>nl</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/no/">
                    Norsk&nbsp;<span>no</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/pl/">
                    język polski&nbsp;<span>pl</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/pt-br/">
                    Português Brasil&nbsp;<span>pt-br</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/ro/">
                    Română&nbsp;<span>ro</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/ru/">
                    Русский&nbsp;<span>ru</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/sk/">
                    Slovenčina&nbsp;<span>sk</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/sv/">
                    Svenska&nbsp;<span>sv</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/th/">
                    ไทย&nbsp;<span>th</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/tr/">
                    Türkçe&nbsp;<span>tr</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/uk/">
                    Українська&nbsp;<span>uk</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/vi/">
                    Tiếng Việt&nbsp;<span>vi</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/zh/">
                    简体中文&nbsp;<span>zh</span>
                  </a>
                </div>
                <div className="rz95fb-3 rz95fb-4 YsYKS">
                  <a className="cmc-language-picker__option" href="/zh-tw/">
                    繁體中文&nbsp;<span>zh-tw</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    ></MyModal>
  );
}
