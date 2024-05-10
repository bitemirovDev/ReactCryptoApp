import { Table } from "antd";
import { useCrypto } from "../context/crypto-context";

export default function AssetTable() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.amount - b.amount,
    },
  ];

  const { assets } = useCrypto();

  const data = assets.map((a) => ({
    key: a.id,
    name: a.name,
    price: a.price,
    amount: a.amount,
  }));

  return <Table pagination={false} columns={columns} dataSource={data} />;
}
