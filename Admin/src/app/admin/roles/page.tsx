"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, KeyRound, ShieldHalf } from "lucide-react"

export default function RolesPage() {
  const roles = [
    { id: "ROLE-01", name: "Super Administrator", users: 2, access: "Full System Access", lastUpdated: "Jan 1, 2023" },
    { id: "ROLE-02", name: "Support Moderator", users: 14, access: "Support, Users, Reviews", lastUpdated: "Mar 15, 2023" },
    { id: "ROLE-03", name: "Finance Manager", users: 4, access: "Reports, Payments, Payouts", lastUpdated: "Feb 10, 2023" },
    { id: "ROLE-04", name: "Content Editor", users: 6, access: "CMS, Marketing Only", lastUpdated: "Apr 20, 2023" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Role Management</h2>
          <p className="text-muted-foreground mt-1">Configure role-based access control (RBAC) and manage admin permissions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Invite Admin</Button>
          <Button>Create Role</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">26</div>
            <p className="text-xs text-muted-foreground">Active in the system</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Custom Roles</CardTitle>
            <ShieldHalf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Defined access levels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invites</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Awaiting acceptance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Keys</CardTitle>
            <KeyRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Active service accounts</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Defined Roles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role ID</TableHead>
                <TableHead>Role Name</TableHead>
                <TableHead>Assigned Users</TableHead>
                <TableHead>Access Scope</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium font-mono text-xs">{role.id}</TableCell>
                  <TableCell className="font-bold">{role.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{role.users} Users</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{role.access}</TableCell>
                  <TableCell>{role.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Edit Permissions</Button>
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
