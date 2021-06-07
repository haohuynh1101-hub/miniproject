import { Table } from "antd";
import { ColumnType } from "antd/lib/list";
const columnDefine = [
  {
    title: "Sale",
    dataIndex: "sale",
    align: "center" as "center",
    width: "25%",
  },
  {
    title: "Target",
    dataIndex: "target",
    align: "center" as "center",
  },
  {
    title: "% of target",
    dataIndex: "percentOfTarget",
    align: "center" as "center",
  },
  {
    title: "Different",
    dataIndex: "different",
    align: "center" as "center",
  },
];
type TableRoomProps = {
  label: String;
  data: any;
};
export const TableRoom = (props: TableRoomProps) => {
  return (
    <div className="md:w-full m-5 shadow-md rounded">
      <div className="m-3 align">
        <label className="text-lg font-bold	">{props.label}</label>
      </div>
      <div className="mt-3">
        <Table
          columns={columnDefine}
          dataSource={props.data}
          pagination={false}
        />
      </div>
    </div>
  );
};
