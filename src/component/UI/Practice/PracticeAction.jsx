import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import PracticeEditModal from "./Modals/PracticeEditModal";
import PracticeDeleteModal from "./Modals/PracticeDeleteModal";

const PracticeAction = ({ record }) => {
  const [EditPractice, setEditPractice] = useState(false);
  const handleEditPractice = () => {
    setEditPractice(!EditPractice);
  };
  const [DeletePractice, setDeletePractice] = useState(false);
  const handleDeletePractice = () => {
    setDeletePractice(!DeletePractice);
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <MdEdit
          onClick={handleEditPractice}
          className="text-lime-700"
          title="edit"
        />
        <MdDeleteOutline
          onClick={handleDeletePractice}
          className="text-rose-500"
          title="delete"
        />
      </div>
      {EditPractice && (
        <PracticeEditModal
          record={record}
          handleClose={handleEditPractice}
          clicked={EditPractice}
        ></PracticeEditModal>
      )}
      {DeletePractice && (
        <PracticeDeleteModal
          record={record}
          handleClose={handleDeletePractice}
          clicked={DeletePractice}
        ></PracticeDeleteModal>
      )}
    </div>
  );
};

export default PracticeAction;
