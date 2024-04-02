import {
  FaUser,
  FaUserFriends,
  FaBoxOpen,
  FaWpforms,
  FaRegAddressCard,
} from "react-icons/fa";
import { TbBuildingHospital, TbFileTime } from "react-icons/tb";
import { BiRename, BiLinkAlt, BiFolderOpen } from "react-icons/bi";
import {
  BsHouseDoor,
  BsFileEarmarkMedical,
  BsFileEarmark,
  BsFolder2Open,
  BsBox,
} from "react-icons/bs";
import { MdOutlinePayment, MdTrackChanges } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { TbArrowsRightLeft } from "react-icons/tb";
import {
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineFile,
  AiOutlineMail,
  AiOutlineCloud,
} from "react-icons/ai";
import {
  RiSettingsFill,
  RiHospitalLine,
  RiSendPlaneLine,
  RiFolderUserLine,
} from "react-icons/ri";
import { FiLayers, FiAnchor } from "react-icons/fi";
import { VscServerProcess } from "react-icons/vsc";

// ***********************************************************************
// ******************************DashBoard Data Table Related***************************
// ***********************************************************************

export const dashboardCount = [
  {
    icon: <FaUser />,
    number: "77",
    info: "Total No. of Patients",
    bgClass: "bg-gradient-to-b from-cyan-400 to-violet-900",
    iColor: "bg-blue-600",
  },
  {
    icon: <FaUser />,
    number: "1303",
    info: "Sessions Rendered",
    bgClass: "bg-gradient-to-b from-orange-300 to-red-700",
    iColor: "bg-red-700",
  },
  {
    icon: <ImUsers />,
    number: "269",
    info: "Sessions Unrendered",
    bgClass: "bg-gradient-to-b from-teal-400 to-blue-900",
    iColor: "bg-blue-600",
  },
  {
    icon: <TbBuildingHospital />,
    number: "127",
    info: "Unbilled Sessions",
    bgClass: "bg-gradient-to-b from-emerald-300 to-emerald-900 ",
    iColor: "bg-green-800",
  },
];

//Table Data
export const task = [
  {
    report: "AR Follow Up Bucket",
    count: "57",
    link: "/admin/billing/ar-followup-bucket",
  },
  {
    report: "Provider Escalation",
    count: "0",
    link: "/admin/billing/ar-followup-bucket-filter-types/1",
  },
  {
    report: "Payor Escalation",
    count: "0",
    link: "/admin/billing/ar-followup-bucket-filter-types/2",
  },
  {
    report: "MG Escalation",
    count: "0",
    link: "/admin/billing/ar-followup-bucket-filter-types/3",
  },
  {
    report: "Medical Records",
    count: "0",
    link: "/admin/billing/ar-followup-bucket-filter-types/4",
  },
];
export const patient = [
  {
    report: "Expiring Authorization",
    count: "2",
    link: "/admin/auth-to-expire",
  },
  {
    report: "Patient/Guarantor",
    count: "0",
    link: "/admin/non-payor-tag",
  },
  {
    report: "No Authorization",
    count: "10",
    link: "/admin/no-authorization",
  },
  {
    report: "Co-Pay For Today",
    count: "0",
    link: "/admin/todays-copay",
  },
  {
    report: "Auth Place Holders",
    count: "0",
    link: "/admin/auth-place-holder",
  },
];
export const staffs = [
  {
    report: "Vacation(s) Pending Approval",
    count: "0",
    link: "/admin/vacation-pending",
  },
  {
    report: "Missing Credentials",
    count: "11",
    link: "/admin/missing-credentials",
  },
  {
    report: "Credentials To Expire",
    count: "0",
    link: "/admin/credentials-expire",
  },
  {
    report: "Signature Not Loaded",
    count: "0",
    link: "/admin/signature-not-update",
  },
  {
    report: " ",
    count: " ",
    link: "/admin/",
  },
];
export const billing = [
  {
    report: "Sessions Rendered - Not Billed",
    count: "321",
    link: "/admin/session-not-bulled",
  },
  {
    report: "Last Weeks Deposits",
    count: "0",
    link: "/admin/last-week-deposit",
  },
  {
    report: "Last Month Statements",
    count: "0",
    link: "/admin/last-five-statement",
  },
  {
    report: "Last Month Billed Dates ",
    count: "0",
    link: "/admin/last-month-billed-dated",
  },
  {
    report: "Pending Secondary Claims",
    count: "0",
    link: "/admin/pending-secondary",
  },
];
export const scheduler = [
  {
    report: "Scheduled Not Rendered",
    count: "71",
    link: "/admin/scheduler-not-render",
  },
  {
    report: "Sessions Not Attended Last Week",
    count: "0",
    link: "/admin/schedule-not-attend-last-week",
  },
  {
    report: "Provider Signature Missing In Session",
    count: "0",
    link: "/admin/provider-signature-missing-session",
  },
  {
    report: "Session Note Missing",
    count: "779",
    link: "/admin/session-note-missing",
  },
  {
    report: "Cancelled Session This Month",
    count: "23",
    link: "/admin/cancelled-session",
  },
];
export const reports = [
  {
    report: "Schedule Billable",
    count: "0",
    link: "/admin/session-manage",
  },
  {
    report: "Payment Deposits",
    count: "0",
    link: "/admin/m-remittance",
  },
  {
    report: "KPI Report by Month",
    count: "0",
    link: "/admin/kpi-reported-by-months-view",
  },
  {
    report: "KPI Report by Patient",
    count: "0",
    link: "/admin/kpi-reported-by-patient-view",
  },
  {
    report: "KPI Report by Insurance",
    count: "0",
    link: "/admin/kpi-reported-by-insurance-view",
  },
];

