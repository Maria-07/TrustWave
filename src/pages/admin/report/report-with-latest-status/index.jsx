import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ReportAllStatus = () => {
  return <div>ReportAllStatus</div>;
};

export default ReportAllStatus;

ReportAllStatus.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
