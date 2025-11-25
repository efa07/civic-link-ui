"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowRight, Building2, FileText, Briefcase, Car, HeartPulse } from "lucide-react"
import Link from "next/link"

const services = [
    {
        id: "id-renewal",
        title: "National ID Renewal",
        category: "Identity",
        description: "Renew your Fayda ID card or update your personal details.",
        icon: FileText,
        popular: true,
    },
    {
        id: "business-license",
        title: "Business License",
        category: "Business",
        description: "Apply for a new trade license or renew an existing one.",
        icon: Briefcase,
        popular: true,
    },
    {
        id: "driving-license",
        title: "Driving License",
        category: "Transport",
        description: "Apply for a learner's permit or renew your driving license.",
        icon: Car,
        popular: false,
    },
    {
        id: "health-card",
        title: "Health Insurance Card",
        category: "Health",
        description: "Register for community based health insurance.",
        icon: HeartPulse,
        popular: false,
    },
    {
        id: "land-registration",
        title: "Land Registration",
        category: "Housing",
        description: "Register property or transfer land ownership.",
        icon: Building2,
        popular: false,
    },
    {
        id: "birth-certificate",
        title: "Birth Certificate",
        category: "Vital Events",
        description: "Request a copy of a birth certificate.",
        icon: FileText,
        popular: true,
    },
]

export default function ServicesPage() {
    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Services Directory</h1>
                    <p className="text-muted-foreground">Explore and apply for government services.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search services..."
                            className="pl-8 bg-background"
                        />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.id} className="flex flex-col hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <service.icon className="h-6 w-6 text-primary" />
                                </div>
                                {service.popular && (
                                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">Popular</Badge>
                                )}
                            </div>
                            <CardTitle className="mt-4">{service.title}</CardTitle>
                            <CardDescription>{service.category}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-muted-foreground">
                                {service.description}
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Link href={`/citizen/services/${service.id}`} className="w-full">
                                <Button className="w-full group">
                                    Apply Now
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
