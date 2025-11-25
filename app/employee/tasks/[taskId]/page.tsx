"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, CheckCircle, Clock, User } from "lucide-react"
import { useState } from "react"
import { useParams } from "next/navigation"

const SAMPLE_DATA = {
    tasks: [
        {
            id: "task001",
            title: "ID Renewal Application",
            citizenName: "Samuel Bekele",
            status: "in_progress",
            startedAt: "2025-11-21T10:00:00Z",
            deadline: "2025-11-21T13:00:00Z",
            estimatedTimeMinutes: 180,
            description: "Review submitted documents for ID renewal. Verify identity and address proof.",
            progress: 45
        },
        {
            id: "task002",
            title: "Birth Certificate Update",
            citizenName: "Lidya Alemu",
            status: "pending",
            startedAt: null,
            deadline: "2025-11-22T12:00:00Z",
            estimatedTimeMinutes: 90,
            description: "Update birth certificate details as per request.",
            progress: 0
        }
    ]
}

export default function TaskDetails() {
    const params = useParams()
    const taskId = params.taskId
    const task = SAMPLE_DATA.tasks.find(t => t.id === taskId) || SAMPLE_DATA.tasks[0] // Fallback for demo

    const [status, setStatus] = useState(task.status)

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{task.id}</Badge>
                        <Badge variant={status === "in_progress" ? "default" : "secondary"}>{status.replace("_", " ")}</Badge>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">{task.title}</h1>
                </div>
                <div className="flex gap-2">
                    {status === "pending" && (
                        <Button onClick={() => setStatus("in_progress")}>
                            <Play className="mr-2 h-4 w-4" /> Start Task
                        </Button>
                    )}
                    {status === "in_progress" && (
                        <>
                            <Button variant="outline" onClick={() => setStatus("paused")}>
                                <Pause className="mr-2 h-4 w-4" /> Pause
                            </Button>
                            <Button onClick={() => setStatus("completed")}>
                                <CheckCircle className="mr-2 h-4 w-4" /> Complete
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Task Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-1">Description</h4>
                                <p className="text-muted-foreground">{task.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium mb-1">Citizen</h4>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <User className="h-4 w-4" />
                                        {task.citizenName}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Deadline</h4>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="h-4 w-4" />
                                        {new Date(task.deadline).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Completion</span>
                                    <span>{task.progress}%</span>
                                </div>
                                <Progress value={task.progress} />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Timer</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center py-6">
                            <div className="text-4xl font-mono font-bold mb-4">
                                00:45:12
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Estimated time: {task.estimatedTimeMinutes} mins
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
