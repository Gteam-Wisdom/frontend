import styles from "./Button.module.css";

import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  wrapperStyle?: React.CSSProperties;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  isWide?: boolean;
  isLong?: boolean;
  isAccent?: boolean;
  isBold?: boolean;
  isCenter?: boolean;
  hasBorder?: boolean;
  rounded?: boolean;
  fit?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  type,
  disabled,
  wrapperStyle,
  isWide = false,
  isLong,
  isAccent,
  isBold,
  isCenter,
  hasBorder,
  fit,
  rounded,
}) => {
  const classNames = `${className ? className : null} ${
    isCenter ? styles.center : ""
  } ${isWide ? styles.wide : ""} ${isLong ? styles.long : ""} ${
    isAccent ? styles.accent : ""
  } ${isBold ? styles.bold : ""} ${hasBorder ? styles.border : ""} ${
    fit ? styles.fit : ""
  } ${rounded ? styles.rounded : ""}`;

  return (
    <button
      className={classNames}
      style={wrapperStyle}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
