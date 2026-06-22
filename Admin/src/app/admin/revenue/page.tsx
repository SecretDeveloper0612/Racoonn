"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BadgeDollarSign, TrendingUp, TrendingDown, Wallet } from "lucide-react"

export default function RevenuePage() {
  const transactions = [
    { id: "REV-4001", type: "Commission", source: "Booking #BK-9081", amount: "₹4,200", status: "Completed", date: "Today, 10:23 AM" },
    { id: "REV-4002", type: "Subscription", source: "Vendor PRO (Yearly)", amount: "₹12,000", status: "Completed", date: "Yesterday, 2:15 PM" },
    { id: "REV-4003", type: "Commission", source: "Booking #BK-9082", amount: "₹1,850", status: "Pending", date: "Oct 24, 2023" },
    { id: "REV-4004", type: "Refund Fee", source: "Cancellation #BK-8002", amount: "₹250", status: "Completed", date: "Oct 22, 2023" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Revenue Overview</h2>
          <p className="text-muted-foreground mt-1">Track platform commissions, subscriptions, and total income.</p>
        </div>
        <Button variant="outline">Download Statement</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <BadgeDollarSign className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹42.5M</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" /> +12.5% this year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Recurring</CardTitle>
            <Wallet className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1.2M</div>
            <p className="text-xs text-muted-foreground mt-1">From active subscriptions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Commissions</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹8.4M</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" /> +4.2% this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Refund Losses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹142K</div>
            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3" /> -1.1% this month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Income Streams</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium font-mono text-xs">{tx.id}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>{tx.source}</TableCell>
                  <TableCell className="font-bold text-emerald-600">+{tx.amount}</TableCell>
                  <TableCell>
                    <Badge variant={tx.status === "Completed" ? "default" : "secondary"}>
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">View</Button>
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
