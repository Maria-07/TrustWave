/* eslint-disable react-hooks/rules-of-hooks */
import { FaUsersCog } from "react-icons/fa";
import {
  MdDriveFileRenameOutline,
  MdOutlineAssignmentReturned,
} from "react-icons/md";

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
];
