import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const CreateProviderModal = ({ handleClose, clicked }) => {
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
              Create Provider
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>

          <div className="bg-gray-200 pt-[1px] mt-3"></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-3">
              <div className="sm:col-span-2">
                <label className="label flex items-center">
                  <div className="modal-label-name">Provider Type</div>
                  <span className="text-rose-500">*</span>
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
                  <div className="modal-label-name">First Name</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("first_name")}
                />
              </div>
              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Last Name</div>
                  <span className="text-rose-500">*</span>
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
                  <div className="modal-label-name">Contact Info</div>
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
                  <div className="modal-label-name">DOB</div>
                </label>
                <input
                  type="date"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("address")}
                />
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Gender</div>
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
                  <div className="modal-label-name">Email</div>
                </label>
                <input
                  type="text"
                  name="clear_type"
                  className="modal-input-field ml-1 w-full"
                  {...register("mediaid")}
                />
              </div>
              <div className="flex items-center mt-2 ml-1">
                <input
                  type="checkbox"
                  name="clear_type"
                  {...register("punch_date")}
                />
                <label className="label">
                  <div className="modal-label-name mt-[2px]">
                    Send Portal Invitation
                  </div>
                </label>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-10"></div>
            <div className="flex items-end justify-end gap-2 mt-2">
              <button className=" border-secondary flex items-center border rounded-sm">
                <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
                  Create Provider
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

export default CreateProviderModal;
