"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeDollarSign, Users, Building2, CalendarDays } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const kpiData = [
  { title: "Total Revenue", value: "₹4.2M", icon: BadgeDollarSign, change: "+12.5%", color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Monthly Revenue", value: "₹350K", icon: BadgeDollarSign, change: "+5.2%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { title: "Commission Earnings", value: "₹52K", icon: BadgeDollarSign, change: "+8.1%", color: "text-violet-500", bg: "bg-violet-500/10" },
  { title: "Total Bookings", value: "12,450", icon: CalendarDays, change: "+15%", color: "text-orange-500", bg: "bg-orange-500/10" },
  { title: "Active Properties", value: "850", icon: Building2, change: "+3%", color: "text-pink-500", bg: "bg-pink-500/10" },
]

const chartData = [
  { name: "Jan", revenue: 4000, bookings: 2400 },
  { name: "Feb", revenue: 3000, bookings: 1398 },
  { name: "Mar", revenue: 2000, bookings: 9800 },
  { name: "Apr", revenue: 2780, bookings: 3908 },
  { name: "May", revenue: 1890, bookings: 4800 },
  { name: "Jun", revenue: 2390, bookings: 3800 },
  { name: "Jul", revenue: 3490, bookings: 4300 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {kpiData.map((kpi, i) => (
          <Card key={i} className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card rounded-2xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {kpi.title}
              </CardTitle>
              <div className={`p-2 rounded-xl ${kpi.bg}`}>
                <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold tracking-tight">{kpi.value}</div>
              <p className={`text-sm mt-2 font-medium ${kpi.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                {kpi.change} <span className="text-muted-foreground font-normal">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 rounded-3xl shadow-sm border-border/50 bg-card overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-muted/20">
            <CardTitle>Revenue Analytics</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="min-h-125 h-full w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E86A70" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#E86A70" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: '1px solid #e2e8f0', borderRadius: '12px', color: '#0f172a', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#E86A70" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 rounded-3xl shadow-sm border-border/50 bg-card">
          <CardHeader className="border-b border-border/50 bg-muted/20">
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-8">
              {[
                { title: "New property approval request", desc: "Grand Plaza Hotel requested approval.", time: "10 mins ago", icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10" },
                { title: "New vendor registered", desc: "HostelWorld joined the platform.", time: "1 hour ago", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
                { title: "Large booking confirmed", desc: "Booking #8942 for ₹3,400 completed.", time: "3 hours ago", icon: CalendarDays, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { title: "Payout requested", desc: "Seaside Resort requested ₹12,500 payout.", time: "5 hours ago", icon: BadgeDollarSign, color: "text-orange-500", bg: "bg-orange-500/10" },
                { title: "Property status updated", desc: "Mountain View Lodge is now live.", time: "6 hours ago", icon: Building2, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { title: "New user review", desc: "5-star rating for Downtown Loft.", time: "8 hours ago", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
                { title: "System maintenance scheduled", desc: "Server upgrade on Sunday 2AM.", time: "12 hours ago", icon: CalendarDays, color: "text-slate-500", bg: "bg-slate-500/10" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`p-2 rounded-xl mt-1 shrink-0 ${activity.bg}`}>
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                    <p className="text-xs text-muted-foreground font-medium">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
