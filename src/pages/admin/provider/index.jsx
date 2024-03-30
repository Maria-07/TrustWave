import RootLayout from "@/component/Layouts/RootLayout";
import React from "react";

const ProviderPage = () => {
  return <div>ProviderPage</div>;
};

export default ProviderPage;

ProviderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
