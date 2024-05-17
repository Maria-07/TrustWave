import { Dropdown } from "antd";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditDocumentModal from "./EdiDocumentModal";
import DocumentDeleteModal from "./DocumentDeleteModal";

const DocumentAction = ({ record }) => {
  const [EditDocument, setEditDocument] = useState(false);
  const handleEditDocument = () => {
    setEditDocument(!EditDocument);
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

      {EditDocument && (
        <EditDocumentModal
          record={record}
          handleClose={handleEditDocument}
          clicked={EditDocument}
        ></EditDocumentModal>
      )}

      {DeleteDocument && (
        <DocumentDeleteModal
          record={record}
          handleClose={handleDeleteDocument}
          clicked={DeleteDocument}
        ></DocumentDeleteModal>
      )}
    </div>
  );
};

export default DocumentAction;
