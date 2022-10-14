import React, { useEffect, useRef, memo, useState, useContext } from "react";
import _ from "lodash";
import { createChart, CrosshairMode, TrackingModeExitMode } from "lightweight-charts";
import candlestickCreate from "./candlestickCreate";
import volumeCreate from "./volumeCreate";
import areaCreate from "./areaCreate";
import { ChartContext } from "../ChartContextProvider";
import modelCreate from "./modelCreate";
import {listOfChartIndicator} from "../listOfChartIndicator";

export default memo(function Index(props) {
  // const [data, setData] = useState([]);
  const [listModel, setListModel] = useState({});
  // listModel['a'] = 0;
  useEffect(() => {
    let listModelTemp= {};
    _.forEach(listOfChartIndicator, function(value, key) {
      listModelTemp[value.key+'Series'] = undefined;
    });
    setListModel(listModelTemp)
  }, [])

 


  const chartContainerRef = useRef(undefined);
  const chart = useRef(undefined);
  const [fullScreenCache, setFullScreenCache] = useState(props.fullScreen);
  const [dimensionsBeforeFullscreen, setDimensionsBeforeFullscreen] = useState([
    1, 500,
  ]);
  const lastSelected = useRef(props.selected);
  const { listSelected, setListSelected } = useContext(ChartContext);

  const [lstmSeries, setLstmSeries] = useState();
  const [gruSeries, setGruSeries] = useState();
  const [prophetSeries, setProphetSeries] = useState();
  const [arimaSeries, setArimaSeries] = useState();
  const [arimaLstmSeries, setArimaLstmSeries] = useState();
  const [arimaSvrSeries, setArimaSvrSeries] = useState();
  const [svrSeries, setSvrSeries] = useState();
  const [linearRegression, setLinearRegression] = useState();

  useEffect(() => {
    // Tạo bảng
    if (lastSelected.current !== props.selected) {
      chart.current.remove();
      lastSelected.current = props.selected;
      // chartContainerRef.current = undefined;
    }
    // else{
    if (chartContainerRef.current.children.length !== 0) return;
    // }

    chart.current = createChart(chartContainerRef.current, {
      width: props.coverCanvasRef.current.clientWidth - 50,
      height: props.fullScreen ? window.innerHeight - 50 : 500,
      layout: {
        backgroundColor: "#253248",
        textColor: "rgba(255, 255, 255, 0.9)",
      },
      grid: {
        vertLines: {
          color: "#334158",
        },
        horzLines: {
          color: "#334158",
        },
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
      },
      priceScale: {
        borderColor: "#485c7b",
      },
      timeScale: {
        borderColor: "#485c7b",
      },
      trackingMode: TrackingModeExitMode.OnNextTap
    });

    switch (props.selected) {
      case 0:
        // code block
        areaCreate(chart, props);
        break;
      case 1:
        // code block
        candlestickCreate(chart, props);
        break;
      default:
        areaCreate(chart, props);
        break;
      // code block
    }

    volumeCreate(chart, props);
  }, [props.coverCanvasRef, chartContainerRef.current, props.selected]);

  // Resize
  useEffect(() => {
    const resize = () => {
      chart.current.applyOptions({
        width: props.coverCanvasRef.current.clientWidth - 50,
      });

      // Nếu trước đó đang trạng thái thu nhỏ thì không cần cập nhật lại DimensionsBeforeFullscreen
      if (!fullScreenCache) return;

      let temp = dimensionsBeforeFullscreen;
      temp[0] = props.coverCanvasRef.current.clientWidth - 50;
      setDimensionsBeforeFullscreen(temp);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // Nếu chuyển từ fullScreen sang thu nhỏ thì cập nhật lại kích thước trước đ
    if (fullScreenCache !== props.fullScreen) {
      if (!props.fullScreen) {
        chart.current.applyOptions({
          width: dimensionsBeforeFullscreen[0],
          height: dimensionsBeforeFullscreen[1],
        });
      } else {
        chart.current.applyOptions({
          width: window.innerWidth - 50,
          height: window.innerHeight - 50,
        });
      }
    }

    setFullScreenCache(props.fullScreen);
  }, [props.fullScreen]);

  const [k, setK] = useState();

  useEffect(() => {
      _.forEach(listOfChartIndicator, async function(value, key) {
        if(listSelected.find(i=>i===value.key)){
          let listModelTemp = listModel;
          listModelTemp[value.key+'Series'] =(await modelCreate(chart, props, value.key, listModelTemp[value.key+'Series'], value.color));
          if (!listModel[value.key+'Series']){  
            setListModel(listModelTemp);
          }
        }
        else {
          if ( listModel[value.key+'Series']){
            listModel[value.key+'Series'].setData([]);
          }
        }
      });
  }, [listSelected]);

  return (
    <div>
    {/* //   {console.log(eval('a'))} */}
    {/* {console.log(listModel['a'])} */}
      <div
        ref={chartContainerRef}
        className="chart-container"
        // style={{ height: "100%" }}
      />
    </div>
  );
});
