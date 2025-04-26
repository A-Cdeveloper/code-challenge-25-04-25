// import NoResourcesFound from "@/app/components/ui/NoResourcesFound";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { formatPrice } from "@/app/lib/utils";

{
  /* <NoResourcesFound>
Cart is empty. Please add items to your cart.
</NoResourcesFound> */
}

const Cart = () => {
  return (
    <div className={styles[`cart-container`]}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={styles[`total`]}>Total: {formatPrice(89.97)}</div>
    </div>
  );
};

export default Cart;
