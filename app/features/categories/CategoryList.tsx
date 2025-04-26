// import NoResourcesFound from "@/app/components/ui/NoResourcesFound";

import CategoryListItem from "./CategoryListItem";
import styles from "./CategoryList.module.css";
import { getAllCategories } from "./api";
import NoResourcesFound from "@/app/components/ui/NoResourcesFound";

const CategoryList = async () => {
  const { data: categories, error } = await getAllCategories();

  if (error) {
    return <p>{error}</p>;
  }

  if (!categories || categories.length === 0) {
    return <NoResourcesFound>No categories found.</NoResourcesFound>;
  }
  return (
    <div className={styles.categoryList}>
      {categories?.map((category) => (
        <CategoryListItem key={category}>{category}</CategoryListItem>
      ))}
    </div>
  );
};

export default CategoryList;
