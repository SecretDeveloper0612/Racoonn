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
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  MoreHorizontal,
  Check,
  X,
  Eye,
  Building2
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuGroup } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"


const kpiData = [
  { title: "Total Payouts (YTD)", value: "$2.4M", icon: DollarSign, change: "+14.2%", color: "text-blue-500", bg: "bg-blue-500/10" },
  { title: "Pending Payouts", value: "$45,200", icon: Clock, change: "12 requests", color: "text-amber-500", bg: "bg-amber-500/10" },
  { title: "Processed This Month", value: "$320K", icon: CheckCircle2, change: "+5.4%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { title: "Failed / Disputed", value: "$1,250", icon: AlertCircle, change: "-2.1%", color: "text-red-500", bg: "bg-red-500/10" },
]

const payouts = [
  { id: "PO-8901", vendor: "Oceanview Resort", amount: "$12,450.00", requested: "2023-10-24", processed: "-", status: "pending" },
  { id: "PO-8902", vendor: "Alpine Ski Lodge", amount: "$8,320.50", requested: "2023-10-23", processed: "2023-10-24", status: "completed" },
  { id: "PO-8903", vendor: "Sunset Beach Villa", amount: "$4,100.00", requested: "2023-10-22", processed: "-", status: "processing" },
  { id: "PO-8904", vendor: "Downtown Hotel", amount: "$1,250.00", requested: "2023-10-20", processed: "-", status: "failed" },
  { id: "PO-8905", vendor: "City Center Hostels", amount: "$5,600.00", requested: "2023-10-18", processed: "2023-10-19", status: "completed" },
  { id: "PO-8906", vendor: "Desert Oasis Retreat", amount: "$2,800.00", requested: "2023-10-18", processed: "2023-10-20", status: "completed" },
]

export default function PayoutsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedPayout, setSelectedPayout] = useState<typeof payouts[0] | null>(null)

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">Vendor Payouts</h2>
          <p className="text-muted-foreground mt-1 text-lg">Manage and process withdrawal requests from your partners.</p>
        </div>
        <Button className="h-11 px-6 rounded-full shadow-sm hover:shadow-md transition-all bg-white text-foreground border border-border/50 hover:bg-muted">
          <Download className="mr-2 h-5 w-5" /> Export Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <p className={`text-sm mt-2 font-medium ${kpi.change.startsWith('+') || kpi.change.includes('requests') ? 'text-muted-foreground' : 'text-emerald-500'}`}>
                {kpi.change} <span className="text-muted-foreground font-normal">from last month</span>
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
            <Input placeholder="Search payouts by ID or Vendor..." className="w-full pl-9 bg-background border-border/50 rounded-full h-11 focus-visible:ring-primary/20" />
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex p-1 bg-muted/50 rounded-full">
              {['all', 'pending', 'processing', 'completed'].map((tab) => (
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
            <Button variant="outline" className="h-10 rounded-full border-border/50">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/20">
              <TableRow className="hover:bg-transparent border-border/50">
                <TableHead className="font-semibold h-14 pl-6">Payout ID</TableHead>
                <TableHead className="font-semibold h-14">Vendor</TableHead>
                <TableHead className="font-semibold h-14">Amount</TableHead>
                <TableHead className="font-semibold h-14">Requested On</TableHead>
                <TableHead className="font-semibold h-14">Status</TableHead>
                <TableHead className="text-right font-semibold h-14 pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payouts.map((payout) => (
                <TableRow key={payout.id} className="group hover:bg-muted/20 transition-colors border-border/50">
                  <TableCell className="py-4 pl-6">
                    <span className="font-bold text-foreground bg-muted px-2 py-1 rounded-md">{payout.id}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{payout.vendor}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-foreground text-base">{payout.amount}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground">{payout.requested}</span>
                      {payout.processed !== '-' && <span className="text-xs text-muted-foreground">Processed: {payout.processed}</span>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline"
                      className={`
                        px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border-0
                        ${payout.status === 'completed' && 'bg-emerald-500/10 text-emerald-600'}
                        ${payout.status === 'pending' && 'bg-amber-500/10 text-amber-600'}
                        ${payout.status === 'processing' && 'bg-blue-500/10 text-blue-600'}
                        ${payout.status === 'failed' && 'bg-red-500/10 text-red-600'}
                      `}
                    >
                      {payout.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors hover:bg-muted h-9 w-9 p-0 text-muted-foreground hover:text-foreground">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-5 w-5" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-45 rounded-xl border-border/50 shadow-md">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">Actions</DropdownMenuLabel>
                          <DropdownMenuItem 
                            className="cursor-pointer rounded-md my-1"
                            onClick={() => {
                              setSelectedPayout(payout)
                              setIsDetailsOpen(true)
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4 text-muted-foreground" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-border/50" />
                          {payout.status === 'pending' && (
                            <>
                              <DropdownMenuItem className="text-emerald-600 focus:text-emerald-600 focus:bg-emerald-500/10 cursor-pointer rounded-md my-1">
                                <Check className="mr-2 h-4 w-4" /> Approve Payout
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-500/10 cursor-pointer rounded-md my-1">
                                <X className="mr-2 h-4 w-4" /> Reject Request
                              </DropdownMenuItem>
                            </>
                          )}
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
          <span>Showing 1 to 6 of 6 payouts</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full h-9 px-5 border-border/50 hover:bg-muted" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-full h-9 px-5 border-border/50 hover:bg-muted" disabled>Next</Button>
          </div>
        </div>
      </div>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-125 rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Payout Details</DialogTitle>
            <DialogDescription>
              Detailed view of the payout request for {selectedPayout?.vendor}.
            </DialogDescription>
          </DialogHeader>
          
          {selectedPayout && (
            <div className="mt-4 space-y-6">
              <div className="flex flex-col items-center justify-center p-6 bg-muted/20 rounded-2xl border border-border/50">
                <div className="text-sm font-medium text-muted-foreground mb-1">Requested Amount</div>
                <div className="text-4xl font-black text-foreground">{selectedPayout.amount}</div>
                <Badge 
                  variant="outline"
                  className={`
                    mt-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border-0
                    ${selectedPayout.status === 'completed' && 'bg-emerald-500/10 text-emerald-600'}
                    ${selectedPayout.status === 'pending' && 'bg-amber-500/10 text-amber-600'}
                    ${selectedPayout.status === 'processing' && 'bg-blue-500/10 text-blue-600'}
                    ${selectedPayout.status === 'failed' && 'bg-red-500/10 text-red-600'}
                  `}
                >
                  {selectedPayout.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">Transaction ID</div>
                  <div className="text-sm font-semibold">{selectedPayout.id}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">Vendor Name</div>
                  <div className="text-sm font-semibold">{selectedPayout.vendor}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">Requested On</div>
                  <div className="text-sm font-semibold">{selectedPayout.requested}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">Processed On</div>
                  <div className="text-sm font-semibold">{selectedPayout.processed !== '-' ? selectedPayout.processed : 'Pending'}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 flex justify-end gap-3">
                <Button variant="outline" className="rounded-full px-6 border-border/50" onClick={() => setIsDetailsOpen(false)}>
                  Close
                </Button>
                {selectedPayout.status === 'pending' && (
                  <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Process Payout
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
