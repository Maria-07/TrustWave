import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const Summary = () => {
  return <div>Summary</div>;
};

export default Summary;

Summary.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
