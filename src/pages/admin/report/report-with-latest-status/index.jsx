import { report } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import PracticeMultiSelect from "@/shared/CustomeMultiSelect/PracticeMultiSelect";
import { Table } from "antd";
import React, { useState } from "react";

const ReportAllStatus = () => {
  const [table, setTable] = useState(false);

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

  const columns = Object.keys(report[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(report, key),
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
  return (
    <div>
      {" "}
      <h1 className=" text-orange-500 text-base">Report With Latest Status</h1>
      <div className="flex items-center my-2 gap-2">
        <div>
          <label className="label">
            <div className="label-font">Facility Name</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <div>
          <label className="label">
            <div className="label-font">Select Provider</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <div>
          <label className="label">
            <div className="label-font">Contract Name</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <div>
          <label className="label">
            <div className="label-font">Status</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <div>
          <label className="label">
            <h1 className="label-font">Account Type</h1>
          </label>
          <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
            <option value="">Select Any</option>
            <option value="2">Amro test</option>
            <option value="3">Tertiary</option>
          </select>
        </div>
        <div>
          <label className="label">
            <div className="label-font">Assigned To</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <button
          onClick={() => setTable(true)}
          className="cred-button mt-[14px]"
        >
          Go
        </button>
        <button className="cred-button mt-[14px]">Export Excel</button>
      </div>
      {table && (
        <>
          {" "}
          <div className=" overflow-scroll py-3 ">
            <Table
              //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal"
              columns={columns}
              bordered
              dataSource={report} //Which data chunk you want to show in table
              // For fixed header table at top
              //   rowSelection={{
              //     ...rowSelection,
              //   }}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ReportAllStatus;

ReportAllStatus.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
