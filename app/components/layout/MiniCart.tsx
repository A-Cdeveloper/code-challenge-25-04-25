"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";

import styles from "./_styles/MiniCart.module.css";

const MiniCart = () => {
  const { totalCount } = useCart();

  return (
    <Link href="/cart" className={styles["mini-cart"]}>
      <Image src="/shopping-cart.svg" alt="Cart" width={25} height={25} />

      <span className={styles["total"]}>{totalCount > 0 ? totalCount : 0}</span>
    </Link>
  );
};

export default MiniCart;
