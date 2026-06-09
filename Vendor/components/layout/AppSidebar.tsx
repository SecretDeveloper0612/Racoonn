"use client";

import {
  LayoutDashboard, Building2, CalendarCheck, BedDouble, Calendar,
  Users, Star, LineChart, Tags, MessageSquare, LifeBuoy,
  User, Settings, LogOut
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", url: "/vendor/dashboard", icon: LayoutDashboard },
  { title: "Properties", url: "/vendor/properties", icon: Building2 },
  { title: "Bookings", url: "/vendor/bookings", icon: CalendarCheck },
  { title: "Rooms", url: "/vendor/rooms", icon: BedDouble },
  { title: "Calendar", url: "/vendor/calendar", icon: Calendar },
  { title: "Guests", url: "/vendor/guests", icon: Users },
  { title: "Reviews", url: "/vendor/reviews", icon: Star },
  { title: "Revenue", url: "/vendor/revenue", icon: LineChart },
  { title: "Promotions", url: "/vendor/promotions", icon: Tags },
  { title: "Support", url: "/vendor/support", icon: LifeBuoy },
  { title: "Profile", url: "/vendor/profile", icon: User },
  { title: "Settings", url: "/vendor/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-slate-200 bg-white">
      <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-0 h-16 flex items-center justify-center">
        <h2 className="text-2xl font-heading font-black tracking-tight text-primary group-data-[collapsible=icon]:hidden">
          Racoonn<span className="text-secondary">.</span>
        </h2>
        <span className="text-2xl font-heading font-black text-primary hidden group-data-[collapsible=icon]:block">R</span>
      </SidebarHeader>
      <SidebarContent className="px-2 group-data-[collapsible=icon]:px-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 group-data-[collapsible=icon]:hidden">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      render={<Link href={item.url} />}
                      isActive={isActive} 
                      tooltip={item.title}
                      className={`h-10 transition-all duration-200 ${isActive ? "bg-primary/10 text-primary" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
                    >
                      <item.icon className={isActive ? "text-primary" : "text-slate-400"} />
                      <span className={`${isActive ? "font-semibold" : "font-medium"}`}>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 group-data-[collapsible=icon]:p-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-10 text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors">
              <LogOut className="text-slate-400 group-hover:text-red-500" />
              <span className="font-medium">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
