/* eslint-disable react-hooks/rules-of-hooks */
import { FaFileContract, FaUsersCog } from "react-icons/fa";
import {
  MdDriveFileRenameOutline,
  MdOutlineAssignmentReturned,
  MdTask,
} from "react-icons/md";
import { LuFileType2 } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";

export const settingsSidebar = [
  {
    icon: <FaUsersCog />,
    link_name: "User Management",
    link: "/admin/settings/all-user",
  },
  {
    icon: <MdOutlineAssignmentReturned />,
    link_name: "Assign Practice",
    link: "/admin/settings/practice-assign",
  },
  {
    icon: <MdDriveFileRenameOutline />,
    link_name: "Contract Name",
    link: "/admin/settings/contract-name",
  },
  {
    icon: <LuFileType2 />,
    link_name: "Contract Type",
    link: "/admin/settings/contract-type",
  },
  {
    icon: <FaFileContract />,
    link_name: "Contract Status",
    link: "/admin/settings/contract-status",
  },
  {
    icon: <TiDocumentText />,
    link_name: "Document Type",
    link: "/admin/settings/document-type",
  },
  {
    icon: <TiDocumentText />,
    link_name: "Specialty",
    link: "/admin/settings/specialty",
  },
  {
    icon: <MdTask />,
    link_name: "Task",
    link: "/admin/settings/task",
  },
  {
    icon: <MdTask />,
    link_name: "Sop Option",
    link: "/admin/settings/setting-sop-option",
  },
];
