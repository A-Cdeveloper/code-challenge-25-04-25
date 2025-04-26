import styles from "./_styles/MainArea.module.css";

const MainArea = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.main}>{children}</main>;
};

export default MainArea;
