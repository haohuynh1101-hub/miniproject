import { AppLayout } from "core/Layout";
import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { TableRoom } from "core/Layout/component";
import { Chart } from "component";
import { observer } from "mobx-react-lite";
import RoomStore from "mobx/RoomStore";
import { toJS } from "mobx";

const options: Highcharts.Options = {
  chart: {
    type: "column",
  },

  title: {
    text: "",
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
      data: [5, 10],
    },
    {
      type: "column",
      name: "Sale",
      data: [3, 4],
    },
  ],
};
const DashboardCEOPage = observer(() => {
  const roomStore = useContext(RoomStore);
  const { listRooms } = toJS(roomStore);
  const { getRoomQuarter } = roomStore;

  useEffect(() => {
    getRoomQuarter(1);
  }, []);
  return (
    <AppLayout>
      {listRooms.map((room) => {
        return (
          <div className="my-12">
            <TableRoom label={room.title} data={room.data} />
          </div>
        );
      })}
      <div className="my-16">
        <Chart options={options} />
      </div>
    </AppLayout>
  );
});

export default DashboardCEOPage;
