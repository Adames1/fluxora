import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ArrowDownUp, BriefcaseBusiness, ChartPie, List } from "lucide-react";
import { Link } from "react-router";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import { logout } from "@/features/auth/services/auth.services";
import { getDataProfile } from "@/features/profiles/services/profiles.services";
import { useEffect, useState } from "react";

const navItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: ChartPie,
  },
  {
    title: "Proyectos",
    url: "/projects",
    icon: BriefcaseBusiness,
  },
];

function AppSidebar({ ...props }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await getDataProfile();
      setProfile(data);
    };

    fetchProfileData();
  }, []);

  const handleLogOut = async () => {
    await logout();
  };

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link to="/">
                <ArrowDownUp className="size-5!" />
                <span className="text-base font-semibold">FlowMe</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser handleLogOut={handleLogOut} profile={profile} />
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
