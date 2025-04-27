import CustomImage from "@/app/components/ui/CustomImage";
import CartItemQuantity from "./CartItemQuantity";
import CartItemRemove from "./CartItemRemove";

import { CartItemType } from "./types/cartItems";
import { formatPrice } from "@/app/lib/utils";
import styles from "./CartItem.module.css";

const CartItem = ({ item }: { item: CartItemType }) => {
  const { id, title, price, quantity, category, image } = item;
  return (
    <div className={styles[`cart-item`]}>
      <CartItemRemove id={id} />

      <CustomImage
        image={image ? image : "/no-image.jpg"}
        title={title}
        className={styles[`product-image`]}
      />
      <div className={styles[`product-info`]}>
        <div className={styles[`product-name`]}>
          {title}
          <br />
          <span className={styles[`product-category`]}>
            Category: {category}
          </span>
        </div>
      </div>
      <CartItemQuantity id={id} quantity={quantity} />
      <div className={styles[`product-price`]}>{formatPrice(price)}</div>
    </div>
  );
};

export default CartItem;
