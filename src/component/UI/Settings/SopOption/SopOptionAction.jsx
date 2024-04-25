import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditSopOptionModal from "./EditSopOptionModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import SopOptionDeleteModal from "./SopOptionDeleteModal";

const SopOptionAction = ({ record }) => {
  const [EditSopOption, setEditSopOption] = useState(false);
  const handleEditSopOption = () => {
    setEditSopOption(!EditSopOption);
  };

  const [DeleteSopOption, setDeleteSopOption] = useState(false);
  const handleDeleteSopOption = () => {
    setDeleteSopOption(!DeleteSopOption);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditSopOption}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Option Name
            </button>
            <button
              onClick={handleDeleteSopOption}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Option Name
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

      {EditSopOption && (
        <EditSopOptionModal
          record={record}
          handleClose={handleEditSopOption}
          clicked={EditSopOption}
        ></EditSopOptionModal>
      )}

      {DeleteSopOption && (
        <SopOptionDeleteModal
          record={record}
          handleClose={handleDeleteSopOption}
          clicked={DeleteSopOption}
        ></SopOptionDeleteModal>
      )}
    </div>
  );
};

export default SopOptionAction;
