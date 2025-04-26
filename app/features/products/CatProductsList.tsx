import CatProduct from "./CatProduct";
import styles from "./CatProductsList.module.css";

const CatProductsList = () => {
  return (
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
  );
};

export default CatProductsList;
