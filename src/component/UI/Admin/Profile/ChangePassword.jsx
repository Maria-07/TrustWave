import React, { useState } from "react";
import { useForm } from "react-hook-form";
import person from "../../../../assets/img/doctor.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdDone, MdModeEditOutline } from "react-icons/md";

const ChangePassword = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(profileImage);
  };

  return (
    <motion.div
      initial={{ opaphone: 0, y: 15 }}
      animate={{ opaphone: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/**/}
        <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 my-3 mr-2 gap-x-3 gap-y-1">
          <div>
            <label className="label">
              <span className="pms-input-name">New Password:</span>
            </label>
            <input
              type="text"
              name="actual_name"
              className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
              {...register("actual_name")}
            />
          </div>
          <div>
            <label className="label">
              <span className="pms-input-name">Confirm Password:</span>
            </label>
            <input
              type="text"
              name="confirm_pass"
              className="input-border-bottom input-font py-[1px] w-full focus:outline-none"
              {...register("confirm_pass")}
            />
          </div>
        </div>
        <div className="mt-10 my-1 ml-1 flex items-center gap-2 flex-wrap">
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

export default ChangePassword;
