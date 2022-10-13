import { getArima } from "../../../../api/chart";

export default function arimaCreate(chart, props, arimaSeries, setArimaSeries) {
  getArima(
    props.currency
  )
    .then((success) => {
      var data = [];

      if (arimaSeries===undefined) {
        const series = chart.current.addLineSeries({
          // topColor: "rgba(38,198,218, 0.56)",
          // bottomColor: "rgba(38,198,218, 0.04)",
          // lineColor: "rgba(38,198,218, 1)",
          color: "rgba(247,124,114,1)",
        });
        arimaSeries=series;
      }

      data = success.data;

      arimaSeries.setData(data);

      setArimaSeries(arimaSeries)
      return arimaSeries;
    })
    .catch((error) => {
      console.log(error);
    });

    
}
