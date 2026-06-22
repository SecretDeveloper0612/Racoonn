"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, IndianRupee, BedDouble, Percent, CheckCircle2, AlertCircle, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

// Mock calendar data
const daysInMonth = 31;
const startDay = 0; // Sunday
const calendarDays = Array.from({ length: daysInMonth }, (_, i) => ({
  day: i + 1,
  available: Math.floor(Math.random() * 5) + 1, // 1 to 5 rooms
  price: Math.floor(Math.random() * 50) * 10 + 1500, // 1500 to 2000
  isWeekend: (i + startDay) % 7 === 0 || (i + startDay) % 7 === 6,
  hasOffer: Math.random() > 0.8
}));

export default function AvailabilityPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 9, 1)); // October 2023

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h2 className="text-3xl font-heading font-bold text-secondary">Availability & Pricing</h2>
        <p className="text-slate-500 mt-1">Manage your calendar, update rates, and set special offers.</p>
      </motion.div>

      <Tabs defaultValue="calendar" className="w-full">
        <TabsList className="bg-slate-100/80 p-1.5 rounded-xl w-full justify-start overflow-x-auto h-auto inline-flex gap-1">
          <TabsTrigger value="calendar" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 rounded-lg py-2.5 px-5 flex items-center gap-2.5 font-medium transition-all">
            <CalendarDays className="w-4 h-4" /> Calendar View
          </TabsTrigger>
          <TabsTrigger value="bulk" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 rounded-lg py-2.5 px-5 flex items-center gap-2.5 font-medium transition-all">
            <RefreshCw className="w-4 h-4" /> Bulk Update
          </TabsTrigger>
          <TabsTrigger value="offers" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm text-slate-500 rounded-lg py-2.5 px-5 flex items-center gap-2.5 font-medium transition-all">
            <Percent className="w-4 h-4" /> Special Offers
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="calendar" className="space-y-6 outline-none">
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4 pt-6 px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Select defaultValue="deluxe">
                      <SelectTrigger className="w-50 h-10 rounded-xl bg-slate-50 border-slate-200 font-semibold text-slate-700 shadow-sm focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70]">
                        <SelectValue placeholder="Select Room" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="standard">Standard Room</SelectItem>
                        <SelectItem value="deluxe">Deluxe King Room</SelectItem>
                        <SelectItem value="suite">Ocean View Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" onClick={prevMonth} className="h-10 w-10 rounded-xl border-slate-200 text-slate-600">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <div className="w-40 text-center font-heading font-bold text-lg text-secondary">
                      {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                    <Button variant="outline" size="icon" onClick={nextMonth} className="h-10 w-10 rounded-xl border-slate-200 text-slate-600">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="py-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7">
                  {/* Empty cells for start of month */}
                  {Array.from({ length: startDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="min-h-30 p-2 border-r border-b border-slate-100 bg-slate-50/30"></div>
                  ))}
                  
                  {calendarDays.map(day => (
                    <div 
                      key={day.day} 
                      className={`min-h-30 border-r border-b border-slate-100 p-2 relative group transition-colors cursor-pointer ${day.isWeekend ? 'bg-slate-50/50' : 'bg-white'} hover:bg-slate-50/50`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full ${day.day === new Date().getDate() ? 'bg-primary text-white shadow-sm' : 'text-slate-600 group-hover:text-primary group-hover:bg-primary/10'}`}>
                          {day.day}
                        </span>
                        {day.hasOffer && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 mt-2" title="Special Offer Active"></span>
                        )}
                      </div>
                      
                      <div className="space-y-1.5 mt-2">
                        <div className={`text-xs px-2 py-1 rounded-md flex justify-between font-medium ${day.available > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                          <span>Avail</span>
                          <span className="font-bold">{day.available}</span>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-md flex justify-between font-medium bg-blue-50 text-blue-700">
                          <span>Rate</span>
                          <span className="font-bold">₹{day.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulk" className="space-y-6 outline-none">
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-6 pt-6 px-6">
                <CardTitle className="font-heading text-xl">Bulk Update Rates & Availability</CardTitle>
                <CardDescription className="text-slate-500">Quickly update multiple dates for a specific room type.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <Label className="text-sm font-semibold text-slate-700">Room Type</Label>
                    <Select defaultValue="deluxe">
                      <SelectTrigger className="h-11 rounded-xl border-slate-200 bg-white shadow-sm">
                        <SelectValue placeholder="Select Room" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="standard">Standard Room</SelectItem>
                        <SelectItem value="deluxe">Deluxe King Room</SelectItem>
                        <SelectItem value="suite">Ocean View Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2.5">
                      <Label className="text-sm font-semibold text-slate-700">Start Date</Label>
                      <Input type="date" className="h-11 rounded-xl border-slate-200 bg-white shadow-sm" />
                    </div>
                    <div className="space-y-2.5">
                      <Label className="text-sm font-semibold text-slate-700">End Date</Label>
                      <Input type="date" className="h-11 rounded-xl border-slate-200 bg-white shadow-sm" />
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-100"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <Label className="text-sm font-semibold text-slate-700">New Price (₹)</Label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input type="number" placeholder="Enter new rate" className="h-11 pl-9 rounded-xl border-slate-200 bg-white shadow-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-sm font-semibold text-slate-700">Available Rooms</Label>
                    <div className="relative">
                      <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input type="number" placeholder="Number of rooms" className="h-11 pl-9 rounded-xl border-slate-200 bg-white shadow-sm font-medium" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <Label className="text-sm font-semibold text-slate-700">Apply to specific days</Label>
                  <div className="flex flex-wrap gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <Button key={day} variant="outline" className="h-9 px-4 rounded-lg font-medium bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary transition-colors">
                        {day}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-2 flex justify-end">
                  <Button className="h-11 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Apply Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offers" className="space-y-6 outline-none">
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-2xl overflow-hidden">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-6 pt-6 px-6 flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="font-heading text-xl">Active Special Offers</CardTitle>
                  <CardDescription className="text-slate-500">Create promotions to boost occupancy during low seasons.</CardDescription>
                </div>
                <Button className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-xl shadow-sm">
                  Create Offer
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { name: "Weekend Getaway 15% Off", dates: "Oct 1 - Oct 31 (Weekends only)", status: "Active", type: "Discount", rooms: "All Rooms" },
                    { name: "Early Bird 2024", dates: "Dec 1 - Dec 31", status: "Upcoming", type: "Discount", rooms: "Standard Room" }
                  ].map((offer, i) => (
                    <div key={i} className="flex flex-col md:flex-row justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                          <Percent className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-secondary text-base">{offer.name}</h4>
                          <p className="text-sm text-slate-500 mt-1">{offer.dates}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{offer.type}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{offer.rooms}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col justify-between items-end">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          offer.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {offer.status}
                        </span>
                        <div className="flex gap-2 mt-2">
                          <Button variant="ghost" size="sm" className="h-8 text-slate-500 hover:text-primary">Edit</Button>
                          <Button variant="ghost" size="sm" className="h-8 text-slate-500 hover:text-red-500">Deactivate</Button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="p-4 rounded-xl border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-center">
                    <div className="max-w-xs py-6">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-700 mb-1">No past offers</h4>
                      <p className="text-sm text-slate-500">You don't have any expired or past promotions to show.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
