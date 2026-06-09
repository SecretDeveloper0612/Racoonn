"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CalendarCheck, DollarSign, Percent, Star, Clock, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";
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
  },
  {
    title: "Total Bookings",
    value: "1,248",
    icon: CalendarCheck,
    trend: "12.5% vs last month",
    trendPositive: true,
  },
  {
    title: "Monthly Revenue",
    value: "$45,231",
    icon: DollarSign,
    trend: "8.2% vs last month",
    trendPositive: true,
  },
  {
    title: "Occupancy Rate",
    value: "84%",
    icon: Percent,
    trend: "2% vs last month",
    trendPositive: false,
  },
  {
    title: "Average Rating",
    value: "4.8",
    icon: Star,
    trend: "0.1 vs last month",
    trendPositive: true,
  },
  {
    title: "Pending Check-ins",
    value: "18",
    icon: Clock,
    trend: "Scheduled for today",
    trendPositive: true,
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

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat, i) => (
          <motion.div key={stat.title} variants={item}>
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white ring-1 ring-slate-100 rounded-xl overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-3xl font-heading font-bold text-secondary tracking-tight">{stat.value}</h3>
                    </div>
                  </div>
                  <div className="h-12 w-12 bg-slate-50 group-hover:bg-primary/10 transition-colors rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors" />
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
            <div className="h-[300px] w-full">
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
                    contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: '12px' }}
                    itemStyle={{ color: '#E86A70', fontWeight: 'bold' }}
                    labelStyle={{ color: '#64748b', marginBottom: '4px' }}
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
              <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
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
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-secondary font-semibold text-sm shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
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
