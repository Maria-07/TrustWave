/* eslint-disable react-hooks/rules-of-hooks */
import {
  provideContractcopy,
  providerCOntractDoc,
} from "@/component/Data/Data";
import ProviderLayout from "@/component/Layouts/ProviderLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import AddContractDocumentModal from "@/component/UI/Admin/Provider/ContractDocuments/AddContractDocumentModal";
import ContractDocumentAction from "@/component/UI/Admin/Provider/ContractDocuments/ContractDocumentAction";

import { Table } from "antd";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const InsuranceDocuments = () => {
  const [AddDocument, setAddDocument] = useState(false);
  const handleAddDocument = () => {
    setAddDocument(!AddDocument);
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

  const copyContract = Object.keys(provideContractcopy[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(provideContractcopy, key),
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
        if (key === "status") {
          return (
            <div className="flex items-center justify-center">
              {record?.status}
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

  const columns = Object.keys(providerCOntractDoc[0])
    .filter((key) => key !== "id") // Exclude 'id'
    .map((key, index) => ({
      title: key.replace(/_/g, " "), // Capitalize title
      // Replace underscores with spaces
      dataIndex: key,
      key: key,
      width: index === 0 ? 110 : 100, // Adjust width for the action column
      filters: generateFilterValues(providerCOntractDoc, key),
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
        if (key === "status") {
          return (
            <div className="flex items-center justify-center">
              {record?.status}
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
        {" "}
        <ContractDocumentAction record={record}></ContractDocumentAction>
      </div>
    ),
  });
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <h1 className=" text-orange-500 text-base">
          Provider InsuranceDocuments
        </h1>

        <button
          onClick={handleAddDocument}
          className="cred-button flex items-center gap-1"
        >
          <MdAdd className="text-lg" /> Add Document
        </button>
      </div>

      <div className=" overflow-scroll py-3 ">
        <Table
          //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal"
          columns={columns}
          bordered
          dataSource={providerCOntractDoc} //Which data chunk you want to show in table
          // For fixed header table at top
          //   rowSelection={{
          //     ...rowSelection,
          //   }}
          onChange={handleChange}
        />
      </div>
      <h1 className=" text-orange-500 text-base">
        Copy from provider Contract
      </h1>
      <div className=" overflow-scroll py-3 ">
        <Table
          //   rowKey={(record) => record.timesheet_id} //warning issue solve ar jnno unique id rowKey hisabey use hobey
          pagination={false} //pagination dekhatey chailey just 'true' korey dilei hobey
          size="small"
          className=" text-xs font-normal"
          columns={copyContract}
          bordered
          dataSource={provideContractcopy} //Which data chunk you want to show in table
          // For fixed header table at top
          //   rowSelection={{
          //     ...rowSelection,
          //   }}
          onChange={handleChange}
        />
      </div>

      {AddDocument && (
        <AddContractDocumentModal
          handleClose={handleAddDocument}
          clicked={AddDocument}
        ></AddContractDocumentModal>
      )}
    </div>
  );
};

export default InsuranceDocuments;

InsuranceDocuments.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <ProviderLayout>{page}</ProviderLayout>
    </RootLayout>
  );
};
