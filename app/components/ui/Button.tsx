"use client";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "button" | "add" | "submit" | "reset" | "disable";
  size?: "small" | "medium" | "large";
  style?: React.CSSProperties;
};

const Button = ({
  children,
  onClick,
  variant = "button",
  size = "medium",
  style,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[variant] || ""} ${styles[size] || ""}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
