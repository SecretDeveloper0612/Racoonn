"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Users, BedDouble, Info, Edit, Trash2, UploadCloud, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const initialRooms = [
  { id: 1, name: "Ocean View Suite", property: "Luxury Oceanfront Resort", type: "Suite", capacity: 4, price: 450, count: 5, available: 2 },
  { id: 2, name: "Standard King", property: "Luxury Oceanfront Resort", type: "Standard", capacity: 2, price: 200, count: 20, available: 12 },
  { id: 3, name: "Presidential Villa", property: "Mountain View Villa", type: "Villa", capacity: 8, price: 1200, count: 2, available: 1 },
  { id: 4, name: "Deluxe Double", property: "Downtown Boutique Hotel", type: "Deluxe", capacity: 4, price: 300, count: 15, available: 5 },
];

const AVAILABLE_AMENITIES = [
  "Free WiFi", "Air Conditioning", "Mini Bar", "Flat-screen TV", 
  "Room Service", "Balcony", "Ocean View", "Private Pool", 
  "Coffee Machine", "Safe", "Bathtub", "Desk"
];

export default function RoomsPage() {
  const [rooms] = useState(initialRooms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      setSelectedImages(prev => [...prev, ...newImages]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []).filter(f => f.type.startsWith("image/"));
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      setSelectedImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (indexToRemove: number) => {
    setSelectedImages(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const resetModal = () => {
    setSelectedImages([]);
    setSelectedAmenities([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold text-secondary">Rooms</h2>
          <p className="text-slate-500 mt-1">Manage your room types, pricing, and availability.</p>
        </div>
        
        <Sheet open={isModalOpen} onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open) resetModal();
        }}>
          <SheetTrigger render={
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Plus className="w-4 h-4" />
              Add Room
            </Button>
          } />
          <SheetContent className="w-full sm:max-w-xl p-0 bg-white border-l shadow-2xl flex flex-col h-full overflow-hidden">
            <SheetHeader className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50 shrink-0">
              <SheetTitle className="text-2xl font-heading font-black text-secondary">Add New Room</SheetTitle>
              <SheetDescription className="text-slate-500">
                Enter the room details and upload a high-quality cover photo.
              </SheetDescription>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Image Upload Area - Moved to top for better flow in a side panel */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Room Photos</Label>
                  <span className="text-xs text-slate-500 font-medium">{selectedImages.length} uploaded</span>
                </div>
                <div className="min-h-64">
                  {selectedImages.length === 0 ? (
                    <div 
                      className="h-64 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 flex flex-col items-center justify-center p-8 text-center hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer group"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-base font-bold text-secondary mb-1">Upload Photos</h3>
                      <p className="text-xs text-slate-500">Drag & drop or click to browse</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedImages.map((img, idx) => (
                        <div key={idx} className="relative w-full aspect-4/3 bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center shadow-inner group">
                          <Image 
                            src={img} 
                            alt={`Room Preview ${idx + 1}`} 
                            className="w-full h-full object-cover" 
                            fill
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                            <Button 
                              variant="destructive" 
                              size="icon"
                              onClick={() => removeImage(idx)}
                              className="rounded-full w-8 h-8"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          {idx === 0 && (
                            <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                              Cover
                            </div>
                          )}
                        </div>
                      ))}
                      <div 
                        className="relative w-full aspect-4/3 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 flex flex-col items-center justify-center text-center hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer group"
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                      >
                        <Plus className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors mb-2" />
                        <span className="text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors">Add More</span>
                      </div>
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    multiple
                    onChange={handleFileSelect}
                  />
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <Label htmlFor="room-name" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Room Name</Label>
                  <Input id="room-name" placeholder="e.g. Luxury Suite with Lake View" className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="room-type" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Room Type</Label>
                    <select id="room-type" className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 appearance-none">
                      <option value="Standard">Standard</option>
                      <option value="Deluxe">Deluxe</option>
                      <option value="Suite">Suite</option>
                      <option value="Villa">Villa</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="bed-type" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Bed Configuration</Label>
                    <Input id="bed-type" placeholder="e.g. 1 extra-large double bed" className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="capacity" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Capacity (Guests)</Label>
                    <Input id="capacity" type="number" placeholder="e.g. 2" min={1} className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="total-units" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Total Units</Label>
                    <Input id="total-units" type="number" placeholder="e.g. 10" min={1} className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="price" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Price per Night (₹)</Label>
                    <Input id="price" type="number" placeholder="e.g. 32000" min={0} className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="original-price" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Original Price (₹)</Label>
                    <Input id="original-price" type="number" placeholder="e.g. 40000" min={0} className="h-12 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="meal-plan" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Meal Plan</Label>
                    <select id="meal-plan" className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 appearance-none">
                      <option value="Room Only">Room Only</option>
                      <option value="Breakfast included">Breakfast included</option>
                      <option value="Breakfast & Dinner">Breakfast & Dinner</option>
                      <option value="All Inclusive">All Inclusive</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="cancellation" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Cancellation Policy</Label>
                    <select id="cancellation" className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 appearance-none">
                      <option value="Non-refundable">Non-refundable</option>
                      <option value="Free cancellation">Free cancellation</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Room Amenities</Label>
                    <span className="text-xs text-slate-500 font-medium">{selectedAmenities.length} selected</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {AVAILABLE_AMENITIES.map((amenity) => {
                      const isSelected = selectedAmenities.includes(amenity);
                      return (
                        <div 
                          key={amenity}
                          onClick={() => toggleAmenity(amenity)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all border ${
                            isSelected 
                              ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {amenity}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="description" className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Description</Label>
                  <textarea 
                    id="description" 
                    className="flex min-h-30 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 resize-y"
                    placeholder="Brief description of the room and its features..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-white shrink-0 flex gap-3">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-xl font-bold" onClick={() => setIsModalOpen(false)}>Save Room</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {rooms.map((room, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={room.id}
          >
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white hover:shadow-md transition-all h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-secondary">{room.name}</h3>
                      <p className="text-sm text-primary font-medium">{room.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">₹{room.price}</p>
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
                      <span className="text-sm text-slate-600">Up to {room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{room.count} Total</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-emerald-600 font-semibold">{room.available} Avail</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-auto">
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
