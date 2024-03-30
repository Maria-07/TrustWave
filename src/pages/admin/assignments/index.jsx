import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const AssignmentPage = () => {
  return <div>AssignmentPage</div>;
};

export default AssignmentPage;

AssignmentPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
