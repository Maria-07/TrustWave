import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ReminderPage = () => {
  return <div>ReminderPage</div>;
};

export default ReminderPage;

ReminderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
