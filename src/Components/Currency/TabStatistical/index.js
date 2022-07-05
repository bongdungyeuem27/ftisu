import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../common/helper/number";
import { dynamicString } from "../../../common/helper/string";

export default memo(function Index(props) {
  // const { currency } = useParams();
  const fiat = useSelector((state) => state.fiat.fiat);

  // const [fiatSign, setFiatSign] = useState(FIATS.find((x) => x.key === fiat).sign);

  const [showMore, setShowMore] = useState(false);

  return (
    props.dataCoinApi.AggregatedData && (
      <div className="sc-16r8icm-0 hgKnTV">
        <div className="sc-16r8icm-0 nds9rn-0 dAxhCK">
          <h2 color="text" className="sc-1q9q90x-0 bjfmoe">
            BTC Thống kê giá
          </h2>
          <div
            itemScope
            itemType="https://schema.org/Table"
            className="sc-16r8icm-0 fmPyWa"
          >
            <table>
              <caption itemProp="about">
                {dynamicString(props.keywords?._price, {
                  crypto: props.cryptoObject?.name,
                })}
              </caption>
              <tbody>
                <tr>
                  <th scope="row">
                    <strong>
                      {" "}
                      {dynamicString(props.keywords?._price, {
                        crypto: props.cryptoObject?.name,
                      })}
                    </strong>
                  </th>
                  <td>
                    {props.fiatObject?.sign}
                    {numberWithCommas(props.currentPrice)}
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="nds9rn-1 hhqaJP">
                      {props.keywords._change_price_24h}<span className="badge24h">24h</span>
                    </span>
                  </th>
                  <td>
                    <span>
                      {props.fiatObject?.sign}
                      {numberWithCommas(
                        Math.round(props.dataCoinApi.AggregatedData?.CHANGE24HOUR * 100) / 100
                      )}
                    </span>
                    <div>
                      <span
                        className="sc-15yy2pl-0 kAXKAX"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                      >
                        <span className="icon-Caret-up" />
                        {numberWithCommas(
                          Math.round(
                            (props.dataCoinApi.AggregatedData?.CHANGE24HOUR /
                              props.dataCoinApi.AggregatedData.OPEN24HOUR) *
                              100 *
                              100
                          ) / 100
                        )}
                        %
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{props.keywords._24h_low}/ {props.keywords._24h_high}</th>
                  <td>
                    <div>
                      {props.fiatObject?.sign}
                      {numberWithCommas(props.dataCoinApi.AggregatedData?.LOW24HOUR)} /
                    </div>
                    <div>
                      {props.fiatObject?.sign}
                      {numberWithCommas(props.dataCoinApi.AggregatedData?.HIGH24HOUR)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="nds9rn-1 hhqaJP">
                      {props.keywords._volume}
                      <span className="badge24h">24h</span>
                    </span>
                  </th>
                  <td>
                    <span>
                      {props.fiatObject?.sign}
                      {numberWithCommas(
                        Math.round(props.dataCoinApi.AggregatedData.VOLUME24HOURTO * 100) / 100
                      )}
                    </span>
                    <div>
                      <span
                        className="sc-15yy2pl-0 kAXKAX"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                      >
                        <span className="icon-Caret-up" />
                        17.91%
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">{props.keywords._market_cap}</th>
                  <td>0.04113</td>
                </tr>
                <tr>
                  <th scope="row">{props.keywords._rank}</th>
                  <td>#1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            itemScope
            itemType="https://schema.org/Table"
            className="sc-16r8icm-0 fmPyWa"
          >
            <table>
              <caption itemProp="about">Vốn hóa thị trường của Bitcoin</caption>
              <tbody>
                <tr>
                  <th scope="row">Vốn hóa thị trường</th>
                  <td>
                    <span>{props.fiatObject?.sign}852,843,392,000.53</span>
                    <div>
                      <span
                        className="sc-15yy2pl-0 kAXKAX"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                      >
                        <span className="icon-Caret-up" />
                        4.35%
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Vốn hóa thị trường được pha loãng hoàn toàn
                  </th>
                  <td>
                    <span>{props.fiatObject?.sign}942,940,851,542.03</span>
                    <div>
                      <span
                        className="sc-15yy2pl-0 kAXKAX"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                      >
                        <span className="icon-Caret-up" />
                        4.34%
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={showMore?"sc-16r8icm-0 kjciSH":"sc-16r8icm-0 kjciSH hide"}>
            <div
              itemScope
              itemType="https://schema.org/Table"
              className="sc-16r8icm-0 fmPyWa"
            >
              <table>
                <caption itemProp="about">Bitcoin Giá ngày hôm qua</caption>
                <tbody>
                  <tr>
                    <th scope="row">Thấp / Cao của hôm qua</th>
                    <td>
                      <div>{props.fiatObject?.sign}42,726.16 /</div>
                      <div>{props.fiatObject?.sign}44,131.85</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Mức giá Mở/Đóng cửa của ngày hôm qua</th>
                    <td>
                      <div>{props.fiatObject?.sign}42,886.65 /</div>
                      <div>{props.fiatObject?.sign}43,960.93</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Biến động của ngày hôm qua</th>
                    <td>
                      <div className="sc-16r8icm-0 sc-1siv958-0 kUSSuI">
                        <p
                          color="green"
                          fontSize={1}
                          className="sc-1eb5slv-0 sc-1siv958-1 jnWaEv"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            height="14px"
                            width="14px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 dWGZqy"
                          >
                            <path d="M18.0566 16H5.94336C5.10459 16 4.68455 14.9782 5.27763 14.3806L11.3343 8.27783C11.7019 7.90739 12.2981 7.90739 12.6657 8.27783L18.7223 14.3806C19.3155 14.9782 18.8954 16 18.0566 16Z" />
                          </svg>
                          2.5%
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Khối lượng giao dịch của ngày hôm qua</th>
                    <td>{props.fiatObject?.sign}31,042,992,291.34</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              itemScope
              itemType="https://schema.org/Table"
              className="sc-16r8icm-0 fmPyWa"
            >
              <table>
                <caption itemProp="about">Bitcoin Lịch sử giá cả</caption>
                <tbody>
                  <tr>
                    <th scope="row">Thấp 7 ngày / Cao 7 ngày</th>
                    <td>
                      <div>{props.fiatObject?.sign}40,668.04 /</div>
                      <div>{props.fiatObject?.sign}44,999.49</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Thấp 30 ngày / Cao 30 ngày</th>
                    <td>
                      <div>{props.fiatObject?.sign}34,459.22 /</div>
                      <div>{props.fiatObject?.sign}45,077.58</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Thấp 90 ngày / Cao 90 ngày</th>
                    <td>
                      <div>{props.fiatObject?.sign}33,184.06 /</div>
                      <div>{props.fiatObject?.sign}51,956.33</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Thấp 52 tuần / Cao 52 tuần</th>
                    <td>
                      <div>{props.fiatObject?.sign}28,893.62 /</div>
                      <div>{props.fiatObject?.sign}68,789.63</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>Mức giá cao nhất lịch sử</div>
                      <small className="nds9rn-2 hhPSEo">
                        Nov 10, 2021 (4 months ago)
                      </small>
                    </th>
                    <td>
                      <span>{props.fiatObject?.sign}68,789.63</span>
                      <div>
                        <span
                          className="sc-15yy2pl-0 hzgCfk"
                          style={{ fontSize: "12px", fontWeight: 600 }}
                        >
                          <span className="icon-Caret-down" />
                          34.73%
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>Mức giá thấp nhất lịch sử</div>
                      <small className="nds9rn-2 hhPSEo">
                        Jul 05, 2013 (9 years ago)
                      </small>
                    </th>
                    <td>
                      <span>{props.fiatObject?.sign}65.53</span>
                      <div>
                        <span
                          className="sc-15yy2pl-0 kAXKAX"
                          style={{ fontSize: "12px", fontWeight: 600 }}
                        >
                          <span className="icon-Caret-up" />
                          68425.39%
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      ROI của Bitcoin
                      <div className="n6mnj0-0 gPSlsu cmc-helper">
                        <div className="sc-1i7rbm6-0 bBCjQm cmc-popover">
                          <div className="cmc-popover__trigger">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              height="16px"
                              width="16px"
                              viewBox="0 0 24 24"
                              className="sc-16r8icm-0 cLpIEB cmc-icon"
                            >
                              <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433283 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V0ZM10 15.28L9.902 15.3H9.702C9.642 15.288 9.582 15.278 9.524 15.262C9.25995 15.1929 9.0307 15.0288 8.8802 14.8011C8.7297 14.5734 8.66854 14.2981 8.70844 14.0281C8.74835 13.7581 8.88651 13.5123 9.09644 13.3379C9.30638 13.1635 9.57331 13.0726 9.84606 13.0829C10.1188 13.0931 10.3782 13.2036 10.5745 13.3933C10.7707 13.583 10.8901 13.8384 10.9097 14.1107C10.9293 14.3829 10.8477 14.6528 10.6805 14.8686C10.5134 15.0844 10.2725 15.2309 10.004 15.28H10ZM13.2 8.018C13.0859 8.38607 12.8872 8.72235 12.62 9C12.3143 9.306 11.9794 9.58131 11.62 9.822C11.42 9.96 11.242 10.104 11.054 10.248C10.8839 10.3886 10.7559 10.5734 10.684 10.782C10.644 10.89 10.598 10.998 10.556 11.106C10.5045 11.2496 10.4101 11.374 10.2856 11.4624C10.1612 11.5507 10.0126 11.5987 9.86 11.6C9.68722 11.619 9.51251 11.5913 9.354 11.52C9.234 11.4614 9.13001 11.3745 9.05094 11.2669C8.97187 11.1592 8.92008 11.034 8.9 10.902C8.86845 10.7182 8.8734 10.53 8.91458 10.3481C8.95576 10.1663 9.03236 9.99427 9.14 9.842C9.31308 9.58899 9.52502 9.3649 9.768 9.178C10.03 8.964 10.3 8.76 10.568 8.546C10.7904 8.37577 10.9767 8.16297 11.116 7.92C11.2242 7.71385 11.2687 7.48018 11.2437 7.2487C11.2188 7.01723 11.1256 6.79838 10.976 6.62C10.8174 6.44709 10.6068 6.33055 10.376 6.288C10.0688 6.21628 9.74858 6.22178 9.444 6.304C9.2878 6.34666 9.14254 6.42228 9.018 6.52578C8.89346 6.62927 8.79253 6.75824 8.722 6.904C8.628 7.08 8.546 7.26 8.458 7.438C8.39346 7.5726 8.30618 7.69507 8.2 7.8C8.10796 7.88085 8.00028 7.94193 7.88365 7.97943C7.76702 8.01693 7.64392 8.03006 7.522 8.018C7.37212 8.0141 7.22535 7.97432 7.094 7.902C6.97306 7.83944 6.87173 7.74472 6.80115 7.62827C6.73058 7.51182 6.6935 7.37816 6.694 7.242C6.68377 6.80031 6.82491 6.36841 7.094 6.018C7.4051 5.59747 7.81804 5.26299 8.294 5.046C8.65301 4.87561 9.03738 4.76483 9.432 4.718L9.656 4.696H10.056L10.272 4.716C10.8068 4.74974 11.3302 4.88552 11.814 5.116C12.2461 5.31493 12.6145 5.62997 12.878 6.026C13.0787 6.33792 13.2028 6.69294 13.24 7.062C13.2941 7.37993 13.2804 7.70569 13.2 8.018Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="sc-16r8icm-0 sc-1siv958-0 kUSSuI">
                        <p
                          color="green"
                          fontSize={1}
                          className="sc-1eb5slv-0 sc-1siv958-1 jnWaEv"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            height="14px"
                            width="14px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 dWGZqy"
                          >
                            <path d="M18.0566 16H5.94336C5.10459 16 4.68455 14.9782 5.27763 14.3806L11.3343 8.27783C11.7019 7.90739 12.2981 7.90739 12.6657 8.27783L18.7223 14.3806C19.3155 14.9782 18.8954 16 18.0566 16Z" />
                          </svg>
                          33086.95%
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              itemScope
              itemType="https://schema.org/Table"
              className="sc-16r8icm-0 fmPyWa"
            >
              <table>
                <caption itemProp="about">Bitcoin Cung cấp</caption>
                <tbody>
                  <tr>
                    <th scope="row">Lượng cung lưu hành</th>
                    <td>18.993.462 BTC</td>
                  </tr>
                  <tr>
                    <th scope="row">Tổng cung</th>
                    <td>18.993.462 BTC</td>
                  </tr>
                  <tr>
                    <th scope="row">Tổng cung tối đa</th>
                    <td>21.000.000 BTC</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button onClick={()=>setShowMore(!showMore)} className="x0o17e-0 dDXPcp">{showMore?props.keywords._show_less:props.keywords._show_more}</button>
        </div>
      </div>
    )
  );
});
