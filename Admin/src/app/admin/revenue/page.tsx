"use client"


import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BadgeDollarSign, TrendingUp, ArrowUpRight, Download, Calendar as CalendarIcon, DollarSign, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts"

const revenueData = [
  { name: "Jan", platform: 4000, vendor: 2400, commission: 2400 },
  { name: "Feb", platform: 3000, vendor: 1398, commission: 2210 },
  { name: "Mar", platform: 2000, vendor: 9800, commission: 2290 },
  { name: "Apr", platform: 2780, vendor: 3908, commission: 2000 },
  { name: "May", platform: 1890, vendor: 4800, commission: 2181 },
  { name: "Jun", platform: 2390, vendor: 3800, commission: 2500 },
  { name: "Jul", platform: 3490, vendor: 4300, commission: 2100 },
]

const recentTransactions = [
  { id: "TRX-8921", date: "Today, 10:23 AM", description: "Commission - Oceanview Resort", amount: "+$450.00", status: "Completed", type: "credit" },
  { id: "TRX-8920", date: "Today, 09:15 AM", description: "Vendor Payout - Alpine Lodge", amount: "-$2,100.00", status: "Completed", type: "debit" },
  { id: "TRX-8919", date: "Yesterday, 04:45 PM", description: "Platform Fee - Booking #1029", amount: "+$25.00", status: "Completed", type: "credit" },
  { id: "TRX-8918", date: "Yesterday, 02:30 PM", description: "Refund - Booking #1024", amount: "-$120.00", status: "Processed", type: "debit" },
  { id: "TRX-8917", date: "Oct 24, 11:00 AM", description: "Commission - Sunset Villa", amount: "+$380.00", status: "Completed", type: "credit" },
]

export default function RevenuePage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">Revenue Management</h2>
          <p className="text-muted-foreground mt-1 text-lg">Detailed breakdown of platform earnings, payouts, and commissions.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-11 rounded-full border-border/50 bg-background hover:bg-muted">
            <CalendarIcon className="mr-2 h-4 w-4" /> Last 30 Days
          </Button>
          <Button className="h-11 px-6 rounded-full shadow-sm hover:shadow-md transition-all bg-primary text-primary-foreground border border-transparent">
            <Download className="mr-2 h-5 w-5" /> Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Total Revenue</CardTitle>
            <div className="p-2 rounded-xl bg-emerald-500/10">
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold tracking-tight">$1.2M</div>
            <p className="text-sm mt-2 font-medium text-emerald-500 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +14.5% <span className="text-muted-foreground font-normal ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Platform Commissions</CardTitle>
            <div className="p-2 rounded-xl bg-blue-500/10">
              <BadgeDollarSign className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold tracking-tight">$420K</div>
            <p className="text-sm mt-2 font-medium text-emerald-500 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +8.2% <span className="text-muted-foreground font-normal ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Vendor Payouts</CardTitle>
            <div className="p-2 rounded-xl bg-amber-500/10">
              <Wallet className="h-4 w-4 text-amber-600" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold tracking-tight">$3.0M</div>
            <p className="text-sm mt-2 font-medium text-amber-500 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +12.1% <span className="text-muted-foreground font-normal ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Net Profit</CardTitle>
            <div className="p-2 rounded-xl bg-purple-500/10">
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold tracking-tight">$780K</div>
            <p className="text-sm mt-2 font-medium text-emerald-500 flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +5.4% <span className="text-muted-foreground font-normal ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        {/* Main Chart */}
        <Card className="md:col-span-4 rounded-3xl border border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Revenue Overview</CardTitle>
            <CardDescription>Platform vs Vendor Revenue over time</CardDescription>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-87.5 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPlatform" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorVendor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" opacity={0.5} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} tickFormatter={(value) => `$${value}`} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: 'hsl(var(--foreground))', fontWeight: 500 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Area type="monotone" dataKey="vendor" name="Vendor Revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorVendor)" />
                  <Area type="monotone" dataKey="platform" name="Platform Revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorPlatform)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Commissions Chart */}
        <Card className="md:col-span-3 rounded-3xl border border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Commissions Breakdown</CardTitle>
            <CardDescription>Monthly commission earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-87.5 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" opacity={0.5} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    cursor={{fill: 'hsl(var(--muted)/0.4)'}}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="commission" name="Commissions" fill="#8b5cf6" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions Table */}
      <Card className="rounded-3xl border border-border/50 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">Recent Transactions</CardTitle>
            <CardDescription className="mt-1">Latest financial activities across the platform</CardDescription>
          </div>
          <Button variant="outline" className="rounded-full">View All Transactions</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-muted/20">
              <tr>
                <th className="px-6 py-4 font-semibold">Transaction ID</th>
                <th className="px-6 py-4 font-semibold">Date & Time</th>
                <th className="px-6 py-4 font-semibold">Description</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {recentTransactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{trx.id}</td>
                  <td className="px-6 py-4 text-muted-foreground">{trx.date}</td>
                  <td className="px-6 py-4 text-foreground">{trx.description}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600">
                      {trx.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${trx.type === 'credit' ? 'text-emerald-600' : 'text-foreground'}`}>
                    {trx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
