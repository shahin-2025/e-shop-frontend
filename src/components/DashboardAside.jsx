import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import { Bot, BookOpen, Settings2, SquareTerminal, ChevronDown, ChevronRight } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
};

const DashboardAside = () => {
  const { toggleSidebar, open } = useSidebar(); // open = sidebar expanded/collapsed
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (title) => setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      {/* Header */}
      <SidebarHeader className="flex items-center justify-between px-4 py-3">
        {/* Show text only if open */}
        {open && <h3 className="text-2xl font-bold text-red-300">E-Shop</h3>}
        <SidebarTrigger onClick={toggleSidebar} className="p-1 rounded hover:bg-gray-200">
          <ChevronDown size={20} />
        </SidebarTrigger>
      </SidebarHeader>

      {/* Sidebar content */}
      <SidebarContent>
        <SidebarMenu>
          {data.navMain.map((nav) => {
            const Icon = nav.icon;
            const isOpen = openGroups[nav.title];

            return (
              <SidebarGroup key={nav.title}>
                {/* Group Label */}
                <SidebarGroupLabel
                  className="flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                  onClick={() => toggleGroup(nav.title)}
                >
                  <div className="flex items-center gap-2">
                    {/* ICON ALWAYS VISIBLE */}
                    <Icon size={18} />
                    {/* Only show text label if sidebar is expanded */}
                    {open && <span>{nav.title}</span>}
                  </div>

                  {/* Chevron only shows if sidebar is expanded */}
                  {open && (
                    <div className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>
                      <ChevronRight size={16} />
                    </div>
                  )}
                </SidebarGroupLabel>

                {/* Submenu only visible if sidebar is expanded AND group is open */}
                {open && isOpen && (
                  <SidebarGroupContent className="pl-6">
                    {nav.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink to={item.url} className="block py-1 hover:text-blue-500">
                            {item.title}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarGroupContent>
                )}
              </SidebarGroup>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="px-4 py-3 text-sm text-gray-400">
        {open && "© 2026 E-Shop"}
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardAside;
