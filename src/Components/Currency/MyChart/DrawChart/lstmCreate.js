import { getLstm } from "../../../../api/chart";

export default function lstmCreate(chart, props, lstmSeries, setLstmSeries) {
  getLstm(props.currency)
    .then((success) => {
      var data = [];
      if (lstmSeries===undefined) {
        const series = chart.current.addLineSeries({
          // topColor: "rgba(38,198,218, 0.56)",
          // bottomColor: "rgba(38,198,218, 0.04)",
          // lineColor: "rgba(38,198,218, 1)",
          color: "#2962FF",
        });
        lstmSeries=series;
      }

      data = success.data;
      lstmSeries.setData(data);

      // console.log(lstmSeries)
      setLstmSeries(lstmSeries);
      return lstmSeries;
    })
    .catch((error) => {
      console.log(error);
    });
}
