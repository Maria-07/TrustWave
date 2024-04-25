import RootLayout from "@/component/Layouts/RootLayout";
import SettingLayout from "@/component/Layouts/SettingLayout";
import Image from "next/image";
import amromed from "../../../../assets/img/amromed.png";
import { Input } from "antd";
import { MdDone, MdModeEditOutline } from "react-icons/md";

const { TextArea } = Input;

const Sop = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="">
            <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
              <option value="">Select Any</option>
              <option value="1">ACHIEVE WELLNESS PT OT PLLC</option>
              <option value="2">Amro test</option>
              <option value="3">Tertiary</option>
            </select>
          </div>
          <button className="cred-button ">Go</button>
        </div>
        <div>
          <Image
            src={amromed}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="my-5">
        <TextArea
          showCount
          maxLength={100}
          onChange={onChange}
          placeholder="disable resize"
          style={{
            height: 120,
            resize: "none",
          }}
        />
        <div className="flex items-center gap-2 my-5">
          <button className=" border-teal-600 flex items-center border rounded-sm">
            <MdModeEditOutline className=" text-white bg-teal-700  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-teal-500 transition-all hover:bg-teal-600 text-white text-xs">
              Edit
            </span>
          </button>
          <button className=" border-secondary flex items-center border rounded-sm">
            <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sop;

Sop.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <SettingLayout>{page}</SettingLayout>
    </RootLayout>
  );
};
