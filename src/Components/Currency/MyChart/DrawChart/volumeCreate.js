import { getDataVolume } from "../../../../api/chart";

export default function volumeCreate(chart, props) {
  let now = new Date();
  getDataVolume(
    props.currency,
    now.getDate(),
    now.getMonth() + 1,
    now.getFullYear()
  )
    .then((success) => {
      var data = [];
      const volumeSeries = chart.current.addHistogramSeries({
        color: "#182233",
        lineWidth: 2,
        priceFormat: {
          type: "volume",
        },
        overlay: true,
        scaleMargins: {
          top: 0.8,
          bottom: 0,
        },
      });

      data = success.data;

      // Lấy ra thời điểm nhỏ nhất đã được load
      var timeMarginLeft = data.at(-1).time;

      volumeSeries.setData(data);

      // Đánh dấu đang loading data mới
      let isLoading = false;

      function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {
        const barsInfo = volumeSeries.barsInLogicalRange(
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
              getDataVolume(
                props.currency,
                newDate.getDate(),
                newDate.getMonth() + 1,
                newDate.getFullYear()
              )
                .then((successU) => {
                  data = successU.data.concat(data);
                  volumeSeries.setData(data);

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
      return volumeSeries;
    })
    .catch((error) => {
      console.log(error);
    });
}
