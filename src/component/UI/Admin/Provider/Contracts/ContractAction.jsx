import { Dropdown } from "antd";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdDeleteOutline, MdEdit, MdNoteAlt } from "react-icons/md";
import EditContractModal from "./EditContractModal";
import ContractDeleteModal from "./ContractDeleteModal";
import AddNoteModal from "./AddNoteModal";
import ViewNotesModal from "./ViewNotesModal";
import { GrDocument } from "react-icons/gr";
import { LuView } from "react-icons/lu";

const ContractAction = ({ record }) => {
  const [AddViewNote, setAddViewNote] = useState(false);
  const handleAddViewNote = () => {
    setAddViewNote(!AddViewNote);
  };
  const [AddNote, setAddNote] = useState(false);
  const handleAddNote = () => {
    setAddNote(!AddNote);
  };

  const [EditContract, setEditContract] = useState(false);
  const handleEditContract = () => {
    setEditContract(!EditContract);
  };

  const [DeleteContract, setDeleteContract] = useState(false);
  const handleDeleteContract = () => {
    setDeleteContract(!DeleteContract);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleAddNote}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdNoteAlt className="text-blue-700" title="note" />
              Add Note
            </button>
            <button
              onClick={handleAddViewNote}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <LuView className="text-sky-700" title="note" />
              View Note
            </button>
            <button
              onClick={handleEditContract}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Contract
            </button>
            <button
              onClick={handleDeleteContract}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Contract
            </button>
            <button
              onClick={handleDeleteContract}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <GrDocument className="text-green-500" title="delete" />
              Document
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

      {AddNote && (
        <AddNoteModal
          record={record}
          handleClose={handleAddNote}
          clicked={AddNote}
        ></AddNoteModal>
      )}
      {AddViewNote && (
        <ViewNotesModal
          record={record}
          handleClose={handleAddViewNote}
          clicked={AddViewNote}
        ></ViewNotesModal>
      )}
      {EditContract && (
        <EditContractModal
          record={record}
          handleClose={handleEditContract}
          clicked={EditContract}
        ></EditContractModal>
      )}

      {DeleteContract && (
        <ContractDeleteModal
          record={record}
          handleClose={handleDeleteContract}
          clicked={DeleteContract}
        ></ContractDeleteModal>
      )}
    </div>
  );
};

export default ContractAction;
