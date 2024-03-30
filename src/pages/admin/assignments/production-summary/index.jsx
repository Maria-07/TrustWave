import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ProductionSummary = () => {
  return <div>ProductionSummary</div>;
};

export default ProductionSummary;

ProductionSummary.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
