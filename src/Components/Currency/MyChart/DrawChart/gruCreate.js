import { getGru } from "../../../../api/chart";

export default function gruCreate(chart, props, gruSeries, setGruSeries) {
  getGru(
    props.currency
  )
    .then((success) => {
      var data = [];

      if (gruSeries===undefined) {
        const series = chart.current.addLineSeries({
          // topColor: "rgba(38,198,218, 0.56)",
          // bottomColor: "rgba(38,198,218, 0.04)",
          // lineColor: "rgba(38,198,218, 1)",
          color: "yellow",
        });
        gruSeries=series;
      }

      data = success.data;

      gruSeries.setData(data);

      setGruSeries(gruSeries)
      return gruSeries;
    })
    .catch((error) => {
      console.log(error);
    });

    
}
