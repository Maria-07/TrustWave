import Link from "next/link";
import React, { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PracticeAction from "../PracticeAction";

const Card = ({ practiceData }) => {
  const {
    Business_name,
    DBA_name,
    tax_id_no,
    npi,
    address,
    city,
    state,
    zip,
    phone_number,
    mediaid,
    status,
  } = practiceData;
  const [cardExpend, setCardExpend] = useState(false);
  return (
    <div>
      <div className="border shadow-md  z-0 card rounded-t-lg bg-white rounded-b-lg ">
        {/* patient details  */}
        <div>
          <div>
            <div>
              <div className="  my-auto">
                {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 "> */}
                <div> </div>

                <div className="mb-3">
                  {" "}
                  <h1 className="bg-secondary  flex gap-3 text-sm w-full py-1 px-5  rounded-tl-lg text-white font-medium">
                    {Business_name} ( {tax_id_no} )
                  </h1>
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-5">
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      DBA name
                    </h1>
                    <p className="text-sm flex items-center gap-2 font-semibold text-gray-900">
                      {DBA_name}
                    </p>
                  </div>
                  <div className="">
                    <div>
                      <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                        NPI
                      </h1>
                      <p className="text-sm font-semibold text-gray-900">
                        {npi}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                        Phone
                      </h1>
                      <p className="text-sm font-semibold text-gray-900">
                        {phone_number}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                        Medi Aid
                      </h1>
                      <p className="text-sm font-semibold text-gray-900">
                        {mediaid}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                        Status
                      </h1>
                      <p className="text-sm font-semibold text-gray-900">
                        {status ? (
                          <FaCircle className="text-green-500 text-xs " />
                        ) : (
                          <FaCircle className="text-rose-500 text-xs " />
                        )}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <PracticeAction record={practiceData}></PracticeAction>
                    </div>
                  </div>
                </div>

                {/* <div>
                        <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                          Status
                        </h1>
                        <div>
                          {" "}
                          {status ? (
                            <FaCircle className="text-green-500 text-xs " />
                          ) : (
                            <FaCircle className="text-rose-500 text-xs " />
                          )}
                        </div>
                      </div> */}
              </div>
              <div className="flex items-center justify-between px-5 py-2">
                {" "}
                <div
                  onClick={() => {
                    setCardExpend(!cardExpend);
                  }}
                  className="w-full"
                >
                  <button className="flex items-center  mt-2 text-secondary">
                    <span className="text-[13px] font-semibold mr-1">
                      Session Details
                    </span>{" "}
                    {!cardExpend ? (
                      <IoIosArrowDown className="text-sm mt-[2px] font-medium" />
                    ) : (
                      <IoIosArrowUp className="text-sm mt-[2px]  font-medium" />
                    )}
                  </button>
                </div>
              </div>

              {/* right section  */}
              {/* <div
                    className={`bg-secondary  w-full rounded-tr-lg  ${
                      cardExpend ? "rounded-br-none" : "rounded-br-lg"
                    }`}
                  >
                    <div className="flex justify-center items-center mt-5">
                      <div className="text-white mb-4">
                        <div className="text-lg font-semibold text-center">
                          dsd
                        </div>
                        <div className="text-lg font-semibold text-center">
                          sds
                        </div>
                      </div>
                    </div>
                    <Link
                      href={
                        "/provider/patients/clinical-data/session-details/1212"
                      }
                    >
                      <div className="px-2 mb-2  text-white">
                        <button className="font-regular text-sm rounded-md  border-primary hover:border-primary hover:bg-primary w-full transition-all uppercase border py-[6px]">
                          Start Session
                        </button>
                      </div>
                    </Link>
                    {/* <Link
                      href={
                        "/provider/patients/clinical-data/session-details/1212"
                      }
                    >
                      <div className="px-2 mb-2  text-white">
                        <button className="font-regular text-sm rounded-md border-green-400 hover:border-green-500 bg-green-500  w-full transition-all uppercase border py-[6px]">
                          Resume Session
                        </button>
                      </div>
                    </Link> 
                  </div> */}
            </div>
          </div>
          {cardExpend && (
            <>
              <h1 className="bg-primary text-sm w-full py-1 px-5 text-white font-medium">
                Programs
              </h1>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      Address
                    </h1>
                    <p className="text-sm font-semibold text-gray-900">
                      {address}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      City
                    </h1>
                    <p className="text-sm font-semibold text-gray-900">
                      {city}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      State
                    </h1>
                    <p className="text-sm font-semibold text-gray-900">
                      {state}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-xs font-medium text-gray-500 mb-[3px]">
                      Zip
                    </h1>
                    <p className="text-sm font-semibold text-gray-900">{zip}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
