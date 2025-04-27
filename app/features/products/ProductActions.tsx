"use client";

import { useCart } from "@/app/context/CartContext";
import { ProductType } from "./types/products";
import Button from "@/app/components/ui/Button";
import DeleteIcon from "@/app/components/ui/DeleteIcon";
import styles from "./ProductActions.module.css";

const ProducActions = ({ product }: { product: ProductType }) => {
  const { addToCart, existInCart, removeFromCart, hydrated } = useCart();
  const { id, title, price, image, category } = product;

  /*skip checking cart data during server-side rendering and only do it after hydration. */
  const isProductInCart = hydrated ? existInCart(id) : false;

  return (
    <div className={styles[`actions`]}>
      {hydrated &&
        (isProductInCart ? (
          <>
            <Button variant="disable" size="small">
              In Cart ✔
            </Button>
            <DeleteIcon onClick={() => removeFromCart(id)} />
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
  );
};

export default ProducActions;
