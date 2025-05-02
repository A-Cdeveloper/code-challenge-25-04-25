"use client";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "button" | "add" | "submit" | "reset" | "disable";
  size?: "small" | "medium" | "large";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  onClick,
  variant = "button",
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[variant] || ""} ${styles[size] || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
