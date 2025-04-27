"use client";
import { useCart } from "@/app/context/CartContext";
import styles from "./CartItemQuantity.module.css";

const CartItemQuantity = ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) => {
  const { increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div className={styles[`quantity`]}>
      <button
        className={styles["qty-btn"]}
        onClick={() => decreaseQuantity(id)}
      >
        -
      </button>

      <span className={styles["qty"]}>{quantity}</span>
      <button
        className={styles["qty-btn"]}
        onClick={() => increaseQuantity(id)}
      >
        +
      </button>
    </div>
  );
};

export default CartItemQuantity;
