import { OptionChartBusiness } from "@constants";
import { Chart } from "component";
import { AppLayout } from "core/Layout";
import { TableRoom } from "core/Layout/component";
import { toJS } from "mobx";
import RoomStore from "mobx/RoomStore";
import React, { useContext } from "react";

function DashboardBusinessPage() {
  const roomStore = useContext(RoomStore);
  const { listRooms } = toJS(roomStore);
  return (
    <AppLayout>
      <TableRoom label="Phong Kinh Doanh" data={listRooms[0].data} />
      <div className="my-20">
        <Chart options={OptionChartBusiness()} />
      </div>
    </AppLayout>
  );
}

export default DashboardBusinessPage;
