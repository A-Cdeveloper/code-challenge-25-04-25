import GoBack from "@/app/components/ui/GoBack";
import Cart from "@/app/features/cart/Cart";

const CartPage = () => {
  return (
    <>
      <GoBack />
      <h2>Your Cart</h2>
      <Cart />
    </>
  );
};

export default CartPage;
