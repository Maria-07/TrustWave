import { Dropdown } from "antd";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  MdDeleteOutline,
  MdEdit,
  MdOutlineDocumentScanner,
} from "react-icons/md";
import EditContractDocumentModal from "./EditContractDocumentModal";
import ShowDocumentsModal from "./ShowDocumentsModal";
import ContractDocumentDeleteModal from "./ContractDocumentDeleteModal";

const ContractDocumentAction = ({ record }) => {
  const [EditDocument, setEditDocument] = useState(false);
  const handleEditDocument = () => {
    setEditDocument(!EditDocument);
  };
  const [ShowDocument, setShowDocument] = useState(false);
  const handleShowDocument = () => {
    setShowDocument(!ShowDocument);
  };

  const [DeleteDocument, setDeleteDocument] = useState(false);
  const handleDeleteDocument = () => {
    setDeleteDocument(!DeleteDocument);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleShowDocument}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdOutlineDocumentScanner
                className="text-lime-700"
                title="edit"
              />
              View Document
            </button>
            <button
              onClick={handleEditDocument}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Document
            </button>
            <button
              onClick={handleDeleteDocument}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Document
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

      {ShowDocument && (
        <ShowDocumentsModal
          record={record}
          handleClose={handleShowDocument}
          clicked={ShowDocument}
        ></ShowDocumentsModal>
      )}
      {EditDocument && (
        <EditContractDocumentModal
          record={record}
          handleClose={handleEditDocument}
          clicked={EditDocument}
        ></EditContractDocumentModal>
      )}

      {DeleteDocument && (
        <ContractDocumentDeleteModal
          record={record}
          handleClose={handleDeleteDocument}
          clicked={DeleteDocument}
        ></ContractDocumentDeleteModal>
      )}
    </div>
  );
};

export default ContractDocumentAction;
