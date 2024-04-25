import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditContractStatusModal from "./EditContractStatusModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import ContractTypeDeleteModal from "./ContractStatusDeleteModal";

const ContractStatusAction = ({ record }) => {
  const [EditContractStatus, setEditContractStatus] = useState(false);
  const handleEditContractStatus = () => {
    setEditContractStatus(!EditContractStatus);
  };

  const [DeleteContractStatus, setDeleteContractStatus] = useState(false);
  const handleDeleteContractStatus = () => {
    setDeleteContractStatus(!DeleteContractStatus);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditContractStatus}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Contract Status
            </button>
            <button
              onClick={handleDeleteContractStatus}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Contract Status
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

      {EditContractStatus && (
        <EditContractStatusModal
          record={record}
          handleClose={handleEditContractStatus}
          clicked={EditContractStatus}
        ></EditContractStatusModal>
      )}

      {DeleteContractStatus && (
        <ContractTypeDeleteModal
          record={record}
          handleClose={handleDeleteContractStatus}
          clicked={DeleteContractStatus}
        ></ContractTypeDeleteModal>
      )}
    </div>
  );
};

export default ContractStatusAction;
