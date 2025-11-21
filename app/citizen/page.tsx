"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, CreditCard, AlertCircle, CheckCircle2, Clock, Star, Bell, Send, Search, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { AIChatWidget } from "@/components/ai-chat-widget"

const services = [
  { id: 1, icon: FileText, name: "ID Renewal", description: "Renew national identification", duration: "2-3 days" },
  {
    id: 2,
    icon: FileText,
    name: "Birth Certificate",
    description: "Request birth certificate copy",
    duration: "1-2 days",
  },
  { id: 3, icon: CreditCard, name: "Tax Payment", description: "Pay taxes and fees", duration: "Instant" },
  { id: 4, icon: FileText, name: "Business License", description: "Apply for business license", duration: "5-7 days" },
  {
    id: 5,
    icon: FileText,
    name: "Marriage Certificate",
    description: "Request marriage certificate",
    duration: "1-2 days",
  },
  { id: 6, icon: AlertCircle, name: "Report Issue", description: "Report a problem or complaint", duration: "Varies" },
]

const myRequests = [
  {
    id: "#REQ-1024",
    service: "ID Renewal",
    status: "processing",
    date: "Dec 18, 2024",
    worker: "Sarah Ahmed",
    progress: 75,
  },
  {
    id: "#REQ-1018",
    service: "Birth Certificate",
    status: "completed",
    date: "Dec 15, 2024",
    worker: "Mohammed Youssef",
    progress: 100,
  },
  {
    id: "#REQ-1012",
    service: "Tax Payment",
    status: "completed",
    date: "Dec 10, 2024",
    worker: "Layla Ibrahim",
    progress: 100,
  },
]

const notifications = [
  { id: 1, message: "Your ID Renewal is 75% complete", time: "1 hour ago", type: "update" },
  { id: 2, message: "Please rate your recent service", time: "2 days ago", type: "action" },
  { id: 3, message: "Payment confirmed for Tax Filing", time: "1 week ago", type: "success" },
]

export default function CitizenDashboard() {
  const [ratingDialog, setRatingDialog] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [serviceDialog, setServiceDialog] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">CivicLink</h1>
              <p className="text-sm text-muted-foreground">Citizen Portal</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-semibold text-primary">AH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Welcome back, Ahmed Hassan</h2>
          <p className="text-muted-foreground">Manage your services and track requests</p>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-foreground/20 rounded-lg">
                <FileText className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">Need Help?</h3>
                <p className="opacity-90">Our AI Assistant is here to answer your questions 24/7</p>
              </div>
              <Button variant="secondary" size="lg">
                Chat Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Request Services</h3>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search services..." className="pl-9" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Dialog key={service.id} open={serviceDialog} onOpenChange={setServiceDialog}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-all cursor-pointer hover:border-primary">
                    <CardContent className="p-6">
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-1">{service.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {service.duration}
                        </span>
                        <Button size="sm" variant="ghost" className="gap-1">
                          <Plus className="h-4 w-4" />
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request {service.name}</DialogTitle>
                    <DialogDescription>Fill out the form below to submit your request</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label>National ID</Label>
                      <Input placeholder="Enter your ID number" />
                    </div>
                    <div className="space-y-2">
                      <Label>Contact Number</Label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label>Additional Details</Label>
                      <Textarea placeholder="Any additional information..." rows={3} />
                    </div>
                    <Button className="w-full">Submit Request</Button>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>My Requests</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {myRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{request.id}</span>
                      <Badge
                        variant={
                          request.status === "completed"
                            ? "default"
                            : request.status === "processing"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{request.service}</p>
                    <p className="text-xs text-muted-foreground">
                      Submitted {request.date} • Handled by {request.worker}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {request.status === "completed" ? (
                      <Dialog open={ratingDialog} onOpenChange={setRatingDialog}>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                            <Star className="h-4 w-4" />
                            Rate
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Rate Your Experience</DialogTitle>
                            <DialogDescription>How was your experience with {request.worker}?</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label>Service Quality</Label>
                              <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    onClick={() => setSelectedRating(star)}
                                    className="transition-transform hover:scale-110"
                                  >
                                    <Star
                                      className={`h-8 w-8 ${
                                        star <= selectedRating ? "fill-primary text-primary" : "text-muted-foreground"
                                      }`}
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Feedback (Optional)</Label>
                              <Textarea placeholder="Share your experience..." rows={4} />
                            </div>
                            <Button className="w-full gap-2">
                              <Send className="h-4 w-4" />
                              Submit Rating
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Service History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Birth Certificate Issued</p>
                      <p className="text-sm text-muted-foreground">Completed on Dec 15, 2024</p>
                    </div>
                  </div>
                  <Badge>Rated 5★</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Tax Payment Confirmed</p>
                      <p className="text-sm text-muted-foreground">Completed on Dec 10, 2024</p>
                    </div>
                  </div>
                  <Badge>Rated 5★</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Document Verification</p>
                      <p className="text-sm text-muted-foreground">Completed on Dec 5, 2024</p>
                    </div>
                  </div>
                  <Badge>Rated 4★</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium">{notif.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <AIChatWidget />
    </div>
  )
}
