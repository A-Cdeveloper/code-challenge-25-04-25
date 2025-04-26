import Button from "@/app/components/ui/Button";
import styles from "./CatProduct.module.css";
import Image from "next/image";
import { formatPrice } from "@/app/lib/utils";

const CatProduct = () => {
  return (
    <div className={styles[`product-card`]}>
      {/* <Image
        src="https://picsum.photos/200/200"
        alt="Product 1"
        width={200}
        height={200}
      /> */}

      <Image
        src="/no-image.jpg"
        alt="Product 1"
        width={200}
        height={200}
      ></Image>
      <h3>Product 1</h3>
      <p>{formatPrice(29.99)}</p>
      <Button variant="add" size="small">
        Add to Cart
      </Button>
      {/* <Button variant="disable" size="small">
        In Cart ✔
      </Button> */}
    </div>
  );
};

export default CatProduct;
