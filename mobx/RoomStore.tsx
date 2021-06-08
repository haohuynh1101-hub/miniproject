import {
  observable,
  action,
  computed,
  reaction,
  makeObservable,
  toJS,
} from "mobx";
import { createContext } from "react";

const listDeparment = [
  {
    id: 1,
    roomId: 1,
    title: "Phong Kinh Doanh",
    data: [
      {
        quarter: 1,
        sale: 1020,
        target: 1200,
      },

      {
        quarter: 2,
        sale: 1020,
        target: 10320,
      },
      {
        quarter: 3,
        sale: 300,
        target: 600,
      },
      {
        quarter: 4,
        sale: 800,
        target: 2000,
      },
    ],
  },
  {
    id: 2,
    roomId: 2,
    title: "Phong CS",
    data: [
      {
        quarter: 1,
        sale: 100,
        target: 100,
      },
      {
        quarter: 2,
        sale: 1020,
        target: 2000,
      },
      {
        quarter: 3,
        sale: 1200,
        target: 2900,
      },
      {
        quarter: 4,
        sale: 150,
        target: 800,
      },
    ],
  },
];
interface DataRoom {
  quarter: number;
  sale: number;
  target: number;
}
export interface Rooms {
  id?: number;
  roomId: number;
  title: string;
  data: DataRoom[];
}
class RoomStore {
  listRooms: Rooms[] = listDeparment;
  constructor() {
    reaction(
      () => this.listRooms,
      (_) => console.log(this.listRooms.length)
    );

    makeObservable(this, {
      listRooms: observable,
      getRoomQuarter: action,
    });
  }
  getRoomQuarter = (id: number) => {
    this.listRooms = listDeparment.map((room) => {
      const newListRooms = room.data.filter((dt) => dt.quarter == id);
      return { ...room, data: newListRooms };
    });
  };
}
export default createContext(new RoomStore());
