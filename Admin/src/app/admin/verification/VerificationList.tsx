"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, FileText, ZoomIn, ZoomOut, Download, RotateCw, AlertCircle as AlertCircleIcon } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mockRequests = [
  { id: "VER-1029", vendor: "Oceanview Resort", type: "Business License", status: "pending", date: "2023-10-25" },
  { id: "VER-1030", vendor: "John Doe", type: "KYC ID", status: "pending", date: "2023-10-26" },
  { id: "VER-1031", vendor: "Seaside Villas", type: "Property Deed", status: "pending", date: "2023-10-26" },
]

export default function VerificationList({ type }: { type: string }) {
  const [selectedDoc, setSelectedDoc] = useState<typeof mockRequests[0] | null>(null)

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockRequests.map((req) => (
        <Card key={req.id} className="group bg-card/60 backdrop-blur-md border-muted/30 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
          <div className="h-2 w-full bg-amber-500/80"></div>
          <CardHeader className="pb-3 pt-5 px-5">
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${req.vendor}&backgroundColor=1F2E4A`} alt={req.vendor} />
                  <AvatarFallback className="bg-primary/10 text-primary font-medium">{req.vendor.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{req.vendor}</CardTitle>
                  <CardDescription className="text-xs font-medium text-muted-foreground mt-0.5">{req.id} • {req.date}</CardDescription>
                </div>
              </div>
              <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/20 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                {req.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-5 pb-5 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted/20 rounded-lg p-3 mb-5 border border-muted/10">
              <FileText className="h-5 w-5 text-primary" />
              <span>{req.type}</span>
            </div>
            
            <div className="mt-auto">
              <Dialog>
                <DialogTrigger 
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary/10 text-primary hover:bg-primary hover:text-white h-11 px-4 py-2" 
                  onClick={() => setSelectedDoc(req)}
                >
                  <ZoomIn className="h-4 w-4" /> Review Document
                </DialogTrigger>
                <DialogContent className="max-w-5xl h-[85vh] flex flex-col rounded-2xl p-0 overflow-hidden border-muted/30">
                  <DialogHeader className="p-6 border-b bg-card/50 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${selectedDoc?.vendor}&backgroundColor=1F2E4A`} />
                        <AvatarFallback>{selectedDoc?.vendor?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <DialogTitle className="text-xl font-bold">Document Review</DialogTitle>
                        <p className="text-sm text-muted-foreground">{selectedDoc?.vendor} • {selectedDoc?.type}</p>
                      </div>
                    </div>
                  </DialogHeader>
                  <div className="flex flex-1 overflow-hidden bg-muted/10">
                    {/* Document Viewer */}
                    <div className="flex-1 bg-background/50 flex items-center justify-center relative border-r">
                      <div className="absolute top-4 right-4 flex gap-1 bg-card/80 backdrop-blur-md p-1.5 rounded-xl border shadow-sm z-10">
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-muted"><ZoomIn className="h-4 w-4"/></Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-muted"><ZoomOut className="h-4 w-4"/></Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-muted"><RotateCw className="h-4 w-4"/></Button>
                        <div className="w-px h-5 bg-border mx-1 self-center"></div>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-muted"><Download className="h-4 w-4"/></Button>
                      </div>
                      <div className="text-muted-foreground flex flex-col items-center p-8 text-center max-w-sm">
                        <div className="h-32 w-32 rounded-full bg-muted/50 flex items-center justify-center mb-6 border-4 border-background shadow-inner">
                          <FileText className="h-12 w-12 text-muted-foreground/50" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Document Preview Area</h3>
                        <p className="text-sm">In a real environment, the securely fetched PDF or image of the {selectedDoc?.type} would render here.</p>
                      </div>
                    </div>
                    
                    {/* Actions Panel */}
                    <div className="w-[340px] flex flex-col bg-card/50 overflow-y-auto">
                      <div className="p-6 space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Document Info</h4>
                          <div className="space-y-3 bg-background rounded-xl p-4 border shadow-sm">
                            <div className="flex justify-between items-center"><span className="text-sm text-muted-foreground">Type</span> <span className="text-sm font-medium text-foreground">{selectedDoc?.type}</span></div>
                            <div className="flex justify-between items-center"><span className="text-sm text-muted-foreground">Uploaded</span> <span className="text-sm font-medium text-foreground">{selectedDoc?.date}</span></div>
                            <div className="flex justify-between items-center"><span className="text-sm text-muted-foreground">ID</span> <span className="text-sm font-medium text-foreground">{selectedDoc?.id}</span></div>
                            <div className="flex justify-between items-center"><span className="text-sm text-muted-foreground">Size</span> <span className="text-sm font-medium text-foreground">2.4 MB</span></div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <Label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Reviewer Notes</Label>
                          <Textarea placeholder="Add internal notes about this document review..." className="min-h-25 rounded-xl border-muted-foreground/20 resize-none focus-visible:ring-primary" />
                        </div>
                        
                        <div className="space-y-3 pt-2">
                          <Button className="w-full h-12 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all">
                            <CheckCircle2 className="mr-2 h-5 w-5" /> Approve Document
                          </Button>
                          <Button variant="destructive" className="w-full h-12 rounded-xl font-bold shadow-sm transition-all">
                            <XCircle className="mr-2 h-5 w-5" /> Reject & Request Reupload
                          </Button>
                          <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-amber-500/30 text-amber-600 hover:bg-amber-500/10 transition-all">
                            <AlertCircleIcon className="mr-2 h-5 w-5" /> Flag as Suspicious
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
