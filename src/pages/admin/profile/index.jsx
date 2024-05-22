import RootLayout from "@/component/Layouts/RootLayout";
import ChangePassword from "@/component/UI/Admin/Profile/ChangePassword";
import PersonalInfo from "@/component/UI/Admin/Profile/PersonalInfo";
import { Tabs } from "antd";
import { useTheme } from "next-themes";
import React from "react";

const ProfilePage = () => {
  const { theme } = useTheme();
  const tabItems = [
    {
      label: (
        <h1
          className={`${
            theme === "dark"
              ? "text-dark-primary"
              : "text-fontC hover:text-secondary"
          } sm:px-10 text-base transition-all w-[50%]`}
        >
          Personal Information
        </h1>
      ),
      key: 1,
      children: (
        <div
          className={`${theme === "dark" ? "text-dark-primary" : "text-fontC"}`}
        >
          <PersonalInfo></PersonalInfo>
        </div>
      ),
    },
    {
      label: (
        <h1
          className={`${
            theme === "dark"
              ? "text-dark-primary"
              : "text-fontC hover:text-secondary"
          } sm:px-10 text-base transition-all w-[50%]`}
        >
          Change Password
        </h1>
      ),
      key: 2,
      children: (
        <div
          className={`${theme === "dark" ? "text-dark-primary" : "text-fontC"}`}
        >
          <ChangePassword></ChangePassword>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Tabs type="card" items={tabItems} />
    </div>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
