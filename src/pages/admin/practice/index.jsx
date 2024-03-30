import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const PracticePage = () => {
  return <div>PracticePage</div>;
};

export default PracticePage;

PracticePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
