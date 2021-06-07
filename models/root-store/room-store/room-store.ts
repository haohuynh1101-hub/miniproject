// import { observable, action, computed, reaction, makeObservable } from "mobx";
// import { createContext } from "react";
// interface RoomData {
//   quarter: number;
//   sale: number;
//   target: number;
//   percentOfTarget: string;
//   different: number;
// }
// export interface Room {
//   id?: number;
//   roomId: number;
//   title: string;
//   data: RoomData[];
// }
// class RoomStore {
//   rooms: Room[] = [
//     {
//       id: 1,
//       roomId: 1,
//       title: "Phòng Kinh Doanh",
//       data: [
//         {
//           quarter: 1,
//           sale: 1221,
//           target: 3000,
//           percentOfTarget: "60%",
//           different: 120,
//         },
//         {
//           quarter: 2,
//           sale: 1534,
//           target: 9000,
//           percentOfTarget: "60%",
//           different: 120,
//         },
//         {
//           quarter: 3,
//           sale: 15487,
//           target: 3000,
//           percentOfTarget: "20%",
//           different: 120,
//         },
//       ],
//     },
//     {
//       id: 2,
//       roomId: 2,
//       title: "Phòng CS",
//       data: [
//         {
//           quarter: 1,
//           sale: 2332,
//           target: 8000,
//           percentOfTarget: "40%",
//           different: 120,
//         },
//         {
//           quarter: 2,
//           sale: 1598,
//           target: 4000,
//           percentOfTarget: "10%",
//           different: 120,
//         },
//         {
//           quarter: 4,
//           sale: 13254,
//           target: 3000,
//           percentOfTarget: "80%",
//           different: 120,
//         },
//       ],
//     },
//   ];

import { withEnvironment } from "@models/extensions/with-environment";
import { types } from "mobx-state-tree";
import { RoomModal } from "./room.model";

//   constructor() {
//     reaction(
//       () => this.rooms,
//       (_) => console.log(this.rooms.length)
//     );
//     makeObservable(this, {
//       rooms: observable,
//       getRoom: action,
//     });
//   }
//   getRoom = () => {
//     this.rooms = this.rooms.map((room) => {
//       return {
//         ...room,
//       };
//     });
//   };

// }

// export default createContext(new RoomStore());
export const RoomStore = () => {
  const roomTree = RoomModal.create({
    roomId: 1,
    title: "Phong Kinh Doanh",
    data: [],
  });
  return {roomTree}
};
