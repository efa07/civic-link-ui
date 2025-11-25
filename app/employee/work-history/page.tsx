"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const SAMPLE_DATA = {
    workHistory: [
        {
            date: "2025-11-18",
            hoursWorked: 7.5,
            tasksCompleted: 3,
            pointsEarned: 45
        },
        {
            date: "2025-11-19",
            hoursWorked: 9,
            tasksCompleted: 4,
            pointsEarned: 60
        },
        {
            date: "2025-11-20",
            hoursWorked: 8,
            tasksCompleted: 5,
            pointsEarned: 75
        }
    ]
}

export default function WorkHistory() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Work History</h1>

            <Card>
                <CardHeader>
                    <CardTitle>History Log</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Hours Worked</TableHead>
                                <TableHead>Tasks Completed</TableHead>
                                <TableHead className="text-right">Points Earned</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {SAMPLE_DATA.workHistory.map((log, i) => (
                                <TableRow key={i}>
                                    <TableCell>{new Date(log.date).toLocaleDateString()}</TableCell>
                                    <TableCell>{log.hoursWorked}h</TableCell>
                                    <TableCell>{log.tasksCompleted}</TableCell>
                                    <TableCell className="text-right">+{log.pointsEarned}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
