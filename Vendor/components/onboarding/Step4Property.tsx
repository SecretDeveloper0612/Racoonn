"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import { databases, appwriteConfig } from "@/lib/appwrite/client";
import { ID } from "appwrite";
import { Loader2 } from "lucide-react";

const PROPERTY_TYPES = [
  "Hotel", 
  "Resort", 
  "Villa", 
  "Apartment", 
  "Homestay", 
  "Guest House",
  "Hostel",
  "Boutique Hotel",
  "Lodge",
  "Cottage",
  "Cabin",
  "Bed and Breakfast",
  "Farmhouse",
  "Tent / Camp",
  "Houseboat"
];

export function Step4Property({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { user, profile, checkAuth } = useAuthStore();
  const [propertyName, setPropertyName] = useState("");
  const [selectedType, setSelectedType] = useState("Hotel");
  const [city, setCity] = useState("Mumbai");
  const [propertyState, setPropertyState] = useState("Maharashtra");
  const [description, setDescription] = useState("");
  
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const slideUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleNextSubmit = async () => {
    setError("");

    if (!propertyName.trim() || !city.trim() || !propertyState.trim()) {
      setError("Please fill in Property Name, City, and State.");
      return;
    }

    if (!user || !profile) {
      setError("You must be logged in to save a property.");
      return;
    }

    setIsLoading(true);
    try {
      // 1. Create Property document
      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.propertyCollectionId,
        ID.unique(),
        {
          vendorId: user.$id,
          propertyName,
          propertyType: selectedType,
          city,
          state: propertyState,
          description,
          status: "Pending"
        }
      );

      // 2. Update Vendor Onboarding Step
      await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.vendorCollectionId,
        profile.$id,
        {
          onboardingStep: 4
        }
      );

      // Refresh auth store to get updated profile
      await checkAuth();

      // Proceed to next step
      onNext();
    } catch (err: any) {
      setError(err.message || "Failed to save property. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit="hidden" 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-col h-full max-w-xl mx-auto w-full pt-8"
    >
      <motion.div variants={slideUp} className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-[#1F2E4A] mb-3 font-['Poppins',sans-serif]">Add your property</h1>
        <p className="text-slate-500 font-medium">Let's create your listing profile. Travelers will see these details when searching for places to stay.</p>
      </motion.div>

      <motion.div variants={slideUp} className="space-y-6">
        
        {error && (
          <div className="p-4 rounded-xl bg-red-50 text-red-500 font-medium text-sm text-center border border-red-100">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Name</label>
          <Input 
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium text-lg" 
            placeholder="e.g. The Grand Racoonn Resort" 
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full h-12 rounded-xl border border-slate-200 bg-white px-4 focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium text-slate-700 outline-none appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
          >
            {PROPERTY_TYPES.map(type => (
              <option key={type} value={type} className="font-medium text-slate-700">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Live Google Map */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Pin Location on Map</label>
          <div className="w-full h-64 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative group">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${city}, ${propertyState}` || "India")}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full"
            ></iframe>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-[#1F2E4A]/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 font-bold text-sm text-white">
                <MapPin className="w-4 h-4 text-[#E86A70]" /> Interactive Map Enabled
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">City</label>
            <Input 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" 
              placeholder="e.g. Mumbai" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">State</label>
            <Input 
              value={propertyState}
              onChange={(e) => setPropertyState(e.target.value)}
              className="h-12 rounded-xl border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium" 
              placeholder="e.g. Maharashtra" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Property Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-[#E86A70]/20 focus:border-[#E86A70] transition-all font-medium resize-none min-h-30 outline-none" 
            placeholder="Describe what makes your property unique. Highlight nearby attractions, atmosphere, and special features..."
          />
        </div>

      </motion.div>

      <motion.div variants={slideUp} className="mt-10 flex items-center justify-between">
        <Button onClick={onBack} variant="ghost" disabled={isLoading} className="text-slate-500 font-bold hover:bg-slate-100 rounded-full px-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back
        </Button>
        <Button onClick={handleNextSubmit} disabled={isLoading} className="bg-[#1F2E4A] hover:bg-[#151E2D] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-[#1F2E4A]/20 transition-all">
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Continue Setup <ArrowRight className="ml-2 w-4 h-4" /></>}
        </Button>
      </motion.div>
    </motion.div>
  );
}