// ***********************************************************************
// ******************************Settings Data***************************
// ***********************************************************************

export const setting = [
  {
    link: "/admin/settings",
    name: "Name & Location",
    icon: <BiRename />,
  },
  {
    link: "add-insurance",
    name: "Add Insurance",
    icon: <AiOutlineUserAdd />,
  },
  {
    link: "insurance-setup",
    name: "Insurance Setup",
    icon: <RiSettingsFill />,
  },
  {
    link: "add-treatment",
    name: "Add Treatment",
    icon: <RiHospitalLine />,
  },
  {
    link: "services",
    name: "Add Services",
    icon: <FiLayers />,
  },
  {
    link: "cpt-code",
    name: "Add Cpt Code",
    icon: <FiLayers />,
  },
  {
    link: "cpt-code-exclusion",
    name: "CPT Code Exclusion(S)",
    icon: <FiLayers />,
  },
  {
    link: "sub-activity-setup/SubTypeTab",
    name: "Add Service Sub-Type",
    icon: <RiSendPlaneLine />,
  },
  {
    link: "add-staff-type",
    name: "Add Staff Type",
    icon: <AiOutlineUserAdd />,
  },
  {
    link: "rendering-provider",
    name: "Referring Provider",
    icon: <AiOutlineUser />,
  },
  {
    link: "pos",
    name: "Place of Service",
    icon: <BsHouseDoor />,
  },
  {
    link: "vendor-number",
    name: "Vendor Number Setup",
    icon: <FaBoxOpen />,
  },
  {
    link: "holiday-setup",
    name: "Holiday Setup",
    icon: <FiAnchor />,
  },
  {
    link: "pay-period",
    name: "Pay Period",
    icon: <MdOutlinePayment />,
  },
  {
    link: "logo",
    name: "Logo",
    icon: <BiLinkAlt />,
  },
  {
    link: "unbillable-activity",
    name: "Unbillable Activity",
    icon: <BiFolderOpen />,
  },
  {
    link: "unbillable-time-sheet",
    name: "Unbillable TimeSheet ",
    icon: <TbFileTime />,
  },
  {
    link: "session-rule",
    name: "Create Service Rules",
    icon: <AiOutlineFile />,
  },
  {
    link: "file-manager",
    name: "OA File",
    icon: <BsFolder2Open />,
  },
  {
    link: "froms-builder",
    name: "Forms Builder",
    icon: <BsFileEarmarkMedical />,
  },
  {
    link: "notes-forms",
    name: "Forms & Library",
    icon: <BsFileEarmarkMedical />,
  },
  {
    link: "business-documents",
    name: "Business Files",
    icon: <BsFileEarmark />,
  },
  {
    link: "data-export",
    name: "Data Import",
    icon: <AiOutlineCloud />,
  },
  {
    link: "meet-lists",
    name: "TPMS Meet",
    icon: <RiFolderUserLine />,
  },
  {
    link: "sms-email-setting/email-setting",
    name: "SMS/Email Setting",
    icon: <AiOutlineMail />,
  },
  {
    link: "intake-form",
    name: "Intake Form",
    icon: <FaWpforms />,
  },
  {
    link: "structure-of-process",
    name: "Structure of process",
    icon: <BsFileEarmark />,
  },
  {
    link: "app-id-tracking",
    name: "App id tracking",
    icon: <FaRegAddressCard />,
  },
  {
    link: "program",
    name: "Program",
    icon: <BsBox />,
  },
];
export const SuperAdminRoute = [
  {
    link: "provider-access",
    name: "Provider Access",
    icon: <BiRename />,
  },
  {
    link: "admin-access",
    name: "Admin Access",
    icon: <AiOutlineUserAdd />,
  },
  {
    link: "payor",
    name: "Payor",
    icon: <RiSettingsFill />,
  },
  {
    link: "Companies-and-facilities",
    name: "Companies And Facilities",
    icon: <RiHospitalLine />,
  },
  {
    link: "company-level-CSV-Report",
    name: "Company Level CSV Report",
    icon: <FiLayers />,
  },
  {
    link: "user-page-permission",
    name: "User Page Permission",
    icon: <FiLayers />,
  },
  {
    link: "Add-views-to-the-facility",
    name: "Add Views to the facility",
    icon: <FiLayers />,
  },
  {
    link: "manage-credential",
    name: "Manage Credential",
    icon: <RiSendPlaneLine />,
  },
  {
    link: "bulk-upload",
    name: "Bulk Upload",
    icon: <AiOutlineUserAdd />,
  },
  {
    link: "billerlog-user",
    name: "Biller log User",
    icon: <AiOutlineUser />,
  },
  {
    link: "All-accounts-report-execution",
    name: "All Accounts Report Execution",
    icon: <BsHouseDoor />,
  },
  {
    link: "duplicate-manage-claims-report",
    name: "Duplicate Manage Claims Report",
    icon: <FaBoxOpen />,
  },
  {
    link: "missing-billed-sessions-under-appointment",
    name: "Missing Billed Sessions Under Appointment",
    icon: <FiAnchor />,
  },
  {
    link: "create-deposit-apply-with-no-check",
    name: "Create Deposit Apply With NoCheck",
    icon: <MdOutlinePayment />,
  },
  {
    link: "insurance-details",
    name: "Insurance Details",
    icon: <BiLinkAlt />,
  },
  {
    link: "sms-email-settings",
    name: "SMS Email Settings",
    icon: <BiFolderOpen />,
  },
  {
    link: "blocked-admins-settings",
    name: "Block Unblock Admins",
    icon: <TbFileTime />,
  },
];

