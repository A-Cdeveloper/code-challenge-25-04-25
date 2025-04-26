// import NoResourcesFound from "@/app/components/ui/NoResourcesFound";

import CategoryListItem from "./CategoryListItem";
import styles from "./CategoryList.module.css";
{
  /* <NoResourcesFound>
No categories.
</NoResourcesFound> */
}

const CategoryList = () => {
  return (
    <div className={styles.categoryList}>
      <CategoryListItem>Category 1</CategoryListItem>
      <CategoryListItem>Category 2</CategoryListItem>
      <CategoryListItem>Category 3</CategoryListItem>
      <CategoryListItem>Category 4</CategoryListItem>
      <CategoryListItem>Category 5</CategoryListItem>
    </div>
  );
};

export default CategoryList;
