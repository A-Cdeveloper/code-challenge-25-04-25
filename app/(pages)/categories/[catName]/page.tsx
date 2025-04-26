import GoBack from "@/app/components/ui/GoBack";
import CatProductsList from "@/app/features/products/CatProductsList";
import React from "react";

const SigleCategoryPage = async () => {
  return (
    <>
      <GoBack />
      <h2>Category name (10)</h2>
      <CatProductsList />
    </>
  );
};

export default SigleCategoryPage;
