import CustomImage from "@/app/components/ui/CustomImage";
import { formatPrice } from "@/app/lib/utils";
import styles from "./Product.module.css";
import ProductActions from "./ProductActions";
import { ProductType } from "./types/products";

const Product = ({ product }: { product: ProductType }) => {
  const { title, price, image } = product;

  return (
    <div className={styles[`product-card`]}>
      <CustomImage
        image={image ? image : "/no-image.jpg"}
        title={title}
        width={200}
        height={200}
      />
      <h3>{title}</h3>
      <p>{formatPrice(price)}</p>
      <ProductActions product={product} />
    </div>
  );
};

export default Product;
