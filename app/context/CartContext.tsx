"use client";

import { createContext, use } from "react";
import { CartItemType } from "../features/cart/types/cartItems";
import useLocalStorage from "../hooks/useLocalStorage";

type CartContextType = {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  existInCart: (id: number) => boolean;
  hydrated: boolean;
  totalPrice: number;
  totalCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart, hydrated] = useLocalStorage<CartItemType[] | []>(
    "cart",
    []
  );

  const addToCart = (item: CartItemType) => {
    setCart((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      // if item is already in cart, increase quantity
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      // if item is not in cart, add it
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.id === id) {
          if (item.quantity <= 1) {
            return []; // REMOVE item
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const existInCart = (id: number) => {
    return cart.some((item) => item.id === id);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const cartState = {
    cart,
    addToCart,
    existInCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalCount,
    hydrated,
  };

  return <CartContext value={cartState}>{children}</CartContext>;
};

export const useCart = () => {
  const context = use(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
