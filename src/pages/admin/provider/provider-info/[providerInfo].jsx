import ProviderLayout from "@/component/Layouts/ProviderLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import DynamicEmail from "@/component/UI/Admin/Provider/Emailaddress/DynamicEmail";
import PrimaryEmail from "@/component/UI/Admin/Provider/Emailaddress/PrimaryEmail";
import DynamicAddress from "@/component/UI/Admin/Provider/PatientAddress/DynamicAddress";
import PrimaryAddress from "@/component/UI/Admin/Provider/PatientAddress/PrimaryAddress";
import DynamicPhone from "@/component/UI/Admin/Provider/PhoneAddress/DynamicPhone";
import PrimaryPhone from "@/component/UI/Admin/Provider/PhoneAddress/PrimaryPhone";
import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MdDeleteOutline, MdDone } from "react-icons/md";

const ProviderInfo = () => {
  const [cloneProvider, setCloneProvider] = useState(false);
  const [active, setActive] = useState(false);
  const primaryPhone = "123";
  const primaryEmail = "wqwqwqw@sdsd";

  const [imageData, setImageData] = useState(null);
  const [filenameData, setFilenameData] = useState(null);
  const [uploadButton, setUploadButton] = useState(false);

  //File Upload
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // update signature
  // const [
  //   updateSignature,
  //   { isSuccess: signUpdateSuccess, isError: signUpdateError },
  // ] = useUpdateSignatureMutation();
  // const uploadSignature = () => {
  //   const signData = imageData.split(",");
  //   updateSignature({
  //     token,
  //     payload: {
  //       patient_id: id,
  //       signature_file_name: filenameData,
  //       signature_file: signData[1],
  //     },
  //   });
  // };

  // useEffect(() => {
  //   if (signUpdateSuccess) {
  //     toast.success("Signature updated successfully", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       theme: "dark",
  //       style: { fontSize: "12px" },
  //     });
  //   } else if (signUpdateError) {
  //     toast.error("Some Error Occured", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       theme: "dark",
  //       style: { fontSize: "12px" },
  //     });
  //   }
  // }, [signUpdateSuccess, signUpdateError]);

  // delete signature
  // const [
  //   deleteSignature,
  //   { isSuccess: signDeleteSuccess, isError: signDeleteError },
  // ] = useDeleteSignatureMutation();
  // const deletePreview = () => {
  //   setPreviewUrl(null);
  //   setSelectedFile(null);
  //   setUploadButton(false);
  //   deleteSignature({
  //     token,
  //     payload: { patient_id: id },
  //   });
  // };
  // useEffect(() => {
  //   if (signDeleteSuccess) {
  //     toast.success("Signature deleted successfully", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       theme: "dark",
  //       style: { fontSize: "12px" },
  //     });
  //   } else if (signDeleteError) {
  //     toast.error("Some Error Occured", {
  //       position: "top-center",
  //       autoClose: 5000,
  //       theme: "dark",
  //       style: { fontSize: "12px" },
  //     });
  //   }
  // }, [signDeleteSuccess, signDeleteError]);
  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    setFilenameData(file.name);
    const base64 = await convertBase64(file);
    setImageData(base64);
    setUploadButton(true);
  };

  const id = 12;

  const { register, control, handleSubmit, reset, setValue, getValues } =
    useForm({
      defaultValues: {},
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "address",
    keyName: "addressId",
  });

  const {
    fields: phoneFields,
    append: phoneAppend,
    remove: phoneRemove,
  } = useFieldArray({
    control,
    name: "number",
    keyName: "phoneId",
  });

  const {
    fields: emailFields,
    append: emailAppend,
    remove: emailRemove,
  } = useFieldArray({
    control,
    name: "Email",
    keyName: "emailId",
  });

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        {" "}
        <h1 className=" text-orange-500 text-base">Provider</h1>
        <div className="flex items-center gap-1 my-2">
          <button className="cred-button">Validate</button>
          <button
            onClick={() => setCloneProvider(!cloneProvider)}
            className="cred-button"
          >
            Clone Provider
          </button>
        </div>{" "}
      </div>
      {cloneProvider && (
        <div className="flex items-center gap-2">
          {" "}
          <div>
            <label className="label">
              <h1 className="label-font">Select Facility</h1>
            </label>
            <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
              <option value="">Select Any</option>
              <option value="1">JULIETTE DOHERTY</option>
              <option value="2">Haider Akbar</option>
              <option value="3">Tertiary</option>
            </select>
          </div>
          <button className="cred-button mt-4">Save</button>
        </div>
      )}
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex ml-1 mt-1 mr-2 items-center ">
              <Switch
                size="small"
                checked={active ? true : false}
                onClick={() => setActive(!active)}
              />
              <span className="text-[14px] ml-1 text-gray-700 gap-1 font-semibold">
                Active Provider
              </span>
            </div>
            <div>
              <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 my-3 mr-2 gap-x-6 gap-y-2 ">
                <div className=" ">
                  <label className="label">
                    <span className=" label-font">
                      Provider Type<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    className="input-border-bottom input-font  w-full focus:outline-none"
                    name="provider_type"
                    {...register("provider_type")}
                  >
                    {/*api thekey gathered data jemon thakbey value thik same bhabey assign kortey hobey */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      First Name<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Middle Name</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      Last Name<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Suffix</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      Date of Birth<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="date"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div className=" ">
                  <label className="label">
                    <span className=" label-font">
                      Gender<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    className="input-border-bottom input-font  w-full focus:outline-none"
                    name="gender"
                    {...register("gender")}
                  >
                    {/*api thekey gathered data jemon thakbey value thik same bhabey assign kortey hobey */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className=" ">
                  <label className="label">
                    <span className=" label-font">
                      Speciality<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <select
                    className="input-border-bottom input-font  w-full focus:outline-none"
                    name="gender"
                    {...register("gender")}
                  >
                    {/*api thekey gathered data jemon thakbey value thik same bhabey assign kortey hobey */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Taxonomy Code</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      Tax Id<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      SSN<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      NPI<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 mr-2 gap-x-6 gap-y-2 ">
                {" "}
                <div>
                  <label className="label">
                    <span className=" label-font">
                      UPIN<span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">DEA</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">
                      State License <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Medicare PTAN</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Medicaid ID</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Fax Number</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Age Restriction</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">Working Hours</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">County Name</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="label">
                    <span className=" label-font">Contact Manager</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
                <div>
                  <label className="label">
                    <span className=" label-font">CAQH ID</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                    {...register("first_name")}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-1 mr-2 gap-x-6 gap-y-1 mt-5">
                {/* <div className="flex flex-wrap my-1 mr-2 md:gap-x-2 gap-y-5"> */}
                {/* address  */}
                <div className="pr-6">
                  <PrimaryAddress append={append} rg={register} />
                  <br></br>
                  {/* {patient_details?.admin_id && (
                <DynamicAddress
                  adData={{
                    fields,
                    register,
                    remove,
                  }}
                />
              )} */}
                  <DynamicAddress
                    adData={{
                      fields,
                      register,
                      remove,
                    }}
                    patientId={id}
                  />

                  {/* <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-1 gap-x-4 gap-y-2"> */}
                  <div className=" flex items-center justify-between my-1 gap-x-4 gap-y-2">
                    <div className="w-full">
                      <label className="label">
                        <span className=" label-font">
                          POS<span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                        {...register("pos")}
                      >
                        <option value="Main Office">Main Office</option>
                        <option value="Telehealth">Telehealth</option>
                        <option value="Home">Home</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="label">
                        <span className=" label-font">
                          Region<span className="text-red-500">*</span>
                        </span>
                      </label>
                      <select
                        className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                        {...register("zone")}
                      >
                        <option value="2"></option>
                        <option value="6">Main Zone</option>
                        <option value="27">
                          ABC Behavioral Therapy Center
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* phone  */}
                <div className="">
                  <PrimaryPhone
                    adData={{
                      phoneAppend,
                      register,
                      primaryPhone,
                    }}
                  />
                  <br></br>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <DynamicPhone
                      adData={{
                        phoneFields,
                        phoneRemove,
                        register,
                      }}
                      patientId={id}
                    />
                  </motion.div>
                </div>
                {/* Email  */}
                <div className="">
                  <PrimaryEmail
                    adData={{
                      emailAppend,
                      register,
                      primaryEmail,
                    }}
                  />
                  <br></br>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <DynamicEmail
                      adData={{
                        register,
                        emailFields,
                        emailRemove,
                      }}
                      patientId={id}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <label className="label">
                  <span className=" label-font">Signature Date</span>
                </label>
                <input
                  type="date"
                  name="signature_date"
                  className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                  {...register("signature_date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className=" label-font">Start Date</span>
                </label>
                <input
                  type="date"
                  name="signature_date"
                  className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                  {...register("signature_date")}
                />
              </div>
              <div>
                <label className="label">
                  <span className=" label-font">End Date</span>
                </label>
                <input
                  type="date"
                  name="signature_date"
                  className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
                  {...register("signature_date")}
                />
              </div>
            </div>
            <div>
              <div className="w-full sm:col-span-2">
                <div className="label mb-2">
                  <span className=" label-font">Upload Signature</span>
                </div>
                <div
                  class="flex items-center justify-center w-full"
                  onChange={handleFileChange}
                >
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-[100px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Select your Signature</span>
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      onChange={handleFileRead}
                    />
                  </label>
                </div>
              </div>
              {previewUrl && (
                <div className="w-full sm:col-span-2">
                  <div className="label mb-2">
                    <span className="label-font">Preview</span>
                  </div>
                  <div className="h-[100px] border border-gray-600 rounded p-2 flex">
                    {/* <img src={previewUrl} alt="Preview" className="w-[95%]" />
                     */}{" "}
                    img
                    <button
                      id="delete-btn"
                      // onClick={deletePreview}
                      className="w-[5%] text-rose-600 font-bold text-center"
                    >
                      X
                    </button>
                  </div>
                  <div class="text-center">
                    {uploadButton && (
                      <span
                        className="dtm-button"
                        // onClick={uploadSignature}
                      >
                        Upload Signature
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 flex-wrap my-5">
              <div>
                <div className="flex items-center gap-1 my-2">
                  <Switch size="small" onClick={() => {}} />
                  <label className="form-check-label inline-block font-medium  text-[12px] text-gray-600">
                    Rendering Provider
                  </label>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <Switch size="small" onClick={() => {}} />
                  <label className="form-check-label inline-block font-medium  text-[12px] text-gray-600">
                    Override Company Profile
                  </label>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <Switch size="small" onClick={() => {}} />
                  <label className="form-check-label inline-block font-medium  text-[12px] text-gray-600">
                    Medicare Participating
                  </label>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 my-2">
                  <Switch size="small" onClick={() => {}} />
                  <label className="form-check-label inline-block font-medium  text-[12px] text-gray-600">
                    Accepting new patient
                  </label>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <Switch size="small" onClick={() => {}} />
                  <label className="form-check-label inline-block font-medium  text-[12px] text-gray-600">
                    Print DEA on prescription
                  </label>
                </div>
                <div className="flex items-center gap-1 my-2">
                  <Switch size="small" onClick={() => {}} />
                  <label className="form-check-label inline-block font-medium  text-[12px] text-gray-600">
                    All Payers Participating
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button className=" border-secondary flex items-center border rounded-sm">
                <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
                  Save Provider
                </span>
              </button>
              <button className=" border-rose-600 flex items-center border rounded-sm">
                <MdDeleteOutline className=" text-white bg-rose-700  px-1 py-[2px] text-[28px]" />
                <span className="px-2 py-[6px] bg-rose-500 transition-all hover:bg-rose-600 text-white text-xs">
                  Cancel
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderInfo;

ProviderInfo.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <ProviderLayout>{page}</ProviderLayout>
    </RootLayout>
  );
};
