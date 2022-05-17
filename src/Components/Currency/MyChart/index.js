import React, { useEffect, useState, useCallback, useRef } from "react";
import "./MyChart.css";
import CanvasJSReact from "../../../common/canvasjs/canvasjs.react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./TopBar.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Index() {
  const [options, setOptions] = useState({
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
  });
  const horizontalToolBarRef = useRef(null);
  const coverCanvasRef = useRef(null);
  // const [coverCanvasHeight, setcoverCanvasHeight] = useState(options.height);
  const screen1 = useFullScreenHandle();
  const [fullScreen, setFullScreen] = useState(false);
  const reportChange = useCallback(
    (state, handle) => {
      if (handle === screen1) {
        options.height =
          coverCanvasRef?.current?.clientHeight -
          horizontalToolBarRef?.current?.clientHeight;

        setOptions({ ...options });
        setFullScreen(state);
      }
    },
    [screen1]
  );

  return (
    <FullScreen handle={screen1} onChange={reportChange}>
      <div
        className="bc-interactive-chart"
        data-ng-class="{'full-screen': fullScreen, 'dashboard': dashboardMode, 'full-tab-screen': fullTabScreen, 'grid-enabled': gridEnabled, 'flipchart-mode': flipChartMode}"
      >
        <div className="bc-interactive-chart__wrapper" ref={coverCanvasRef}>
           
          {/* Top bar */}
          <div
            className=" bc-interactive-chart__mobile-toolbar d-flex justify-content-between routeSwitcher"
            ref={horizontalToolBarRef}
          >
           
          {/* top bar left */}
            <div className="topbar-left d-flex quick-settings justify-content-start tools-sidebar-horizontal react-tabs__tab-list-horizontal">
              {/* Line */}
              <span className="d-flex justify-content-center react-tabs__tab-horizontal">
                <svg
                  className="my-auto"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  data-icon="line-type-line"
                  style={{
                    fill: "rgb(70, 78, 86)",
                    stroke: "rgb(70, 78, 86)",
                    strokeWidth: 0,
                    verticalAlign: "bottom",
                  }}
                >
                  <path d="M9.048 19.345c-.263 0-.518-.103-.707-.293l-2.985-2.986L2.71 18.73c-.39.39-1.022.393-1.415.003-.392-.39-.393-1.023-.004-1.414l3.354-3.375c.186-.19.44-.295.707-.295h.003c.265 0 .52.105.707.293l2.625 2.625 2.623-6.52c.125-.312.398-.54.726-.607.332-.07.67.034.908.272l4.28 4.265 3.774-9.352c.207-.512.794-.757 1.302-.553.513.207.76.79.554 1.3l-4.34 10.752c-.127.312-.4.538-.73.606-.327.067-.667-.034-.905-.272L12.6 12.195l-2.624 6.523c-.125.312-.4.54-.728.606-.066.014-.134.02-.2.02" />
                </svg>
                <span className="ms-2 my-auto">Line</span>
                <i className="fa-light fa-angle-down my-auto ms-1"></i>
              </span>

              {/* Indicators */}
              <span className="d-flex justify-content-center react-tabs__tab-horizontal">
                <svg
                  className="my-auto"
                  width={16}
                  height={16}
                  viewBox="0 0 48 48"
                  data-icon="plus-circle"
                  style={{
                    fill: "rgb(70, 78, 86)",
                    stroke: "rgb(70, 78, 86)",
                    strokeWidth: 0,
                    verticalAlign: "bottom",
                  }}
                >
                  <path d="M26 22v-6c0-1.104-.896-2-2-2-1.105 0-2 .896-2 2v6h-6c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h6v6c0 1.105.895 2 2 2 1.104 0 2-.895 2-2v-6h6c1.104 0 2-.895 2-2 0-1.104-.896-2-2-2h-6zm-2 20c9.94 0 18-8.06 18-18S33.94 6 24 6 6 14.06 6 24s8.06 18 18 18zm0 4C11.85 46 2 36.15 2 24S11.85 2 24 2s22 9.85 22 22-9.85 22-22 22z" />
                </svg>
                <span className="ms-2 my-auto">Indicators</span>
              </span>

              {/* Comparison */}
              <span className="d-flex justify-content-center react-tabs__tab-horizontal">
                <svg
                  className="my-auto"
                  width={16}
                  height={16}
                  viewBox="0 0 48 48"
                  data-icon="plus-circle"
                  style={{
                    fill: "rgb(70, 78, 86)",
                    stroke: "rgb(70, 78, 86)",
                    strokeWidth: 0,
                    verticalAlign: "bottom",
                  }}
                >
                  <path d="M26 22v-6c0-1.104-.896-2-2-2-1.105 0-2 .896-2 2v6h-6c-1.104 0-2 .896-2 2 0 1.105.896 2 2 2h6v6c0 1.105.895 2 2 2 1.104 0 2-.895 2-2v-6h6c1.104 0 2-.895 2-2 0-1.104-.896-2-2-2h-6zm-2 20c9.94 0 18-8.06 18-18S33.94 6 24 6 6 14.06 6 24s8.06 18 18 18zm0 4C11.85 46 2 36.15 2 24S11.85 2 24 2s22 9.85 22 22-9.85 22-22 22z" />
                </svg>
                <span className="ms-2 my-auto">Comparison</span>
              </span>

              {/* Date Range */}
              <span className="d-flex justify-content-center react-tabs__tab-horizontal">
                <i className="fa-light fa-calendar-star my-auto"></i>
                <span className="ms-2 my-auto">1M</span>
                <i className="fa-light fa-angle-down my-auto ms-1"></i>
              </span>

                {/* Interval */}
                <span className="d-flex justify-content-center react-tabs__tab-horizontal ms-1">
                <svg
                    className="my-auto"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    data-icon="interval"
                    style={{
                      fill: "rgb(70, 78, 86)",
                      stroke: "rgb(70, 78, 86)",
                      strokeWidth: 0,
                      verticalAlign: "bottom",
                    }}
                  >
                    <path d="M10.91 3.37v5.168c0 .654-.49 1.185-1.092 1.185-.602 0-1.09-.53-1.09-1.185v-5.17H6.544v7.54c0 .654-.488 1.184-1.09 1.184-.603 0-1.09-.53-1.09-1.184v-7.54H3.272c-.602 0-1.09.533-1.09 1.186v13.892c0 .653.488 1.185 1.09 1.185h17.454c.602 0 1.09-.53 1.09-1.184V4.554c0-.653-.488-1.185-1.09-1.185h-1.09v5.168c0 .654-.49 1.185-1.092 1.185-.602 0-1.09-.53-1.09-1.185v-5.17h-2.182v7.54c0 .654-.49 1.184-1.09 1.184-.603 0-1.092-.53-1.092-1.184v-7.54h-2.18zM3.272 22C1.468 22 0 20.406 0 18.446V4.554C0 2.594 1.468 1 3.273 1h17.454C22.532 1 24 2.594 24 4.554v13.892C24 20.406 22.532 22 20.727 22H3.273z" />
                  </svg>
                <span className="ms-2 my-auto">Interval</span>
                <span className="ms-2 my-auto">2Min</span>
                <i className="fa-light fa-angle-down my-auto ms-1"></i>
              </span>

            </div>

                    
                  {/* top bar right*/}
                  <div
              className="tool-float tools-sidebar-horizontal"
              data-tabs="true"
            >
              <ul className="react-tabs__tab-list-horizontal" role="tablist">
                {fullScreen ? (
                  <li
                    className="react-tabs__tab-horizontal d-flex justify-content-center"
                    role="tab"
                    id="react-tabs-0"
                    onClick={screen1.exit}
                  >
                 <i class="fa-thin fa-compress my-auto icon-center-28"></i>
                  </li>
                ) : (
                  <li
                    className="react-tabs__tab-horizontal d-flex justify-content-center"
                    role="tab"
                    id="react-tabs-0"
                    onClick={screen1.enter}
                  >
                    <svg
                      className="my-auto"
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

          {/* end ngIf: currentChartSettings && !readOnlyMode */}
          {/*<div id="bc-interactive-chart__chart-container-tooltip" data-ng-show="currentChartSettings.settings.tooltip.mode === 'cards' && !gridEnabled"></div>*/}
          <div className="tool_and_chart-reduce d-flex flex-row ">
            {/* ngIf: showDrawingsPanel && !isMobileOnly && !flipChartMode && !gridEnabled */}
            <div
              className="tools-sidebar iOPuHO d-flex flex-column justify-content-between"
            //  style={{height: options.height}}
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

                 {/* left bar bottom */}
     
              <ul className=" tool-float tools-sidebar-horizontal react-tabs__tab-list-horizontal" role="tablist">
              <li
                  className="react-tabs__tab "
                  role="tab"
                  id="react-tabs-0"
                  aria-selected="true"
                  aria-disabled="false"
                  aria-controls="react-tabs-1"
                  tabIndex={0}
                >
                  <i class="fa-light fa-gear"></i>
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
