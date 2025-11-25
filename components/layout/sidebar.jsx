"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, LayoutDashboard, User, FileText, Settings, LogOut, Building2, Users, ClipboardList, List, Clock, Trophy, DollarSign, Star, BarChart3, Bot, CheckSquare, Timer, History, Bell, TrendingUp } from "lucide-react"
import { useState } from "react"

const sidebarItems = {
    citizen: [
        { name: "Dashboard", href: "/citizen", icon: LayoutDashboard },
        { name: "My Profile", href: "/citizen/profile", icon: User },
        { name: "Services", href: "/citizen/services", icon: FileText },
        { name: "Applications", href: "/citizen/applications", icon: FileText },
    ],
    employee: [
        { name: "Dashboard", href: "/employee/dashboard", icon: LayoutDashboard },
        { name: "My Tasks", href: "/employee/tasks", icon: CheckSquare },
        { name: "Task Details", href: "/employee/tasks/task001", icon: FileText },
        { name: "Time Tracker", href: "/employee/time-tracker", icon: Timer },
        { name: "Work History", href: "/employee/work-history", icon: History },
        { name: "Ratings & Feedback", href: "/employee/ratings", icon: Star },
        { name: "Performance Overview", href: "/employee/performance", icon: TrendingUp },
        { name: "Notifications", href: "/employee/notifications", icon: Bell },
        { name: "Settings", href: "/employee/settings", icon: Settings },
    ],
    admin: [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Citizen Requests", href: "/admin/requests", icon: ClipboardList },
        { name: "Service Tracking", href: "/admin/tracking", icon: List },
        { name: "Employee Management", href: "/admin/employees", icon: Users },
        { name: "Working Hours", href: "/admin/hours", icon: Clock },
        { name: "Performance & Points", href: "/admin/performance", icon: Trophy },
        { name: "Extra Hours Rewards", href: "/admin/rewards", icon: DollarSign },
        { name: "Ratings & Feedback", href: "/admin/ratings", icon: Star },
        { name: "Reports & Analytics", href: "/admin/analytics", icon: BarChart3 },
        { name: "AI Assistant", href: "/admin/ai", icon: Bot },
        { name: "Queue Management", href: "/admin/queue", icon: List },
        { name: "Settings & Security", href: "/admin/settings", icon: Settings },
    ],
}

export function Sidebar({ className }) {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    // Determine role based on path
    const role = pathname?.startsWith("/admin") ? "admin" : pathname?.startsWith("/employee") ? "employee" : "citizen"
    const items = sidebarItems[role] || sidebarItems.citizen

    if (pathname === "/" || pathname === "/login") return null

    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden fixed left-4 top-4 z-40">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] p-0">
                    <SidebarContent items={items} pathname={pathname} setOpen={setOpen} />
                </SheetContent>
            </Sheet>
            <div className={cn("hidden border-r bg-background md:block w-[240px]", className)}>
                <SidebarContent items={items} pathname={pathname} />
            </div>
        </>
    )
}

function SidebarContent({ items, pathname, setOpen }) {
    return (
        <div className="flex h-full flex-col gap-2">
            <div className="flex h-14 items-center border-b px-6 font-semibold text-lg tracking-tight">
                CivicLink
            </div>
            <ScrollArea className="flex-1 px-3 py-2">
                <nav className="flex flex-col gap-1">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen?.(false)}
                        >
                            <Button
                                variant={pathname === item.href ? "secondary" : "ghost"}
                                className="w-full justify-start gap-2"
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </ScrollArea>
            <div className="mt-auto p-4 border-t">
                <Link href="/login">
                    <Button variant="outline" className="w-full gap-2">
                        <LogOut className="h-4 w-4" />
                        Sign Out
                    </Button>
                </Link>
            </div>
        </div>
    )
}
