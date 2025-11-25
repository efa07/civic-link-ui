"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, CheckSquare, Clock, Star, Trophy } from "lucide-react"
import Link from "next/link"

const SAMPLE_DATA = {
    employee: {
        id: "emp123",
        name: "Efa Tariku",
        role: "Government Officer",
        points: 1260,
        rating: 4.6
    },
    tasks: [
        {
            id: "task001",
            title: "ID Renewal Application",
            citizenName: "Samuel Bekele",
            status: "in_progress",
            startedAt: "2025-11-21T10:00:00Z",
            deadline: "2025-11-21T13:00:00Z",
            estimatedTimeMinutes: 180
        },
        {
            id: "task002",
            title: "Birth Certificate Update",
            citizenName: "Lidya Alemu",
            status: "pending",
            startedAt: null,
            deadline: "2025-11-22T12:00:00Z",
            estimatedTimeMinutes: 90
        }
    ]
}

export default function EmployeeDashboard() {
    const activeTasks = SAMPLE_DATA.tasks.filter(t => t.status === "in_progress").length
    const totalTasks = SAMPLE_DATA.tasks.length

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="text-sm text-muted-foreground">
                    Welcome back, {SAMPLE_DATA.employee.name}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Points</CardTitle>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{SAMPLE_DATA.employee.points}</div>
                        <p className="text-xs text-muted-foreground">
                            +20 from last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Rating</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{SAMPLE_DATA.employee.rating}</div>
                        <p className="text-xs text-muted-foreground">
                            Based on recent feedback
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeTasks}</div>
                        <p className="text-xs text-muted-foreground">
                            Tasks currently in progress
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                        <CheckSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalTasks}</div>
                        <p className="text-xs text-muted-foreground">
                            Assigned tasks
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 md:grid-cols-2">
                        <Link href="/employee/tasks">
                            <Button className="w-full justify-start" variant="outline">
                                <CheckSquare className="mr-2 h-4 w-4" />
                                View My Tasks
                            </Button>
                        </Link>
                        <Link href="/employee/time-tracker">
                            <Button className="w-full justify-start" variant="outline">
                                <Clock className="mr-2 h-4 w-4" />
                                Log Time
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Bell className="h-4 w-4 text-primary" />
                                <div className="text-sm">
                                    <p className="font-medium">New task assigned</p>
                                    <p className="text-muted-foreground">ID Renewal Application</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Bell className="h-4 w-4 text-primary" />
                                <div className="text-sm">
                                    <p className="font-medium">Feedback received</p>
                                    <p className="text-muted-foreground">5 stars from Abel Mamo</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
