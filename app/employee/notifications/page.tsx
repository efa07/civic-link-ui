"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Check } from "lucide-react"

const SAMPLE_NOTIFICATIONS = [
    { id: 1, title: "New Task Assigned", message: "You have been assigned 'ID Renewal Application' for Samuel Bekele.", time: "2 hours ago", read: false },
    { id: 2, title: "Feedback Received", message: "Abel Mamo rated your service 5 stars.", time: "5 hours ago", read: false },
    { id: 3, title: "System Update", message: "The system will be down for maintenance at midnight.", time: "1 day ago", read: true },
]

export default function Notifications() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                <Button variant="outline" size="sm">
                    <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
            </div>

            <div className="space-y-4">
                {SAMPLE_NOTIFICATIONS.map((notification) => (
                    <Card key={notification.id} className={notification.read ? "opacity-60" : ""}>
                        <CardContent className="p-4 flex gap-4 items-start">
                            <div className={`mt-1 h-2 w-2 rounded-full ${notification.read ? "bg-transparent" : "bg-primary"}`} />
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-semibold">{notification.title}</h4>
                                    <span className="text-xs text-muted-foreground">{notification.time}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
