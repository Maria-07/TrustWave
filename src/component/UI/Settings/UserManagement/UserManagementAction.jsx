import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditUserModal from "./EditUserModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import UserDeleteModal from "./UserDeleteModal";

const UserManagementAction = ({ record }) => {
  const [EditUser, setEditUser] = useState(false);
  const handleEditUser = () => {
    setEditUser(!EditUser);
  };

  const [DeleteUser, setDeleteUser] = useState(false);
  const handleDeleteUser = () => {
    setDeleteUser(!DeleteUser);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditUser}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit User
            </button>
            <button
              onClick={handleDeleteUser}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete User
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

      {EditUser && (
        <EditUserModal
          record={record}
          handleClose={handleEditUser}
          clicked={EditUser}
        ></EditUserModal>
      )}

      {DeleteUser && (
        <UserDeleteModal
          record={record}
          handleClose={handleDeleteUser}
          clicked={DeleteUser}
        ></UserDeleteModal>
      )}
    </div>
  );
};

export default UserManagementAction;
