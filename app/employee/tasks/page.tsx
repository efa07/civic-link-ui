"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { Filter } from "lucide-react"

const SAMPLE_DATA = {
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
        },
        {
            id: "task003",
            title: "Business License Renewal",
            citizenName: "Kebede Tadesse",
            status: "completed",
            startedAt: "2025-11-20T09:00:00Z",
            deadline: "2025-11-20T12:00:00Z",
            estimatedTimeMinutes: 120
        }
    ]
}

export default function EmployeeTasks() {
    const [filter, setFilter] = useState("all")

    const filteredTasks = SAMPLE_DATA.tasks.filter(task => {
        if (filter === "all") return true
        return task.status === filter
    })

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">My Tasks</h1>
                <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
            </div>

            <div className="flex gap-2">
                <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>All</Button>
                <Button variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}>Pending</Button>
                <Button variant={filter === "in_progress" ? "default" : "outline"} onClick={() => setFilter("in_progress")}>In Progress</Button>
                <Button variant={filter === "completed" ? "default" : "outline"} onClick={() => setFilter("completed")}>Completed</Button>
            </div>

            <div className="grid gap-4">
                {filteredTasks.map((task) => (
                    <Link href={`/employee/tasks/${task.id}`} key={task.id}>
                        <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                            <CardContent className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg">{task.title}</h3>
                                    <p className="text-sm text-muted-foreground">Citizen: {task.citizenName}</p>
                                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                        <span>Deadline: {new Date(task.deadline).toLocaleDateString()}</span>
                                        <span>•</span>
                                        <span>Est. {task.estimatedTimeMinutes} mins</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Badge variant={task.status === "in_progress" ? "default" : task.status === "completed" ? "secondary" : "outline"}>
                                        {task.status.replace("_", " ")}
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
