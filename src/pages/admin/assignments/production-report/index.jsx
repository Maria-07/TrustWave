/* eslint-disable react-hooks/rules-of-hooks */
import { practiceReport } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import PracticeMultiSelect from "@/shared/CustomeMultiSelect/PracticeMultiSelect";
import CustomDateRangePicker from "@/shared/DateRangePicker/CustomDateRangePicker";
import { Table, Typography } from "antd";
import React, { useState } from "react";

const practiceReportReport = () => {
  const [table, setTable] = useState(false);
  const { Text } = Typography;

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

  const columns = Object.keys(practiceReport[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(practiceReport, key),
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
      <div className="flex items-center gap-2">
        <div>
          <label className="label flex items-center">
            <div className="label-font">Practice</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <div>
          <label className="label">
            <h1 className="label-font">Select Practice</h1>
          </label>
          <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
            <option value="">Select Any</option>
            <option value="1">ACHIEVE WELLNESS PT OT PLLC</option>
            <option value="2">Amro test</option>
            <option value="3">Tertiary</option>
          </select>
        </div>
        <div>
          <label className="label">
            <div className="label-font">Practice</div>
          </label>
          <PracticeMultiSelect
            theme={false}
            practices={[]}
            setPracticeId={1}
          ></PracticeMultiSelect>
        </div>
        <div>
          <label className="label">
            <div className="label-font">Practice</div>
          </label>
          <CustomDateRangePicker></CustomDateRangePicker>
        </div>
        <button
          onClick={() => setTable(true)}
          className="cred-button mt-[14px]"
        >
          Go
        </button>
      </div>
      <div>
        {" "}
        {table && (
          <div className=" overflow-scroll py-3 my-3">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              bordered
              className=" text-xs font-normal "
              columns={columns}
              dataSource={practiceReport}
              scroll={{
                y: 700,
              }}
              onChange={handleChange}
              summary={(pageData) => {
                let totalCount = 0;
                pageData.forEach(({ counts }) => {
                  totalCount += counts;
                });
                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={1} colSpan={3}>
                        <span className="text-black font-bold flex justify-end mx-5 "></span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2}>
                        <span className="text-black font-bold flex justify-center mx-5 ">
                          {totalCount}
                        </span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={2}>
                        <span className="text-black font-bold flex justify-center mx-5 ">
                          Total in Hours: 9 <br /> Total in Min: 6
                        </span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell index={6} colSpan={2}>
                        <Text className="text-black font-bold flex justify-end"></Text>
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default practiceReportReport;

practiceReportReport.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
