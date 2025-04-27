"use client";
import CustomImage from "@/app/components/ui/CustomImage";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/lib/utils";
import styles from "./CartItem.module.css";
import { CartItemType } from "./types/cartItems";
import DeleteIcon from "@/app/components/ui/DeleteIcon";

const CartItem = ({ item }: { item: CartItemType }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const { id, title, price, quantity, category, image } = item;
  return (
    <div className={styles[`cart-item`]}>
      {/*  */}
      <DeleteIcon onClick={() => removeFromCart(id)} />
      <div className={styles[`product-info`]}>
        <CustomImage
          image={image ? image : "/no-image.jpg"}
          title={title}
          height={80}
          width={80}
        />

        <div className={styles[`product-name`]}>
          {title}
          <br />
          <span className={styles[`product-category`]}>
            Category: {category}
          </span>
        </div>
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
