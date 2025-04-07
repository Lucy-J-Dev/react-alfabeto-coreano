import { Link, useLocation } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaRegCircleXmark } from "react-icons/fa6";
import { GiSpellBook } from "react-icons/gi";
import NavItem from "./NavItem";

interface SidebarProps {
  open: boolean;
  onSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ open, onSidebarOpen }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      {/* TODO: colocar el background del menu sacado desde las variables para los mode */}
      <div
        className={`bg-amber-200 w-64 fixed inset-y-0 left-0 z-50 border-r transition-transform duration-300 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b flex items-center px-4 py-4">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <GiSpellBook className="h-6 w-6" />
              <span className="text-xl">Alfabeto Coreano</span>
            </Link>
            <button
              className="ml-auto cursor-pointer flex items-center justify-center"
              onClick={() => onSidebarOpen(false)}
            >
              <FaRegCircleXmark className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="bg-rose-300 flex-1 py-2">
            <nav>
              <NavItem to="/" label="Dashboard" icon={MdOutlineDashboardCustomize} active={location.pathname === "/"} />
              <NavItem
                to="/vocales"
                label="Vocales"
                icon={MdOutlineDashboardCustomize}
                active={location.pathname === "/vocales"}
              />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
