import React, { useEffect, useRef, useState } from "react";
import CustomDateRange from "../CustomDateRange/CustomDateRange";
import { FaArrowsAltH } from "react-icons/fa";

const CustomDateRangePicker = () => {
  //!-------------------Date Range Picker
  const [startD, setStartD] = useState(null);
  const [endD, setEndD] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [range, setRange] = useState([
    {
      // startDate: new Date(),
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const handleCancelDate = () => {
    setRange([
      {
        startDate: new Date(),
        endDate: null,
        key: "selection",
      },
    ]);
    setOpenCalendar(false);
  };

  // date range picker Start Date and End Date Modifer Part
  const startDate = range ? range[0]?.startDate : null;
  const endDate = range ? range[0]?.endDate : null;
  // console.log("calender date", startDate, endDate);
  const startMonth = startDate
    ? startDate.toLocaleString("en-us", { month: "short" })
    : null;
  const endMonth = endDate
    ? endDate.toLocaleString("en-us", { month: "short" })
    : null;
  const startDay = startDate ? startDate.getDate() : null;
  const endDay = endDate ? endDate.getDate() : null;
  const startYear = startDate
    ? startDate.getFullYear().toString().slice(2, 4)
    : null;
  const endYear = endDate ? endDate.getFullYear().toString().slice(2, 4) : null;

  //!-------------------Date Range Picker END

  // Hide calendar on outside click
  const refClose = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    if (refClose.current && !refClose.current.contains(e.target)) {
      setOpenCalendar(false);
    }
  };
  //end outside click
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center text-gray-600 input-border-bottom rounded-sm px-1 w-full mt-[-2px]">
        <input
          value={
            startDate ? `${startMonth} ${startDay}, ${startYear}` : "Start Date"
          }
          readOnly
          onClick={() => setOpenCalendar(true)}
          className="focus:outline-none font-medium text-center pb-[1.8px] text-[14px] text-gray-600 bg-transparent w-1/3 cursor-pointer"
        />
        <FaArrowsAltH
          onClick={() => setOpenCalendar(true)}
          className="w-1/3 cursor-pointer text-gray-600 text-[14px] font-medium"
        ></FaArrowsAltH>
        <input
          value={endDate ? `${endMonth} ${endDay}, ${endYear}` : "End Date"}
          readOnly
          onClick={() => setOpenCalendar(true)}
          className="focus:outline-none font-medium text-center bg-transparent text-[14px] text-gray-600 w-1/3 cursor-pointer"
        />
      </div>

      {/* Multi date picker component called */}
      <div
        ref={refClose}
        className="absolute z-10 md:ml-[-15%] lg:ml-0 xl:ml-0 2xl:ml-[35%]s"
      >
        {openCalendar && (
          <CustomDateRange
            range={range}
            setRange={setRange}
            handleCancelDate={handleCancelDate}
            setOpen={setOpenCalendar}
          ></CustomDateRange>
        )}
      </div>
    </div>
  );
};

export default CustomDateRangePicker;
