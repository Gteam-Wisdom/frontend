import { FunctionComponent, ReactNode } from "react";
import Typography from "../../../components/Typography";

interface CategoryProps {
  children: ReactNode;
  className?: string;
}

const Category: FunctionComponent<CategoryProps> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      <Typography>{children}</Typography>
    </div>
  );
};

export default Category;
