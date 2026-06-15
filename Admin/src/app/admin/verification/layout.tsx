"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function VerificationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const tabs = [
    { label: "KYC Verification", value: "kyc" },
    { label: "Business", value: "business" },
    { label: "Property", value: "property" },
    { label: "Bank", value: "bank" },
    { label: "Pending (12)", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ]

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">Verification Center</h2>
          <p className="text-muted-foreground mt-1 text-lg">Review and manage vendor compliance documents securely.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-11 px-6 rounded-full font-semibold border-primary/20 hover:bg-primary/5 text-primary transition-all">
            <CheckCircle2 className="mr-2 h-4 w-4" /> Bulk Approve
          </Button>
          <Button variant="destructive" className="h-11 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            <XCircle className="mr-2 h-4 w-4" /> Bulk Reject
          </Button>
        </div>
      </div>

      <div className="rounded-2xl border bg-card/40 shadow-sm backdrop-blur-xl overflow-hidden p-6">
        <div className="w-full">
          {/* Custom Tabs List */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap h-auto gap-1 bg-muted/30 p-1 rounded-2xl w-full sm:w-auto overflow-x-auto justify-start">
              {tabs.map((tab) => {
                const isActive = pathname === `/admin/verification/${tab.value}`
                return (
                  <Link 
                    key={tab.value} 
                    href={`/admin/verification/${tab.value}`}
                    className={`rounded-xl px-4 py-2 capitalize transition-all text-sm font-medium ${
                      isActive 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {tab.label}
                  </Link>
                )
              })}
            </div>
            
            {/* Toolbar Area */}
            <div className="flex w-full sm:w-auto items-center gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search documents..." className="w-full pl-9 bg-background border-muted-foreground/20 rounded-full h-10" />
              </div>
              <Button variant="outline" size="sm" className="h-10 rounded-full border-muted-foreground/20 px-4">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
          </div>
          
          <div className="mt-0 outline-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
