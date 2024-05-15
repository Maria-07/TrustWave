import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Modal } from "antd";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const ViewNotesModal = ({ handleClose, clicked, record }) => {
  return (
    <div>
      <Modal
        // fullScreen={fullScreen}
        open={clicked}
        centered
        width={500}
        footer={false}
        closable={false}
        bodyStyle={{ padding: "0" }}
        className="box rounded-md"
      >
        <div className=" py-2">
          <div className="flex items-center justify-between px-1">
            <h1 className="text-xl font-semibold tracking-tight">
              Follow Up - Contract Name will be here. It is contract name.
            </h1>
            <IoCloseCircleOutline
              onClick={handleClose}
              className="text-gray-600 font-medium text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div className="h-[350px] mt-2 overflow-scroll pl-3">
            <div className="flex items-center gap-2 my-2 ">
              <img src={""} className="w-14 h-14 mt-3" alt="" />
              <div className="border rounded-md  bg-[#fef9f9] min-w-[350px] px-2 py-1">
                <div className="flex items-center justify-between gap-2 flex-wrap ">
                  <h1 className="text-orange-300 text-[16px] font-medium">
                    admintest
                  </h1>
                  <div className="flex items-center gap-1">
                    <h5 className="text-[10px] text-white bg-blue-600 px-1 rounded-lg">
                      W/D: 02-08-2023
                    </h5>
                    <h5 className="text-[10px] text-white bg-rose-600 px-1 rounded-lg">
                      F/D: 02-15-2023
                    </h5>
                  </div>
                </div>
                <div className="bg-gray-200 py-[1px] mt-1"></div>
                <p className="text-xs font-normal mt-1">haider haider</p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end gap-2 mt-2">
            <button
              type="button"
              className="border-rose-600 flex items-center border rounded-sm"
              onClick={handleClose}
            >
              <MdDeleteOutline className="text-white bg-rose-700 px-1 py-[2px] text-[28px]" />
              <span className="px-2 py-[6px] bg-rose-500 transition-all hover:bg-rose-600 text-white text-xs">
                Cancel
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewNotesModal;
