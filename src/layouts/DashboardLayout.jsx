import { Outlet } from "react-router-dom";
import DashboardAside from "@/components/DashboardAside";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardMenu from "@/components/DashboardMenu";
import { useState } from "react";
import { PanelRightOpen, PanelRightClose  } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSiteSettings } from '../redux/slices/siteSettingsSlice';

const DashboardLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { settings, loading } = useSelector((state) => state.siteSettings);
  console.log(settings)
  useEffect(() => {
    dispatch(fetchSiteSettings());
  }, [dispatch]);
  return (
     <div className="bg-gray-100 w-full h-screen flex justify-items-start items-start gap-3">
        {/* dashboard aside  */}
        <DashboardMenu menuOpen={menuOpen}/>
        {/* dashboard aside  */}
        {/* dashboard main  */}
        <main className="w-full">
          <div className="flex items-center gap-2 p-2 bg-white w-full">
            <div className="cursor-pointer transition-all duration-150" onClick={()=>setMenuOpen(!menuOpen)}>
              {menuOpen ? <PanelRightOpen /> : <PanelRightClose/>}
            </div>
            Hello {localStorage.getItem("role")}
          </div>
          <Outlet/>
        </main>
        {/* dashboard main  */}
     </div>
  );
};

export default DashboardLayout;
