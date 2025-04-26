import Button from "@/app/components/ui/Button";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Link from "next/link";

const Cart = () => {
  return (
    <div className={styles[`cart-container`]}>
      {/* <p>Cart is empty. Please add items to your cart.</p>
      <Link href="/">
        <Button size="medium" style={{ marginTop: "1rem" }}>
          Go to homepage
        </Button>
      </Link> */}
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />

      <div className={styles[`total`]}>Total: $89.97</div>
    </div>
  );
};

export default Cart;
