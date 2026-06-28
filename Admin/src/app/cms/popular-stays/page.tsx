"use client"

import { useState } from "react"
import { Search, Star, MapPin, Filter, AlertTriangle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Mock data based on the screenshot
const allStays = [
  { id: 1, title: "Cozy Cabin", location: "Manali, India", rating: 4.8, image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80", isPopular: true },
  { id: 2, title: "Beach House", location: "Maldives", rating: 4.9, image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80", isPopular: true },
  { id: 3, title: "Sea View Villa", location: "Santorini, Greece", rating: 4.9, image: "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&q=80", isPopular: true },
  { id: 4, title: "Mountain Retreat", location: "Swiss Alps", rating: 4.8, image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&q=80", isPopular: true },
  { id: 5, title: "Heritage Palace", location: "Udaipur, India", rating: 4.7, image: "https://images.unsplash.com/photo-1582647509711-c8aa8a8b1a6c?w=800&q=80", isPopular: true },
  { id: 6, title: "Desert Oasis", location: "Dubai, UAE", rating: 4.6, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", isPopular: false },
  { id: 7, title: "Urban Loft", location: "New York, USA", rating: 4.5, image: "https://images.unsplash.com/photo-1502672260266-1c1e52ab0645?w=800&q=80", isPopular: false },
  { id: 8, title: "Jungle Treehouse", location: "Bali, Indonesia", rating: 4.9, image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80", isPopular: false },
]

export default function PopularStaysPage() {
  const [stays, setStays] = useState(allStays)
  const [searchQuery, setSearchQuery] = useState("")
  const [stayToRemove, setStayToRemove] = useState<number | null>(null)

  const handleToggleClick = (id: number, currentIsPopular: boolean) => {
    if (currentIsPopular) {
      setStayToRemove(id)
    } else {
      // Add instantly without confirmation
      setStays(stays.map(stay => 
        stay.id === id ? { ...stay, isPopular: true } : stay
      ))
    }
  }

  const confirmRemove = () => {
    if (stayToRemove !== null) {
      setStays(stays.map(stay => 
        stay.id === stayToRemove ? { ...stay, isPopular: false } : stay
      ))
      setStayToRemove(null)
    }
  }

  const filteredStays = stays.filter(stay => 
    stay.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    stay.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const popularCount = stays.filter(s => s.isPopular).length
  const stayToRemoveData = stays.find(s => s.id === stayToRemove)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Popular Stays</h2>
          <p className="text-muted-foreground mt-1">Manage which properties are highlighted as Popular Stays on the homepage.</p>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
          <Star className="h-4 w-4 fill-primary" />
          <span>{popularCount} Selected</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center bg-card p-4 rounded-xl border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search stays by name or location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-muted/50 border-transparent focus-visible:bg-transparent"
          />
        </div>
        <Button variant="outline" className="gap-2 shrink-0">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredStays.map((stay) => (
          <Card key={stay.id} className={`overflow-hidden transition-shadow duration-200 cursor-pointer group ${stay.isPopular ? 'ring-2 ring-primary border-transparent shadow-md' : 'hover:border-primary/50'}`} onClick={() => handleToggleClick(stay.id, stay.isPopular)}>
            <div className="relative h-48 w-full overflow-hidden">
              <Image 
                src={stay.image} 
                alt={stay.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3">
                <button 
                  className={`h-8 w-8 rounded-full flex items-center justify-center shadow-sm transition-colors ${stay.isPopular ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-muted-foreground hover:bg-white'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleClick(stay.id, stay.isPopular);
                  }}
                >
                  <Star className={`h-4 w-4 ${stay.isPopular ? 'fill-current' : ''}`} />
                </button>
              </div>
              {stay.isPopular && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-primary hover:bg-primary shadow-sm">Popular</Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{stay.title}</h3>
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <MapPin className="h-3 w-3 mr-1" />
                <span className="line-clamp-1">{stay.location}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="flex items-center text-sm font-medium">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 mr-1" />
                {stay.rating}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-md ${stay.isPopular ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                {stay.isPopular ? 'Selected' : 'Unselected'}
              </span>
            </CardFooter>
          </Card>
        ))}
        {filteredStays.length === 0 && (
          <div className="col-span-full py-12 text-center border-2 border-dashed rounded-xl">
            <h3 className="text-lg font-medium text-muted-foreground">No stays found matching &quot;{searchQuery}&quot;</h3>
            <Button variant="link" onClick={() => setSearchQuery("")}>Clear search</Button>
          </div>
        )}
      </div>

      <Dialog open={stayToRemove !== null} onOpenChange={(open) => !open && setStayToRemove(null)}>
        <DialogContent className="sm:max-w-md border-0 shadow-2xl p-0 overflow-hidden">
          <div className="bg-destructive/10 p-6 flex justify-center items-center">
            <div className="h-16 w-16 bg-destructive/20 rounded-full flex justify-center items-center">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <div className="p-6 pt-4">
            <DialogHeader className="mb-6 text-center">
              <DialogTitle className="text-2xl text-center">Remove from Popular?</DialogTitle>
              <DialogDescription className="text-center mt-2 text-base">
                Are you sure you want to remove <strong className="text-foreground">{stayToRemoveData?.title}</strong> from the popular stays list? It will no longer be highlighted on the homepage.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-3">
              <Button type="button" variant="outline" className="w-full sm:w-1/2 h-12" onClick={() => setStayToRemove(null)}>
                Cancel
              </Button>
              <Button type="button" variant="destructive" className="w-full sm:w-1/2 h-12" onClick={confirmRemove}>
                Yes, Remove it
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
