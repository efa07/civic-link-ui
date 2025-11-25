"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, ShieldCheck } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Welcome to CivicLink</CardTitle>
                    <CardDescription>Sign in to access your dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="citizen" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="citizen">Citizen</TabsTrigger>
                            <TabsTrigger value="admin">Admin</TabsTrigger>
                        </TabsList>

                        <TabsContent value="citizen">
                            <div className="space-y-4">
                                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 flex items-center gap-3 mb-4">
                                    <User className="h-5 w-5 text-primary" />
                                    <div className="text-sm">
                                        <p className="font-medium">Citizen Access</p>
                                        <p className="text-muted-foreground">Login with your Fayda ID</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="fayda-id">Fayda ID / Email</Label>
                                    <Input id="fayda-id" placeholder="Enter your ID" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <Link href="/citizen">
                                    <Button className="w-full mt-4">Sign In as Citizen</Button>
                                </Link>
                            </div>
                        </TabsContent>

                        <TabsContent value="admin">
                            <div className="space-y-4">
                                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10 flex items-center gap-3 mb-4">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                    <div className="text-sm">
                                        <p className="font-medium">Official Access</p>
                                        <p className="text-muted-foreground">Government personnel only</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="admin-email">Official Email</Label>
                                    <Input id="admin-email" placeholder="name@gov.et" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="admin-password">Password</Label>
                                    <Input id="admin-password" type="password" />
                                </div>
                                <Link href="/admin">
                                    <Button className="w-full mt-4">Sign In as Admin</Button>
                                </Link>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}
