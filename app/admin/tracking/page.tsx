"use client";

import { useState } from "react";
import { adminData } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, Clock, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function TrackingPage() {
    const [searchId, setSearchId] = useState("");
    const [trackingResult, setTrackingResult] = useState<any[]>([]);

    const handleSearch = () => {
        const results = adminData.tracking.filter(t => t.id === searchId);
        setTrackingResult(results);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Service Tracking</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Track Request</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4">
                        <Input
                            placeholder="Enter Request ID (e.g., req1)"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            className="max-w-sm"
                        />
                        <Button onClick={handleSearch}>
                            <Search className="mr-2 h-4 w-4" />
                            Track
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {trackingResult.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Tracking Timeline: {searchId}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                            {trackingResult.map((step, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${step.status === 'completed' ? 'bg-green-500 text-white' : step.status === 'in_progress' ? 'bg-blue-500 text-white' : 'bg-slate-300 text-slate-500'}`}>
                                        {step.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : step.status === 'in_progress' ? <Clock className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 shadow bg-white z-10">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-slate-900">{step.step}</div>
                                            <time className="font-medium text-indigo-500">{step.date}</time>
                                        </div>
                                        <div className="text-slate-500 capitalize">{step.status.replace('_', ' ')}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <h3 className="font-medium mb-2">Overall Progress</h3>
                            <Progress value={trackingResult.filter(t => t.status === 'completed').length / trackingResult.length * 100} />
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
