"use client"

import { useState } from "react"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle2, Trophy, DollarSign, Star, Bell, Timer, Play, Square } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { AIChatWidget } from "@/components/ai-chat-widget"

const tasks = [
  {
    id: 1,
    title: "Process ID Renewal - Ahmed Hassan",
    priority: "high",
    deadline: "2 hours",
    completed: false,
    estimatedTime: "45m",
  },
  {
    id: 2,
    title: "Verify Birth Certificate - Fatima Ali",
    priority: "medium",
    deadline: "4 hours",
    completed: false,
    estimatedTime: "30m",
  },
  {
    id: 3,
    title: "Review Tax Payment - Omar Khalil",
    priority: "high",
    deadline: "1 hour",
    completed: false,
    estimatedTime: "20m",
  },
  {
    id: 4,
    title: "Issue Business License - Nadia Samir",
    priority: "low",
    deadline: "6 hours",
    completed: false,
    estimatedTime: "1h",
  },
]

const notifications = [
  { id: 1, message: "New task assigned: Document Verification", time: "5 min ago" },
  { id: 2, message: "Citizen feedback received: 5 stars", time: "15 min ago" },
  { id: 3, message: "Deadline approaching for Task #1024", time: "30 min ago" },
]

const ratings = [
  { service: "ID Renewal", rating: 5, feedback: "Very professional and quick", date: "2 hours ago" },
  { service: "Certificate Verification", rating: 4, feedback: "Good service", date: "1 day ago" },
  { service: "Tax Filing", rating: 5, feedback: "Excellent help!", date: "2 days ago" },
]

export default function EmployeeDashboard() {
  const [isClockedIn, setIsClockedIn] = useState(true)
  const [taskList, setTaskList] = useState(tasks)

  const toggleTask = (id: number) => {
    setTaskList(taskList.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Employee Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, Sarah Ahmed</p>
          </div>
          <Button
            size="lg"
            variant={isClockedIn ? "destructive" : "default"}
            onClick={() => setIsClockedIn(!isClockedIn)}
            className="gap-2"
          >
            {isClockedIn ? (
              <>
                <Square className="h-5 w-5" />
                Clock Out
              </>
            ) : (
              <>
                <Play className="h-5 w-5" />
                Clock In
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Today's Hours" value="7h 45m" icon={Clock} description="Target: 8 hours" />
          <StatCard
            title="Tasks Completed"
            value="12"
            icon={CheckCircle2}
            trend={{ value: "3 pending", isPositive: true }}
          />
          <StatCard title="Performance Points" value="2,450" icon={Trophy} description="Rank #1 this month" />
          <StatCard title="Extra Hours This Week" value="12h" icon={DollarSign} description="Reward: $180" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Daily Task List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {taskList.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                            {task.title}
                          </p>
                          <Badge
                            variant={
                              task.priority === "high"
                                ? "destructive"
                                : task.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {task.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Due in {task.deadline}
                          </span>
                          <span className="flex items-center gap-1">
                            <Timer className="h-3 w-3" />
                            Est. {task.estimatedTime}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        Start
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  Citizen Ratings Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ratings.map((rating, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-medium">{rating.service}</p>
                          <p className="text-sm text-muted-foreground">{rating.date}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: rating.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{rating.feedback}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Today</span>
                    <span className="font-medium">7h 45m / 8h</span>
                  </div>
                  <Progress value={96} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="font-medium">38h / 40h</span>
                  </div>
                  <Progress value={95} />
                </div>
                <div className="pt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Clock In Time</span>
                    <span className="font-medium">9:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Clock Out</span>
                    <span className="font-medium">5:15 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Extra Hours & Rewards
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">12h</p>
                  <p className="text-sm text-muted-foreground">Extra hours this week</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hourly Rate</span>
                    <span className="font-medium">$15/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Week Earnings</span>
                    <span className="font-bold text-primary">$180</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">This Month Total</span>
                    <span className="font-bold">$720</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Performance Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Speed</span>
                      <span className="font-medium">95%</span>
                    </div>
                    <Progress value={95} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Accuracy</span>
                      <span className="font-medium">98%</span>
                    </div>
                    <Progress value={98} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Rating</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <Progress value={92} />
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
      </div>
      <AIChatWidget />
    </div>
  )
}
