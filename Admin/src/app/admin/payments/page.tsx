"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, ArrowRightLeft, ShieldAlert, Activity } from "lucide-react"

export default function PaymentsPage() {
  const payments = [
    { id: "PAY-10041", customer: "Alice Smith", amount: "₹45,000", method: "Credit Card ending in 4242", gateway: "Stripe", status: "Successful", date: "Just now" },
    { id: "PAY-10040", customer: "Bob Johnson", amount: "₹12,500", method: "UPI", gateway: "Razorpay", status: "Failed", date: "15 mins ago" },
    { id: "PAY-10039", customer: "Charlie Brown", amount: "₹84,200", method: "Net Banking", gateway: "Razorpay", status: "Processing", date: "1 hour ago" },
    { id: "PAY-10038", customer: "Diana Prince", amount: "₹15,000", method: "Credit Card ending in 1111", gateway: "Stripe", status: "Successful", date: "2 hours ago" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payments Gateway</h2>
          <p className="text-muted-foreground mt-1">Monitor real-time customer transactions, payment gateways, and failures.</p>
        </div>
        <Button variant="outline">Gateway Settings</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Volume</CardTitle>
            <Activity className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1.4M</div>
            <p className="text-xs text-muted-foreground mt-1">124 successful transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stripe Balance</CardTitle>
            <CreditCard className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹842K</div>
            <p className="text-xs text-muted-foreground mt-1">Ready for transfer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Refund Rate</CardTitle>
            <ArrowRightLeft className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2%</div>
            <p className="text-xs text-muted-foreground mt-1">Within healthy limits</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Payments</CardTitle>
            <ShieldAlert className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-destructive mt-1">High decline rate today</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payment Ledger</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Payment ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Gateway</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((pay) => (
                <TableRow key={pay.id}>
                  <TableCell className="font-medium font-mono text-xs">{pay.id}</TableCell>
                  <TableCell>{pay.customer}</TableCell>
                  <TableCell className="font-bold">{pay.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{pay.method}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-slate-50">{pay.gateway}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={pay.status === "Successful" ? "default" : pay.status === "Failed" ? "destructive" : "secondary"}>
                      {pay.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{pay.date}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Trace</Button>
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
