import { AppLayout } from "core/Layout";
import { TableRoom } from "core/Layout/component";
import { toJS } from "mobx";
import RoomStore from "mobx/RoomStore";
import { useRouter } from "next/dist/client/router";
import React, { useContext } from "react";

function DashboardManagerPage(props) {
  const roomStore = useContext(RoomStore);
  const { listRooms } = toJS(roomStore);
  const router = useRouter();
  return (
    <AppLayout>
      <TableRoom label="Phong Kinh Doanh" data={listRooms[0].data} />
    </AppLayout>
  );
}

export default DashboardManagerPage;
