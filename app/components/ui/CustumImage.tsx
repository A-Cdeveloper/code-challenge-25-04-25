import Image from "next/image";
import styles from "./CustumImage.module.css";

type ImageProps = {
  image: string;
  title: string;
  width: number;
  height: number;
};

const CustumImage = ({
  image,
  title,
  width = 200,
  height = 200,
}: ImageProps) => {
  return (
    <div className={styles["custom-image-container"]}>
      <Image
        src={image ? image : "/no-image.jpg"}
        alt={title}
        width={width}
        height={height}
      />
    </div>
  );
};

export default CustumImage;
