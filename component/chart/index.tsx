import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Chart = (props: HighchartsReact.Props) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={props.options}
        {...props}
      />
    </div>
  );
};
