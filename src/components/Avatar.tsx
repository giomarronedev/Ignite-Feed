import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  // Usando desestruturação: buscanso APENAS as props hasborder e src no código, sendo o padrão da propriedas hasBorder como true.

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
