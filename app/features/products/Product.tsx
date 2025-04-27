"use client";
import Button from "@/app/components/ui/Button";
import CustomImage from "@/app/components/ui/CustomImage";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/app/lib/utils";
import styles from "./Product.module.css";
import { ProductType } from "./types/products";
import DeleteIcon from "@/app/components/ui/DeleteIcon";

const Product = ({ product }: { product: ProductType }) => {
  const { addToCart, existInCart, removeFromCart, hydrated } = useCart();
  const { id, title, price, image, category } = product;

  /*skip checking cart data during server-side rendering and only do it after hydration. */
  const isProductInCart = hydrated ? existInCart(id) : false;

  return (
    <div className={styles[`product-card`]}>
      <CustomImage
        image={image ? image : "/no-image.jpg"}
        title={title}
        width={200}
        height={200}
      />
      <h3>{title}</h3>
      <p>{formatPrice(price)}</p>
      <div className={styles[`actions`]}>
        {hydrated &&
          (isProductInCart ? (
            <>
              <Button variant="disable" size="small">
                In Cart ✔
              </Button>
              <DeleteIcon onClick={() => removeFromCart(id)} />
            </>
          ) : (
            <Button
              variant="add"
              size="small"
              onClick={() =>
                addToCart({
                  id,
                  title,
                  price,
                  quantity: 1,
                  category,
                  image,
                })
              }
            >
              Add to Cart
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Product;
