import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onSidebarOpen={setSidebarOpen} />
      <main className="bg-emerald-200 flex-1 p-6 md:p-8">
        <div>
          <button onClick={() => setSidebarOpen(true)}>Volver a abrir</button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
