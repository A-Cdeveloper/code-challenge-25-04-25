import GoBack from "@/app/components/ui/GoBack";
import CatProductsList from "@/app/features/products/CatProductsList";
import { formatCategoryName } from "@/app/lib/utils";
import React from "react";

type Params = Promise<{ catName: string }>;

const SigleCategoryPage = async ({ params }: { params: Params }) => {
  const { catName } = await params;

  return (
    <>
      <GoBack />
      <h2>{formatCategoryName(catName)}</h2>
      <CatProductsList />
    </>
  );
};

export default SigleCategoryPage;
