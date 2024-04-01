import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ProductionReport = () => {
  return <div>ProductionReport</div>;
};

export default ProductionReport;

ProductionReport.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
