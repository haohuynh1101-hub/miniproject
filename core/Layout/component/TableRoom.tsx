import { Table } from "antd";
import { ColumnType } from "antd/lib/list";
const columnDefine = [
  {
    title: "Target",
    dataIndex: "target",
    align: "center" as "center",
    render: (text, record) => {
      return <span className="text-blue-500 font-bold">{record.target}</span>;
    },
  },
  {
    title: "Sale",
    dataIndex: "sale",
    align: "center" as "center",
    width: "25%",
    render: (text, record) => {
      return <span className="text-green-500 font-bold">{record.sale}</span>;
    },
  },

  {
    title: "% of target",
    dataIndex: "percentOfTarget",
    align: "center" as "center",
    render: (text, record) => {
      return (
        <span className="text- font-bold">
          {Math.round((record.sale / record.target) * 100)}%
        </span>
      );
    },
  },
  {
    title: "Different",
    dataIndex: "different",
    align: "center" as "center",
    render: (text, record) => {
      return (
        <span className="text-yellow-500 font-bold">
          {record.target - record.sale}
        </span>
      );
    },
  },
];
type TableRoomProps = {
  label: String;
  data: any;
};
export const TableRoom = (props: TableRoomProps) => {
  return (
    <div className="md:w-full  shadow-md rounded">
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
