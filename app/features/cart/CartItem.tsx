"use client";
import { formatPrice } from "@/app/lib/utils";
import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={styles[`cart-item`]}>
      {/*  */}
      <div className={styles[`product-info`]}>
        <span className={styles[`close`]}>&times;</span>
        <div className={styles[`product-name`]}>Product A</div>
      </div>

      <div className={styles[`quantity`]}>
        <button className={styles["qty-btn"]}>-</button>
        <input type="text" value="1" className={styles["qty-input"]} readOnly />
        <button className={styles["qty-btn"]}>+</button>
      </div>
      <div className={styles[`product-price`]}>{formatPrice(29.99)}</div>
    </div>
  );
};

export default CartItem;
