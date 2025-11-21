import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Clock, CheckCircle2, Trophy, TrendingUp, Award, MessageSquare } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const feedbackList = [
  {
    citizen: "Ahmed Hassan",
    service: "ID Renewal",
    rating: 5,
    comment: "Excellent service! Very professional and quick.",
    date: "2 days ago",
  },
  {
    citizen: "Fatima Ali",
    service: "Birth Certificate",
    rating: 5,
    comment: "Great help, made the process easy to understand.",
    date: "5 days ago",
  },
  {
    citizen: "Omar Khalil",
    service: "Tax Payment",
    rating: 4,
    comment: "Good service, just took a bit longer than expected.",
    date: "1 week ago",
  },
  {
    citizen: "Nadia Samir",
    service: "Document Verification",
    rating: 5,
    comment: "Very helpful and patient with my questions.",
    date: "2 weeks ago",
  },
  {
    citizen: "Youssef Ibrahim",
    service: "License Application",
    rating: 5,
    comment: "Outstanding! Made everything so simple.",
    date: "3 weeks ago",
  },
]

const monthlyData = [
  { month: "Jan", tasks: 78, avgTime: "2.8h" },
  { month: "Feb", tasks: 82, avgTime: "2.6h" },
  { month: "Mar", tasks: 85, avgTime: "2.5h" },
  { month: "Apr", tasks: 87, avgTime: "2.4h" },
  { month: "May", tasks: 87, avgTime: "2.4h" },
]

export default function WorkerProfile({ params }: { params: { id: string } }) {
  const avgRating = 4.8
  const totalRatings = 145

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" className="mb-4">
            ← Back to Dashboard
          </Button>
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">SA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Sarah Ahmed</h1>
                <Badge className="bg-primary">Top Performer</Badge>
              </div>
              <p className="text-muted-foreground mb-3">Document Processing Officer • Central Office</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{avgRating}</span>
                  <span className="text-muted-foreground">({totalRatings} ratings)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>87 tasks completed</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>2.4h avg time</span>
                </div>
              </div>
            </div>
            <Button size="lg" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact Worker
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-1">2,450</p>
                <p className="text-sm text-muted-foreground">Performance Points</p>
                <p className="text-xs text-muted-foreground mt-2">Rank #1 this month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <p className="text-4xl font-bold mb-1">87</p>
                <p className="text-sm text-muted-foreground">Tasks Completed</p>
                <p className="text-xs text-muted-foreground mt-2">This month</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <p className="text-4xl font-bold mb-1">2.4h</p>
                <p className="text-sm text-muted-foreground">Avg Completion Time</p>
                <p className="text-xs text-muted-foreground mt-2">15% faster than average</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Performance Graph
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data) => (
                  <div key={data.month}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="text-sm text-muted-foreground">
                        {data.tasks} tasks • {data.avgTime} avg
                      </div>
                    </div>
                    <Progress value={(data.tasks / 100) * 100} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Extra Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-3xl font-bold text-primary">48h</p>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="font-medium">12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Month</span>
                    <span className="font-medium">52h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge className="w-full justify-start py-2">🏆 Top Performer - 3 months</Badge>
                <Badge className="w-full justify-start py-2" variant="secondary">
                  ⚡ Speed Champion
                </Badge>
                <Badge className="w-full justify-start py-2" variant="secondary">
                  ⭐ 5-Star Master
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Citizen Feedback ({totalRatings})
              </CardTitle>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-primary text-primary" />
                <span className="text-2xl font-bold">{avgRating}</span>
                <span className="text-muted-foreground text-sm">/ 5</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feedbackList.map((feedback, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{feedback.citizen}</p>
                      <p className="text-sm text-muted-foreground">{feedback.service}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: feedback.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{feedback.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
