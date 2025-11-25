"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const SAMPLE_DATA = {
    ratings: [
        { citizen: "Abel Mamo", score: 5, comment: "Very fast and helpful!", date: "2025-11-20" },
        { citizen: "Mimi Hagos", score: 4, comment: "Good support overall.", date: "2025-11-19" }
    ],
    averageRating: 4.6
}

export default function Ratings() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Ratings & Feedback</h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Average Rating</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center py-6">
                        <div className="text-5xl font-bold flex items-center gap-2">
                            {SAMPLE_DATA.averageRating}
                            <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                        </div>
                        <p className="text-muted-foreground mt-2">Based on last 30 days</p>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Rating Trend</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[150px] flex items-end gap-4 px-4">
                        {/* Placeholder line chart visualization */}
                        <div className="flex-1 bg-muted h-[1px] relative">
                            <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-between px-2">
                                <div className="w-2 h-[60%] bg-primary rounded-full"></div>
                                <div className="w-2 h-[70%] bg-primary rounded-full"></div>
                                <div className="w-2 h-[65%] bg-primary rounded-full"></div>
                                <div className="w-2 h-[85%] bg-primary rounded-full"></div>
                                <div className="w-2 h-[80%] bg-primary rounded-full"></div>
                                <div className="w-2 h-[90%] bg-primary rounded-full"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {SAMPLE_DATA.ratings.map((rating, i) => (
                            <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold">{rating.citizen}</h4>
                                    <span className="text-sm text-muted-foreground">{rating.date}</span>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <Star
                                            key={idx}
                                            className={`h-4 w-4 ${idx < rating.score ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground">{rating.comment}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
