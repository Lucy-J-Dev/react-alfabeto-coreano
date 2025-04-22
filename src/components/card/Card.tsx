import { ChildrenProps } from "../../utils/types";

type CardProps = ChildrenProps & {};

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-lg border border-card-foreground bg-card text-card-foreground shadow-sm flex-1">
      {children}
    </div>
  );
};

export default Card;
