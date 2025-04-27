import Image from "next/image";
import styles from "./CustomImage.module.css";

type ImageProps = {
  image: string;
  title: string;
  width?: number;
  height?: number;
  className?: string;
};

const CustomImage = ({
  image,
  title,
  width = 600,
  height = 600,
  className,
}: ImageProps) => {
  return (
    <div className={styles["custom-image-container"]}>
      <Image
        src={image ? image : "/no-image.jpg"}
        alt={title}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default CustomImage;
