import { types } from "mobx-state-tree";
import { Instance, number, string } from "mobx-state-tree/dist/internal";
import { type } from "os";
export const DataRoomModal = types.model("DataRoom", {
    quarter: number,
    sale: number,
    target: number,
    percentOfTarget: string,
    different: number,
  });
export const RoomModal = types.model("RoomModel", {
  roomId: types.number,
  title: types.string,
  data:types.array(DataRoomModal)
});
export type DataRoomModal=Instance<typeof DataRoomModal>
export type RoomModal=Instance<typeof RoomModal>

