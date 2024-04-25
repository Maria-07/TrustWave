import { Tasks } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import SettingLayout from "@/component/Layouts/SettingLayout";
import AddTaskModal from "@/component/UI/Settings/Task/AddTaskModal";
import TaskAction from "@/component/UI/Settings/Task/TaskAction";
import { Switch, Table } from "antd";
import React, { useState } from "react";
import { FaCircle, FaPlus } from "react-icons/fa";

const Task = () => {
  const [AddTask, setAddTask] = useState(false);
  const handleAddTask = () => {
    setAddTask(!AddTask);
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

  const columns = Object.keys(Tasks[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(Tasks, key),
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
        } else if (key === "dashboard") {
          return (
            <div className="flex items-center justify-center">
              {record?.dashboard ? (
                <Switch size="small" onClick={() => {}} />
              ) : (
                <Switch size="small" onClick={() => {}} />
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
    width: 100,
    render: (text, record) => (
      <div>
        <TaskAction record={record}></TaskAction>
      </div>
    ),
  });
  return (
    <div>
      <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <h1 className=" text-orange-500 text-base ">Task </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleAddTask()}
            className="cred-button flex items-center gap-2"
          >
            <FaPlus /> Add Task Name
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className=" overflow-scroll pb-4 ">
            <Table
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal"
              columns={columns}
              bordered
              dataSource={Tasks}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {AddTask && (
        <AddTaskModal
          handleClose={handleAddTask}
          clicked={AddTask}
        ></AddTaskModal>
      )}
    </div>
  );
};

export default Task;

Task.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <SettingLayout>{page}</SettingLayout>
    </RootLayout>
  );
};
