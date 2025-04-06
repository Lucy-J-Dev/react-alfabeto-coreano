import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="bg-cyan-400">SideBar</div>
      <main className="bg-emerald-400 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
