"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  Building2, 
  CalendarDays, 
  UserCircle, 
  BadgeDollarSign, 
  CreditCard, 
  HandCoins, 
  MessageSquare, 
  LifeBuoy, 
  Megaphone, 
  FileText, 
  BarChart3, 
  Bell, 
  AlertTriangle, 
  Activity, 
  Shield, 
  Settings 
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Vendor Management", url: "/admin/vendors", icon: Users },
  { title: "Verification Center", url: "/admin/verification", icon: ShieldCheck },
  { title: "Properties", url: "/admin/properties", icon: Building2 },
  { title: "Bookings", url: "/admin/bookings", icon: CalendarDays },
  { title: "Customers", url: "/admin/customers", icon: UserCircle },
]

const financialItems = [
  { title: "Revenue", url: "/admin/revenue", icon: BadgeDollarSign },
  { title: "Payments", url: "/admin/payments", icon: CreditCard },
  { title: "Payouts", url: "/admin/payouts", icon: HandCoins },
]

const operationsItems = [
  { title: "Reviews", url: "/admin/reviews", icon: MessageSquare },
  { title: "Support", url: "/admin/support", icon: LifeBuoy },
  { title: "Marketing", url: "/admin/marketing", icon: Megaphone },
  { title: "CMS", url: "/admin/cms", icon: FileText },
]

const systemItems = [
  { title: "Reports", url: "/admin/reports", icon: BarChart3 },
  { title: "Notifications", url: "/admin/notifications", icon: Bell },
  { title: "Fraud Detection", url: "/admin/fraud", icon: AlertTriangle },
  { title: "Audit Logs", url: "/admin/audit", icon: Activity },
  { title: "Role Management", url: "/admin/roles", icon: Shield },
  { title: "Settings", url: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  const renderMenuItems = (items: typeof navItems) => (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton 
            isActive={pathname.startsWith(item.url)} 
            tooltip={item.title}
            render={<Link href={item.url} className="flex flex-row items-center gap-3" />}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="truncate">{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="h-16 flex items-center px-4 justify-center">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
            R
          </div>
          <span className="group-data-[collapsible=icon]:hidden">Racoonn</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-2 py-2">
          {renderMenuItems(navItems)}
        </div>
        <SidebarSeparator />
        <div className="px-2 py-2">
          <div className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider group-data-[collapsible=icon]:hidden">Finance</div>
          {renderMenuItems(financialItems)}
        </div>
        <SidebarSeparator />
        <div className="px-2 py-2">
          <div className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider group-data-[collapsible=icon]:hidden">Operations</div>
          {renderMenuItems(operationsItems)}
        </div>
        <SidebarSeparator />
        <div className="px-2 py-2">
          <div className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider group-data-[collapsible=icon]:hidden">System</div>
          {renderMenuItems(systemItems)}
        </div>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 group-data-[collapsible=icon]:hidden">
          <div className="flex items-center gap-3 rounded-lg border p-3 bg-muted/50">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-medium">SA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none">Super Admin</span>
              <span className="text-xs text-muted-foreground mt-1">admin@racoonn.com</span>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
