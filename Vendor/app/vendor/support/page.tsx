"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LifeBuoy, FileText, Phone, Mail } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h2 className="text-3xl font-heading font-bold text-secondary">Help & Support</h2>
        <p className="text-slate-500 mt-1">Get assistance with your vendor account or contact the Racoonn team.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-secondary text-lg">Documentation</h3>
            <p className="text-sm text-slate-500">Read our guides on managing properties and optimizing bookings.</p>
            <Button variant="outline" className="w-full mt-2 border-slate-200 text-slate-600">Browse Docs</Button>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-secondary text-lg">Phone Support</h3>
            <p className="text-sm text-slate-500">Available 24/7 for premium vendors and urgent booking issues.</p>
            <Button variant="outline" className="w-full mt-2 border-slate-200 text-slate-600">Call Us</Button>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-secondary text-lg">Email Support</h3>
            <p className="text-sm text-slate-500">Expect a response within 24 hours for non-urgent inquiries.</p>
            <Button variant="outline" className="w-full mt-2 border-slate-200 text-slate-600">Send Email</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm ring-1 ring-slate-100 rounded-xl bg-white">
        <CardContent className="p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-slate-100 text-slate-600 rounded-xl">
              <LifeBuoy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-secondary">Submit a Support Ticket</h3>
              <p className="text-sm text-slate-500">Describe your issue in detail and we'll get back to you.</p>
            </div>
          </div>
          
          <form className="space-y-4 max-w-2xl">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="E.g., Issue with payout for booking BKG-1234" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select id="category" className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50">
                <option>Billing & Payouts</option>
                <option>Technical Issue</option>
                <option>Guest Dispute</option>
                <option>Property Management</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Please provide as much detail as possible..." className="min-h-[150px]" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
              Submit Ticket
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
