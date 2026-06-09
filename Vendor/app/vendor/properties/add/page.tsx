"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, ChevronRight, Building2, MapPin, 
  Wifi, Car, Coffee, Tv, Wind, Check, UploadCloud, 
  Plus, Trash2, BedDouble 
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Define the steps
const steps = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Amenities" },
  { id: 3, title: "Media & Photos" },
  { id: 4, title: "Rooms & Pricing" },
];

const AMENITIES_LIST = [
  { id: "wifi", name: "Fast Wifi", icon: Wifi },
  { id: "pool", name: "Private Pool", icon: Wind },
  { id: "ac", name: "Air Conditioning", icon: Wind },
  { id: "parking", name: "Free Parking", icon: Car },
  { id: "coffee", name: "Espresso Machine", icon: Coffee },
  { id: "tv", name: "75\" HDTV", icon: Tv },
];

export default function AddPropertyWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    type: "Hotel",
    description: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    amenities: [] as string[],
    mainImage: null,
    gallery: [] as any[],
    rooms: [
      { id: 1, name: "Luxury Suite", beds: "1 extra-large double bed", price: "", discountPrice: "", mealPlan: "Breakfast included", cancellation: "Free cancellation" }
    ]
  });

  const nextStep = () => {
    if (currentStep < 4) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleAmenityToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(id)
        ? prev.amenities.filter(a => a !== id)
        : [...prev.amenities, id]
    }));
  };

  const addRoom = () => {
    setFormData(prev => ({
      ...prev,
      rooms: [...prev.rooms, { id: Date.now(), name: "", beds: "", price: "", discountPrice: "", mealPlan: "Room only", cancellation: "Non-refundable" }]
    }));
  };

  const removeRoom = (id: number) => {
    setFormData(prev => ({
      ...prev,
      rooms: prev.rooms.filter(r => r.id !== id)
    }));
  };

  const updateRoom = (id: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      rooms: prev.rooms.map(r => r.id === id ? { ...r, [field]: value } : r)
    }));
  };

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      
      {/* Header & Stepper */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/vendor/properties">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 text-slate-500">
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h2 className="text-2xl font-heading font-black text-secondary tracking-tight">Add New Property</h2>
            <p className="text-sm font-medium text-slate-500">
              Step {currentStep} of 4: {steps[currentStep - 1].title}
            </p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-2">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                currentStep >= step.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "bg-slate-100 text-slate-400"
              }`}>
                {step.id}
              </div>
              {step.id !== 4 && (
                <div className={`w-8 h-[2px] mx-1 transition-colors ${
                  currentStep > step.id ? "bg-primary" : "bg-slate-100"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="border-0 shadow-xl shadow-slate-200/40 rounded-3xl bg-white overflow-hidden ring-1 ring-slate-100">
        <CardContent className="p-0 relative min-h-[500px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="p-6 sm:p-10 absolute inset-0 overflow-y-auto"
            >
              
              {/* STEP 1: Basic Details */}
              {currentStep === 1 && (
                <div className="space-y-8 max-w-2xl mx-auto">
                  <div className="space-y-6">
                    <h3 className="text-xl font-heading font-bold text-secondary">Property Details</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Property Name</label>
                        <Input 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="The Oberoi Udaivilas" 
                          className="h-14 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20 text-[15px]" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Property Type</label>
                        <select 
                          className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-[15px] appearance-none"
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                        >
                          <option>Hotel</option>
                          <option>Resort</option>
                          <option>Villa</option>
                          <option>Boutique</option>
                        </select>
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">About the property (Description)</label>
                        <textarea 
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          placeholder="Experience unparalleled luxury at our flagship property..."
                          className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-[15px] resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-slate-100">
                    <h3 className="text-xl font-heading font-bold text-secondary">Location</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Address</label>
                        <Input placeholder="123 Luxury Lane" className="h-14 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20 text-[15px]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">City</label>
                        <Input placeholder="Udaipur" className="h-14 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20 text-[15px]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">State/Region</label>
                        <Input placeholder="Rajasthan" className="h-14 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20 text-[15px]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Country</label>
                        <Input placeholder="India" className="h-14 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20 text-[15px]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Zip / Postal Code</label>
                        <Input placeholder="313001" className="h-14 rounded-xl bg-slate-50/50 border-slate-200 focus-visible:ring-primary/20 text-[15px]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Amenities */}
              {currentStep === 2 && (
                <div className="space-y-8 max-w-2xl mx-auto">
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-secondary">What this place offers</h3>
                    <p className="text-sm text-slate-500">Select the amenities available at your property.</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {AMENITIES_LIST.map((amenity) => {
                      const isSelected = formData.amenities.includes(amenity.id);
                      return (
                        <div 
                          key={amenity.id}
                          onClick={() => handleAmenityToggle(amenity.id)}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                            isSelected 
                              ? "border-primary bg-primary/5" 
                              : "border-slate-100 bg-white hover:border-slate-200"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
                          }`}>
                            <amenity.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 font-semibold text-secondary text-[15px]">
                            {amenity.name}
                          </div>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            isSelected ? "bg-primary text-white" : "bg-slate-100 text-transparent"
                          }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <Button variant="outline" className="w-full h-14 rounded-xl border-dashed border-2 border-slate-200 text-slate-500 font-bold hover:bg-slate-50">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Custom Amenity
                  </Button>
                </div>
              )}

              {/* STEP 3: Media & Photos */}
              {currentStep === 3 && (
                <div className="space-y-8 max-w-2xl mx-auto">
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-secondary">Property Photos</h3>
                    <p className="text-sm text-slate-500">Upload high-quality images to attract more guests. The first image will be your main property photo.</p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Main Photo</label>
                    <div className="w-full h-64 border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center cursor-pointer group">
                      <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-bold text-secondary text-[15px]">Click to upload main photo</p>
                      <p className="text-sm text-slate-400 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Property Gallery</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center cursor-pointer group">
                          <Plus className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Rooms & Pricing */}
              {currentStep === 4 && (
                <div className="space-y-8 max-w-3xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-secondary">Rooms & Options</h3>
                      <p className="text-sm text-slate-500">Add the different types of rooms available.</p>
                    </div>
                    <Button onClick={addRoom} className="bg-secondary hover:bg-secondary/90 text-white rounded-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Room
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {formData.rooms.map((room, index) => (
                      <div key={room.id} className="p-6 rounded-3xl border border-slate-100 bg-slate-50/30 relative group">
                        <button 
                          onClick={() => removeRoom(room.id)}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        
                        <div className="grid sm:grid-cols-12 gap-6">
                          <div className="sm:col-span-3">
                            <div className="aspect-square bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-500 transition-colors cursor-pointer">
                              <UploadCloud className="w-6 h-6 mb-2" />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-center px-4">Room Photo</span>
                            </div>
                          </div>
                          
                          <div className="sm:col-span-9 space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="space-y-1.5">
                                <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Room Name</label>
                                <Input 
                                  value={room.name}
                                  onChange={(e) => updateRoom(room.id, "name", e.target.value)}
                                  placeholder="e.g. Luxury Suite with Lake View" 
                                  className="h-12 rounded-xl bg-white border-slate-200 text-[14px]" 
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Bed Type</label>
                                <Input 
                                  value={room.beds}
                                  onChange={(e) => updateRoom(room.id, "beds", e.target.value)}
                                  placeholder="1 extra-large double bed" 
                                  className="h-12 rounded-xl bg-white border-slate-200 text-[14px]" 
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Price per night (₹)</label>
                                <Input 
                                  type="number"
                                  value={room.price}
                                  onChange={(e) => updateRoom(room.id, "price", e.target.value)}
                                  placeholder="40000" 
                                  className="h-12 rounded-xl bg-white border-slate-200 text-[14px]" 
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[12px] font-semibold text-slate-700 uppercase tracking-wide">Meal Plan</label>
                                <select 
                                  value={room.mealPlan}
                                  onChange={(e) => updateRoom(room.id, "mealPlan", e.target.value)}
                                  className="w-full h-12 px-3 rounded-xl bg-white border border-slate-200 text-[14px] appearance-none"
                                >
                                  <option>Room only</option>
                                  <option>Breakfast included</option>
                                  <option>Breakfast & Dinner</option>
                                  <option>All inclusive</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-4">
        <Button 
          variant="outline" 
          onClick={prevStep}
          disabled={currentStep === 1}
          className="h-12 px-6 rounded-xl font-bold border-slate-200 text-slate-600 hover:bg-slate-50"
        >
          Back
        </Button>
        
        {currentStep < 4 ? (
          <Button 
            onClick={nextStep}
            className="h-12 px-8 rounded-xl font-bold bg-secondary hover:bg-secondary/90 text-white"
          >
            Continue to {steps[currentStep]?.title || "Next"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={() => router.push("/vendor/properties")}
            className="h-12 px-10 rounded-xl font-bold bg-primary hover:bg-rose-500 text-white shadow-lg shadow-primary/30 hover:scale-[1.02] transition-all"
          >
            Publish Property
            <Check className="w-5 h-5 ml-2" />
          </Button>
        )}
      </div>

    </div>
  );
}
