import { AppLayout } from "core/Layout";
import React from "react";
import { Table } from "antd";
const columnDefine = [
  {
    title: "Sale",
    dataIndex: "Sale",
  },
  {
    title: "Target",
    dataIndex: "Target",
  },
  {
    title: "% of target",
    dataIndex: "PercentOfTarget",
  },
  {
    title: "Different",
    dataIndex: "Different",
  },
];
const data = [
  {
    key: "1",
    Sale: 100,
    Target: 100,
    PercentOfTarget: 100,
    Different: 100,
  },
];
function DashboardCEOPage(props) {
  return (
    <AppLayout>
      <Table columns={columnDefine} dataSource={data} />
    </AppLayout>
  );
}

export default DashboardCEOPage;
