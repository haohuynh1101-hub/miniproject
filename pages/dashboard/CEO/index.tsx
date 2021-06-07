import { AppLayout } from "core/Layout";
import React, { useContext } from "react";
import { Table } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { TableRoom } from "core/Layout/component";
import { Chart } from "component";
import { observer } from "mobx-react-lite";
import { useStores } from "@models";
import RoomStore from "mobx/RoomStore";
import { toJS } from "mobx";
// import "../styles/antd.less";

const data = [
  {
    key: "1",
    Sale: 100,
    Target: 100,
    PercentOfTarget: 100,
    Different: 100,
  },
];
const options: Highcharts.Options = {
  chart: {
    type: "column",
  },

  title: {
    text: "Total fruit consumption, grouped by gender",
  },

  xAxis: {
    categories: ["Phòng Kinh Doanh", "Phòng CS"],
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Number of Sales",
    },
  },

  plotOptions: {
    column: {
      stacking: "normal",
    },
  },

  series: [
    {
      type: "column",
      name: "Target",
      data: [5, 3],
    },
    {
      type: "column",
      name: "Sale",
      data: [3, 4],
    },
  ],
};
const DashboardCEOPage = observer((props) => {
  const roomStore = useContext(RoomStore);
  const { listRooms } = toJS(roomStore);
  return (
    <AppLayout>
      {listRooms.map((room) => {
        return (
          <>
            <TableRoom label={room.title} data={room.data} />
          </>
        );
      })}
      <Chart options={options} />
    </AppLayout>
  );
});

export default DashboardCEOPage;
