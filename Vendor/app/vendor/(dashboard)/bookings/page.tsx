"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Download, Filter } from "lucide-react";
import { motion } from "framer-motion";

const bookings = [
  { id: "BKG-7829", guest: "Michael Scott", property: "Luxury Oceanfront Resort", dates: "Oct 12 - Oct 15", amount: "$850.00", status: "Confirmed" },
  { id: "BKG-7830", guest: "Sarah Jenkins", property: "Downtown Boutique Hotel", dates: "Oct 14 - Oct 15", amount: "$150.00", status: "Pending" },
  { id: "BKG-7831", guest: "Robert California", property: "Mountain View Villa", dates: "Oct 18 - Oct 23", amount: "$4,500.00", status: "Confirmed" },
  { id: "BKG-7832", guest: "Pam Beesly", property: "Luxury Oceanfront Resort", dates: "Oct 05 - Oct 07", amount: "$400.00", status: "Completed" },
  { id: "BKG-7833", guest: "Jim Halpert", property: "Luxury Oceanfront Resort", dates: "Oct 05 - Oct 07", amount: "$400.00", status: "Completed" },
  { id: "BKG-7834", guest: "Dwight Schrute", property: "Mountain View Villa", dates: "Nov 01 - Nov 05", amount: "$2,200.00", status: "Cancelled" },
];

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold text-secondary">Bookings</h2>
          <p className="text-slate-500 mt-1">Manage all your upcoming and past reservations.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white border-slate-200 text-slate-600 gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>
      </div>

      <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search by guest name or booking ID..." 
              className="pl-9 bg-white border-slate-200"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" className="border-slate-200 text-slate-600 gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4" />
              Filter Status
            </Button>
          </div>
        </div>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-xs uppercase tracking-wider font-semibold text-slate-500">
                <th className="p-4 font-medium">Booking ID</th>
                <th className="p-4 font-medium">Guest Name</th>
                <th className="p-4 font-medium">Property</th>
                <th className="p-4 font-medium">Dates</th>
                <th className="p-4 font-medium text-right">Amount</th>
                <th className="p-4 font-medium text-center">Status</th>
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {bookings.map((booking, i) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={booking.id} 
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  <td className="p-4 font-mono font-medium text-slate-600">{booking.id}</td>
                  <td className="p-4 font-semibold text-secondary flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                      {booking.guest.split(' ').map(n => n[0]).join('')}
                    </div>
                    {booking.guest}
                  </td>
                  <td className="p-4 text-slate-600">{booking.property}</td>
                  <td className="p-4 text-slate-500 whitespace-nowrap">{booking.dates}</td>
                  <td className="p-4 font-semibold text-secondary text-right">{booking.amount}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                      booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                      booking.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Button variant="ghost" size="sm" className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Manage
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
