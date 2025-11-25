"use client";

import { useState } from "react";
import { adminData } from "@/lib/admin-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function RequestsPage() {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [selectedRequest, setSelectedRequest] = useState<any>(null);

    const filteredRequests = adminData.citizenRequests.filter(req => {
        const matchesFilter = filter === "all" || req.status === filter;
        const matchesSearch = req.citizen.toLowerCase().includes(search.toLowerCase()) || req.type.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending": return "bg-yellow-500";
            case "in_progress": return "bg-blue-500";
            case "completed": return "bg-green-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Citizen Requests</h1>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>All Requests</CardTitle>
                        <div className="flex gap-2">
                            <Input
                                placeholder="Search requests..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-[200px]"
                            />
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="h-10 w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="all">All Statuses</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Citizen</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredRequests.map((req) => (
                                <TableRow key={req.id}>
                                    <TableCell>{req.id}</TableCell>
                                    <TableCell>{req.type}</TableCell>
                                    <TableCell>{req.citizen}</TableCell>
                                    <TableCell>{req.date}</TableCell>
                                    <TableCell>
                                        <Badge className={getStatusColor(req.status)}>{req.status.replace('_', ' ')}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm" onClick={() => setSelectedRequest(req)}>View Details</Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Request Details</DialogTitle>
                                                </DialogHeader>
                                                {selectedRequest && (
                                                    <div className="space-y-4">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <p className="font-medium">Request ID</p>
                                                                <p className="text-sm text-muted-foreground">{selectedRequest.id}</p>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">Type</p>
                                                                <p className="text-sm text-muted-foreground">{selectedRequest.type}</p>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">Citizen</p>
                                                                <p className="text-sm text-muted-foreground">{selectedRequest.citizen}</p>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">Status</p>
                                                                <Badge className={getStatusColor(selectedRequest.status)}>{selectedRequest.status.replace('_', ' ')}</Badge>
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">Date Submitted</p>
                                                                <p className="text-sm text-muted-foreground">{selectedRequest.date}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </DialogContent>
                                        </Dialog>
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
