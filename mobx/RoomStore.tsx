import {
  observable,
  action,
  computed,
  reaction,
  makeObservable,
  toJS,
} from "mobx";
import { createContext } from "react";
import { makeAutoObservable } from "mobx";

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
        percentOfTarget: "40%",
        different: 1200,
      },
      {
        quarter: 1,
        sale: 2220,
        target: 4200,
        percentOfTarget: "40%",
        different: 54200,
      },
      {
        quarter: 1,
        sale: 1220,
        target: 2200,
        percentOfTarget: "60%",
        different: 34200,
      },
      {
        quarter: 2,
        sale: 1020,
        target: 10320,
        percentOfTarget: "80%",
        different: 1030,
      },
      {
        quarter: 3,
        sale: 101210,
        target: 11200,
        percentOfTarget: "90%",
        different: 1020,
      },
      {
        quarter: 4,
        sale: 10120,
        target: 12100,
        percentOfTarget: "50%",
        different: 12100,
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
        percentOfTarget: "10%",
        different: 100,
      },
      {
        quarter: 2,
        sale: 1020,
        target: 2000,
        percentOfTarget: "20%",
        different: 100,
      },
      {
        quarter: 3,
        sale: 1200,
        target: 2900,
        percentOfTarget: "30%",
        different: 1000,
      },
      {
        quarter: 4,
        sale: 150,
        target: 800,
        percentOfTarget: "20%",
        different: 700,
      },
    ],
  },
];
interface DataRoom {
  quarter: number;
  sale: number;
  target: number;
  percentOfTarget: string;
  different: number;
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
