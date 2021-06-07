import { Sidebar } from "./component";
import { Select } from "component";
import { DatePicker } from "antd";
import { Component, useContext } from "react";
import RoomStore from "mobx/RoomStore";
import { toJS } from "mobx";
import TodoStore from "mobx/TodoStore";
const optionDefine = ["Quý 1", "Quý 2", "Quý 3", "Quý 4"];

export const AppLayout = ({ children }) => {
  const roomStore = useContext(RoomStore);
  const { getRoomQuarter } = roomStore;
  const onselect = (value) => {
    getRoomQuarter(value);
  };

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4">
        <div className="h-screen overflow-auto">
          <div className="overscroll-auto">
            <div className="container">
              <div className="flex justify-end w-full my-5">
                <div className="mx-2">
                  <Select anyFunction={onselect} option={optionDefine} />
                </div>
                <DatePicker />
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
