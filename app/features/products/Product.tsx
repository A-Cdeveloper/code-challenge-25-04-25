"use client";
import Button from "@/app/components/ui/Button";
import CustumImage from "@/app/components/ui/CustumImage";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/lib/utils";
import styles from "./Product.module.css";
import { ProductType } from "./types/products";

const Product = ({ product }: { product: ProductType }) => {
  const { addToCart, existInCart, removeFromCart, hydrated } = useCart();
  const { id, title, price, image, category } = product;

  /*skip checking cart data during server-side rendering and only do it after hydration. */
  const isProductInCart = hydrated ? existInCart(id) : false;

  return (
    <div className={styles[`product-card`]}>
      <CustumImage
        image={image ? image : "/no-image.jpg"}
        title={title}
        width={200}
        height={200}
      />
      <h3>{title}</h3>
      <p>{formatPrice(price)}</p>
      <div className={styles[`actions`]}>
        {hydrated &&
          (isProductInCart ? (
            <>
              <Button variant="disable" size="small">
                In Cart ✔
              </Button>
              <Button
                size="small"
                onClick={() => removeFromCart(id)}
                style={{ backgroundColor: "var(--accent-color)" }}
              >
                &times;
              </Button>
            </>
          ) : (
            <Button
              variant="add"
              size="small"
              onClick={() =>
                addToCart({
                  id,
                  title,
                  price,
                  quantity: 1,
                  category,
                  image,
                })
              }
            >
              Add to Cart
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Product;
