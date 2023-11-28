// Stack.tsx
import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Stack.module.css";

interface StackProps {
  direction?: "row" | "column";
  spacing?: number;
  children?: ReactNode;
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  className?: string;
  gap?: number;
}

const Stack: React.FC<StackProps> = ({
  direction,
  spacing,
  children,
  align,
  justify,
  className,
  gap,
  ...rest
}) => {
  const stackClass = classNames(
    styles.stack,
    styles[direction as string],
    styles[`spacing-${spacing}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`gap-${gap}`],
    className
  );

  const customStyle = {
    marginRight: spacing + "px",
    // Add more styles as needed
  };

  return (
    <div className={stackClass} style={customStyle} {...rest}>
      {children}
    </div>
  );
};

Stack.defaultProps = {
  direction: "column",
  spacing: 2,
  align: "stretch",
  justify: "flex-start",
};

export default Stack;
