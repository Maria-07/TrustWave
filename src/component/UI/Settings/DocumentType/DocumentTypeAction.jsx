import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditDocumentTypeModal from "./EditDocumentTypeModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import DocumentTypeDeleteModal from "./DocumentTypeDeleteModal";

const DocumentTypeAction = ({ record }) => {
  const [EditDocumentType, setEditDocumentType] = useState(false);
  const handleEditDocumentType = () => {
    setEditDocumentType(!EditDocumentType);
  };

  const [DeleteDocumentType, setDeleteDocumentType] = useState(false);
  const handleDeleteDocumentType = () => {
    setDeleteDocumentType(!DeleteDocumentType);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditDocumentType}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Document Type
            </button>
            <button
              onClick={handleDeleteDocumentType}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Document Type
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

      {EditDocumentType && (
        <EditDocumentTypeModal
          record={record}
          handleClose={handleEditDocumentType}
          clicked={EditDocumentType}
        ></EditDocumentTypeModal>
      )}

      {DeleteDocumentType && (
        <DocumentTypeDeleteModal
          record={record}
          handleClose={handleDeleteDocumentType}
          clicked={DeleteDocumentType}
        ></DocumentTypeDeleteModal>
      )}
    </div>
  );
};

export default DocumentTypeAction;
