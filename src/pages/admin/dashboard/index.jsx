import RootLayout from "@/component/Layouts/RootLayout";
import BarChart from "@/component/UI/Dashboard/BarChart";
import DashboardNumbers from "@/component/UI/Dashboard/DashboardNumbers";
import LineChart from "@/component/UI/Dashboard/LineChart";
import Tables from "@/component/UI/Dashboard/Tables";
import DashboardTable from "@/component/UI/Dashboard/Tables/DashboardTable";
import TreatmentBarChart from "@/component/UI/Dashboard/TreatmentBarChart";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaFilter, FaUser } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { TbBuildingHospital } from "react-icons/tb";

const Dashboard = () => {
  const [filteredInfo, setFilteredInfo] = useState(false);
  const dashboardCountList = [
    {
      icon: <FaUser />,
      number: `20`,
      // number: `${clientCount}`,
      info: "Total No. of Practices",
      bgClass: "bg-gradient-to-b from-cyan-400 to-violet-900",
      iColor: "bg-blue-600",
    },
    {
      icon: <FaUser />,
      number: `30`,
      // number: `${sessionRendered}`,
      info: "Total No. of Providers",
      bgClass: "bg-gradient-to-b from-orange-300 to-red-700",
      iColor: "bg-red-700",
    },
    {
      icon: <ImUsers />,
      number: `40`,
      // number: `${sessionUnrendered}`,
      info: "Total No. of Contracts",
      bgClass: "bg-gradient-to-b from-teal-400 to-blue-900",
      iColor: "bg-blue-600",
    },
    {
      icon: <TbBuildingHospital />,
      number: `20`,
      // number: `${unbilledSessions}`,
      info: "Total No. of Reminders",
      bgClass: "bg-gradient-to-b from-emerald-300 to-emerald-900 ",
      iColor: "bg-green-800",
    },
  ];
  return (
    <div>
      {" "}
      <div>
        <motion.h1
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between mb-3"
        >
          <h1 className=" text-orange-500 text-base">Dashboard</h1>
          <FaFilter onClick={() => setFilteredInfo(!filteredInfo)} />
        </motion.h1>
        {filteredInfo && (
          <motion.h1
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-5"
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
        )}

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3 gap-5">
          {dashboardCountList.map((data, i) => (
            <DashboardNumbers key={i} data={data}></DashboardNumbers>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5"
        >
          <TreatmentBarChart></TreatmentBarChart>
          <LineChart></LineChart>
          <BarChart></BarChart>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className=" my-5"
        >
          <DashboardTable></DashboardTable>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
