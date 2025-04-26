import Button from "@/app/components/ui/Button";
import styles from "./Product.module.css";
import Image from "next/image";
import { formatPrice } from "@/app/lib/utils";
import { ProductType } from "./types/products";

const Product = ({ product }: { product: ProductType }) => {
  const { title, price, image } = product;
  return (
    <div className={styles[`product-card`]}>
      <Image
        src={image ? image : "/no-image.jpg"}
        alt={title}
        width={200}
        height={200}
      />
      <h3>{title}</h3>
      <p>{formatPrice(price)}</p>
      <Button variant="add" size="small">
        Add to Cart
      </Button>
      {/* <Button variant="disable" size="small">
        In Cart ✔
      </Button> */}
    </div>
  );
};

export default Product;
