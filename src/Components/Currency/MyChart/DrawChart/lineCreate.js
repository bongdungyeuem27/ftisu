import { getDataClose } from "../../../../api/chart";

export default function lineCreate(chart, props) {
  let now = new Date();
  getDataClose(
    props.currency,
    now.getDate(),
    now.getMonth() + 1,
    now.getFullYear()
  )
    .then((success) => {
      var data = [];
      const lineSeries = chart.addLineSeries({ color: '#2962FF' });

      data = success.data;

      // Lấy ra thời điểm nhỏ nhất đã được load
      var timeMarginLeft = data.at(-1).time;

      lineSeries.setData(data);

      // Đánh dấu đang loading data mới
      let isLoading = false;

      function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {
        const barsInfo = lineSeries.barsInLogicalRange(
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
              getDataClose(
                props.currency,
                newDate.getDate(),
                newDate.getMonth() + 1,
                newDate.getFullYear()
              )
                .then((successU) => {
                  data = successU.data.concat(data);
                  lineSeries.setData(data);

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
    })
    .catch((error) => {
      console.log(error);
    });
}
