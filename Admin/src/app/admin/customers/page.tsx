"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MoreHorizontal, Ban, Mail, Users, CreditCard, CalendarDays, TrendingUp, Filter, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const customers = [
  { id: "C-1001", name: "Alice Smith", email: "alice@example.com", bookings: 12, totalSpent: "$4,500", status: "active", joined: "2022-01-15" },
  { id: "C-1002", name: "Bob Johnson", email: "bob@example.com", bookings: 3, totalSpent: "$850", status: "active", joined: "2023-05-11" },
  { id: "C-1003", name: "Charlie Brown", email: "charlie@example.com", bookings: 1, totalSpent: "$2,200", status: "suspended", joined: "2023-08-20" },
  { id: "C-1004", name: "Diana Prince", email: "diana@example.com", bookings: 5, totalSpent: "$1,420", status: "active", joined: "2021-11-05" },
]

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">Customer Management</h2>
          <p className="text-muted-foreground mt-1 text-lg">Manage platform users, view their booking history, and monitor activity.</p>
        </div>
        <Button className="h-11 px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
          <UserPlus className="mr-2 h-5 w-5" /> Add Customer
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                <p className="text-3xl font-bold">12,450</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-emerald-500 font-medium">
              <TrendingUp className="mr-1 h-4 w-4" /> +8% this month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Active Bookings</p>
                <p className="text-3xl font-bold">842</p>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <CalendarDays className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-emerald-500 font-medium">
              <TrendingUp className="mr-1 h-4 w-4" /> +124 since yesterday
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Average Spend</p>
                <p className="text-3xl font-bold">$1,240</p>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <CreditCard className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              Lifetime value per user
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Suspended</p>
                <p className="text-3xl font-bold">45</p>
              </div>
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Ban className="h-5 w-5 text-red-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-red-500 font-medium">
              Requires attention
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="rounded-2xl border bg-card/40 shadow-sm backdrop-blur-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/10">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search customers by name or email..." className="w-full pl-9 bg-background border-muted-foreground/20 rounded-full h-10" />
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            <div className="flex p-1 bg-muted/50 rounded-full">
              {['all', 'active', 'suspended'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                    activeTab === tab 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="h-9 rounded-full border-muted-foreground/20">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-semibold h-12">Customer Info</TableHead>
                <TableHead className="font-semibold h-12">Total Bookings</TableHead>
                <TableHead className="font-semibold h-12">Lifetime Spend</TableHead>
                <TableHead className="font-semibold h-12">Status</TableHead>
                <TableHead className="font-semibold h-12">Joined Date</TableHead>
                <TableHead className="text-right font-semibold h-12">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className="group hover:bg-muted/20 transition-colors">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${customer.name}&backgroundColor=0B1120`} alt={customer.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">{customer.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{customer.name}</span>
                        <span className="text-xs text-muted-foreground mt-0.5">{customer.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 font-medium text-foreground">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      {customer.bookings}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-foreground">{customer.totalSpent}</span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={customer.status === 'active' ? 'default' : 'destructive'}
                      className={`
                        px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider
                        ${customer.status === 'active' && 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20'}
                        ${customer.status === 'suspended' && 'bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-500/20'}
                      `}
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {new Date(customer.joined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 opacity-0 group-hover:opacity-100">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[160px] rounded-xl border-muted/50">
                        <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">Actions</DropdownMenuLabel>
                        <DropdownMenuItem className="cursor-pointer rounded-md">
                          <Mail className="mr-2 h-4 w-4" /> Email Customer
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {customer.status === 'active' ? (
                          <DropdownMenuItem className="text-orange-600 focus:text-orange-600 cursor-pointer rounded-md">
                            <Ban className="mr-2 h-4 w-4" /> Suspend User
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-emerald-600 focus:text-emerald-600 cursor-pointer rounded-md">
                            <Ban className="mr-2 h-4 w-4" /> Reactivate User
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination/Footer */}
        <div className="p-4 border-t border-muted/30 bg-muted/5 flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 4 of 12,450 customers</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="rounded-full h-8 px-4" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-full h-8 px-4">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
