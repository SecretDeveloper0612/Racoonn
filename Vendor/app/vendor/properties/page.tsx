"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Search, MapPin, Star, MoreHorizontal, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const properties = [
  {
    id: 1,
    name: "Luxury Oceanfront Resort",
    location: "Miami Beach, FL",
    rooms: 120,
    status: "Active",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Mountain View Villa",
    location: "Aspen, CO",
    rooms: 5,
    status: "Pending",
    rating: 0,
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Downtown Boutique Hotel",
    location: "New York, NY",
    rooms: 45,
    status: "Active",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold text-secondary">Properties</h2>
          <p className="text-slate-500 mt-1">Manage your hotel listings and villas.</p>
        </div>
        <Link href="/vendor/properties/add">
          <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
            <Plus className="w-4 h-4" />
            Add Property
          </Button>
        </Link>
      </div>

      <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search properties..." 
              className="pl-9 bg-white border-slate-200"
            />
          </div>
          <Button variant="outline" className="hidden sm:flex border-slate-200 text-slate-600">
            Filters
          </Button>
        </div>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {properties.map((property, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={property.id} 
                className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6 hover:bg-slate-50 transition-colors group"
              >
                <div className="h-40 w-full sm:w-60 rounded-lg overflow-hidden shrink-0 bg-slate-100 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={property.image} alt={property.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 right-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      property.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-secondary">{property.name}</h3>
                      <div className="flex items-center text-slate-500 mt-1.5 text-sm">
                        <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                        {property.location}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6 mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Rooms</p>
                        <p className="text-sm font-semibold text-secondary">{property.rooms}</p>
                      </div>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
                        <Star className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Rating</p>
                        <p className="text-sm font-semibold text-secondary">{property.rating > 0 ? property.rating : 'New'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
