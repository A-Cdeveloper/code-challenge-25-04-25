import { Suspense } from "react";
import { Metadata } from "next";

import GoBack from "@/app/components/ui/GoBack";
import CatProductsList from "@/app/features/products/CatProductsList";
import Loader from "@/app/components/ui/Loader";

import { formatCategoryName } from "@/app/lib/utils";

type Params = Promise<{ catName: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { catName } = await params;
  return {
    title: formatCategoryName(catName),
  };
}

const SigleCategoryPage = async ({ params }: { params: Params }) => {
  const { catName } = await params;

  return (
    <>
      <GoBack />
      <h2>{formatCategoryName(catName)}</h2>
      <Suspense fallback={<Loader />}>
        <CatProductsList category={catName} />
      </Suspense>
    </>
  );
};

export default SigleCategoryPage;
