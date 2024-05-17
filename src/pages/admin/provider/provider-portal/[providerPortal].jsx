import ProviderLayout from "@/component/Layouts/ProviderLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";
import { MdDeleteOutline, MdDone, MdModeEditOutline } from "react-icons/md";

const ProviderPortal = () => {
  return (
    <div>
      <div>
        <h1 className="text-xl text-orange-500 font-semibold mb-2">
          Provider Portal Access
        </h1>
        <p className="text-xs text-gray-400">
          Provider will create their own accounts to access your Provider
          Portal.
        </p>
        <div className="my-3">
          <select
            className="border rounded-sm px-2 py-[4px]  text-xs w-full md:w-1/2"
            onChange={(e) => setEmail(e.target.value)}
          >
            <option value="mail">amro@aamm.com</option>
            <option value="rome">amrrrrrrrrro@aamm.com</option>
          </select>
        </div>

        <div className="text-green-500 green-box my-3 border border-gray-300 rounded-sm px-3 font-medium py-[10px]  text-xs w-full flex justify-between items-center gap-2">
          <span className="flex items-center gap-2">
            Invitation sent — Staff has not signed in yet.
          </span>
        </div>
        <div className="flex items-end justify-end gap-2 mt-2">
          <button
            type="button"
            className=" border-secondary flex items-center border rounded-sm"
          >
            <MdDone className=" text-white bg-secondary  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-primary transition-all hover:bg-secondary text-white text-xs">
              Send Invitation
            </span>
          </button>
          <button className=" border-green-600 flex items-center border rounded-sm">
            <MdModeEditOutline className=" text-white bg-green-700  px-1 py-[2px] text-[28px]" />
            <span className="px-2 py-[6px] bg-green-500 transition-all hover:bg-green-600 text-white text-xs">
              Generate Link
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderPortal;

ProviderPortal.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <ProviderLayout>{page}</ProviderLayout>
    </RootLayout>
  );
};
