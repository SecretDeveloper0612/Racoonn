"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface RoomImageSliderProps {
  images: string[];
}

export default function RoomImageSlider({ images }: RoomImageSliderProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative mt-5 group">
        <button 
          onClick={scrollLeft}
          className="absolute left-1 top-1/2 -translate-y-[60%] z-10 bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100"
        >
          <ChevronLeft size={16} className="text-gray-700" />
        </button>

        <div ref={scrollContainerRef} className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 snap-x">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-32 h-24 shrink-0 rounded-lg overflow-hidden cursor-pointer snap-start hover:opacity-90 transition-opacity border border-gray-200 shadow-sm"
              onClick={() => openLightbox(idx)}
            >
              <Image src={img} alt={`Room image ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-1 top-1/2 -translate-y-[60%] z-10 bg-white p-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100"
        >
          <ChevronRight size={16} className="text-gray-700" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md" onClick={closeLightbox}>
          <button 
            className="absolute top-6 right-6 text-white hover:bg-white/20 p-2 rounded-full transition-colors z-50" 
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-6 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-50" 
            onClick={prevImage}
          >
            <ChevronLeft size={36} />
          </button>

          <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={images[selectedImage]} 
              alt="Room full view" 
              fill 
              className="object-contain" 
              priority
            />
          </div>

          <button 
            className="absolute right-6 text-white hover:bg-white/20 p-3 rounded-full transition-colors z-50" 
            onClick={nextImage}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}
