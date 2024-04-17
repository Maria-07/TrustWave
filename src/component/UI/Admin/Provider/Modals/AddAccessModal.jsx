import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const AddAccessModal = ({ handleClose, clicked }) => {
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
              Add Access
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 pt-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-3 mr-2 gap-x-2 gap-y-3">
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Access Name</div>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("provider_type")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Provider Name</div>
                  <span className="text-rose-500">*</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("gender")}
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Url</div>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("tax_id_no")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">User Name</div>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("npi")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Password</div>
                </label>
                <input
                  type="password"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("address")}
                />
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Security Questions</div>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("mediaid")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Answers</div>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("mediaid")}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-10"></div>
            <div className="flex items-end justify-end gap-2 mt-2">
              <button className=" border-secondary flex items-center border rounded-sm">
                <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
                  Create Access
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

export default AddAccessModal;
