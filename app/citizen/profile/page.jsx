"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, FileText } from "lucide-react"

export default function ProfilePage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
                    <p className="text-muted-foreground">Manage your personal information and settings.</p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                <Card>
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 relative">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-background">
                                <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                        </div>
                        <CardTitle>John Doe</CardTitle>
                        <CardDescription>Citizen</CardDescription>
                        <div className="mt-4 flex justify-center">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                                <Shield className="h-3 w-3 mr-1" />
                                Fayda Verified
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 text-sm">
                            <div className="grid gap-1">
                                <span className="font-medium">Fayda ID</span>
                                <span className="text-muted-foreground">ET-1234-5678-9012</span>
                            </div>
                            <div className="grid gap-1">
                                <span className="font-medium">Email</span>
                                <span className="text-muted-foreground">john.doe@example.com</span>
                            </div>
                            <div className="grid gap-1">
                                <span className="font-medium">Phone</span>
                                <span className="text-muted-foreground">+251 91 123 4567</span>
                            </div>
                            <div className="pt-4">
                                <Button variant="outline" className="w-full">Edit Profile</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                            <CardDescription>
                                Synced from National ID (Fayda) database. Contact support to update restricted fields.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="John" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Doe" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="dob">Date of Birth</Label>
                                    <Input id="dob" defaultValue="1990-01-01" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="gender">Gender</Label>
                                    <Input id="gender" defaultValue="Male" disabled />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" defaultValue="Bole Sub City, Addis Ababa, Ethiopia" />
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Documents</CardTitle>
                            <CardDescription>Manage your uploaded documents.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { name: "National ID Card", status: "Verified", date: "2023-01-15" },
                                    { name: "Passport", status: "Verified", date: "2023-02-20" },
                                    { name: "Driving License", status: "Pending", date: "2024-03-10" },
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">{doc.name}</p>
                                                <p className="text-xs text-muted-foreground">Uploaded on {doc.date}</p>
                                            </div>
                                        </div>
                                        <Badge variant={doc.status === "Verified" ? "default" : "secondary"}>
                                            {doc.status}
                                        </Badge>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full">Upload New Document</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
