import { Link } from "react-router-dom";
import { IconType } from "react-icons";

export interface NavItemProps {
  to: string;
  icon: IconType;
  label: string;
  active?: boolean;
}

const NavItem = ({ to, icon: Icon, label, active }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-colors ${
        active ? "bg-primary text-foreground" : "hover:bg-muted"
      } `}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

export default NavItem;

// hover:bg-stone-300
