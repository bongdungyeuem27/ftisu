import { getModel } from "../../../../api/chart";

export default async function modelCreate(
  chart,
  props,
  model,
  modelSeries,
  color
) {
  await getModel(props.currency, model)
    .then((success) => {
      var data = [];

      if (modelSeries === undefined) {
        modelSeries = chart.current.addLineSeries({
          color: color,
        });
      }
      data = success.data;
      modelSeries.setData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return modelSeries;
}
