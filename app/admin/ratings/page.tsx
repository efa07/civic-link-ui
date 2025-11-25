"use client";

import { adminData } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MessageSquare } from "lucide-react";

export default function RatingsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Ratings & Feedback</h1>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                    {adminData.ratings.map((rating) => (
                        <Card key={rating.id}>
                            <CardContent className="pt-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">{rating.employee}</h3>
                                            <span className="text-sm text-muted-foreground">rated by {rating.citizen}</span>
                                        </div>
                                        <div className="flex items-center text-yellow-500">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className={`h-4 w-4 ${i < rating.score ? "fill-current" : "text-gray-300"}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground">{rating.date}</span>
                                </div>
                                <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground bg-slate-50 p-3 rounded-md">
                                    <MessageSquare className="h-4 w-4 mt-0.5 shrink-0" />
                                    <p>"{rating.comment}"</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rating Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[5, 4, 3, 2, 1].map((score) => {
                                    const count = adminData.ratings.filter(r => r.score === score).length;
                                    const total = adminData.ratings.length;
                                    const percentage = (count / total) * 100;

                                    return (
                                        <div key={score} className="flex items-center gap-4">
                                            <div className="flex items-center w-12">
                                                <span className="font-medium">{score}</span>
                                                <Star className="h-4 w-4 ml-1 text-yellow-500 fill-current" />
                                            </div>
                                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-yellow-500" style={{ width: `${percentage}%` }} />
                                            </div>
                                            <span className="text-sm text-muted-foreground w-8">{count}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
