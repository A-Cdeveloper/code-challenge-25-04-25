import Link from "next/link";
import styles from "./CategoryListItem.module.css";

const CategoryListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.categoryListItem}>
      <h3>
        <Link href={`/categories/${children}`}>{children}</Link>
      </h3>
    </div>
  );
};

export default CategoryListItem;
