import { report } from "@/component/Data/Data";
import RootLayout from "@/component/Layouts/RootLayout";
import SettingLayout from "@/component/Layouts/SettingLayout";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const PracticeAssign = () => {
  return (
    <div>
      <h1 className=" text-orange-500 text-base">Assign Practice</h1>
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-3 mb-5 my-5"
      >
        <div>
          <label className="label">
            <h1 className="label-font">Select Practice</h1>
          </label>
          <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
            <option value="">Select Any</option>
            <option value="1">ACHIEVE WELLNESS PT OT PLLC</option>
            <option value="2">Amro test</option>
            <option value="3">Tertiary</option>
          </select>
        </div>
        <div>
          <label className="label">
            <h1 className="label-font">Select Provider</h1>
          </label>
          <select className="input-border-bottom text-gray-600 rounded-sm  text-[14px] font-medium   w-full focus:outline-none">
            <option value="">Select Any</option>
            <option value="1">JULIETTE DOHERTY</option>
            <option value="2">Haider Akbar</option>
            <option value="3">Tertiary</option>
          </select>
        </div>
      </motion.h1>
      <div>
        <div>
          <div className="ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 my-3 mr-2 gap-x-6 gap-y-3">
            <div>
              <h1 className="text-sm text-gray-700 my-2">All Practice</h1>

              <select
                multiple={true}
                id="countries_multiple"
                // onChange={(e) => {
                //   handleAdding(e);
                // }}
                className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
              >
                {report?.length > 0 &&
                  report?.map((item, index) => (
                    <option
                      key={item.id}
                      className="px-2 text-sm"
                      value={item.id}
                    >
                      {item.contact_name}{" "}
                    </option>
                  ))}{" "}
              </select>

              <br />
            </div>
            <div className=" flex flex-col items-center justify-center my-4 gap-2">
              <button
                onClick={() => handleSelectedValue()}
                // disabled={
                //   selectedKeys === undefined && facilityselectedkeys?.length > 0
                // }
                className="cred-button w-24"
              >
                <div className="flex item-center justify-center gap-1">
                  ADD
                  <HiOutlineArrowRight className="text-base" />
                </div>
              </button>
              <button
                onClick={(e) => {
                  handleRemoveValue(e);
                }}
                // disabled={
                //   selectedKeys?.length > 0 && facilityselectedkeys === undefined
                // }
                className="cred-close-button w-24"
              >
                <div className="flex item-center justify-center gap-1">
                  <HiOutlineArrowLeft className="text-base" />
                  REMOVE
                </div>
              </button>
            </div>

            <div>
              <h1 className="text-sm text-gray-700 my-2">Assign Practice</h1>

              <select
                multiple
                id="countries_multiple"
                // className="h-40"
                onChange={(e) => {
                  handleRemoving(e);
                }}
                className="text-black border h-48 border-gray-300  rounded-sm focus:focus:ring-[#02818F] focus:border-[#0AA7B8] block w-full py-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-[#02818F] dark:focus:[#02818F]"
              >
                {/* calling same api  */}
                {/* {selectedInsurancereport?.facility_selected_insurance.length >
                  0 &&
                  selectedInsurancereport?.facility_selected_insurance.map(
                    (item, index) => (
                      <option
                        key={item.id}
                        className="px-2 text-sm"
                        value={item.id}
                      >
                        {item.payor_name}{" "}
                      </option>
                    )
                  )}{" "} */}
              </select>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAssign;

PracticeAssign.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <SettingLayout>{page}</SettingLayout>
    </RootLayout>
  );
};
