'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { adminData } from "@/lib/admin-data";
import { Users, FileText, CheckCircle, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
    const stats = [
        { title: "Total Employees", value: adminData.employees.length, icon: Users, color: "text-blue-500" },
        { title: "Active Requests", value: adminData.citizenRequests.filter(r => r.status !== 'completed').length, icon: FileText, color: "text-yellow-500" },
        { title: "Completed Tasks", value: adminData.employees.reduce((acc, curr) => acc + curr.tasksCompleted, 0), icon: CheckCircle, color: "text-green-500" },
        { title: "Avg Rating", value: "4.5", icon: Activity, color: "text-purple-500" },
    ];

    const chartData = [
        { name: 'Mon', tasks: 40 },
        { name: 'Tue', tasks: 30 },
        { name: 'Wed', tasks: 20 },
        { name: 'Thu', tasks: 27 },
        { name: 'Fri', tasks: 18 },
        { name: 'Sat', tasks: 23 },
        { name: 'Sun', tasks: 34 },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Weekly Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="tasks" fill="#f97316" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {adminData.tracking.slice(0, 5).map((track, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            Request #{track.id} - {track.step}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {track.status} at {track.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
