import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const CreateContractModal = ({ handleClose, clicked }) => {
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
              Create Contract
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
                  <div className="modal-label-name">Contract Name</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="contract_name"
                  className="modal-input-field ml-1 w-full"
                  {...register("contract_name", { required: true })}
                />
                {errors.contract_name && (
                  <span className="text-red-500">
                    Contract Name is required
                  </span>
                )}
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Effective Date</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="effective_date"
                  className="modal-input-field ml-1 w-full"
                  {...register("effective_date", { required: true })}
                />
                {errors.effective_date && (
                  <span className="text-red-500">
                    Effective Date is required
                  </span>
                )}
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">End Date</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="end_date"
                  className="modal-input-field ml-1 w-full"
                  {...register("end_date", { required: true })}
                />
                {errors.end_date && (
                  <span className="text-red-500">End Date is required</span>
                )}
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Followup Date</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="followup_date"
                  className="modal-input-field ml-1 w-full"
                  {...register("followup_date", { required: true })}
                />
                {errors.followup_date && (
                  <span className="text-red-500">
                    Followup Date is required
                  </span>
                )}
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">
                    Application Submission Date
                  </div>
                </label>
                <input
                  type="text"
                  name="application_submission_date"
                  className="modal-input-field ml-1 w-full"
                  {...register("application_submission_date")}
                />
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Contract Type</div>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("gender")}
                >
                  <option value="female"></option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Contract Status</div>
                  <span className="text-rose-500">*</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("gender")}
                >
                  <option value="female"></option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
                {errors.contract_status && (
                  <span className="text-red-500">
                    Contract Status is required
                  </span>
                )}
              </div>

              <div className="">
                <label className="label flex items-center">
                  <div className="modal-label-name">Assigned to</div>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("gender")}
                >
                  <option value="female"></option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-10"></div>
            <div className="flex items-end justify-end gap-2 mt-2">
              <button className=" border-secondary flex items-center border rounded-sm">
                <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
                  Create Contract
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

export default CreateContractModal;
