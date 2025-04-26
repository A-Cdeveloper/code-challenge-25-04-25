import Link from "next/link";
import styles from "./CategoryListItem.module.css";
import { formatCategoryName } from "@/app/lib/utils";

const CategoryListItem = ({
  children,
  categoryName,
}: {
  children: React.ReactNode;
  categoryName: string;
}) => {
  return (
    <div className={styles.categoryListItem}>
      <h3>
        <Link href={`/categories/${children}`}>
          {formatCategoryName(categoryName)}
        </Link>
      </h3>
    </div>
  );
};

export default CategoryListItem;
