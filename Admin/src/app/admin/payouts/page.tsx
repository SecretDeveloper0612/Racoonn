"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HandCoins, Banknote, Clock, CheckCircle2 } from "lucide-react"

export default function PayoutsPage() {
  const payouts = [
    { id: "PO-9001", vendor: "Oceanview Resort", amount: "₹450,000", account: "**** 9081", method: "Bank Transfer", status: "Processed", date: "Today, 9:00 AM" },
    { id: "PO-9002", vendor: "Alpine Ski Lodge", amount: "₹120,500", account: "**** 1244", method: "Bank Transfer", status: "Processing", date: "Today, 8:45 AM" },
    { id: "PO-9003", vendor: "City Center Hostels", amount: "₹32,100", account: "hostel@paypal", method: "PayPal", status: "Pending", date: "Yesterday" },
    { id: "PO-9004", vendor: "Sunset Beach Villa", amount: "₹85,000", account: "**** 5555", method: "Bank Transfer", status: "Failed", date: "Yesterday" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Vendor Payouts</h2>
          <p className="text-muted-foreground mt-1">Manage partner withdrawals, settlement cycles, and balances.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Batch</Button>
          <Button>Process Payouts</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payouts</CardTitle>
            <Clock className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground mt-1">Totalling ₹1.2M pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processed This Week</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹8.4M</div>
            <p className="text-xs text-muted-foreground mt-1">Across 142 vendors</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Escrow Balance</CardTitle>
            <Banknote className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12.5M</div>
            <p className="text-xs text-muted-foreground mt-1">Held until checkout</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Cycle</CardTitle>
            <HandCoins className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Friday</div>
            <p className="text-xs text-muted-foreground mt-1">Net 15 schedule</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payout Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payout ID</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Account details</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Requested Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payouts.map((po) => (
                <TableRow key={po.id}>
                  <TableCell className="font-medium font-mono text-xs">{po.id}</TableCell>
                  <TableCell className="font-medium">{po.vendor}</TableCell>
                  <TableCell className="font-bold text-gray-900">{po.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{po.account}</TableCell>
                  <TableCell>{po.method}</TableCell>
                  <TableCell>
                    <Badge variant={po.status === "Processed" ? "default" : po.status === "Failed" ? "destructive" : "secondary"}>
                      {po.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{po.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Review</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
