import { Suspense } from "react";
import CategoryList from "./features/categories/CategoryList";

export default function Home() {
  return (
    <>
      <h2>Product categories</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <CategoryList />
      </Suspense>
    </>
  );
}
