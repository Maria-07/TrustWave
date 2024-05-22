import { practiceData } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import PracticeAction from "@/component/UI/Practice/PracticeAction";
import Cards from "@/component/UI/Practice/PracticeCards/Cards";
import { Switch, Table } from "antd";
import React, { useState } from "react";
import { FaCircle, FaFilter } from "react-icons/fa";

const PracticePage = () => {
  const [cardView, setCardView] = useState(false);
  const [filter, setFilter] = useState(true);
  const [type, setType] = useState("Card View");

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

  const columns = Object.keys(practiceData[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 80, // Adjust width for the action column
      filters: generateFilterValues(practiceData, key),
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
        } else if (key === "status") {
          return (
            <div className="flex items-center justify-center">
              {record?.status ? (
                <FaCircle className="text-green-500" />
              ) : (
                <FaCircle className="text-rose-500" />
              )}
            </div>
          );
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
        <PracticeAction record={record}></PracticeAction>
      </div>
    ),
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        {filter && (
          <div className="border p-3 bg-gray-50 f">
            <div className="flex justify-between">
              <h1 className="font-semibold text-sm ">Filters</h1>
              {Table && (
                <>
                  <button
                    onClick={clearFilters}
                    className=" py-2 px-1  bg-white from-bg-primary text-xs  hover:bg-secondary text-secondary hover:text-white border border-secondary rounded-sm"
                  >
                    Clear filters
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        <div
          className={
            filter
              ? `col-span-4 bg-gray-100  rounded-l-md pl-2 py-1 border overflow-y-scroll  h-[100vh]`
              : `col-span-5  mx-auto  ${
                  cardView ? `w-[100%] lg:w-[80%]` : `w-[100%] `
                }`
          }
        >
          <div className="flex items-center gap-2 justify-between flex-wrap pr-1 pt-1">
            <h1 className=" text-orange-500 text-base">Practice</h1>
            <div className="flex items-center gap-2">
              {" "}
              <Switch
                checkedChildren="Card View"
                unCheckedChildren="List View"
                defaultChecked
                onClick={() => setCardView(!cardView)}
              />
              <div
                onClick={() => {
                  setFilter(!filter);
                  // setCssType(!cssType);
                }}
                className="border p-1 shadow-md bg-gray-50 rounded-md"
              >
                <FaFilter />
              </div>
            </div>
          </div>
          {cardView ? (
            <div className=" p-2  ">
              <div className="overflow-y-scroll">
                <div className="h-[40%] mx-auto w-[100%] sm:w-[70%]">
                  <div className="overflow-y-scroll">
                    <Cards practiceData={practiceData}> </Cards>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className=" overflow-scroll py-3 ">
                <Table
                  //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
                  pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
                  size="small"
                  className=" text-xs font-normal"
                  columns={columns}
                  bordered
                  dataSource={practiceData} //Which data chunk you want to show in table
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
      </div>
    </div>
  );
};

export default PracticePage;

PracticePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
