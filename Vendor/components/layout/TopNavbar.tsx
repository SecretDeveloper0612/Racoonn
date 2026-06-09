"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Bell, MessageSquare, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] w-full items-center justify-between border-b border-slate-200 bg-white/90 backdrop-blur-md px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-slate-500 hover:text-slate-900 transition-colors" />
        <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
        <h1 className="text-xl font-heading font-semibold text-secondary hidden sm:block">Dashboard Overview</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
          <Input 
            type="search" 
            placeholder="Search bookings, guests..." 
            className="w-72 rounded-full bg-slate-50 border-slate-200 pl-10 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all text-sm shadow-inner"
          />
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 mr-2">
          <button className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-primary ring-2 ring-white"></span>
          </button>
          
          <button className="relative p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors hidden sm:block">
            <MessageSquare className="h-5 w-5" />
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

        <div className="flex items-center gap-3 ml-1 cursor-pointer group hover:bg-slate-50 p-1.5 rounded-full pr-3 transition-colors">
          <Avatar className="h-9 w-9 ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
            <AvatarImage src="https://github.com/shadcn.png" alt="@vendor" />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">VD</AvatarFallback>
          </Avatar>
          <div className="hidden lg:block text-left">
            <p className="text-sm font-semibold text-secondary leading-none">Luxury Resort</p>
            <p className="text-xs text-slate-500 mt-1">Vendor Account</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 hidden lg:block group-hover:text-slate-600" />
        </div>
      </div>
    </header>
  );
}
