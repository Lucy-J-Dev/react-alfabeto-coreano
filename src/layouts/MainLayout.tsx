import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 flex min-h-screen">
      <Sidebar open={sidebarOpen} onSidebarOpen={setSidebarOpen} />
      <main className="flex w-full justify-center">
        <div className="flex-1 my-0 sm:my-2 md:my-4 max-w-full sm:max-w-lg md:max-w-lg lg:max-w-4xl 2xl:max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
