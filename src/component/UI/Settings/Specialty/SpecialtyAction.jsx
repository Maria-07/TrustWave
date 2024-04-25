import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditSpecialtyModal from "./EditSpecialtyModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import SpecialtyDeleteModal from "./SpecialtyDeleteModal";

const SpecialtyAction = ({ record }) => {
  const [EditSpecialty, setEditSpecialty] = useState(false);
  const handleEditSpecialty = () => {
    setEditSpecialty(!EditSpecialty);
  };

  const [DeleteSpecialty, setDeleteSpecialty] = useState(false);
  const handleDeleteSpecialty = () => {
    setDeleteSpecialty(!DeleteSpecialty);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditSpecialty}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Specialty
            </button>
            <button
              onClick={handleDeleteSpecialty}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Specialty
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

      {EditSpecialty && (
        <EditSpecialtyModal
          record={record}
          handleClose={handleEditSpecialty}
          clicked={EditSpecialty}
        ></EditSpecialtyModal>
      )}

      {DeleteSpecialty && (
        <SpecialtyDeleteModal
          record={record}
          handleClose={handleDeleteSpecialty}
          clicked={DeleteSpecialty}
        ></SpecialtyDeleteModal>
      )}
    </div>
  );
};

export default SpecialtyAction;
