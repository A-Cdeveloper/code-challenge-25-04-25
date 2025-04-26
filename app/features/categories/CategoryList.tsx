import NoResourcesFound from "@/app/components/ui/NoResourcesFound";
import styles from "./CategoryList.module.css";
import CategoryListItem from "./CategoryListItem";
import { getAllCategories } from "./api";

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
        <CategoryListItem key={category} categoryName={category}>
          {category}
        </CategoryListItem>
      ))}
    </div>
  );
};

export default CategoryList;
