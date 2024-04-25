import RootLayout from "@/component/Layouts/RootLayout";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { Switch, Table } from "antd";
import { provider } from "@/component/Data/Data";
import CreateProviderModal from "@/component/UI/Admin/Provider/Modals/CreateProviderModal";
import { MdAdd, MdContacts } from "react-icons/md";
import Link from "next/link";
import ContactModal from "@/component/UI/Admin/Provider/Modals/ContactModal";

const ProviderPage = () => {
  const [faculty, setFaculty] = useState("");

  const [CreateProvider, setCreateProvider] = useState(false);
  const handleCreateProvider = () => {
    setCreateProvider(!CreateProvider);
  };
  const [Contacts, setContacts] = useState(false);
  const handleContacts = () => {
    setContacts(!Contacts);
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

  const columns = Object.keys(provider[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(provider, key),
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
    title: "Contact",
    key: "contact",
    width: 100,
    render: (text, record) => (
      <div className="flex items-center justify-center">
        <MdContacts
          onClick={handleContacts}
          className="text-lg text-secondary"
        />
      </div>
    ),
  });
  return (
    <div>
      <h1 className=" text-orange-500 text-base">Provider</h1>
      <div className="flex gap-2 justify-between">
        <div className="my-5">
          <label className="label">
            <h1 className="label-font">Select Faculty</h1>
          </label>
          <select
            onChange={(e) => setFaculty(e.target.value)}
            className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium  focus:outline-none"
          >
            <option value="">Select Any</option>
            <option value="1">ACHIEVE WELLNESS PT OT PLLC</option>
            <option value="2">Amro test</option>
            <option value="3">Tertiary</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/admin/provider-online-access/123`}>
            <button className="cred-button">Online Access</button>
          </Link>

          <button
            onClick={handleCreateProvider}
            className="cred-button flex items-center gap-1"
          >
            <MdAdd className="text-lg" /> Add Provider
          </button>
          <button className="cred-button">Export Contract Data</button>
        </div>
      </div>

      {!faculty && (
        <div>
          <div className="bg-rose-100 text-rose-500 border-[1px] border-rose-500 p-3 rounded-md text-xs">
            INFO! Select Practice to proceed.
          </div>
        </div>
      )}
      {faculty && (
        <>
          <div className=" overflow-scroll py-3 ">
            <Table
              //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
              pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
              size="small"
              className=" text-xs font-normal"
              columns={columns}
              bordered
              dataSource={provider} //Which data chunk you want to show in table
              // For fixed header table at top
              //   rowSelection={{
              //     ...rowSelection,
              //   }}
              onChange={handleChange}
            />
          </div>
        </>
      )}
      {CreateProvider && (
        <CreateProviderModal
          handleClose={handleCreateProvider}
          clicked={CreateProvider}
        ></CreateProviderModal>
      )}
      {Contacts && (
        <ContactModal
          handleClose={handleContacts}
          clicked={Contacts}
        ></ContactModal>
      )}
    </div>
  );
};

export default ProviderPage;

ProviderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
