import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const AddDocumentModal = ({ handleClose, clicked }) => {
  const { register, handleSubmit, reset } = useForm();

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
              Add Document
            </h1>
            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 pt-[1px] mt-3"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 my-3 mr-2 gap-x-2 gap-y-3">
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Document Type</div>
                </label>
                <select
                  className="modal-input-field ml-1 w-full"
                  {...register("document_type")}
                >
                  <option value=""></option>
                  <option value="application">Application</option>
                  <option value="contract">Contract</option>
                  <option value="invoice">Invoice</option>
                </select>
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Description</div>
                </label>
                <textarea
                  name="description"
                  className="modal-input-field ml-1 w-full"
                  {...register("description")}
                />
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Expiry Date</div>
                </label>
                <input
                  type="date"
                  name="expiry_date"
                  placeholder="mm/dd/yyyy"
                  className="modal-input-field ml-1 w-full"
                  {...register("expiry_date")}
                />
              </div>
              <div>
                <label className="label flex items-center">
                  <div className="modal-label-name">Upload File</div>
                </label>
                <input
                  type="file"
                  name="upload_file"
                  className="modal-input-field ml-1 w-full"
                  {...register("upload_file")}
                />
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
                  Add Document
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

export default AddDocumentModal;
