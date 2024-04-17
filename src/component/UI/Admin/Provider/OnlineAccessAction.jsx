import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import AccessEditModal from "./Modals/AccessEditModal";
import AccessDeleteModal from "./Modals/AccessDeleteModal";

const OnlineAccessAction = ({ record }) => {
  const [EditAccess, setEditAccess] = useState(false);
  const handleEditAccess = () => {
    setEditAccess(!EditAccess);
  };
  const [DeleteAccess, setDeleteAccess] = useState(false);
  const handleDeleteAccess = () => {
    setDeleteAccess(!DeleteAccess);
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <MdEdit
          onClick={handleEditAccess}
          className="text-lime-700"
          title="edit"
        />
        <MdDeleteOutline
          onClick={handleDeleteAccess}
          className="text-rose-500"
          title="delete"
        />
      </div>
      {EditAccess && (
        <AccessEditModal
          record={record}
          handleClose={handleEditAccess}
          clicked={EditAccess}
        ></AccessEditModal>
      )}
      {DeleteAccess && (
        <AccessDeleteModal
          record={record}
          handleClose={handleDeleteAccess}
          clicked={DeleteAccess}
        ></AccessDeleteModal>
      )}
    </div>
  );
};

export default OnlineAccessAction;
