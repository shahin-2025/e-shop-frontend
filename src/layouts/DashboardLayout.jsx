import { Outlet } from "react-router-dom";
import DashboardAside from "@/components/DashboardAside";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <DashboardAside />

        <main style={{ flex: 1, padding: 20 }}>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
