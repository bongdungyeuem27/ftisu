import React, { useEffect, useRef, memo, useState } from "react";
import _ from "lodash";
import { createChart, CrosshairMode } from "lightweight-charts";
import candlestickCreate from "./candlestickCreate";
import volumeCreate from "./volumeCreate";
import areaCreate from "./areaCreate";

export default memo(function Index(props) {
  // const [data, setData] = useState([]);
  const [pending, setPending] = useState(false);
  const chartContainerRef = useRef(undefined);
  const chart = useRef(undefined);
  const [fullScreenCache, setFullScreenCache] = useState(props.fullScreen);
  const [dimensionsBeforeFullscreen, setDimensionsBeforeFullscreen] = useState([
    1, 500,
  ]);
  const [lastSelected, setLastSelected] = useState(props.selected);

  useEffect(() => {
    // Tạo bảng
    if (lastSelected !== props.selected) {
      chart.current.remove()
      setLastSelected(props.selected)
      // chartContainerRef.current = undefined;
    }
    // else{
      if (chartContainerRef.current.children.length !== 0) return;
    // }
   
   
    chart.current = createChart(chartContainerRef.current, {
      width: props.coverCanvasRef.current.clientWidth - 50,
      height: props.fullScreen?window.innerHeight-50:500,
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
    if (fullScreenCache !== props.fullScreen){
      if (!props.fullScreen) {
        chart.current.applyOptions({
          width: dimensionsBeforeFullscreen[0],
          height: dimensionsBeforeFullscreen[1],
        });
      }
      else {
          chart.current.applyOptions({
            width: window.innerWidth-50,
          height: window.innerHeight-50,
        });
      }
    }

    setFullScreenCache(props.fullScreen);
  }, [props.fullScreen]);

  return (
    <div>

      <div
        ref={chartContainerRef}
        className="chart-container"
        // style={{ height: "100%" }}
      />
    </div>
  );
});
