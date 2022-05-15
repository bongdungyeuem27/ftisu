import React, { useEffect, useState, useCallback, useRef } from "react";
import "./MyChart.css";
import CanvasJSReact from "../../../common/canvasjs/canvasjs.react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function Index() {
  const [options, setOptions] = useState(
    {
      animationEnabled: true,
      exportEnabled: true,
      height: 450,
      zoomEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      // title:{
      //   text: "Bounce Rate by Week of Year"
      // },
      axisY: {
        // title: "Bounce Rate",
        includeZero: false,
        suffix: "%",
      },
      axisX: {
        // title: "Week of Year",
        prefix: "W",
        interval: 2,
      },
      data: [
        {
          type: "line",
          toolTipContent: "Week {x}: {y}%",
          dataPoints: [
            { x: 1, y: 64 },
            { x: 2, y: 61 },
            { x: 3, y: 64 },
            { x: 4, y: 62 },
            { x: 5, y: 64 },
            { x: 6, y: 60 },
            { x: 7, y: 58 },
            { x: 8, y: 59 },
            { x: 9, y: 53 },
            { x: 10, y: 54 },
            { x: 11, y: 61 },
            { x: 12, y: 60 },
            { x: 13, y: 55 },
            { x: 14, y: 60 },
            { x: 15, y: 56 },
            { x: 16, y: 60 },
            { x: 17, y: 59.5 },
            { x: 18, y: 63 },
            { x: 19, y: 58 },
            { x: 20, y: 54 },
            { x: 21, y: 59 },
            { x: 22, y: 64 },
            { x: 23, y: 59 },
          ],
        },
      ],
    }
  );
  const horizontalToolBarRef = useRef(null);
  const coverCanvasRef = useRef(null);
  // const [coverCanvasHeight, setcoverCanvasHeight] = useState(options.height);
  const screen1 = useFullScreenHandle();
  const [fullScreen, setFullScreen] = useState(false);
  const reportChange = useCallback(
    (state, handle) => {
      if (handle === screen1) {
        
        options.height = coverCanvasRef?.current?.clientHeight-horizontalToolBarRef?.current?.clientHeight;
        
        setOptions({...options});
        console.log(options);
        setFullScreen(state);
      }
    },
    [screen1]
  );

  return (
    <FullScreen handle={screen1} onChange={reportChange} >
      <div
        className="bc-interactive-chart" 
        data-ng-class="{'full-screen': fullScreen, 'dashboard': dashboardMode, 'full-tab-screen': fullTabScreen, 'grid-enabled': gridEnabled, 'flipchart-mode': flipChartMode}"
      >
        <div className="bc-interactive-chart__wrapper" ref={coverCanvasRef}>

                  <div className="bc-interactive-chart__mobile-toolbar js-bc-interactive-chart__mobile-toolbar show-for-small-down" ref={horizontalToolBarRef}>
                    <form className="bc-interactive-chart__symbol-selector bc-form ng-pristine ng-valid ng-isolate-scope">
                      <div className="bc-interactive-chart__symbol-selector-fieldset">
                        <input
                          type="submit"
                          defaultValue="Go"
                          className="bc-button light-blue"
                          data-ng-hide="fullScreen"
                        />
                        <input
                          type="text"
                          className="js-interactive-chart-symbol-selector-input ng-pristine ng-untouched ng-valid"
                        />
                      </div>
                    </form>

                    <div className="quick-settings ng-isolate-scope">
                      <ul
                        className="quick-settings-list"
                        data-ng-show="!asSelectList"
                      >
                        <li className="ng-binding ng-scope active">1D</li>
                        <li className="ng-binding ng-scope ">1D</li>
                        <li className="ng-binding ng-scope ">1D</li>
                        <li className="ng-binding ng-scope ">1D</li>
                        <li className="ng-binding ng-scope ">1D</li>
                      </ul>
                      <div
                        className="bc-dropdown styled interactive-chart__apply-period-drop-down ng-hide"
                        data-ng-show="asSelectList"
                      >
                        <select
                          aria-label="select period"
                          data-ng-model="period"
                          data-ng-change="applyQuickSettings(period)"
                          data-ng-options="item as item.label.desktop for item in quickPeriods"
                          className="ng-pristine ng-untouched ng-valid"
                        >
                          <option
                            value="object:164"
                            label="1D"
                            selected="selected"
                          >
                            1D
                          </option>
                          <option value="object:165" label="5D">
                            5D
                          </option>
                          <option value="object:166" label="1M">
                            1M
                          </option>
                          <option value="object:167" label="3M">
                            3M
                          </option>
                          <option value="object:168" label="6M">
                            6M
                          </option>
                          <option value="object:169" label="9M">
                            9M
                          </option>
                          <option value="object:170" label="1Y">
                            1Y
                          </option>
                          <option value="object:171" label="2Y">
                            2Y
                          </option>
                          <option value="object:172" label="3Y">
                            3Y
                          </option>
                          <option value="object:173" label="5Y">
                            5Y
                          </option>
                          <option value="object:174" label="10Y">
                            10Y
                          </option>
                          <option value="object:175" label="20Y">
                            20Y
                          </option>
                          <option value="object:176" label="MAX">
                            MAX
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="right ">
                      <div
                        className="tools-sidebar-horizontal ng-scope cwgaxb-0 iOPuHO"
                        data-tabs="true"
                      >
                        <ul
                          className="react-tabs__tab-list-horizontal"
                          role="tablist"
                        >
                          {fullScreen ? (
                            <li
                              className="react-tabs__tab-horizontal"
                              role="tab"
                              id="react-tabs-0"
                              aria-selected="true"
                              aria-disabled="false"
                              aria-controls="react-tabs-1"
                              tabIndex={0}
                              onClick={screen1.exit}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1"
                              >
                                {/* Uploaded to SVGRepo https://www.svgrepo.com */}

                                <g
                                  id="🔍-Product-Icons"
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    id="ic_fluent_full_screen_zoom_24_regular"
                                    fill="#212121"
                                    fillRule="nonzero"
                                  >
                                    <path
                                      d="M16.25,15.5 L20.25,15.5 C20.6642136,15.5 21,15.8357864 21,16.25 C21,16.6296958 20.7178461,16.943491 20.3517706,16.9931534 L20.25,17 L17,17 L17,20.25 C17,20.6642136 16.6642136,21 16.25,21 C15.8703042,21 15.556509,20.7178461 15.5068466,20.3517706 L15.5,20.25 L15.5,16.25 C15.5,15.8703042 15.7821539,15.556509 16.1482294,15.5068466 L16.25,15.5 L20.25,15.5 L16.25,15.5 Z M3.75,15.5 L7.75,15.5 C8.12969577,15.5 8.44349096,15.7821539 8.49315338,16.1482294 L8.5,16.25 L8.5,20.25 C8.5,20.6642136 8.16421356,21 7.75,21 C7.37030423,21 7.05650904,20.7178461 7.00684662,20.3517706 L7,20.25 L7,17 L3.75,17 C3.33578644,17 3,16.6642136 3,16.25 C3,15.8703042 3.28215388,15.556509 3.64822944,15.5068466 L3.75,15.5 L7.75,15.5 L3.75,15.5 Z M7.75,3 C8.12969577,3 8.44349096,3.28215388 8.49315338,3.64822944 L8.5,3.75 L8.5,7.75 C8.5,8.12969577 8.21784612,8.44349096 7.85177056,8.49315338 L7.75,8.5 L3.75,8.5 C3.33578644,8.5 3,8.16421356 3,7.75 C3,7.37030423 3.28215388,7.05650904 3.64822944,7.00684662 L3.75,7 L7,7 L7,3.75 C7,3.33578644 7.33578644,3 7.75,3 Z M16.25,3 C16.6296958,3 16.943491,3.28215388 16.9931534,3.64822944 L17,3.75 L17,7 L20.25,7 C20.6642136,7 21,7.33578644 21,7.75 C21,8.12969577 20.7178461,8.44349096 20.3517706,8.49315338 L20.25,8.5 L16.25,8.5 C15.8703042,8.5 15.556509,8.21784612 15.5068466,7.85177056 L15.5,7.75 L15.5,3.75 C15.5,3.33578644 15.8357864,3 16.25,3 Z"
                                      id="🎨-Color"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </li>
                          ) : (
                            <li
                              className="react-tabs__tab-horizontal"
                              role="tab"
                              id="react-tabs-0"
                              aria-selected="true"
                              aria-disabled="false"
                              aria-controls="react-tabs-1"
                              tabIndex={0}
                              onClick={screen1.enter}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 28 28"
                                width="28"
                                height="28"
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"
                                ></path>
                              </svg>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

       
          {/* end ngIf: currentChartSettings && !readOnlyMode */}
          {/*<div id="bc-interactive-chart__chart-container-tooltip" data-ng-show="currentChartSettings.settings.tooltip.mode === 'cards' && !gridEnabled"></div>*/}
          <div className="tool_and_chart-reduce d-flex flex-row justify-content-between"  >
            {/* ngIf: showDrawingsPanel && !isMobileOnly && !flipChartMode && !gridEnabled */}
            <div
              className="tools-sidebar ng-scope cwgaxb-0 iOPuHO"
              data-tabs="true"
            >
              <ul className="react-tabs__tab-list" role="tablist">
                <li
                  className="react-tabs__tab react-tabs__tab--selected"
                  role="tab"
                  id="react-tabs-0"
                  aria-selected="true"
                  aria-disabled="false"
                  aria-controls="react-tabs-1"
                  tabIndex={0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                  >
                    <g fill="currentColor">
                      <path d="M18 15h8v-1h-8z"></path>
                      <path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z"></path>
                    </g>
                  </svg>
                </li>
                <li
                  className="react-tabs__tab"
                  role="tab"
                  id="react-tabs-2"
                  aria-selected="false"
                  aria-disabled="false"
                  aria-controls="react-tabs-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                  >
                    <g fill="currentColor" fill-rule="nonzero">
                      <path d="M7.354 21.354l14-14-.707-.707-14 14z"></path>
                      <path d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
                    </g>
                  </svg>
                </li>
                <li
                  className="react-tabs__tab"
                  role="tab"
                  id="react-tabs-4"
                  aria-selected="false"
                  aria-disabled="false"
                  aria-controls="react-tabs-5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                  >
                    <g fill="currentColor" fill-rule="nonzero">
                      <path d="M3 5h22v-1h-22z"></path>
                      <path d="M3 17h22v-1h-22z"></path>
                      <path d="M3 11h19.5v-1h-19.5z"></path>
                      <path d="M5.5 23h19.5v-1h-19.5z"></path>
                      <path d="M3.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM24.5 12c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
                    </g>
                  </svg>
                </li>
                <li
                  className="react-tabs__tab"
                  role="tab"
                  id="react-tabs-6"
                  aria-selected="false"
                  aria-disabled="false"
                  aria-controls="react-tabs-7"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                  >
                    <g fill="currentColor" fill-rule="nonzero">
                      <path d="M1.789 23l.859-.854.221-.228c.18-.19.38-.409.597-.655.619-.704 1.238-1.478 1.815-2.298.982-1.396 1.738-2.776 2.177-4.081 1.234-3.667 5.957-4.716 8.923-1.263 3.251 3.785-.037 9.38-5.379 9.38h-9.211zm9.211-1c4.544 0 7.272-4.642 4.621-7.728-2.45-2.853-6.225-2.015-7.216.931-.474 1.408-1.273 2.869-2.307 4.337-.599.852-1.241 1.653-1.882 2.383l-.068.078h6.853z"></path>
                      <path d="M18.182 6.002l-1.419 1.286c-1.031.935-1.075 2.501-.096 3.48l1.877 1.877c.976.976 2.553.954 3.513-.045l5.65-5.874-.721-.693-5.65 5.874c-.574.596-1.507.609-2.086.031l-1.877-1.877c-.574-.574-.548-1.48.061-2.032l1.419-1.286-.672-.741z"></path>
                    </g>
                  </svg>
                </li>
                <li
                  className="react-tabs__tab"
                  role="tab"
                  id="react-tabs-8"
                  aria-selected="false"
                  aria-disabled="false"
                  aria-controls="react-tabs-9"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                  >
                    <g fill="currentColor" fill-rule="nonzero">
                      <path d="M20.449 8.505l2.103 9.112.974-.225-2.103-9.112zM13.943 14.011l7.631 4.856.537-.844-7.631-4.856zM14.379 11.716l4.812-3.609-.6-.8-4.812 3.609zM10.96 13.828l-4.721 6.744.819.573 4.721-6.744zM6.331 20.67l2.31-13.088-.985-.174-2.31 13.088zM9.041 7.454l1.995 3.492.868-.496-1.995-3.492z"></path>
                      <path d="M8.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12.5 14c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM20.5 8c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM23.5 21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
                    </g>
                  </svg>
                </li>
                <li
                  className="react-tabs__tab"
                  role="tab"
                  id="react-tabs-10"
                  aria-selected="false"
                  aria-disabled="false"
                  aria-controls="react-tabs-11"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 6.5A2.5 2.5 0 0 1 6.95 6H24v1H6.95A2.5 2.5 0 0 1 2 6.5zM4.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 16.5a2.5 2.5 0 0 1 4.95-.5h13.1a2.5 2.5 0 1 1 0 1H6.95A2.5 2.5 0 0 1 2 16.5zM22.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-18 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2 22.5a2.5 2.5 0 0 1 4.95-.5H24v1H6.95A2.5 2.5 0 0 1 2 22.5z"
                    ></path>
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.4 8.94l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.39.63-.41-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91zm-4 1.8l-1.4.63-.4-.91 1.39-.63.41.91z"
                    ></path>
                  </svg>
                </li>
                <li
                  className="react-tabs__tab"
                  role="tab"
                  id="react-tabs-12"
                  aria-selected="false"
                  aria-disabled="false"
                  aria-controls="react-tabs-13"
                >
                  ALL
                </li>
              </ul>
            </div>

            <CanvasJSChart
              options={options}
              /* onRef={ref => this.chart = ref} */
            />
          </div>
        </div>
      </div>
    </FullScreen>
  );
  
}
