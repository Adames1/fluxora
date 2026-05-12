import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ArrowDownUp, ChartPie, Folder } from "lucide-react";
import { Link } from "react-router";
import NavMain from "./NavMain";
import NavUser from "./NavUser";
import { logout } from "@/features/auth/services/auth.services";
import { getDataProfile } from "@/features/auth/services/profiles.services";
import { useEffect, useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";

const navItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: ChartPie,
  },
  {
    title: "Proyectos",
    url: "/projects",
    icon: Folder,
  },
];

function AppSidebar({ ...props }) {
  const [profile, setProfile] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await getDataProfile(user.id);
      setProfile(data);
    };

    fetchProfileData();
  }, [user.id]);

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
                <ArrowDownUp className="size-5! text-primary" />
                <span className="text-base font-semibold">Fluxora</span>
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
