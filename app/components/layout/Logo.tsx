import Link from "next/link";
import styles from "./_styles/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <h1>Webshop</h1>
      </Link>
    </div>
  );
};

export default Logo;
