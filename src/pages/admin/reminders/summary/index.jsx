import { summary } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import { Table } from "antd";
import React, { useState } from "react";

const Summary = () => {
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

  const columns = [
    {
      title: " Admin Reminders",
      children: Object.keys(summary[0])
        .filter((key) => key !== "id") // Exclude 'id'
        .map((key, index) => ({
          title: key.replace(/_/g, " "), // Capitalize title
          dataIndex: key,
          key: key,
          width: index === 0 ? 110 : 100, // Adjust width for the action column
          filters: generateFilterValues(summary, key),
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
        })),
    },
  ];
  const columns2 = [
    {
      title: " Account Manager Reminders",
      children: Object.keys(summary[0])
        .filter((key) => key !== "id") // Exclude 'id'
        .map((key, index) => ({
          title: key.replace(/_/g, " "), // Capitalize title
          dataIndex: key,
          key: key,
          width: index === 0 ? 110 : 100, // Adjust width for the action column
          filters: generateFilterValues(summary, key),
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
        })),
    },
  ];
  const columns3 = [
    {
      title: " Base Staff Reminders",
      children: Object.keys(summary[0])
        .filter((key) => key !== "id") // Exclude 'id'
        .map((key, index) => ({
          title: key.replace(/_/g, " "), // Capitalize title
          dataIndex: key,
          key: key,
          width: index === 0 ? 110 : 100, // Adjust width for the action column
          filters: generateFilterValues(summary, key),
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
        })),
    },
  ];

  // Use columns array in your Table component

  return (
    <div>
      {" "}
      <h1 className=" text-orange-500 text-base mb-4">Summary</h1>
      <div>
        <div className=" overflow-scroll pb-4 ">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns}
            bordered
            dataSource={summary}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div className=" overflow-scroll pb-4 ">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns2}
            bordered
            dataSource={summary}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div className=" overflow-scroll pb-4 ">
          <Table
            pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
            size="small"
            className=" text-xs font-normal"
            columns={columns3}
            bordered
            dataSource={summary}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;

Summary.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
