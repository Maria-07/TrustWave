import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import EditTaskModal from "./EditTaskModal";
import { Dropdown } from "antd";
import { BsThreeDots } from "react-icons/bs";
import TaskDeleteModal from "./TaskDeleteModal";

const TaskAction = ({ record }) => {
  const [EditTask, setEditTask] = useState(false);
  const handleEditTask = () => {
    setEditTask(!EditTask);
  };

  const [DeleteTask, setDeleteTask] = useState(false);
  const handleDeleteTask = () => {
    setDeleteTask(!DeleteTask);
  };
  return (
    <div>
      <Dropdown
        overlay={
          <div className="bg-white shadow-md p-2 rounded-sm border-[1px]">
            <button
              onClick={handleEditTask}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdEdit className="text-lime-700" title="edit" />
              Edit Task
            </button>
            <button
              onClick={handleDeleteTask}
              className="flex items-center gap-2 font-semibold hover:bg-blue-200 min-w-[150px] px-1 hover:rounded-sm"
            >
              <MdDeleteOutline className="text-rose-500" title="delete" />
              Delete Task
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

      {EditTask && (
        <EditTaskModal
          record={record}
          handleClose={handleEditTask}
          clicked={EditTask}
        ></EditTaskModal>
      )}

      {DeleteTask && (
        <TaskDeleteModal
          record={record}
          handleClose={handleDeleteTask}
          clicked={DeleteTask}
        ></TaskDeleteModal>
      )}
    </div>
  );
};

export default TaskAction;
