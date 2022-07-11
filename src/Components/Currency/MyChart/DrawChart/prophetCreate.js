import { getProphet } from "../../../../api/chart";

export default function prophetCreate(chart, props, prophetSeries, setProphetSeries) {
  getProphet(
    props.currency
  )
    .then((success) => {
      var data = [];

      if (prophetSeries===undefined) {
        const series = chart.current.addLineSeries({
          // topColor: "rgba(38,198,218, 0.56)",
          // bottomColor: "rgba(38,198,218, 0.04)",
          // lineColor: "rgba(38,198,218, 1)",
          color: "rgb(0,255,0)",
        });
        prophetSeries=series;
      }

      data = success.data;

      prophetSeries.setData(data);

      setProphetSeries(prophetSeries)
      return prophetSeries;
    })
    .catch((error) => {
      console.log(error);
    });

    
}
