import Link from "next/link";
import styles from "./_styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      {/* Other links in future implementation */}
    </nav>
  );
};

export default Navigation;
