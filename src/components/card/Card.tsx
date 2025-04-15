import { ChildrenProps } from "@utils/types";

type CardProps = ChildrenProps & {};

const Card = ({ children }: CardProps) => {
  return <div className="rounded-lg border bg-card text-card-foreground shadow-sky-400 shadow-sm">{children}</div>;
};

export default Card;
