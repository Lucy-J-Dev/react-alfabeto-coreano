import { IconType } from "react-icons";

type CardHeaderProps = {
  title: string;
  icon: IconType;
};

const CardHeader = ({ title, icon: Icon }: CardHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <Icon className="h-6 w-6" />
    </div>
  );
};

export default CardHeader;
