import React, {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import styles from "./Typography.module.css";

interface CustomTypographyProps extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "p1" | "p2";
  className?: string;
  sx?: CSSProperties;
  bold?: boolean;
  secondary?: boolean;
  underline?: boolean;
}

const Typography: FunctionComponent<CustomTypographyProps> = ({
  variant = "h1",
  children,
  className,
  sx,
  bold,
  secondary,
  underline,
  ...restOfProps
}) => {
  let Tag: keyof JSX.IntrinsicElements = "p";
  let additionalClasses = "";

  switch (variant) {
    case "h1":
      Tag = "h1";
      additionalClasses = styles.h1;
      break;
    case "h2":
      Tag = "h2";
      additionalClasses = styles.h2;
      break;
    case "h3":
      Tag = "h3";
      additionalClasses = styles.h3;
      break;
    case "p1":
      Tag = "p";
      break;
    case "p2":
      Tag = "p";
      additionalClasses = styles.body2;
      break;
    default:
      Tag = "p";
  }

  if (bold) {
    additionalClasses += ` ${styles.isBold}`;
  }
  if (secondary) {
    additionalClasses += ` ${styles.isSecondary}`;
  }
  if (underline) {
    additionalClasses += ` ${styles.underline}`;
  }

  return (
    <Tag
      style={{ ...sx }}
      className={`${styles.typography} ${additionalClasses} ${className}`}
      {...restOfProps}
    >
      {children}
    </Tag>
  );
};

export default Typography;
