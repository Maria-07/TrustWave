import { demoData } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import { Table } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiDownload } from "react-icons/fi";
import { TbArrowBack } from "react-icons/tb";
import { IoMdDoneAll } from "react-icons/io";

const DashboardTable = () => {
  const [tableOpen, setTableOpen] = useState(false);

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

  const columns = [
    {
      title: "Name",
      dataIndex: "first_name",
      key: "first_name",
      width: 130,
      filters: generateFilterValues(demoData, "first_name"),
      filterSearch: true, //Filtering value search(Antd new Feature)
      filteredValue: filteredInfo.first_name || null,
      onFilter: (value, record) => record.first_name.includes(value),
      sorter: (a, b) => {
        return a.first_name > b.first_name ? -1 : 1;
      },
      sortOrder:
        sortedInfo.columnKey === "first_name" ? sortedInfo.order : null,
      render: (_, { first_name, id, key }) => {
        return (
          <button className="text-secondary font-medium">{first_name}</button>
        );
      },
      // ellipsis: true,
    },

    {
      title: "Account Type",
      dataIndex: "last_name",
      key: "last_name",
      width: 170,
      filters: generateFilterValues(demoData, "last_name"),
      filterSearch: true,
      filteredValue: filteredInfo.last_name || null,
      onFilter: (value, record) => {
        if (record?.last_name !== null) {
          return record.last_name.includes(value);
        }
      },
      sorter: (a, b) => {
        return a.last_name > b.last_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "last_name" ? sortedInfo.order : null,
      ellipsis: true,
      //render contains what we want to reflect as our data
      render: (_, { last_name }) => {
        return (
          <div>
            <h1>{last_name}</h1>
          </div>
        );
      },
    },
    {
      title: "Logged In",
      dataIndex: "last_name",
      key: "last_name",
      width: 170,
      filters: generateFilterValues(demoData, "last_name"),
      filterSearch: true,
      //render contains what we want to reflect as our data
      render: (_, { last_name }) => {
        return (
          <div>
            <h1>01/22/2024 2:25:AM</h1>
          </div>
        );
      },
      filteredValue: filteredInfo.last_name || null,
      onFilter: (value, record) => {
        if (record?.last_name !== null) {
          return record.last_name.includes(value);
        }
      },
      sorter: (a, b) => {
        return a.last_name > b.last_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "last_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Logged Out",
      dataIndex: "last_name",
      key: "last_name",
      width: 170,
      filters: generateFilterValues(demoData, "last_name"),
      filterSearch: true,
      //render contains what we want to reflect as our data
      render: (_, { last_name }) => {
        return (
          <div>
            <h1>01/22/2024 2:25:AM</h1>
          </div>
        );
      },
      filteredValue: filteredInfo.last_name || null,
      onFilter: (value, record) => {
        if (record?.last_name !== null) {
          return record.last_name.includes(value);
        }
      },
      sorter: (a, b) => {
        return a.last_name > b.last_name ? -1 : 1;
      },
      sortOrder: sortedInfo.columnKey === "last_name" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  //!   form submit
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setTableOpen(true);
  };

  return (
    <div>
      <>
        <div className=" overflow-scroll py-3 ">
          <Table
            //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            bordered
            dataSource={demoData} //Which data chunk you want to show in table
            // For fixed header table at top
            //   rowSelection={{
            //     ...rowSelection,
            //   }}
            onChange={handleChange}
          />
        </div>
      </>
    </div>
  );
};

DashboardTable.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardTable;
