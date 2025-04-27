"use client";

import DeleteIcon from "@/app/components/ui/DeleteIcon";
import { useCart } from "@/app/context/CartContext";

const CartItemRemove = ({ id }: { id: number }) => {
  const { removeFromCart } = useCart();
  return <DeleteIcon onClick={() => removeFromCart(id)} />;
};

export default CartItemRemove;
