"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Square, Clock } from "lucide-react"
import { useState } from "react"

const SAMPLE_DATA = {
    workHistory: [
        {
            date: "2025-11-18",
            hoursWorked: 7.5,
            tasksCompleted: 3
        },
        {
            date: "2025-11-19",
            hoursWorked: 9,
            tasksCompleted: 4
        }
    ]
}

export default function TimeTracker() {
    const [isTracking, setIsTracking] = useState(false)

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Time Tracker</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Current Session</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-10 space-y-6">
                        <div className="text-6xl font-mono font-bold tracking-wider">
                            {isTracking ? "02:14:33" : "00:00:00"}
                        </div>
                        <Button
                            size="lg"
                            className={isTracking ? "bg-destructive hover:bg-destructive/90" : "bg-green-600 hover:bg-green-700"}
                            onClick={() => setIsTracking(!isTracking)}
                        >
                            {isTracking ? (
                                <>
                                    <Square className="mr-2 h-5 w-5" /> Stop Work
                                </>
                            ) : (
                                <>
                                    <Play className="mr-2 h-5 w-5" /> Start Work
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Weekly Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Total Hours This Week</span>
                                <span className="text-2xl font-bold">34.5h</span>
                            </div>
                            <div className="h-[100px] flex items-end gap-2">
                                {/* Placeholder bar chart */}
                                <div className="w-full bg-muted rounded-t-sm h-[60%]" title="Mon"></div>
                                <div className="w-full bg-muted rounded-t-sm h-[80%]" title="Tue"></div>
                                <div className="w-full bg-muted rounded-t-sm h-[70%]" title="Wed"></div>
                                <div className="w-full bg-primary rounded-t-sm h-[40%]" title="Thu"></div>
                                <div className="w-full bg-muted rounded-t-sm h-[0%]" title="Fri"></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Logs</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {SAMPLE_DATA.workHistory.map((log, i) => (
                            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                                        <Clock className="h-5 w-5 text-muted-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{new Date(log.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                        <p className="text-sm text-muted-foreground">{log.tasksCompleted} tasks completed</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold">{log.hoursWorked}h</p>
                                    <p className="text-sm text-muted-foreground">Recorded</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
