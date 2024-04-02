import { Modal } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const PracticeEditModal = ({ handleClose, clicked, record }) => {
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
              Edit Practice
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 pt-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="clear_type"
                {...register("punch_date")}
              />
              <label className="label">
                <div className="modal-label-name mt-[2px]">Active Practice</div>
              </label>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-3">
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Business Name</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.Business_name}
                  className="modal-input-field ml-1 w-full"
                  {...register("Business_name")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">DBA Name</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.DBA_name}
                  className="modal-input-field ml-1 w-full"
                  {...register("DBA_name")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Tax id no.</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.tax_id_no}
                  className="modal-input-field ml-1 w-full"
                  {...register("tax_id_no")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">NPI</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.npi}
                  className="modal-input-field ml-1 w-full"
                  {...register("npi")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Address</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.address}
                  className="modal-input-field ml-1 w-full"
                  {...register("address")}
                />
              </div>
              <div className="flex items-center justify-between gap-1 sm:flex-nowrap flex-wrap">
                <div className="">
                  <label className="label flex items-center">
                    <div className="modal-label-name">City</div>{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clear_type"
                    defaultValue={record?.city}
                    className="modal-input-field ml-1 w-full"
                    {...register("city")}
                  />
                </div>
                <div className="">
                  <label className="label flex items-center">
                    <div className="modal-label-name">State</div>{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clear_type"
                    defaultValue={record?.state}
                    className="modal-input-field ml-1 w-full"
                    {...register("state")}
                  />
                </div>
                <div className="">
                  <label className="label flex items-center">
                    <div className="modal-label-name">ZIP</div>{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clear_type"
                    defaultValue={record?.zip}
                    className="modal-input-field ml-1 w-full"
                    {...register("zip")}
                  />
                </div>
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Phone Number</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.phone_number}
                  className="modal-input-field ml-1 w-full"
                  {...register("phone_number")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Mediaid</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  defaultValue={record?.mediaid}
                  className="modal-input-field ml-1 w-full"
                  {...register("mediaid")}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label flex items-center">
                  <div className="modal-label-name">Document</div>{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="file"
                  name="clear_type"
                  //   defaultValue={record?.file}
                  className="modal-input-field ml-1 w-full"
                  {...register("file")}
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

export default PracticeEditModal;
