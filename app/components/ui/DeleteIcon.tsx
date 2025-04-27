"use client";
import Image from "next/image";
import styles from "./DeleteIcon.module.css";

const DeleteIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles["delete-icon"]} onClick={onClick}>
      <Image src="/trash.svg" alt="Delete" width={16} height={16} />
    </div>
  );
};

export default DeleteIcon;
