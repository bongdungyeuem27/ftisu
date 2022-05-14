import React from "react";
import "./MyChart.css";
import CanvasJSReact from "../../../common/canvasjs/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
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
};

export default function Index() {
  return (
    <interactive-chart>
      <div
        className="bc-interactive-chart"
        data-ng-class="{'full-screen': fullScreen, 'dashboard': dashboardMode, 'full-tab-screen': fullTabScreen, 'grid-enabled': gridEnabled, 'flipchart-mode': flipChartMode}"
      >
        {/* ngIf: !dashboardMode && !fullScreen */}
        <div
          className="interactive-chart-premier-ads bc-premier-new-ads-block show-for-medium-up no-print ng-scope ng-isolate-scope ng-hide"
          data-ng-class="{'show': !$ctrl.hideContent}"
          data-ng-hide="$ctrl.hideContent"
          data-ng-if="!dashboardMode && !fullScreen"
        >
          <div
            aria-label="close modal"
            className="modal-close-wrapper"
            data-ng-click="$ctrl.close()"
          >
            <i className="bc-glyph-times" />
          </div>
          <div className="bc-premier-new-ads-block__container">
            <div className="bc-premier-new-ads-block__button-wrapper">
              <img
                className="bc-premier-new-ads-block__logo"
                src="/img/premier/premier-logo.svg"
                alt="Barchart Premier"
              />
            </div>
            <div className="bc-premier-new-ads-block__content-wrapper">
              {/*            <h3><strong>Interactive Charts</strong> Help Expose the Secrets of Stocks</h3> */}
              <p>
                With <strong>Barchart Premier</strong> you have unlimited chart
                downloads, grid view, and much more. Why not try it risk-free
                today?&nbsp;&nbsp;&nbsp;
                <a
                  target="_blank"
                  data-ng-href="/get-barchart-premier?ref=chartDownload"
                  className="bc-premier-new-ads-block__button"
                  href="/get-barchart-premier?ref=chartDownload"
                >
                  Start Here
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end ngIf: !dashboardMode && !fullScreen */}
        {/*    <interactive-chart-announcement data-ng-if="flipChartMode || dashboardMode"></interactive-chart-announcement>*/}
        {/*<div class="bc-interactive-chart__my-chart-feature" data-ng-if="showMyChartAds">*/}
        {/*<interactive-chart-my-chart-feature-ads></interactive-chart-my-chart-feature-ads>*/}
        {/*</div>*/}
        {/*<div class="bc-interactive-chart__my-chart-feature" data-ng-if="showScrollbarFeatureAds">*/}
        {/*<interactive-chart-scrollbar-feature-ads></interactive-chart-scrollbar-feature-ads>*/}
        {/*</div>*/}
        <div className="bc-interactive-chart__wrapper">
          {/* ngIf: currentChartSettings && !readOnlyMode */}
          <div
            className="bc-interactive-chart__wrapper-toolbar no-print ng-scope"
            data-ng-if="currentChartSettings && !readOnlyMode"
            data-ng-class="{'fullscreen-toolbar-wrapper': fullScreen || flipChartMode}"
          >
            <div className="tools">
              <div className="bc-interactive-chart__toolbars">
                {/* This chart UI row is used for FlipCharts only. */}
                {/* ngIf: flipChartMode */}
                {/* ngIf: flipChartMode && !gridEnabled && !isCotChart */}
                {/* First row of the chart UI. */}
                {/* ngIf: fullScreen */}
                {/* ngIf: !fullScreen */}
                <div data-ng-if="!fullScreen" className="ng-scope">
                  {/* ngIf: !flipChartMode */}
                  <div
                    className="bc-interactive-chart__toolbar-wrapper separator hide-for-print show-for-medium-up clearfix ng-scope"
                    data-ng-if="!flipChartMode"
                  >
                    <form
                      className="bc-interactive-chart__symbol-selector bc-form ng-pristine ng-valid ng-isolate-scope"
                      data-ng-submit="changeSymbol()"
                      autoComplete="off"
                      data-dashboard-mode="dashboardMode"
                      data-full-screen="fullScreen"
                    >
                      <div
                        className="bc-interactive-chart__symbol-selector-fieldset"
                        data-ng-class="{ fullscreen: fullScreen }"
                      >
                        <input
                          type="submit"
                          defaultValue="Go"
                          className="bc-button light-blue"
                          data-ng-hide="fullScreen"
                        />
                        <input
                          type="text"
                          aria-label="chart symbol search"
                          className="js-interactive-chart-symbol-selector-input ng-pristine ng-untouched ng-valid"
                          data-ng-model="symbol"
                          data-ng-model-options="{ debounce: 100 }"
                          placeholder
                          data-ng-change="useSearch()"
                          data-ng-focus="preSymbolEnter()"
                          data-ng-blur="pastSymbolEnter()"
                          data-ng-keydown="keyboardNavigation($event)"
                          data-ng-class="{'error': invalidSymbol}"
                        />
                        {/* ngIf: fullScreen */}
                        <div
                          className="symbol-autocomplete quick-search hide ng-isolate-scope ng-hide"
                          data-ng-show="searchResultsVisible"
                          data-ng-class="{'hide': !searchResultsVisible}"
                          data-model="symbol"
                          data-search-results="searchResults"
                          data-on-symbol-select="selectSymbol(symbol)"
                        >
                          <div
                            data-ng-show="$ctrl.extented"
                            className="search-results-header ng-hide"
                          >
                            Click to add:
                          </div>
                          {/* ngRepeat: item in $ctrl.searchResults */}
                          <div
                            className="no-found columns"
                            data-ng-show="$ctrl.searchResults === null"
                          >
                            <div className="large-12 medium-12 small-12">
                              <span>No Matching Results</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div
                      className="bar-type-drop-down right-border-separator"
                      data-ng-hide="gridEnabled"
                    >
                      <div
                        className="tools-dropdown tools-dropdown-bartype ng-isolate-scope"
                        title="Change Bar Type"
                        data-current-chart-settings="currentChartSettings"
                        data-use-font="true"
                      >
                        <div
                          className="js-bc-interactive-chart-dropdown-bartype bc-dropdown-flexible mob-styles ng-isolate-scope"
                          data-label-font="$ctrl.labelFont"
                          data-label-img="$ctrl.label"
                          data-flipchart-bar-type="$ctrl.flipchartMode"
                          data-dropdown-id="bc-interactive-chart-hamburger-template-83783"
                          data-remove-mobile-touch="true"
                        >
                          {/* ngIf: !isMobile */}
                          <a
                            data-ng-if="!isMobile"
                            className="bc-dropdown-flexible-toggle ng-scope"
                            data-ng-click="handleClick($event)"
                            data-dropdown-toggle="#bc-interactive-chart-hamburger-template-83783"
                          >
                            <span
                              data-ng-show="label"
                              className="ng-binding ng-hide"
                            />
                            <img
                              className="image-preview ng-hide"
                              bc-asset
                              data-ng-show="labelImg"
                            />
                            <i
                              data-ng-show="labelFont"
                              className="icon-glypth bc-glyph-plot_Line"
                            />
                            <i className="bc-glyph-chevron-down bc-dropdown-flexible-arrow" />
                          </a>
                          {/* end ngIf: !isMobile */}
                          {/* ngIf: isMobile */}
                          <div
                            id="bc-interactive-chart-hamburger-template-83783"
                            className="f-dropdown"
                          >
                            <ng-transclude>
                              <div className="tools-dropdown-content ng-scope">
                                <ul>
                                  {/* ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      OHLC Bars
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Colored OHLC Bars
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      HLC Bars
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Candlestick Hollow
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Candlestick Open-to-Close
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Candlestick Close-to-Close
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Heikin-Ashi
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Elder-Impulse-System
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Line Chart
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Area Chart
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Renko
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                  <li
                                    data-ng-repeat="item in $ctrl.typeList"
                                    data-ng-click="$ctrl.changeBarType(item)"
                                    className="ng-scope"
                                  >
                                    <i
                                      className="icon bc-glyph-check ng-hide"
                                      data-ng-show="$ctrl.selectedBarType.key === item.key && $ctrl.selectedBarType.attr === item.attr"
                                    ></i>
                                    <div className="label ng-binding">
                                      Column
                                    </div>
                                  </li>
                                  {/* end ngRepeat: item in $ctrl.typeList */}
                                </ul>
                              </div>
                            </ng-transclude>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ngIf: gridEnabled */}
                    <button
                      className="bc-button white-button small"
                      title="Add, Change, Delete Studies"
                      data-ng-hide="gridEnabled"
                      data-ng-click="plotToolsModal()"
                    >
                      +Study
                    </button>
                    {/* ngIf: gridEnabled */}
                    <button
                      className="bc-button white-button small chart-tools-button 3"
                      title="Add, Drawing Tools"
                      data-ng-click="openToolsModal()"
                      data-ng-hide="gridEnabled"
                    >
                      Tools
                    </button>
                    <button
                      className="bc-button white-button small settings-button"
                      data-ng-hide="gridEnabled"
                      title="Change Chart Settings"
                      data-ng-click="settingsModal()"
                    >
                      <span className="show-for-medium-up">Settings</span>
                      <i className="bc-glyph-cog show-for-small-down" />
                    </button>
                  </div>
                  {/* end ngIf: !flipChartMode */}
                </div>
                {/* end ngIf: !fullScreen */}

                {/* Second row of the chart UI. */}
                {/* ngIf: !flipChartMode */}
                <div
                  className="bc-interactive-chart__toolbar-wrapper hide-for-print hide-for-medium-up ng-scope"
                  data-ng-if="!flipChartMode"
                >
                  {/* This part of the toolbar is visible only on mobile devices. */}
                  <div className="bc-interactive-chart__mobile-toolbar js-bc-interactive-chart__mobile-toolbar show-for-small-down">
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
                        <ul className="react-tabs__tab-list-horizontal" role="tablist">
                          <li
                            className="react-tabs__tab-horizontal"
                            role="tab"
                            id="react-tabs-0"
                            aria-selected="true"
                            aria-disabled="false"
                            aria-controls="react-tabs-1"
                            tabIndex={0}
                            onClick={()=>{}}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5V11h1V8.5C7 7.67 7.67 7 8.5 7H11V6H8.5zM6 17v2.5A2.5 2.5 0 0 0 8.5 22H11v-1H8.5A1.5 1.5 0 0 1 7 19.5V17H6zM19.5 7H17V6h2.5A2.5 2.5 0 0 1 22 8.5V11h-1V8.5c0-.83-.67-1.5-1.5-1.5zM22 19.5V17h-1v2.5c0 .83-.67 1.5-1.5 1.5H17v1h2.5a2.5 2.5 0 0 0 2.5-2.5z"></path></svg>
                          </li>
                          <li
                            className="react-tabs__tab-horizontal"
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
                              width={28}
                              height={28}
                            >
                              <g fill="currentColor">
                                <path d="M18 15h8v-1h-8z" />
                                <path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z" />
                              </g>
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end ngIf: !flipChartMode */}
              </div>
            </div>
          </div>
          {/* end ngIf: currentChartSettings && !readOnlyMode */}
          {/*<div id="bc-interactive-chart__chart-container-tooltip" data-ng-show="currentChartSettings.settings.tooltip.mode === 'cards' && !gridEnabled"></div>*/}
          <div className="tool_and_chart-reduce d-flex flex-row justify-content-between">
            {/* ngIf: showDrawingsPanel && !isMobileOnly && !flipChartMode && !gridEnabled */}
            <div
              className="tools-sidebar ng-scope cwgaxb-0 iOPuHO"
              data-tabs="true"
            >
              {/*           
               {
                 [1,2].map((value, key)=>{
                  return ( <span key={key} className="icon-G7o5fBfa">
                    
                    <button type="button" className="chart-selector-button">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28 28"
                    width={28}
                    height={28}
                  >
                    <g fill="currentColor">
                      <path d="M18 15h8v-1h-8z" />
                      <path d="M14 18v8h1v-8zM14 3v8h1v-8zM3 15h8v-1h-8z" />
                    </g>
                  </svg>
                    </button>
                    
               
                </span>
           )
                 })
               } */}

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

            {/* end ngIf: !isMobile */}
          </div>
        </div>
      </div>
      <div id="mouseMoveSpinner">Drawing</div>
    </interactive-chart>
  );
}
