// import NoResourcesFound from "@/app/components/ui/NoResourcesFound";
import styles from "./CatProductsList.module.css";
import CatProduct from "./CatProduct";

{
  /* <NoResourcesFound>
No products found in this category.
</NoResourcesFound> */
}

const CatProductsList = () => {
  return (
    <>
      <p className={styles[`products-count`]}>Number of products: 12</p>
      <section className={styles[`product-grid`]}>
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />
        <CatProduct />

        <CatProduct />
      </section>
    </>
  );
};

export default CatProductsList;
