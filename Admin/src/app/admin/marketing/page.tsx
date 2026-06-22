"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Megaphone, Target, Percent, TrendingUp } from "lucide-react"

export default function MarketingPage() {
  const campaigns = [
    { id: "CMP-001", name: "Summer Retreat 2024", type: "Discount", status: "Active", reach: "45K", conversions: "1,204" },
    { id: "CMP-002", name: "New User Onboarding", type: "Email", status: "Active", reach: "12K", conversions: "840" },
    { id: "CMP-003", name: "Vendor Referral Program", type: "Referral", status: "Paused", reach: "5K", conversions: "120" },
    { id: "CMP-004", name: "Winter Getaways", type: "Promo Code", status: "Draft", reach: "-", conversions: "-" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Marketing & Promotions</h2>
          <p className="text-muted-foreground mt-1">Manage promotional campaigns, discount codes, and marketing materials.</p>
        </div>
        <Button>New Campaign</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Megaphone className="h-4 w-4 text-brand-coral" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Running currently</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Target className="h-4 w-4 text-brand-blue" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124K</div>
            <p className="text-xs text-muted-foreground">+24% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Conversion Rate</CardTitle>
            <Percent className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2%</div>
            <p className="text-xs text-muted-foreground">+0.4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marketing ROI</CardTitle>
            <TrendingUp className="h-4 w-4 text-brand-navy" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320%</div>
            <p className="text-xs text-muted-foreground">Estimated returns</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reach</TableHead>
                <TableHead>Conversions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((camp) => (
                <TableRow key={camp.id}>
                  <TableCell className="font-medium">{camp.id}</TableCell>
                  <TableCell>{camp.name}</TableCell>
                  <TableCell>{camp.type}</TableCell>
                  <TableCell>
                    <Badge variant={camp.status === "Active" ? "default" : camp.status === "Paused" ? "secondary" : "outline"}>
                      {camp.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{camp.reach}</TableCell>
                  <TableCell>{camp.conversions}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Manage</Button>
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
