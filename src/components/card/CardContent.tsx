import { ChildrenProps } from "../../utils/types";

type CardContentProps = ChildrenProps & {};

const CardContent = ({ children }: CardContentProps) => {
  return <div className="p-6 pt-0">{children}</div>;
};

export default CardContent;
