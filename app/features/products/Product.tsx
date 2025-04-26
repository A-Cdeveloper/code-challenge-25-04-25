"use client";
import Button from "@/app/components/ui/Button";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/lib/utils";
import Image from "next/image";
import styles from "./Product.module.css";
import { ProductType } from "./types/products";

const Product = ({ product }: { product: ProductType }) => {
  const { addToCart, existInCart, removeFromCart, hydrated } = useCart();
  const { id, title, price, image } = product;

  /*skip checking cart data during server-side rendering and only do it after hydration. */
  const isProductInCart = hydrated ? existInCart(id) : false;

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
