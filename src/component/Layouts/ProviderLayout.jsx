import { motion } from "framer-motion";
import SettingSidebar from "../UI/Layouts/Sidebar/SettingSidebar";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import {
  BiData,
  BiLogoPaypal,
  BiSolidUserRectangle,
  BiTimer,
  BiUserCircle,
} from "react-icons/bi";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  IoCall,
  IoCaretBackCircleOutline,
  IoCloudUploadOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import Image from "next/image";
import doctor from "../../assets/img/doctor.png";
import { AiOutlineFileAdd, AiOutlineFileText } from "react-icons/ai";
import { FaBusinessTime, FaUsers } from "react-icons/fa";
import { BsClipboard2Data } from "react-icons/bs";
import axios from "axios";
import { RiMiniProgramLine } from "react-icons/ri";
import { TbArrowBack } from "react-icons/tb";

const ProviderLayout = ({ id, children }) => {
  //! Theme system
  const { theme } = useTheme();
  // const [ProviderId, setProviderId] = useState(id);
  const [ProviderData, setProviderData] = useState([]);
  const [ProviderAddress, setProviderAddress] = useState([]);
  const ProviderId = localStorage.getItem("PId");
  // console.log("user iddd", ProviderId);

  //! links
  const ProviderSidebar = [
    {
      icon: <BiUserCircle />,
      link_name: "Provider Info",
      link: `/admin/provider/provider-info/${ProviderId}`,
    },
    {
      icon: <RiMiniProgramLine />,
      link_name: "Contracts",
      link: `/admin/provider/contract-list/${ProviderId}`,
    },
    {
      icon: <RiMiniProgramLine />,
      link_name: "General Document",
      link: `/admin/provider/document/${ProviderId}`,
    },
    {
      icon: <RiMiniProgramLine />,
      link_name: "Contract Document",
      link: `/admin/provider/insurance-document/${ProviderId}`,
    },
    {
      icon: <RiMiniProgramLine />,
      link_name: "Provider Portal",
      link: `/admin/provider/provider-portal/${ProviderId}`,
    },
    {
      icon: <RiMiniProgramLine />,
      link_name: "Provider Activity",
      link: `/admin/provider/provider-activity/${ProviderId}`,
    },
  ];

  //! Theme system done
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Link href={"/Providers"} className="text-primary text-lg">
            <IoCaretBackCircleOutline />
          </Link>
          <div className="text-xs font-normal">
            <span className="text-sm font-semibold text-primary">
              {ProviderData.Provider_last_name}Mr.sdsds |
            </span>
            <span className="text-orange-400 font-semibold">DOB :</span>
            1/2/3 |
            <span className="text-orange-400 font-semibold">Phone : </span>
            Mr.sdsds |
            <span className="text-orange-400 font-semibold">Address : </span>
            defdf
          </div>
        </div>
        <div className="mr-2">
          <Link href={"/admin/provider"}>
            <button className="dtm-button flex items-center gap-1 ">
              <TbArrowBack className="text-lg font-bold" />
              Back
            </button>
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-12 grid-cols-1">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className={`p-2 my-2 border-[1px] lg:col-span-2 shadow-md rounded-md min-h-[20vh] ${
            theme === "dark"
              ? "bg-dark-background border-dark-background"
              : "secondary"
          }`}
        >
          <div className="">
            <div className="">
              <Image
                src={doctor}
                className=" m-auto rounded-full border border-gray-100"
                alt="doctor"
                height={120}
                width={"auto"}
              />
            </div>
          </div>
          {ProviderSidebar.map((s, i) => (
            <SettingSidebar key={i} data={s}></SettingSidebar>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className={`p-2 sm:m-2 sm:p-4 lg:col-span-10 md:col-span-11 border-[1px] shadow-md rounded-lg min-h-screen ${
            theme === "dark"
              ? "bg-dark-background border-dark-background"
              : "secondary"
          }`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ProviderLayout;
