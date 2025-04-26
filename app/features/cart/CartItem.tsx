"use client";
import { formatPrice } from "@/app/lib/utils";
import styles from "./CartItem.module.css";
import { CartItemType } from "./types/cartItems";
import { useCart } from "@/app/context/CartContext";

const CartItem = ({ item }: { item: CartItemType }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const { id, title, price, quantity } = item;
  return (
    <div className={styles[`cart-item`]}>
      {/*  */}
      <div className={styles[`product-info`]}>
        <span className={styles[`close`]} onClick={() => removeFromCart(id)}>
          &times;
        </span>
        <div className={styles[`product-name`]}>{title}</div>
      </div>

      <div className={styles[`quantity`]}>
        <button
          className={styles["qty-btn"]}
          onClick={() => decreaseQuantity(id)}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          className={styles["qty-input"]}
          readOnly
        />
        <button
          className={styles["qty-btn"]}
          onClick={() => increaseQuantity(id)}
        >
          +
        </button>
      </div>
      <div className={styles[`product-price`]}>{formatPrice(price)}</div>
    </div>
  );
};

export default CartItem;
