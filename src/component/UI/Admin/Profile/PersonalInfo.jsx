import React, { useState } from "react";
import { useForm } from "react-hook-form";
import person from "../../../../assets/img/doctor.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdDone, MdModeEditOutline } from "react-icons/md";

const PersonalInfo = () => {
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [profileImage, setProfileImage] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    console.log(profileImage);
  };

  // image uploding code
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <motion.div
      initial={{ opaphone: 0, y: 15 }}
      animate={{ opaphone: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="div-img">
          <div>
            <Image
              src={file || person}
              className=" h-24 w-24 border"
              alt="alt"
            />
          </div>
          <div>
            <div className="my-3 ">
              <input
                className="form-control text-sm border border-gray-300"
                type="file"
                id="formFile"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/**/}
        <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-3 gap-y-1">
          <div>
            <label className="label">
              <span className="pms-input-name">Actual Name:</span>
            </label>
            <input
              type="text"
              readOnly={!edit}
              name="actual_name"
              className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
              {...register("actual_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">User Name:</span>
            </label>
            <input
              type="text"
              readOnly={!edit}
              name="user_name"
              className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
              {...register("user_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Phone</span>
            </label>
            <input
              type="text"
              readOnly={!edit}
              name="phone"
              className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
              {...register("phone")}
            />
          </div>

          <div>
            <label className="label">
              <span className="pms-input-name">Email</span>
            </label>
            <input
              type="text"
              readOnly={!edit}
              name="email_code"
              className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
              {...register("email_code")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Gender</span>
            </label>
            <div className="flex items-center">
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  female
                </span>
              </div>
              <div className="flex ml-1 mt-1 items-center">
                <input
                  type="radio"
                  name="patient"
                  onClick={() => {
                    // setValue(!value);
                  }}
                />
                <span className="text-xs ml-1 text-gray-600 font-normal">
                  male
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 my-1 ml-1 flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setEdit(true)}
            className=" border-green-600 flex items-center border rounded-sm"
          >
            <MdModeEditOutline className=" text-white bg-green-700  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-green-500 transition-all hover:bg-green-600 text-white text-xs">
              Edit
            </span>
          </button>
          <button
            type="submit"
            className=" border-secondary flex items-center border rounded-sm"
          >
            <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
              Save
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              setEdit(false);
              reset();
            }}
            className=" border-rose-800 flex items-center border rounded-sm"
          >
            <MdDone className=" text-white bg-rose-800  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-rose-700 transition-all hover:bg-rose-800 text-white text-xs">
              Cancel
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default PersonalInfo;
