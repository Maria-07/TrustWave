import { production } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import { Table } from "antd";
import React, { useState } from "react";

const ProductionSummary = () => {
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

  const columns = Object.keys(production[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(production, key),
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
        if (key === "Business_name" || key === "DBA_name") {
          return <button className="">{text}</button>;
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
    title: "Practice",
    key: "practice",
    width: 100,
    render: (text, record) => (
      <div className="flex items-center justify-center">
        <select className="modal-input-field ml-1 w-full">
          <option value=""></option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
    ),
  });
  columns.push({
    title: "Counts",
    key: "count",
    width: 100,
    render: (text, record) => (
      <div className="flex items-center justify-center">
        <input
          type="text"
          name="clear_type"
          className="modal-input-field ml-1 w-full"
          placeholder="Enter here . . ."
        />
      </div>
    ),
  });
  columns.push({
    title: "Time Taken",
    key: "time_taken",
    width: 100,
    render: (text, record) => (
      <div className="flex items-center justify-center">
        {" "}
        <input
          type="text"
          name="clear_type"
          className="modal-input-field ml-1 w-full"
          placeholder="Enter here . . ."
        />
      </div>
    ),
  });
  columns.push({
    title: "Remarks",
    key: "remarks",
    width: 100,
    render: (text, record) => (
      <div className="flex items-center justify-center">
        {" "}
        <input
          type="text"
          name="clear_type"
          className="modal-input-field ml-1 w-full"
          placeholder="Enter here . . ."
        />
      </div>
    ),
  });
  return (
    <div>
      <h1 className=" text-orange-500 text-base">production</h1>
      <div>
        {" "}
        <div className="">
          <label className="label flex items-center">
            <div className="label-font">Date</div>
          </label>
          <input
            type="date"
            name="clear_type"
            className="input-border-bottom"
          />
        </div>
        <div className=" overflow-scroll py-3 ">
          <Table
            //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            bordered
            dataSource={production} //Which data chunk you want to show in table
            // For fixed header table at top
            //   rowSelection={{
            //     ...rowSelection,
            //   }}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductionSummary;

ProductionSummary.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
