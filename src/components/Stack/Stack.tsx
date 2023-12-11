// Stack.tsx
import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Stack.module.css";

interface StackProps {
  direction?: "row" | "column";
  children?: ReactNode;
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  className?: string;
  p?: string;
  gap?: string;
}

const Stack: React.FC<StackProps> = ({
  direction,
  children,
  align,
  justify,
  className,
  gap,
  p,
  ...rest
}) => {
  const stackClass = classNames(
    styles.stack,
    styles[direction as string],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    className
  );

  const customStyle = {
    padding: p + "px",
    gap: gap + "px",
    justifyContent: justify,
  };

  return (
    <div className={stackClass} style={customStyle} {...rest}>
      {children}
    </div>
  );
};

Stack.defaultProps = {
  direction: "column",
  align: "stretch",
  justify: "flex-start",
};

export default Stack;
