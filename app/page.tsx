import { Suspense } from "react";
import CategoryList from "./features/categories/CategoryList";
import Loader from "./components/ui/Loader";

export default function Home() {
  return (
    <>
      <h2>Product categories</h2>
      <Suspense fallback={<Loader />}>
        <CategoryList />
      </Suspense>
    </>
  );
}
