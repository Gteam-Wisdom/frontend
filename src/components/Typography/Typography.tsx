import React, {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
} from "react";

interface CustomTypographyProps extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "secondary";
  className?: string;
  sx?: CSSProperties;
  bold?: boolean;
}

const Typography: FunctionComponent<CustomTypographyProps> = ({
  variant = "body1",
  children,
  className,
  sx,
  bold,
  ...restOfProps
}) => {
  let Tag: keyof JSX.IntrinsicElements = "p";
  let defaultStyle: CSSProperties = {
    fontSize: variant === "body2" ? "14px" : "16px",
    fontStyle: "normal",
    fontWeight: bold ? 600 : 400,
    lineHeight: variant === "body2" ? "20px" : "26px",
    textAlign: "center",
    color: variant === "secondary" ? "#6B6985" : "#321841",
  };

  switch (variant) {
    case "h1":
      Tag = "h1";
      break;
    case "h2":
      Tag = "h2";
      break;
    case "h3":
      Tag = "h3";
      break;
    case "body1":
      Tag = "p";
      break;
    case "body2":
      Tag = "p";
      break;
    case "secondary":
      Tag = "p";
      break;
    default:
      Tag = "p";
  }

  return (
    <Tag
      style={{ ...defaultStyle, ...sx }}
      className={className}
      {...restOfProps}
    >
      {children}
    </Tag>
  );
};

export default Typography;
