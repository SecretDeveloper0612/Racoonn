"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Users, BedDouble, Info, Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const rooms = [
  { id: 1, name: "Ocean View Suite", property: "Luxury Oceanfront Resort", type: "Suite", capacity: 4, price: 450, count: 5, available: 2 },
  { id: 2, name: "Standard King", property: "Luxury Oceanfront Resort", type: "Standard", capacity: 2, price: 200, count: 20, available: 12 },
  { id: 3, name: "Presidential Villa", property: "Mountain View Villa", type: "Villa", capacity: 8, price: 1200, count: 2, available: 1 },
  { id: 4, name: "Deluxe Double", property: "Downtown Boutique Hotel", type: "Deluxe", capacity: 4, price: 300, count: 15, available: 5 },
];

export default function RoomsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold text-secondary">Rooms</h2>
          <p className="text-slate-500 mt-1">Manage your room types, pricing, and availability.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
          <Plus className="w-4 h-4" />
          Add Room
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {rooms.map((room, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={room.id}
          >
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-secondary">{room.name}</h3>
                    <p className="text-sm text-primary font-medium">{room.property}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-secondary">${room.price}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Per Night</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 mb-4">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{room.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Up to {room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">{room.count} Total Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-emerald-600 font-semibold">{room.available} Available</span>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" className="text-slate-600 hover:text-primary">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-200">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
