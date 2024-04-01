import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const Reminder = () => {
  return <div>Reminder</div>;
};

export default Reminder;

Reminder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
