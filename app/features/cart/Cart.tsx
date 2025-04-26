"use client";
import { useCart } from "@/app/context/CartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { formatPrice } from "@/app/lib/utils";
import NoResourcesFound from "@/app/components/ui/NoResourcesFound";

const Cart = () => {
  const { cart, totalPrice, hydrated } = useCart();

  if (hydrated && cart.length === 0) {
    return (
      <NoResourcesFound>
        Cart is empty. Please add items to your cart.
      </NoResourcesFound>
    );
  }

  return (
    <div className={styles[`cart-container`]}>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {hydrated && (
        <div className={styles[`total`]}>Total: {formatPrice(totalPrice)}</div>
      )}
    </div>
  );
};

export default Cart;
