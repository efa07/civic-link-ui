"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, Upload, FileText, Info } from "lucide-react"
import Link from "next/link"

export default function ServiceDetailPage() {
    const params = useParams()
    const [step, setStep] = useState(1)
    const [submitted, setSubmitted] = useState(false)

    // Mock service data based on ID (in a real app, fetch this)
    const serviceId = params.id
    const serviceTitle = serviceId === "id-renewal" ? "National ID Renewal" : "Service Application"

    const handleNext = () => setStep(step + 1)
    const handleBack = () => setStep(step - 1)
    const handleSubmit = () => setSubmitted(true)

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto p-6 text-center space-y-6">
                <div className="flex justify-center">
                    <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold">Application Submitted!</h1>
                <p className="text-muted-foreground text-lg">
                    Your application for {serviceTitle} has been successfully submitted.
                    Your tracking ID is <span className="font-mono font-bold text-foreground">APP-2024-004</span>.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Link href="/citizen">
                        <Button variant="outline">Return to Dashboard</Button>
                    </Link>
                    <Link href="/citizen/applications">
                        <Button>Track Status</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/citizen/services">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold">{serviceTitle}</h1>
                    <p className="text-muted-foreground">Complete the form below to apply.</p>
                </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1 last:flex-none">
                        <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${step >= s
                                    ? "bg-primary border-primary text-primary-foreground"
                                    : "border-muted-foreground text-muted-foreground"
                                }`}
                        >
                            {s}
                        </div>
                        {s < 3 && (
                            <div
                                className={`h-1 flex-1 mx-2 rounded-full ${step > s ? "bg-primary" : "bg-muted"
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            <Card>
                {step === 1 && (
                    <>
                        <CardHeader>
                            <CardTitle>Personal Details</CardTitle>
                            <CardDescription>Verify your personal information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg flex gap-3 text-sm">
                                <Info className="h-5 w-5 shrink-0" />
                                <p>
                                    Some fields are pre-filled from your Fayda ID. If this information is incorrect,
                                    please update your profile first.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>First Name</Label>
                                    <Input defaultValue="John" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label>Last Name</Label>
                                    <Input defaultValue="Doe" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label>Fayda ID</Label>
                                    <Input defaultValue="ET-1234-5678" disabled />
                                </div>
                                <div className="space-y-2">
                                    <Label>Phone Number</Label>
                                    <Input defaultValue="+251 91 123 4567" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Current Address</Label>
                                <Textarea defaultValue="Bole Sub City, Addis Ababa" />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button onClick={handleNext}>Next Step</Button>
                        </CardFooter>
                    </>
                )}

                {step === 2 && (
                    <>
                        <CardHeader>
                            <CardTitle>Document Upload</CardTitle>
                            <CardDescription>Upload necessary supporting documents.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                                    <p className="font-medium">Passport Photo</p>
                                    <p className="text-xs text-muted-foreground">JPG or PNG, max 2MB</p>
                                </div>
                                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                                    <p className="font-medium">Proof of Residence</p>
                                    <p className="text-xs text-muted-foreground">PDF or Image, max 5MB</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Additional Notes</Label>
                                <Textarea placeholder="Any additional information..." />
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={handleBack}>Back</Button>
                            <Button onClick={handleNext}>Next Step</Button>
                        </CardFooter>
                    </>
                )}

                {step === 3 && (
                    <>
                        <CardHeader>
                            <CardTitle>Review & Submit</CardTitle>
                            <CardDescription>Please review your application before submitting.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4 rounded-lg border p-4">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Service</span>
                                    <span>{serviceTitle}</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Applicant</span>
                                    <span>John Doe</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="font-medium">Fee</span>
                                    <span>500 ETB</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I certify that the information provided is true and correct.
                                </label>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline" onClick={handleBack}>Back</Button>
                            <Button onClick={handleSubmit}>Submit Application</Button>
                        </CardFooter>
                    </>
                )}
            </Card>
        </div>
    )
}
