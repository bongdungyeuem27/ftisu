import { getDataCandlestick } from "../../../../api/chart";

export default function candlestickCreate(chart, props) {
  let now = new Date();
  getDataCandlestick(
    props.currency,
    now.getDate(),
    now.getMonth() + 1,
    now.getFullYear()
  )
    .then((success) => {
      var data = [];
      // console.log(chart.current);

      // const areaSeries = chart.current.addAreaSeries({
      //   topColor: 'rgba(38,198,218, 0.56)',
      //   bottomColor: 'rgba(38,198,218, 0.04)',
      //   lineColor: 'rgba(38,198,218, 1)',
      //   lineWidth: 2
      // });

      const candleSeries = chart.current.addCandlestickSeries({
        upColor: "#4bffb5",
        downColor: "#ff4976",
        borderDownColor: "#ff4976",
        borderUpColor: "#4bffb5",
        wickDownColor: "#838ca1",
        wickUpColor: "#838ca1",
      });

      data = success.data;

      // Lấy ra thời điểm nhỏ nhất đã được load
      var timeMarginLeft = data.at(-1).time;
      candleSeries.setData(data);

      // const areaSeries = chart.current.addAreaSeries({
      //   topColor: 'rgba(38,198,218, 0.56)',
      //   bottomColor: 'rgba(38,198,218, 0.04)',
      //   lineColor: 'rgba(38,198,218, 1)',
      //   lineWidth: 2
      // });

      // areaSeries.setData(areaData);

      // Đánh dấu đang loading data mới
      let isLoading = false;

      function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {
        const barsInfo = candleSeries.barsInLogicalRange(
          newVisibleLogicalRange
        );

        // if there less than 150 bars to the left of the visible area
        if (barsInfo !== null && barsInfo.barsBefore < 150) {
          // try to load additional historical data and prepend it to the series data
          // console.log(barsInfo);
          if (barsInfo.barsBefore < 0) {
            timeMarginLeft = barsInfo.from;
            if (isLoading === false) {
              isLoading = true;
              let newDate = new Date((timeMarginLeft - 86400) * 1000);
              // console.log(newDate);
              getDataCandlestick(
                props.currency,
                newDate.getDate(),
                newDate.getMonth() + 1,
                newDate.getFullYear()
              )
                .then((successU) => {
                  data = successU.data.concat(data);
                  candleSeries.setData(data);
                  // volumeSeries.setData(data);

                  timeMarginLeft = data.at(-1).time;

                  isLoading = false;
                })
                .catch((errorU) => console.log(errorU));
            }
          }
        }
      }

      chart.current
        .timeScale()
        .subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChanged);
      return candleSeries;
    })
    .catch((error) => {
      console.log(error);
    });
}
