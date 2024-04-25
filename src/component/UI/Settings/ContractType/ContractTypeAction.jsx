import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditContractTypeModal from "./EditContractTypeModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import ContractTypeDeleteModal from "./ContractTypeDeleteModal";

const ContractTypeAction = ({ record }) => {
  const [EditContractType, setEditContractType] = useState(false);
  const handleEditContractType = () => {
    setEditContractType(!EditContractType);
  };

  const [DeleteContractType, setDeleteContractType] = useState(false);
  const handleDeleteContractType = () => {
    setDeleteContractType(!DeleteContractType);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditContractType}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Contract Type
            </button>
            <button
              onClick={handleDeleteContractType}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Contract Type
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

      {EditContractType && (
        <EditContractTypeModal
          record={record}
          handleClose={handleEditContractType}
          clicked={EditContractType}
        ></EditContractTypeModal>
      )}

      {DeleteContractType && (
        <ContractTypeDeleteModal
          record={record}
          handleClose={handleDeleteContractType}
          clicked={DeleteContractType}
        ></ContractTypeDeleteModal>
      )}
    </div>
  );
};

export default ContractTypeAction;
