"use client";

import { adminData } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export default function HoursPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Working Hours</h1>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Daily Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Employee</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Hours</TableHead>
                                    <TableHead>Type</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {adminData.hours.map((record, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{record.employee}</TableCell>
                                        <TableCell>{record.date}</TableCell>
                                        <TableCell>{record.hours}</TableCell>
                                        <TableCell>
                                            <Badge variant={record.type === 'Overtime' ? 'destructive' : 'outline'}>
                                                {record.type}
                                            </Badge>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Calendar View (Placeholder)</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-[300px] border-2 border-dashed rounded-lg">
                        <div className="text-center text-muted-foreground">
                            <Calendar className="mx-auto h-12 w-12 mb-2" />
                            <p>Calendar Component Integration</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
