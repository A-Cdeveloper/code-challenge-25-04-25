import Logo from "./Logo";
import MiniCart from "./MiniCart";
import styles from "./_styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      {/* <Navigation /> */}
      <MiniCart />
    </header>
  );
};

export default Header;
