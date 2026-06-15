"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeDollarSign, Users, Building2, CalendarDays, Ticket, AlertCircle } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const kpiData = [
  { title: "Total Revenue", value: "$4.2M", icon: BadgeDollarSign, change: "+12.5%" },
  { title: "Monthly Revenue", value: "$350K", icon: BadgeDollarSign, change: "+5.2%" },
  { title: "Commission Earnings", value: "$52K", icon: BadgeDollarSign, change: "+8.1%" },
  { title: "Total Bookings", value: "12,450", icon: CalendarDays, change: "+15%" },
  { title: "Active Properties", value: "850", icon: Building2, change: "+3%" },
  { title: "Total Vendors", value: "320", icon: Users, change: "+1.2%" },
  { title: "Total Users", value: "45K", icon: Users, change: "+22%" },
  { title: "Pending Approvals", value: "18", icon: AlertCircle, change: "-5%" },
  { title: "Open Tickets", value: "42", icon: Ticket, change: "-12%" },
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
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground mt-1">Overview of your hotel booking platform metrics.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {kpiData.map((kpi, i) => (
          <Card key={i} className="bg-card/50 backdrop-blur-sm border-muted/50 hover:bg-card/80 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs mt-1 ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/50 backdrop-blur-sm border-muted/50">
          <CardHeader>
            <CardTitle>Revenue Analytics</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-75 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card/50 backdrop-blur-sm border-muted/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 mt-4">
              {[
                { title: "New property approval request", desc: "Grand Plaza Hotel requested approval.", time: "10 mins ago" },
                { title: "New vendor registered", desc: "HostelWorld joined the platform.", time: "1 hour ago" },
                { title: "Large booking confirmed", desc: "Booking #8942 for $3,400 completed.", time: "3 hours ago" },
                { title: "Payout requested", desc: "Seaside Resort requested $12,500 payout.", time: "5 hours ago" },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
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
