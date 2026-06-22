"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Eye, Filter, CalendarCheck, CalendarX, CalendarClock, DollarSign, Download, Calendar } from "lucide-react"

const bookings = [
  { id: "BK-9081", customer: "Alice Smith", property: "Oceanview Resort", amount: "₹1,350", status: "confirmed", dates: "Oct 12 - Oct 15", bookedAt: "2023-09-20" },
  { id: "BK-9082", customer: "Bob Johnson", property: "Alpine Ski Lodge", amount: "₹850", status: "pending", dates: "Nov 01 - Nov 05", bookedAt: "2023-10-01" },
  { id: "BK-9083", customer: "Charlie Brown", property: "Sunset Beach Villa", amount: "₹2,200", status: "completed", dates: "Sep 10 - Sep 14", bookedAt: "2023-08-15" },
  { id: "BK-9084", customer: "Diana Prince", property: "Downtown Hotel", amount: "₹420", status: "cancelled", dates: "Oct 20 - Oct 22", bookedAt: "2023-10-05" },
]

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">Booking Management</h2>
          <p className="text-muted-foreground mt-1 text-lg">Track and manage all reservations across your platform.</p>
        </div>
        <Button className="h-11 px-6 rounded-full shadow-lg hover:shadow-xl transition-all border-primary/20 bg-background text-foreground hover:bg-muted" variant="outline">
          <Download className="mr-2 h-5 w-5" /> Export Data
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-linear-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-3xl font-bold">₹124.5k</p>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <DollarSign className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-emerald-500 font-medium">
              +14% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-linear-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Confirmed</p>
                <p className="text-3xl font-bold">1,842</p>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <CalendarCheck className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              Upcoming stays
            </div>
          </CardContent>
        </Card>

        <Card className="bg-linear-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Pending Approval</p>
                <p className="text-3xl font-bold">56</p>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <CalendarClock className="h-5 w-5 text-amber-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-amber-500 font-medium">
              Requires host action
            </div>
          </CardContent>
        </Card>

        <Card className="bg-linear-to-br from-card to-card/50 border-muted/50 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Cancellations</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="p-3 bg-red-500/10 rounded-xl">
                <CalendarX className="h-5 w-5 text-red-500" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-red-500 font-medium">
              Down 2% this week
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
              <Input placeholder="Search bookings by ID, Customer..." className="w-full pl-9 bg-background border-muted-foreground/20 rounded-full h-10" />
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            <div className="flex p-1 bg-muted/50 rounded-full">
              {['all', 'confirmed', 'pending', 'cancelled'].map((tab) => (
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
                <TableHead className="font-semibold h-12">Booking ID</TableHead>
                <TableHead className="font-semibold h-12">Customer & Property</TableHead>
                <TableHead className="font-semibold h-12">Dates</TableHead>
                <TableHead className="font-semibold h-12">Amount</TableHead>
                <TableHead className="font-semibold h-12">Status</TableHead>
                <TableHead className="text-right font-semibold h-12">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id} className="group hover:bg-muted/20 transition-colors">
                  <TableCell className="py-4">
                    <span className="font-bold text-foreground bg-muted px-2 py-1 rounded-md">{booking.id}</span>
                    <div className="text-xs text-muted-foreground mt-1.5">Booked: {booking.bookedAt}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-foreground">{booking.customer}</span>
                      <span className="text-sm text-muted-foreground truncate max-w-50">{booking.property}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-foreground bg-muted/30 w-fit px-3 py-1.5 rounded-lg border border-muted/50">
                      <Calendar className="h-4 w-4 text-primary" />
                      {booking.dates}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-foreground text-base">{booking.amount}</span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        booking.status === 'confirmed' ? 'default' : 
                        booking.status === 'completed' ? 'secondary' : 
                        booking.status === 'cancelled' ? 'destructive' : 'outline'
                      }
                      className={`
                        px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider
                        ${booking.status === 'confirmed' && 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-blue-500/20'}
                        ${booking.status === 'completed' && 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/20'}
                        ${booking.status === 'cancelled' && 'bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-500/20'}
                        ${booking.status === 'pending' && 'bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/20'}
                      `}
                    >
                      {booking.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full px-4">
                      <Eye className="mr-2 h-4 w-4" /> View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination/Footer */}
        <div className="p-4 border-t border-muted/30 bg-muted/5 flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 4 of 4 bookings</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="rounded-full h-8 px-4" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-full h-8 px-4" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
