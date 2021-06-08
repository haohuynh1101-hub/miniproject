import { AppLayout } from "core/Layout";
import { TableRoom } from "core/Layout/component";
import { toJS } from "mobx";
import RoomStore from "mobx/RoomStore";
import { Chart } from "component";
import React, { useContext } from "react";
import { OptionChartCS } from "constants/OptionCS";
function DashboardCSPage() {
  const roomStore = useContext(RoomStore);
  const { listRooms } = toJS(roomStore);
  return (
    <AppLayout>
      <TableRoom label="Customer Support" data={listRooms[1].data} />
      <div className="my-20">
        <Chart options={OptionChartCS()} />
      </div>
    </AppLayout>
  );
}

export default DashboardCSPage;
