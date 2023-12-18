import { FunctionComponent, ReactNode } from "react";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

const Link: FunctionComponent<CustomLinkProps> = ({
  to,
  children,
  className,
  target,
}) => {
  const handleClick = () => {
    // TODO: handle click
  };

  return (
    <a href={to} className={className} target={target} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
