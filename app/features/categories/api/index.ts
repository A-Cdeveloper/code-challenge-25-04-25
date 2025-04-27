import { API_BASE_URL } from "@/app/lib/constants";

/* category type can be complex object in the future */
type CategoryType = string;

/* response type */
type ResponseType = {
  data: CategoryType[] | null;
  error: string | null;
};

// TEST const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getAllCategories = async (): Promise<ResponseType> => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/categories/`);
    if (!res.ok) throw new Error("Failed to fetch categories ⚠");
    return {
      data: await res.json(),
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: "Failed to fetch categories ⚠",
    };
  }
};
