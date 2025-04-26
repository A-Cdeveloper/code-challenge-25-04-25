import NoResourcesFound from "@/app/components/ui/NoResourcesFound";
import styles from "./CatProductsList.module.css";
import Product from "./Product";
import { getCategoryProducts } from "./api";

const CatProductsList = async ({ category }: { category: string }) => {
  const { data: products, error } = await getCategoryProducts(category);

  if (error) {
    return <p>{error}</p>;
  }

  if (!products || products.length === 0) {
    return (
      <NoResourcesFound>No products found in this category.</NoResourcesFound>
    );
  }

  return (
    <>
      <p className={styles[`products-count`]}>
        Number of products: {products?.length}
      </p>
      <section className={styles[`product-grid`]}>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default CatProductsList;
