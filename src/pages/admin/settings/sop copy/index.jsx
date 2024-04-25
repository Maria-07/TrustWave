import RootLayout from "@/component/Layouts/RootLayout";
import SettingLayout from "@/component/Layouts/SettingLayout";
import Image from "next/image";
import amromed from "../../../../assets/img/amromed.png";
import { Input } from "antd";
import { MdDone, MdModeEditOutline } from "react-icons/md";

const { TextArea } = Input;

const Misc = () => {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <h1>Misc. Settings</h1>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="">
            <label className="label">
              <h1 className="label-font">TimeZone </h1>
            </label>

            <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
              <option value="">Select Any</option>
              <option value="1">ACHIEVE WELLNESS PT OT PLLC</option>
              <option value="2">Amro test</option>
              <option value="3">Tertiary</option>
            </select>
          </div>
          <button className="cred-button mt-4">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Misc;

Misc.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <SettingLayout>{page}</SettingLayout>
    </RootLayout>
  );
};
