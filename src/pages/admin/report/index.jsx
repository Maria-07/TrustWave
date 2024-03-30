import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ReportPage = () => {
  return <div>ReportPage</div>;
};

export default ReportPage;

ReportPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
