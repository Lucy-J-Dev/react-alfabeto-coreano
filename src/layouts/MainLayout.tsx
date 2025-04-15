import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 flex min-h-screen">
      <Sidebar open={sidebarOpen} onSidebarOpen={setSidebarOpen} />
      <main className="flex-1 p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
