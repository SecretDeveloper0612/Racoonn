"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Filter, 
  Download, 
  CreditCard, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MoreHorizontal,
  Eye,
  User
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuGroup } from "@/components/ui/dropdown-menu"

const kpiData = [
  { title: "Total Processed", value: "$4.2M", icon: CreditCard, change: "+12.5%", color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Pending Settlements", value: "$85,400", icon: Clock, change: "45 transactions", color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Success Rate", value: "99.2%", icon: CheckCircle2, change: "+0.1%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { title: "Failed / Disputed", value: "$3,450", icon: AlertCircle, change: "-1.5%", color: "text-red-500", bg: "bg-red-500/10" },
]

const payments = [
  { id: "PAY-10021", customer: "John Doe", amount: "$1,250.00", method: "Visa •••• 4242", date: "2023-10-24 14:32", status: "completed" },
  { id: "PAY-10022", customer: "Sarah Smith", amount: "$450.00", method: "Mastercard •••• 8812", date: "2023-10-24 13:15", status: "completed" },
  { id: "PAY-10023", customer: "Michael Johnson", amount: "$2,100.00", method: "Amex •••• 1005", date: "2023-10-24 11:45", status: "pending" },
  { id: "PAY-10024", customer: "Emily Davis", amount: "$85.00", method: "PayPal", date: "2023-10-24 09:20", status: "failed" },
  { id: "PAY-10025", customer: "David Wilson", amount: "$3,400.00", method: "Visa •••• 5521", date: "2023-10-23 18:40", status: "completed" },
  { id: "PAY-10026", customer: "Jessica Martinez", amount: "$620.00", method: "Apple Pay", date: "2023-10-23 16:10", status: "completed" },
]

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">Payments Processing</h2>
          <p className="text-muted-foreground mt-1 text-lg">Monitor and manage incoming customer payments and transactions.</p>
        </div>
        <Button className="h-11 px-6 rounded-full shadow-sm hover:shadow-md transition-all bg-primary text-primary-foreground border border-transparent">
          <Download className="mr-2 h-5 w-5" /> Export Data
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, i) => (
          <Card key={i} className="group border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card rounded-2xl overflow-hidden relative">
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl -mr-8 -mt-8 pointer-events-none ${kpi.bg.replace('10', '20')}`} />
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {kpi.title}
              </CardTitle>
              <div className={`p-2 rounded-xl ${kpi.bg}`}>
                <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold tracking-tight">{kpi.value}</div>
              <p className={`text-sm mt-2 font-medium flex items-center ${kpi.change.startsWith('+') || kpi.change.includes('transactions') ? 'text-muted-foreground' : 'text-emerald-500'}`}>
                {kpi.change.startsWith('+') && <ArrowUpRight className="h-3 w-3 mr-1" />}
                {kpi.change} <span className="text-muted-foreground font-normal ml-1">from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="rounded-3xl border border-border/50 bg-card shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 md:p-6 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 bg-muted/10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by Payment ID, Customer or Method..." className="w-full pl-9 bg-background border-border/50 rounded-full h-11 focus-visible:ring-primary/20" />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex p-1 bg-muted/50 rounded-full">
              {['all', 'completed', 'pending', 'failed', 'refunded'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                    activeTab === tab 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <Button variant="outline" className="h-10 rounded-full border-border/50 bg-background hover:bg-muted">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/20">
              <TableRow className="hover:bg-transparent border-border/50">
                <TableHead className="font-semibold h-14 pl-6">Payment ID</TableHead>
                <TableHead className="font-semibold h-14">Customer</TableHead>
                <TableHead className="font-semibold h-14">Amount</TableHead>
                <TableHead className="font-semibold h-14">Method</TableHead>
                <TableHead className="font-semibold h-14">Date</TableHead>
                <TableHead className="font-semibold h-14">Status</TableHead>
                <TableHead className="text-right font-semibold h-14 pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id} className="group hover:bg-muted/20 transition-colors border-border/50">
                  <TableCell className="py-4 pl-6">
                    <span className="font-bold text-foreground bg-muted px-2 py-1 rounded-md">{payment.id}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{payment.customer}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-foreground text-base">{payment.amount}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-foreground">{payment.method}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{payment.date}</span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline"
                      className={`
                        px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border-0
                        ${payment.status === 'completed' && 'bg-emerald-500/10 text-emerald-600'}
                        ${payment.status === 'pending' && 'bg-amber-500/10 text-amber-600'}
                        ${payment.status === 'failed' && 'bg-red-500/10 text-red-600'}
                      `}
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors hover:bg-muted h-9 w-9 p-0 text-muted-foreground hover:text-foreground">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-5 w-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 rounded-xl border-border/50 shadow-md">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">Options</DropdownMenuLabel>
                          <DropdownMenuItem className="cursor-pointer rounded-md my-1">
                            <Eye className="mr-2 h-4 w-4 text-muted-foreground" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer rounded-md my-1">
                            <Download className="mr-2 h-4 w-4 text-muted-foreground" /> Download Receipt
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 md:p-6 border-t border-border/50 bg-muted/5 flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 6 of 124 payments</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full h-9 px-5 border-border/50 hover:bg-muted" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-full h-9 px-5 border-border/50 hover:bg-muted">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
