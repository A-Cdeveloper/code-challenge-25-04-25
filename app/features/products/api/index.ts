import { API_BASE_URL } from "@/app/lib/constants";
import { ProductType } from "../types/products";

/* response type */
type ResponseType = {
  data: ProductType[] | null;
  error: string | null;
};

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getCategoryProducts = async (
  category: string
): Promise<ResponseType> => {
  if (!category) {
    return {
      data: null,
      error: "No category provided",
    };
  }
  try {
    const res = await fetch(`${API_BASE_URL}/products/category/${category}`);
    if (!res.ok) throw new Error("Failed to fetch products ⚠");
    return {
      data: await res.json(),
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: "Failed to fetch products ⚠",
    };
  }
};
