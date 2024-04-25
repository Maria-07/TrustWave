import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const AddContractTypeModal = ({ handleClose, clicked }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <div>
      {" "}
      <Modal
        open={clicked}
        centered
        footer={null}
        bodyStyle={{ padding: "0" }}
        width={600}
        closable={false}
        className="box"
      >
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-xl  font-semibold tracking-tight">
              Create New Contract Type
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 pt-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-3">
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Contract Type</div>{" "}
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("Business_name")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-10"></div>
            <div className="flex items-end justify-end gap-2 mt-2">
              <button className=" border-secondary flex items-center border rounded-sm">
                <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
                  Save
                </span>
              </button>
              <button
                className=" border-rose-600 flex items-center border rounded-sm"
                onClick={handleClose}
              >
                <MdDeleteOutline className=" text-white bg-rose-700  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-rose-500 transition-all hover:bg-rose-600 text-white text-xs">
                  Cancel
                </span>
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddContractTypeModal;
