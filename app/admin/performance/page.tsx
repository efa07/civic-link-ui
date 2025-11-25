"use client";

import { adminData } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trophy, TrendingUp, Zap } from "lucide-react";

export default function PerformancePage() {
    const performanceData = [
        { name: 'Liya', speed: 90, rating: 4.7, points: 1200 },
        { name: 'Abel', speed: 75, rating: 4.2, points: 950 },
        { name: 'Sara', speed: 95, rating: 4.9, points: 1400 },
        { name: 'Kebede', speed: 60, rating: 4.0, points: 800 },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Performance & Points</h1>

            <div className="grid gap-4 md:grid-cols-3">
                {adminData.performance.map((item, i) => (
                    <Card key={i}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">{item.metric}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className="text-xs text-green-500 flex items-center mt-1">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {item.trend} from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Task Speed vs Rating</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="speed" fill="#3b82f6" name="Speed Score" />
                                <Bar dataKey="rating" fill="#f59e0b" name="Rating" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Leaderboard</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {performanceData.sort((a, b) => b.points - a.points).map((p, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${i === 0 ? 'bg-yellow-100 text-yellow-600' : i === 1 ? 'bg-gray-100 text-gray-600' : i === 2 ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'}`}>
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-medium">{p.name}</p>
                                            <p className="text-sm text-muted-foreground">{p.points} pts</p>
                                        </div>
                                    </div>
                                    {i === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        <CardTitle>AI Performance Insights</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>Based on recent data, <strong>Sara Tesfaye</strong> is the top performer this week. <strong>Kebede Tadesse</strong> might need additional training in ID Renewal processes to improve speed.</p>
                </CardContent>
            </Card>
        </div>
    );
}
