"use client";

import {
  LayoutDashboard, Building2, CalendarCheck, BedDouble, Calendar,
  Users, Star, LineChart, Tags, MessageSquare, LifeBuoy,
  User, Settings, LogOut, MapPin, Info, Image as ImageIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  { title: "Bookings", url: "/vendor/bookings", icon: CalendarCheck },
  { title: "Photos", url: "/vendor/photos", icon: ImageIcon },
  { title: "Rooms and prices", url: "/vendor/rooms", icon: BedDouble },
  { title: "Amenities", url: "/vendor/amenities", icon: Star },
  { title: "About the hotel", url: "/vendor/about", icon: Info },
  { title: "Location", url: "/vendor/location", icon: MapPin },
  { title: "Rating and reviews", url: "/vendor/reviews", icon: MessageSquare },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="border-r border-slate-200 bg-white">
      <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-0 h-16 flex items-center justify-center">
        <Image 
          src="/racoonn-logo-text.png" 
          alt="Racoonn Logo" 
          width={120} 
          height={32} 
          className="h-8 w-auto object-contain group-data-[collapsible=icon]:hidden" 
        />
        <Image 
          src="/racoonn-logo-icon.png" 
          alt="Racoonn Icon" 
          width={32} 
          height={32} 
          className="h-8 w-8 object-contain hidden group-data-[collapsible=icon]:block" 
        />
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
