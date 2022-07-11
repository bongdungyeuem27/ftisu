import { getArimaLstm } from "../../../../api/chart";

export default function arimaLstmCreate(chart, props, arimaLstmSeries, setArimaLstmSeries) {
  getArimaLstm(
    props.currency
  )
    .then((success) => {
      var data = [];

      if (arimaLstmSeries===undefined) {
        const series = chart.current.addLineSeries({
          // topColor: "rgba(38,198,218, 0.56)",
          // bottomColor: "rgba(38,198,218, 0.04)",
          // lineColor: "rgba(38,198,218, 1)",
          color: "rgba(247,114,238,1)",
        });
        arimaLstmSeries=series;
      }

      data = success.data;

      arimaLstmSeries.setData(data);

      setArimaLstmSeries(arimaLstmSeries)
      return arimaLstmSeries;
    })
    .catch((error) => {
      console.log(error);
    });

    
}
