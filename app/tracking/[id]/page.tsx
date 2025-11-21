import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CheckCircle2, Clock, FileText, AlertCircle, Star, Phone, Mail, MessageSquare, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

const timelineSteps = [
  {
    status: "completed",
    title: "Request Submitted",
    description: "Application received and logged into system",
    timestamp: "Dec 18, 2024 - 9:30 AM",
    icon: FileText,
  },
  {
    status: "completed",
    title: "Initial Review",
    description: "Documents verified and validated by system",
    timestamp: "Dec 18, 2024 - 10:15 AM",
    icon: CheckCircle2,
  },
  {
    status: "active",
    title: "Processing",
    description: "Currently being processed by assigned officer",
    timestamp: "Dec 18, 2024 - 2:30 PM",
    icon: Clock,
  },
  {
    status: "pending",
    title: "Quality Check",
    description: "Final review and quality assurance",
    timestamp: "Estimated: Dec 19, 2024",
    icon: CheckCircle2,
  },
  {
    status: "pending",
    title: "Completed",
    description: "Service completed and ready for collection",
    timestamp: "Estimated: Dec 19, 2024",
    icon: CheckCircle2,
  },
]

export default function ServiceTracking({ params }: { params: { id: string } }) {
  const requestId = params.id
  const progress = 75
  const estimatedCompletion = "Tomorrow, 3:00 PM"
  const worker = {
    name: "Sarah Ahmed",
    role: "Document Processing Officer",
    rating: 4.8,
    tasksCompleted: 87,
    avgTime: "2.4h",
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" className="mb-4">
            ← Back to Dashboard
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Track Request #{requestId}</h1>
              <p className="text-muted-foreground mt-1">ID Renewal Application</p>
            </div>
            <Badge className="text-lg py-2 px-4">In Progress</Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        <Card className="border-primary">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Overall Progress</h3>
                <p className="text-sm text-muted-foreground">Estimated completion: {estimatedCompletion}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{progress}%</p>
                <p className="text-sm text-muted-foreground">Complete</p>
              </div>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timelineSteps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-full border-2",
                              step.status === "completed" && "bg-primary border-primary text-primary-foreground",
                              step.status === "active" && "bg-primary/20 border-primary text-primary animate-pulse",
                              step.status === "pending" && "bg-muted border-border text-muted-foreground",
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          {index < timelineSteps.length - 1 && (
                            <div
                              className={cn(
                                "w-0.5 h-16 mt-2",
                                step.status === "completed" ? "bg-primary" : "bg-border",
                              )}
                            />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {step.timestamp}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  AI Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">On Track for Early Completion</p>
                    <p className="text-sm text-muted-foreground">
                      Based on current processing speed and worker performance, your request is likely to be completed 2
                      hours ahead of schedule. No delays detected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assigned Worker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">SA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{worker.name}</p>
                    <p className="text-sm text-muted-foreground">{worker.role}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Rating
                    </span>
                    <span className="font-medium">{worker.rating} / 5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Tasks Completed
                    </span>
                    <span className="font-medium">{worker.tasksCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Avg Time
                    </span>
                    <span className="font-medium">{worker.avgTime}</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <Link href={`/worker/${requestId}`}>
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <Star className="h-4 w-4" />
                      View Full Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Request Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Request ID</span>
                  <span className="font-medium">#{requestId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Type</span>
                  <span className="font-medium">ID Renewal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Submitted</span>
                  <span className="font-medium">Dec 18, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Priority</span>
                  <Badge variant="default">Normal</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <Badge>Processing</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <MessageSquare className="h-4 w-4" />
                  Chat with AI Assistant
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Phone className="h-4 w-4" />
                  Call Support
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                  <Mail className="h-4 w-4" />
                  Email Worker
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <h4 className="font-semibold">Rate This Service</h4>
                  <p className="text-sm text-muted-foreground">Service completed? Share your experience</p>
                  <Button className="w-full gap-2">
                    <Star className="h-4 w-4" />
                    Provide Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