export const patient_info = [
  {
    link: "/patient-info",
    name: "Patient Info",
  },
  {
    link: "patient-authorization",
    name: "Authorization",
  },
  {
    link: "patient-document",
    name: "Documents",
  },
  {
    link: "patient-portal",
    name: "Patient Portal",
  },
  {
    link: "patient-ledger",
    name: "patient Ledger",
  },
];

export const demoData = [
  {
    id: 1,
    first_name: "Ettie",
    last_name: "Benardeau",
    email: "ebenardeau0@hp.com",
    gender: "Female",
    ip_address: "128.17.86.50",
  },
  {
    id: 2,
    first_name: "Arni",
    last_name: "Matthews",
    email: "amatthews1@answers.com",
    gender: "Male",
    ip_address: "16.60.6.195",
  },
  {
    id: 3,
    first_name: "Fowler",
    last_name: "Madders",
    email: "fmadders2@hubpages.com",
    gender: "Male",
    ip_address: "222.37.89.92",
  },
  {
    id: 4,
    first_name: "Ives",
    last_name: "Forestel",
    email: "iforestel3@mac.com",
    gender: "Male",
    ip_address: "133.47.49.180",
  },
];

export const practiceData = [
  {
    id: 1,
    Business_name: "Kora",
    DBA_name: "Ferrettini",
    tax_id_no: "2P34XR0RN72",
    npi: "71-092-7626",
    address: "5th Floor",
    city: "Ziyang Chengguanzhen",
    state: "csd",
    zip: "STG",
    phone_number: "214-864-5628",
    mediaid: "4UV6AP1FG45",
    status: true,
  },
  {
    id: 2,
    Business_name: "Yelena",
    DBA_name: "Donnachie",
    tax_id_no: "3JW5MW2VT36",
    npi: "50-160-2201",
    address: "Suite 48",
    city: "Birštonas",
    state: "csd",
    zip: "DAK",
    phone_number: "341-971-6822",
    mediaid: "9E16H81VK90",
    status: false,
  },
  {
    id: 3,
    Business_name: "Berk",
    DBA_name: "Iglesias",
    tax_id_no: "8YC1UU8KC64",
    npi: "61-132-1451",
    address: "PO Box 27545",
    city: "Noailles",
    state: "Picardie",
    zip: "CFU",
    phone_number: "437-709-1905",
    mediaid: "7J56CH3KT25",
    status: true,
  },
  {
    id: 4,
    Business_name: "Rozele",
    DBA_name: "Nice",
    tax_id_no: "9FE3XJ3KE43",
    npi: "87-502-4222",
    address: "10th Floor",
    city: "Zunilito",
    state: "csd",
    zip: "YNG",
    phone_number: "113-793-8741",
    mediaid: "9TT1C60HA88",
    status: false,
  },
  {
    id: 5,
    Business_name: "Maurice",
    DBA_name: "Chattaway",
    tax_id_no: "1G16V77RU92",
    npi: "54-308-7489",
    address: "Room 836",
    city: "Panambi",
    state: "csd",
    zip: "IIS",
    phone_number: "519-100-8737",
    mediaid: "4JQ0W29PY39",
    status: true,
  },
  {
    id: 6,
    Business_name: "Coralyn",
    DBA_name: "Crewe",
    tax_id_no: "9K34QE4AA62",
    npi: "24-462-5500",
    address: "Apt 1785",
    city: "Ukhta",
    state: "csd",
    zip: "ZRZ",
    phone_number: "202-298-0440",
    mediaid: "4D49QY5PV35",
    status: false,
  },
  {
    id: 7,
    Business_name: "Jethro",
    DBA_name: "Baskerfield",
    tax_id_no: "1C35GH8PN61",
    npi: "33-723-6851",
    address: "Apt 200",
    city: "Guzhan",
    state: "csd",
    zip: "PGO",
    phone_number: "478-896-3107",
    mediaid: "9C47RM8PK23",
    status: true,
  },
  {
    id: 8,
    Business_name: "Rockie",
    DBA_name: "Ferson",
    tax_id_no: "7DC7E90GQ14",
    npi: "24-559-2500",
    address: "Room 1000",
    city: "Šenkovec",
    state: "csd",
    zip: "EKB",
    phone_number: "367-593-6454",
    mediaid: "6YR1C43HE66",
    status: false,
  },
  {
    id: 9,
    Business_name: "Cathee",
    DBA_name: "Hessay",
    tax_id_no: "8XY8YU8CD73",
    npi: "84-700-2090",
    address: "Room 1005",
    city: "Tambaksari",
    state: "csd",
    zip: "BRX",
    phone_number: "938-466-9444",
    mediaid: "1KK2AQ5TF40",
    status: false,
  },
  {
    id: 10,
    Business_name: "Gard",
    DBA_name: "Berringer",
    tax_id_no: "2G16E57QA73",
    npi: "83-739-1604",
    address: "Apt 1816",
    city: "Wako",
    state: "csd",
    zip: "TMC",
    phone_number: "146-556-3948",
    mediaid: "4UD5RV7MR84",
    status: true,
  },
  {
    id: 11,
    Business_name: "Massimiliano",
    DBA_name: "Cherrie",
    tax_id_no: "7HD7DP9NW01",
    npi: "16-385-7605",
    address: "Suite 13",
    city: "Houba",
    state: "csd",
    zip: "MIV",
    phone_number: "804-811-3253",
    mediaid: "8AE3C50NG74",
    status: false,
  },
  {
    id: 12,
    Business_name: "Zea",
    DBA_name: "Colgrave",
    tax_id_no: "6YK9D73HR67",
    npi: "22-739-1131",
    address: "20th Floor",
    city: "Bantacan",
    state: "csd",
    zip: "BET",
    phone_number: "211-607-0100",
    mediaid: "2HY9Q25JE80",
    status: true,
  },
  {
    id: 13,
    Business_name: "Madalena",
    DBA_name: "Pacheco",
    tax_id_no: "6NM5DW9UR51",
    npi: "14-883-3829",
    address: "PO Box 99110",
    city: "Kompaniyivka",
    state: "csd",
    zip: "0",
    phone_number: "648-562-8899",
    mediaid: "7NW6QW0KH25",
    status: false,
  },
  {
    id: 14,
    Business_name: "Flossy",
    DBA_name: "Sawyer",
    tax_id_no: "1UM7GG6TD86",
    npi: "85-096-4113",
    address: "Room 1937",
    city: "Baqiu",
    state: "csd",
    zip: "YEK",
    phone_number: "740-992-1382",
    mediaid: "2AT6E05AC94",
    status: false,
  },
  {
    id: 15,
    Business_name: "Nicole",
    DBA_name: "Jeaycock",
    tax_id_no: "6DD4VK8RC85",
    npi: "33-348-9545",
    address: "Room 977",
    city: "Dois Portos",
    state: "Lisboa",
    zip: "QNJ",
    phone_number: "984-269-2257",
    mediaid: "2YU1HU0FP24",
    status: false,
  },
  {
    id: 16,
    Business_name: "Budd",
    DBA_name: "Mein",
    tax_id_no: "7AG8W94KU30",
    npi: "48-591-6585",
    address: "PO Box 75272",
    city: "Botigues",
    state: "csd",
    zip: "AIP",
    phone_number: "227-271-4662",
    mediaid: "4JA4MT7KE37",
    status: true,
  },
  {
    id: 17,
    Business_name: "Waldon",
    DBA_name: "Hassekl",
    tax_id_no: "7CM5YC5GM17",
    npi: "23-883-8959",
    address: "PO Box 47358",
    city: "Xiangfu",
    state: "csd",
    zip: "GOR",
    phone_number: "975-701-9600",
    mediaid: "6D49H48DW09",
    status: true,
  },
  {
    id: 18,
    Business_name: "Evonne",
    DBA_name: "Smy",
    tax_id_no: "8E53WV9UA52",
    npi: "40-633-4058",
    address: "Suite 16",
    city: "Mandepa Barat",
    state: "csd",
    zip: "PIN",
    phone_number: "723-612-9088",
    mediaid: "2PD7G04AG51",
    status: false,
  },
  {
    id: 19,
    Business_name: "Gabby",
    DBA_name: "Doge",
    tax_id_no: "9MJ2M44HF63",
    npi: "72-520-7692",
    address: "PO Box 4931",
    city: "Meïganga",
    state: "csd",
    zip: "PDB",
    phone_number: "243-536-5654",
    mediaid: "7JU1N00MR70",
    status: true,
  },
  {
    id: 20,
    Business_name: "Lorain",
    DBA_name: "Vearnals",
    tax_id_no: "8AA0M76HK10",
    npi: "82-825-2979",
    address: "Apt 533",
    city: "Cotaparaco",
    state: "csd",
    zip: "BNZ",
    phone_number: "600-496-3249",
    mediaid: "1TX2PC4UA46",
    status: true,
  },
];
