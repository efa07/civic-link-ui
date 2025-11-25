"use client";

import { adminData } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Check, X } from "lucide-react";

export default function RewardsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Extra Hours Rewards</h1>

            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-orange-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-800">
                            <Gift className="h-5 w-5" />
                            Total Rewards Pending
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-orange-900">
                            {adminData.rewards.filter(r => r.status === 'Pending').length}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Reward Requests</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Employee</TableHead>
                                <TableHead>Reason</TableHead>
                                <TableHead>Points</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {adminData.rewards.map((reward, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{reward.employee}</TableCell>
                                    <TableCell>{reward.reason}</TableCell>
                                    <TableCell>{reward.points}</TableCell>
                                    <TableCell>
                                        <Badge variant={reward.status === 'Approved' ? 'default' : 'secondary'}>
                                            {reward.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {reward.status === 'Pending' && (
                                            <div className="flex gap-2">
                                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                                    <Check className="h-4 w-4 mr-1" /> Approve
                                                </Button>
                                                <Button size="sm" variant="destructive">
                                                    <X className="h-4 w-4 mr-1" /> Reject
                                                </Button>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
