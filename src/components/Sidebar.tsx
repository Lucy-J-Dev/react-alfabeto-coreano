import { Link, useLocation } from "react-router-dom";
import { MdOutlineDashboardCustomize } from "react-icons/md";

import { FaRegCircleXmark } from "react-icons/fa6";
import { GiSpellBook } from "react-icons/gi";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import ModeToggle from "./ModeToggle";

interface SidebarProps {
  open: boolean;
  onSidebarOpen: (open: boolean) => void;
}

interface Link {
  id: number;
  to: string;
  icon: IconType;
  label: string;
}

const links: Link[] = [
  { id: 1, to: "/", icon: MdOutlineDashboardCustomize, label: "Dashboard" },
  { id: 2, to: "/caracteres", icon: MdOutlineDashboardCustomize, label: "Caracteres" },
  { id: 3, to: "/caracteres/nuevo", icon: MdOutlineDashboardCustomize, label: "Agregar nuevo caracter" },
  { id: 4, to: "/media", icon: MdOutlineDashboardCustomize, label: "Imagenes" },
  { id: 5, to: "/audio", icon: MdOutlineDashboardCustomize, label: "Audio" },
];

const Sidebar = ({ open, onSidebarOpen }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-background w-64 fixed inset-y-0 left-0 z-50 border-r transition-transform duration-300 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b flex items-center px-4 py-4">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <GiSpellBook className="h-6 w-6" />
              <h1 className="text-md">Alfabeto Coreano</h1>
            </Link>
            <button
              className="ml-auto cursor-pointer flex items-center justify-center bg-white p-2 rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out  hover:scale-105 active:scale-90"
              onClick={() => onSidebarOpen(false)}
            >
              <FaRegCircleXmark className="h-6 w-6 hover:rotate-90" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 py-2">
            <nav className="flex flex-col gap-2 px-2">
              {links.map((link) => (
                <NavItem
                  key={link.id}
                  to={link.to}
                  label={link.label}
                  icon={link.icon}
                  active={location.pathname === link.to}
                />
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t flex px-2 py-2 flex-row-reverse">
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
