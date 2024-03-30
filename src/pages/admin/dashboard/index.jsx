import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const Dashboard = () => {
  return <div>dashoard</div>;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
