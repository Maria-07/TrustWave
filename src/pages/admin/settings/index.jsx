import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const Settings = () => {
  return <div>Settings</div>;
};

export default Settings;

Settings.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
