import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditContractNameModal from "./EditContractNameModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import ContractNameDeleteModal from "./ContractNameDeleteModal";

const ContractNameAction = ({ record }) => {
  const [EditContractName, setEditContractName] = useState(false);
  const handleEditContractName = () => {
    setEditContractName(!EditContractName);
  };

  const [DeleteContractName, setDeleteContractName] = useState(false);
  const handleDeleteContractName = () => {
    setDeleteContractName(!DeleteContractName);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditContractName}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Contract Name
            </button>
            <button
              onClick={handleDeleteContractName}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Contract Name
            </button>
          </div>
        }
        trigger={["click"]}
        overlayStyle={{ zIndex: "100" }}
      >
        <button onClick={(e) => e.preventDefault()}>
          <>
            <BsThreeDots />
          </>
        </button>
      </Dropdown>

      {EditContractName && (
        <EditContractNameModal
          record={record}
          handleClose={handleEditContractName}
          clicked={EditContractName}
        ></EditContractNameModal>
      )}

      {DeleteContractName && (
        <ContractNameDeleteModal
          record={record}
          handleClose={handleDeleteContractName}
          clicked={DeleteContractName}
        ></ContractNameDeleteModal>
      )}
    </div>
  );
};

export default ContractNameAction;
