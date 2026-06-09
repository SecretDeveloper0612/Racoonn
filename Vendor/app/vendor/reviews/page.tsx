"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquareReply, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { id: 1, guest: "Michael Scott", property: "Luxury Oceanfront Resort", rating: 5, date: "Oct 16, 2026", text: "Incredible stay! The views from the suite were amazing and the staff was extremely accommodating. Will definitely return.", replied: false },
  { id: 2, guest: "Dwight Schrute", property: "Mountain View Villa", rating: 3, date: "Oct 10, 2026", text: "The bears in the vicinity were acceptable, but the beets at breakfast were subpar. Overall adequate.", replied: true },
  { id: 3, guest: "Pam Beesly", property: "Luxury Oceanfront Resort", rating: 5, date: "Oct 08, 2026", text: "Such a beautiful and relaxing experience. The art on the walls was lovely.", replied: false },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold text-secondary">Reviews</h2>
          <p className="text-slate-500 mt-1">Monitor guest feedback and respond to reviews.</p>
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={review.id}
          >
            <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-secondary">
                      {review.guest.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-secondary">{review.guest}</h4>
                      <p className="text-xs text-slate-500">{review.property} • {review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-5 h-5 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <Button variant={review.replied ? "outline" : "default"} size="sm" className={review.replied ? "text-slate-600" : "bg-primary text-white"}>
                    <MessageSquareReply className="w-4 h-4 mr-2" />
                    {review.replied ? "Edit Reply" : "Reply to Review"}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-amber-600">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report
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
