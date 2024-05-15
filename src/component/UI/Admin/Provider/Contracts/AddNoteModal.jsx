import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const AddNoteModal = ({ handleClose, clicked }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    handleClose();
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
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-tight">
              Add Note - Contract Name will be here. It is contract name
            </h1>
            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 pt-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-3 mr-2 gap-x-2 gap-y-3">
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Status</div>
                  <span className="text-rose-500">*</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("status", { required: "Status is required" })}
                >
                  <option value=""></option>
                  <option value="in_network">In network</option>
                </select>
                {errors.status && (
                  <span className="text-red-500">{errors.status.message}</span>
                )}
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Assigned to</div>
                  <span className="text-rose-500">*</span>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("assigned_to", {
                    required: "Assigned to is required",
                  })}
                >
                  <option value=""></option>
                  <option value="test_account_manager">
                    Test Account Manager
                  </option>
                </select>
                {errors.assigned_to && (
                  <span className="text-red-500">
                    {errors.assigned_to.message}
                  </span>
                )}
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Effective Date</div>
                </label>
                <input
                  type="date"
                  name="effective_date"
                  defaultValue="2023-01-19"
                  className="modal-input-field ml-1 w-full"
                  {...register("effective_date")}
                />
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">
                    Application Submission Date
                  </div>
                </label>
                <input
                  type="date"
                  name="application_submission_date"
                  defaultValue="2023-01-20"
                  className="modal-input-field ml-1 w-full"
                  {...register("application_submission_date")}
                />
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Worked Date</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="worked_date"
                  placeholder="mm/dd/yyyy"
                  className="modal-input-field ml-1 w-full"
                  {...register("worked_date", {
                    required: "Worked Date is required",
                  })}
                />
                {errors.worked_date && (
                  <span className="text-red-500">
                    {errors.worked_date.message}
                  </span>
                )}
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Follow Up Date</div>
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  type="date"
                  name="follow_up_date"
                  placeholder="mm/dd/yyyy"
                  className="modal-input-field ml-1 w-full"
                  {...register("follow_up_date", {
                    required: "Follow Up Date is required",
                  })}
                />
                {errors.follow_up_date && (
                  <span className="text-red-500">
                    {errors.follow_up_date.message}
                  </span>
                )}
              </div>
              <div className="col-span-2">
                <label className="label flex items-center">
                  <div className="modal-label-name">Notes</div>
                  <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="notes"
                  className="modal-input-field ml-1 w-full"
                  {...register("notes", { required: "Notes are required" })}
                />
                {errors.notes && (
                  <span className="text-red-500">{errors.notes.message}</span>
                )}
              </div>
            </div>
            <div className="bg-gray-200 py-[1px] mt-10"></div>
            <div className="flex items-end justify-end gap-2 mt-2">
              <button
                type="submit"
                className="border-secondary flex items-center border rounded-sm"
              >
                <MdDone className="text-white bg-secondary px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
                  Add Note
                </span>
              </button>
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
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddNoteModal;
