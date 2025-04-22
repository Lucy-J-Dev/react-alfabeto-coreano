import { ChildrenProps } from "../../utils/types";

type CardHeaderProps = ChildrenProps & {};

const CardHeader = ({ children }: CardHeaderProps) => {
  return <div className="flex items-center justify-between p-6 pb-0">{children}</div>;
};

export default CardHeader;
