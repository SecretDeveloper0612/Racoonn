"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndianRupee, Download, ArrowUpRight, Wallet, TrendingUp, Calendar as CalendarIcon, FileText, CheckCircle2, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { name: "Jan", amount: 15000 },
  { name: "Feb", amount: 18000 },
  { name: "Mar", amount: 16500 },
  { name: "Apr", amount: 22000 },
  { name: "May", amount: 28000 },
  { name: "Jun", amount: 35000 },
  { name: "Jul", amount: 42000 },
];

const payouts = [
  { id: "PO-9821", date: "Oct 15, 2023", period: "Oct 1 - Oct 14", amount: "₹1,45,200", status: "Processed" },
  { id: "PO-9820", date: "Oct 01, 2023", period: "Sep 15 - Sep 30", amount: "₹1,28,500", status: "Processed" },
  { id: "PO-9819", date: "Sep 15, 2023", period: "Sep 1 - Sep 14", amount: "₹1,15,400", status: "Processed" },
  { id: "PO-9818", date: "Nov 01, 2023", period: "Oct 15 - Oct 31", amount: "₹1,62,800", status: "Upcoming" },
];

const bookings = [
  { id: "BKG-7829", guest: "Michael Scott", dates: "Oct 12 - Oct 15", total: "₹24,500", commission: "₹3,675", net: "₹20,825", status: "Completed" },
  { id: "BKG-7830", guest: "Sarah Jenkins", dates: "Oct 14 - Oct 15", total: "₹8,500", commission: "₹1,275", net: "₹7,225", status: "Pending" },
  { id: "BKG-7831", guest: "Robert California", dates: "Oct 18 - Oct 23", total: "₹65,000", commission: "₹9,750", net: "₹55,250", status: "Completed" },
];

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-3xl font-heading font-bold text-secondary">Earnings & Payouts</h2>
            <p className="text-slate-500 mt-1">Track your revenue, view payouts, and download invoices.</p>
          </div>
          <Button className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-xl shadow-sm gap-2">
            <Download className="w-4 h-4" /> Download Statement
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -mr-8 -mt-8" />
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Wallet className="w-6 h-6" />
              </div>
              <span className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-medium text-xs">
                <ArrowUpRight className="w-3 h-3 mr-1" /> 14%
              </span>
            </div>
            <h3 className="text-slate-500 font-medium text-sm">Net Earnings (This Month)</h3>
            <p className="text-3xl font-heading font-bold text-secondary mt-1">₹3,45,200</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8" />
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-slate-500 font-medium text-sm">Upcoming Payout</h3>
            <p className="text-3xl font-heading font-bold text-secondary mt-1">₹1,62,800</p>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" /> Scheduled for Nov 01
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -mr-8 -mt-8" />
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <IndianRupee className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-slate-500 font-medium text-sm">Pending Clearance</h3>
            <p className="text-3xl font-heading font-bold text-secondary mt-1">₹45,500</p>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
              <Clock className="w-3 h-3" /> From recently checked-out guests
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-slate-100/80 p-1.5 rounded-xl w-full justify-start overflow-x-auto h-auto inline-flex gap-1">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 rounded-lg py-2.5 px-5 flex items-center gap-2.5 font-medium transition-all">
            <TrendingUp className="w-4 h-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="payouts" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 rounded-lg py-2.5 px-5 flex items-center gap-2.5 font-medium transition-all">
            <Wallet className="w-4 h-4" /> Payout History
          </TabsTrigger>
          <TabsTrigger value="bookings" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 rounded-lg py-2.5 px-5 flex items-center gap-2.5 font-medium transition-all">
            <FileText className="w-4 h-4" /> Booking Earnings
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="overview" className="space-y-6 outline-none">
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 pt-6 px-6">
                <CardTitle className="font-heading text-xl">Revenue Trend</CardTitle>
                <CardDescription className="text-slate-500">Your net earnings over the last 7 months.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val/1000}k`} width={60} />
                      <Tooltip cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} contentStyle={{ borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Area type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorEarnings)" activeDot={{ r: 6, fill: '#10b981' }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payouts" className="space-y-6 outline-none">
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-xs uppercase tracking-wider font-semibold text-slate-500">
                      <th className="p-4 pl-6 font-medium">Payout ID</th>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Period</th>
                      <th className="p-4 font-medium">Amount</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 pr-6 font-medium text-right">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {payouts.map((payout) => (
                      <tr key={payout.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 pl-6 font-mono font-medium text-slate-600">{payout.id}</td>
                        <td className="p-4 text-slate-600 font-medium">{payout.date}</td>
                        <td className="p-4 text-slate-500">{payout.period}</td>
                        <td className="p-4 font-bold text-secondary">{payout.amount}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${payout.status === 'Processed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                            {payout.status === 'Processed' && <CheckCircle2 className="w-3 h-3" />}
                            {payout.status}
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-right">
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            <Download className="w-4 h-4 mr-1.5" /> PDF
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6 outline-none">
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-xs uppercase tracking-wider font-semibold text-slate-500">
                      <th className="p-4 pl-6 font-medium">Booking ID</th>
                      <th className="p-4 font-medium">Guest</th>
                      <th className="p-4 font-medium">Dates</th>
                      <th className="p-4 font-medium">Total Price</th>
                      <th className="p-4 font-medium">Platform Fee</th>
                      <th className="p-4 font-medium">Your Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 pl-6 font-mono font-medium text-slate-600">{booking.id}</td>
                        <td className="p-4 font-semibold text-secondary">{booking.guest}</td>
                        <td className="p-4 text-slate-500">{booking.dates}</td>
                        <td className="p-4 text-slate-600">{booking.total}</td>
                        <td className="p-4 text-red-500">-{booking.commission}</td>
                        <td className="p-4 font-bold text-emerald-600">{booking.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
