import Image from "next/image";
import Link from "next/link";
import React from "react";

const MiniCart = () => {
  return (
    <Link href="/cart">
      <Image src="/shopping-cart.svg" alt="Cart" width={25} height={25} />
    </Link>
  );
};

export default MiniCart;
