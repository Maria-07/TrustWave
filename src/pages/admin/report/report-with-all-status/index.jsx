import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ReportWithAllStatus = () => {
  return <div>ReportWithAllStatus</div>;
};

export default ReportWithAllStatus;

ReportWithAllStatus.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
