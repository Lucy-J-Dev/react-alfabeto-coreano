import { ChildrenProps } from "../../utils/types";

type CardTitleProps = ChildrenProps & {};

const CardTitle = ({ children }: CardTitleProps) => {
  return <h3 className="text-2xl font-semibold">{children}</h3>;
};

export default CardTitle;
