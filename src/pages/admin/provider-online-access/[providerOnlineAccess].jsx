/* eslint-disable react-hooks/rules-of-hooks */
import { providerOnlineAccess } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import AddAccessModal from "@/component/UI/Admin/Provider/Modals/AddAccessModal";
import OnlineAccessAction from "@/component/UI/Admin/Provider/OnlineAccessAction";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

const providerOnlineAccessPage = () => {
  //! Id get
  const router = useRouter();
  const { query } = router;
  const id = query.providerOnlineAccess;

  //   console.log(id);
  const [AddAccess, setAddAccess] = useState(false);
  const handleAddAccess = () => {
    setAddAccess(!AddAccess);
  };

  //! Optimized function to get dynamic filter value-text
  const generateFilterValues = (data, columnKey) => {
    const uniqueValues = [...new Set(data?.map((d) => d[columnKey]))];
    return uniqueValues.map((value) => ({ text: value, value }));
  };

  //!   table's state
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows
      // );
      setRecordSelected(selectedRowKeys);
    },
    onSelect: (record, selected, selectedRows) => {
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // console.log(selected, selectedRows, changeRows);
    },
  };

  const widthMap = {
    0: 70,
    1: 70,
    3: 80,
    4: 80,
  };

  const columns = Object.keys(providerOnlineAccess[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: widthMap[index] || 160, // Adjust width for the action column
      filters: generateFilterValues(providerOnlineAccess, key),
      filterSearch: true,
      filteredValue: filteredInfo[key] || null,
      onFilter: (value, record) => {
        if (record[key] !== null && typeof record[key] !== "object") {
          return record[key].toString().includes(value);
        }
        return false;
      },
      sorter: (a, b) => {
        if (typeof a[key] === "string" && typeof b[key] === "string") {
          return a[key].localeCompare(b[key]);
        }
        return 0;
      },
      sortOrder: sortedInfo.columnKey === key ? sortedInfo.order : null,
      render: (text, record) => {
        if (key === "url") {
          return <button className="text-primary">{text}</button>;
        } else if (key === "status") {
          return <div className="flex items-center justify-center"></div>;
        } else {
          return (
            <div key={index}>
              <h1>{text}</h1>
            </div>
          );
        }
      },
      ellipsis: true,
    }));

  // Add action column
  columns.push({
    title: "Action",
    key: "action",
    width: 80,
    render: (text, record) => (
      <div>
        <OnlineAccessAction record={record}></OnlineAccessAction>
      </div>
    ),
  });

  return (
    <div>
      <div className="flex item-center flex-wrap justify-between">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Link href={"/admin/provider"} className="text-primary text-lg">
            <IoCaretBackCircleOutline />
          </Link>
          <div className="text-xs font-normal">
            |<span className="text-orange-400 font-semibold">DOB :</span>
            04/16/2024 |
            <span className="text-orange-400 font-semibold">Phone : </span>
            12345676 |
            <span className="text-orange-400 font-semibold">Address : </span>
            City, AK, 25632
          </div>
        </div>
        <div>
          <Link
            href={"/admin/provider"}
            className="flex items-center gap-1 cred-button"
            type="button"
          >
            <IoCaretBackCircleOutline /> Back
          </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between flex-wrap mt-3">
          <h1 className=" text-orange-500 text-base">Online Access</h1>
          <button
            onClick={handleAddAccess}
            className="cred-button flex items-center gap-1"
          >
            <MdAdd className="text-lg" /> Add Access
          </button>
        </div>
        <div className=" overflow-scroll py-3 ">
          <Table
            //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false}
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            bordered
            dataSource={providerOnlineAccess} //Which data chunk you want to show in table
            // For fixed header table at top
            //   rowSelection={{
            //     ...rowSelection,
            //   }}
            onChange={handleChange}
          />
        </div>
      </div>
      {AddAccess && (
        <AddAccessModal
          handleClose={handleAddAccess}
          clicked={AddAccess}
        ></AddAccessModal>
      )}
    </div>
  );
};

export default providerOnlineAccessPage;

providerOnlineAccessPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
