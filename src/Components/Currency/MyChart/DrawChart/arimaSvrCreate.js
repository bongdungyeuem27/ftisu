import { getArimaSvr} from "../../../../api/chart";

export default function arimaSvrCreate(chart, props, arimaLstmSeries, setArimaLstmSeries) {
  getArimaSvr(
    props.currency
  )
    .then((success) => {
      var data = [];

      if (arimaLstmSeries===undefined) {
        const series = chart.current.addLineSeries({
          // topColor: "rgba(38,198,218, 0.56)",
          // bottomColor: "rgba(38,198,218, 0.04)",
          // lineColor: "rgba(38,198,218, 1)",
          color: "#e42225",
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
