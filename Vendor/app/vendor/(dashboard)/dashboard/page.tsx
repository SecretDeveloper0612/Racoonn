"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, CalendarCheck, DollarSign, Percent, Star, Clock, ArrowUpRight, ArrowDownRight, MoreHorizontal, CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Mon", total: 1200 },
  { name: "Tue", total: 2100 },
  { name: "Wed", total: 1800 },
  { name: "Thu", total: 2400 },
  { name: "Fri", total: 3200 },
  { name: "Sat", total: 4100 },
  { name: "Sun", total: 3800 },
];

const stats = [
  {
    title: "Total Properties",
    value: "12",
    icon: Building2,
    trend: "2 added this month",
    trendPositive: true,
    colorClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
  },
  {
    title: "Total Bookings",
    value: "1,248",
    icon: CalendarCheck,
    trend: "12.5% vs last month",
    trendPositive: true,
    colorClass: "text-emerald-600",
    bgClass: "bg-emerald-50",
  },
  {
    title: "Monthly Revenue",
    value: "$45,231",
    icon: DollarSign,
    trend: "8.2% vs last month",
    trendPositive: true,
    colorClass: "text-amber-600",
    bgClass: "bg-amber-50",
  },
  {
    title: "Occupancy Rate",
    value: "84%",
    icon: Percent,
    trend: "2% vs last month",
    trendPositive: false,
    colorClass: "text-violet-600",
    bgClass: "bg-violet-50",
  },
  {
    title: "Average Rating",
    value: "4.8",
    icon: Star,
    trend: "0.1 vs last month",
    trendPositive: true,
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50",
  },
  {
    title: "Pending Check-ins",
    value: "18",
    icon: Clock,
    trend: "Scheduled for today",
    trendPositive: true,
    colorClass: "text-sky-600",
    bgClass: "bg-sky-50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 ring-1 ring-slate-900/5 min-w-30">
        <p className="text-sm font-bold text-slate-400 mb-1">{label}</p>
        <p className="text-2xl font-black text-[#E86A70]">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const avatarColors = [
  "bg-indigo-50 text-indigo-600",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-violet-50 text-violet-600",
  "bg-sky-50 text-sky-600"
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <div className="w-44">
          <Select defaultValue="monthly">
            <SelectTrigger className="h-10 bg-white border-slate-200 font-semibold text-slate-700 shadow-sm rounded-xl focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70]">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                <SelectValue placeholder="Select timeframe" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-xl border-slate-200" alignItemWithTrigger={false}>
              <SelectItem value="today" className="font-medium cursor-pointer rounded-lg">Today</SelectItem>
              <SelectItem value="weekly" className="font-medium cursor-pointer rounded-lg">This Week</SelectItem>
              <SelectItem value="monthly" className="font-medium cursor-pointer rounded-lg">This Month</SelectItem>
              <SelectItem value="yearly" className="font-medium cursor-pointer rounded-lg">This Year</SelectItem>
              <SelectItem value="all-time" className="font-medium cursor-pointer rounded-lg">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat, i) => (
          <motion.div key={stat.title} variants={item}>
            <Card className="border-0 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white ring-1 ring-slate-100 rounded-xl overflow-hidden group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-heading font-bold text-secondary tracking-tight">{stat.value}</h3>
                    </div>
                  </div>
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${stat.bgClass}`}>
                    <stat.icon className={`h-6 w-6 ${stat.colorClass}`} />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  {stat.trendPositive ? (
                    <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      {stat.trend}
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600 bg-red-50 px-2 py-0.5 rounded-md font-medium">
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                      {stat.trend}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white overflow-hidden">
          <CardHeader className="border-b border-slate-100 pb-4 bg-slate-50/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-heading font-semibold text-secondary">Revenue Overview</CardTitle>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="pt-6 pl-0 pr-4">
            <div className="h-75 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E86A70" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#E86A70" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    padding={{ left: 20, right: 20 }}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                    width={60}
                  />
                  <Tooltip 
                    content={<CustomTooltip />}
                    cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#E86A70"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#E86A70' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white overflow-hidden">
          <CardHeader className="border-b border-slate-100 pb-4 bg-slate-50/50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-heading font-semibold text-secondary">Recent Bookings</CardTitle>
              <button className="bg-[#E86A70]/10 text-[#E86A70] hover:bg-[#E86A70] hover:text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300">
                View All
              </button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {[
                { name: "Michael Scott", room: "Ocean View Suite", nights: 3, amount: "$850.00", status: "Confirmed" },
                { name: "Sarah Jenkins", room: "Standard Room", nights: 1, amount: "$150.00", status: "Pending" },
                { name: "Robert California", room: "Presidential Villa", nights: 5, amount: "$4,500.00", status: "Confirmed" },
                { name: "Pam Beesly", room: "Deluxe Double", nights: 2, amount: "$400.00", status: "Completed" },
                { name: "Jim Halpert", room: "Deluxe Double", nights: 2, amount: "$400.00", status: "Completed" },
              ].map((booking, i) => (
                <div key={i} className="flex items-center justify-between group hover:bg-slate-50/80 p-3 -mx-3 rounded-2xl transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${avatarColors[i % avatarColors.length]}`}>
                      {booking.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-secondary leading-none">{booking.name}</p>
                      <p className="text-xs text-slate-500">
                        {booking.room} • {booking.nights} Night{booking.nights > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-sm font-bold text-secondary">{booking.amount}</div>
                    <div className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${
                      booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                      booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {booking.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
