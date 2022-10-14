import React, { useEffect, useState } from "react";
import MyModal from "../MyModal";
import { useSelector } from "react-redux";
import { LANGUAGES } from "../../Redux/constrants/languageConst";

export default function SelectCurrency(props) {
  const language = useSelector((state) => state.language.language);
  const [keywords, setKeywords] = useState();
  useEffect(() => {
    import(
      `./keyword/${
        LANGUAGES.find((x) => x.key === language).value
      }/selectCurrency.js`
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
    <MyModal
      toggle={props.toggle}
      style={{ maxWidth: "unset", width: "848px" }}
      title={keywords?._select_currency}
      render={
        <div className="t8xka3-2 kYhtXZ has-title ">
          <div className="sc-16r8icm-0 dVOSSi">
            <div className="sc-1xqzaso-0 jBaqVU">
              <form>
                <div className="sc-1xy5r5m-3 jeWXNT">
                  <div className="sc-1xy5r5m-0 cmxLuQ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height="18px"
                      width="18px"
                      viewBox="0 0 24 24"
                      color="neutral4"
                      className="sc-16r8icm-0 fAFbeI"
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
                  </div>
                  <input
                    placeholder={keywords?._find}
                    autoComplete="off"
                    spellCheck="false"
                    type="text"
                    className="cxm5lu-0 sc-1xy5r5m-2 bNLAbY"
                  />
                </div>
              </form>
            </div>
            <div className="sc-1cm3a78-0 dsmLjZ">
              <div className="sc-1bafwtq-2 eTKrlv">
                <p>{keywords?._popular_language}</p>
                <div className="group-list">
                  <div className="rz95fb-3 rz95fb-5 gqwalg selected">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hrTIGz" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          United States Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          USD - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                        className="sc-16r8icm-0 eVwNUa"
                        style={{ color: "rgb(22, 199, 132)" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7557 9.65493C17.1174 9.23758 17.0723 8.60602 16.6549 8.24431C16.2376 7.8826 15.606 7.92771 15.2443 8.34507L10.8 13.4731L8.75569 11.1143C8.39398 10.6969 7.76242 10.6518 7.34507 11.0135C6.92771 11.3752 6.8826 12.0068 7.24431 12.4242L10.0443 15.6549C10.2343 15.8741 10.51 16 10.8 16C11.09 16 11.3657 15.8741 11.5557 15.6549L16.7557 9.65493Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 jvTXlT" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">Euro</span>
                        <span className="cmc-currency-picker--label">
                          EUR - €
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 imwcIM" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Pound Sterling
                        </span>
                        <span className="cmc-currency-picker--label">
                          GBP - £
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hyRQGi" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Bitcoin
                        </span>
                        <span className="cmc-currency-picker--label">BTC</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hqzkLz" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Ethereum
                        </span>
                        <span className="cmc-currency-picker--label">ETH</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                </div>
              </div>
              <div className="sc-1bafwtq-2 eTKrlv">
                <p>Đơn vị Bitcoin</p>
                <div className="group-list">
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bqtHdf" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">Bits</span>
                        <span className="cmc-currency-picker--label">BITS</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 jMhQYi" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Satoshi
                        </span>
                        <span className="cmc-currency-picker--label">SATS</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                </div>
              </div>
              <div className="sc-1bafwtq-2 eTKrlv">
                <p>{keywords?._fiat_currencies}</p>
                <div className="group-list">
                  <div className="rz95fb-3 rz95fb-5 gqwalg selected">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hrTIGz" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          United States Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          USD - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                        className="sc-16r8icm-0 eVwNUa"
                        style={{ color: "rgb(22, 199, 132)" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7557 9.65493C17.1174 9.23758 17.0723 8.60602 16.6549 8.24431C16.2376 7.8826 15.606 7.92771 15.2443 8.34507L10.8 13.4731L8.75569 11.1143C8.39398 10.6969 7.76242 10.6518 7.34507 11.0135C6.92771 11.3752 6.8826 12.0068 7.24431 12.4242L10.0443 15.6549C10.2343 15.8741 10.51 16 10.8 16C11.09 16 11.3657 15.8741 11.5557 15.6549L16.7557 9.65493Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 ktdjmR" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Australian Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          AUD - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kbLbnt" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Brazilian Real
                        </span>
                        <span className="cmc-currency-picker--label">
                          BRL - R$
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 dhkAfz" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Canadian Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          CAD - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 dlfobI" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Swiss Franc
                        </span>
                        <span className="cmc-currency-picker--label">
                          CHF - Fr
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 fCsakC" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Chilean Peso
                        </span>
                        <span className="cmc-currency-picker--label">
                          CLP - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 imBsvR" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Chinese Yuan
                        </span>
                        <span className="cmc-currency-picker--label">
                          CNY - ¥
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 btKJob" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Czech Koruna
                        </span>
                        <span className="cmc-currency-picker--label">
                          CZK - Kč
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kkpKMh" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Danish Krone
                        </span>
                        <span className="cmc-currency-picker--label">
                          DKK - kr
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 jvTXlT" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">Euro</span>
                        <span className="cmc-currency-picker--label">
                          EUR - €
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 imwcIM" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Pound Sterling
                        </span>
                        <span className="cmc-currency-picker--label">
                          GBP - £
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 iVxLBq" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Hong Kong Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          HKD - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bSXbWW" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Hungarian Forint
                        </span>
                        <span className="cmc-currency-picker--label">
                          HUF - Ft
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kkZWjq" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Indonesian Rupiah
                        </span>
                        <span className="cmc-currency-picker--label">
                          IDR - Rp
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hBeSan" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Israeli New Shekel
                        </span>
                        <span className="cmc-currency-picker--label">
                          ILS - ₪
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kGKLHQ" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Indian Rupee
                        </span>
                        <span className="cmc-currency-picker--label">
                          INR - ₹
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 dcKbca" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Japanese Yen
                        </span>
                        <span className="cmc-currency-picker--label">
                          JPY - ¥
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 ifaBRP" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          South Korean Won
                        </span>
                        <span className="cmc-currency-picker--label">
                          KRW - ₩
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bISOXS" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Mexican Peso
                        </span>
                        <span className="cmc-currency-picker--label">
                          MXN - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bzsecv" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Malaysian Ringgit
                        </span>
                        <span className="cmc-currency-picker--label">
                          MYR - RM
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kxoseb" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Norwegian Krone
                        </span>
                        <span className="cmc-currency-picker--label">
                          NOK - kr
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 fWmrZF" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          New Zealand Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          NZD - $
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 dtdIWZ" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Philippine Peso
                        </span>
                        <span className="cmc-currency-picker--label">
                          PHP - ₱
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 cdUsdw" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Pakistani Rupee
                        </span>
                        <span className="cmc-currency-picker--label">
                          PKR - ₨
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hchXnv" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Polish Złoty
                        </span>
                        <span className="cmc-currency-picker--label">
                          PLN - zł
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 fwosSo" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Russian Ruble
                        </span>
                        <span className="cmc-currency-picker--label">
                          RUB - ₽
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kRPzxk" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Swedish Krona
                        </span>
                        <span className="cmc-currency-picker--label">
                          SEK - kr
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 eWCfCR" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Singapore Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          SGD - S$
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bxcnzH" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Thai Baht
                        </span>
                        <span className="cmc-currency-picker--label">
                          THB - ฿
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hJqYLa" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Turkish Lira
                        </span>
                        <span className="cmc-currency-picker--label">
                          TRY - ₺
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hPMXBq" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          New Taiwan Dollar
                        </span>
                        <span className="cmc-currency-picker--label">
                          TWD - NT$
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 cmsUYk" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          South African Rand
                        </span>
                        <span className="cmc-currency-picker--label">
                          ZAR - R
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 csfnt" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Vietnamese Dong
                        </span>
                        <span className="cmc-currency-picker--label">
                          VND - ₫
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kZyoDV" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Moroccan Dirham
                        </span>
                        <span className="cmc-currency-picker--label">
                          MAD - MAD
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 jbvHjo" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Iranian Rial
                        </span>
                        <span className="cmc-currency-picker--label">
                          IRR - IRR
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 ksXryR" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Argentine Peso
                        </span>
                        <span className="cmc-currency-picker--label">
                          ARS - ARS
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hKJsW" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Romanian Leu
                        </span>
                        <span className="cmc-currency-picker--label">
                          RON - RON
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 cgtgbt" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Ukrainian Hryvnia
                        </span>
                        <span className="cmc-currency-picker--label">
                          UAH - UAH
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 gFFGbO" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Nigerian Naira
                        </span>
                        <span className="cmc-currency-picker--label">
                          NGN - NGN
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bbyZHx" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          United Arab Emirates Dirham
                        </span>
                        <span className="cmc-currency-picker--label">
                          AED - AED
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 cVSwnJ" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Colombian Peso
                        </span>
                        <span className="cmc-currency-picker--label">
                          COP - COP
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 cxFRKP" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Egyptian Pound
                        </span>
                        <span className="cmc-currency-picker--label">
                          EGP - EGP
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 fcdRDN" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Saudi Riyal
                        </span>
                        <span className="cmc-currency-picker--label">
                          SAR - SAR
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 KiMLL" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Bangladeshi Taka
                        </span>
                        <span className="cmc-currency-picker--label">
                          BDT - BDT
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kLjDjJ" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Ghanaian Cedi
                        </span>
                        <span className="cmc-currency-picker--label">
                          GHS - GHS
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 bVpvjS" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Bulgarian Lev
                        </span>
                        <span className="cmc-currency-picker--label">
                          BGN - BGN
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 uUOeR" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Sovereign Bolivar
                        </span>
                        <span className="cmc-currency-picker--label">
                          VES - VES
                        </span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                </div>
              </div>
              <div className="sc-1bafwtq-2 eTKrlv">
                <p>Các loại tiền điện tử</p>
                <div className="group-list">
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hyRQGi" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Bitcoin
                        </span>
                        <span className="cmc-currency-picker--label">BTC</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hqzkLz" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Ethereum
                        </span>
                        <span className="cmc-currency-picker--label">ETH</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 iDxKvw" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Cardano
                        </span>
                        <span className="cmc-currency-picker--label">ADA</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hBGMPg" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Binance Coin
                        </span>
                        <span className="cmc-currency-picker--label">BNB</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hbddjy" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Polkadot
                        </span>
                        <span className="cmc-currency-picker--label">DOT</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 ggLeSU" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">XRP</span>
                        <span className="cmc-currency-picker--label">XRP</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 dJHeDV" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Chainlink
                        </span>
                        <span className="cmc-currency-picker--label">LINK</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kmOmdp" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Litecoin
                        </span>
                        <span className="cmc-currency-picker--label">LTC</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 hrgeDR" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Stellar
                        </span>
                        <span className="cmc-currency-picker--label">XLM</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 gqSfjo" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Bitcoin Cash
                        </span>
                        <span className="cmc-currency-picker--label">BCH</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 kHcdET" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Uniswap
                        </span>
                        <span className="cmc-currency-picker--label">UNI</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 lbzwgc" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Dogecoin
                        </span>
                        <span className="cmc-currency-picker--label">DOGE</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 pWucQ" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Smooth Love Potion
                        </span>
                        <span className="cmc-currency-picker--label">SLP</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                  <div className="rz95fb-3 rz95fb-5 gqwalg">
                    <div className="cmc-currency-picker-option">
                      <span className="cmc-currency-picker--flag">
                        <span className="sc-1q0bpva-0 jVpaud" />
                      </span>
                      <div className="cmc-currency-picker-label-box">
                        <span className="cmc-currency-picker--label">
                          Axie Infinity
                        </span>
                        <span className="cmc-currency-picker--label">AXS</span>
                      </div>
                    </div>
                    <div className="cmc-currency-picker--icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    ></MyModal>
  );
}
