import { getDataClose } from "../../../../api/chart";

export default function areaCreate(chart, props) {
  let now = new Date();
  getDataClose(
    props.currency,
    now.getDate(),
    now.getMonth() + 1,
    now.getFullYear()
  )
    .then((success) => {
      var data = [];

      const areaSeries = chart.current.addAreaSeries({
        topColor: "rgba(38,198,218, 0.56)",
        bottomColor: "rgba(38,198,218, 0.04)",
        lineColor: "rgba(38,198,218, 1)",
        lineWidth: 2,
      });

      data = success.data;

      // Lấy ra thời điểm nhỏ nhất đã được load
      var timeMarginLeft = data.at(-1).time;
      areaSeries.setData(data);

      // Đánh dấu đang loading data mới
      let isLoading = false;

      function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {
        const barsInfo = areaSeries.barsInLogicalRange(newVisibleLogicalRange);

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
              getDataClose(
                props.currency,
                newDate.getDate(),
                newDate.getMonth() + 1,
                newDate.getFullYear()
              )
                .then((successU) => {
                  data = successU.data.concat(data);
                  areaSeries.setData(data);
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
  
      return areaSeries;
    })
    .catch((error) => {
      console.log(error);
    });
}
