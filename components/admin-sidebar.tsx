"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Clock,
  Trophy,
  DollarSign,
  Star,
  BarChart3,
  Bot,
  List,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react"
import { useState } from "react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: ClipboardList, label: "Citizen Requests", href: "/admin/requests" },
  { icon: List, label: "Service Tracking", href: "/admin/tracking" },
  { icon: Users, label: "Employee Management", href: "/admin/employees" },
  { icon: Clock, label: "Working Hours", href: "/admin/hours" },
  { icon: Trophy, label: "Performance & Points", href: "/admin/performance" },
  { icon: DollarSign, label: "Extra Hours Rewards", href: "/admin/rewards" },
  { icon: Star, label: "Ratings & Feedback", href: "/admin/ratings" },
  { icon: BarChart3, label: "Reports & Analytics", href: "/admin/analytics" },
  { icon: Bot, label: "AI Assistant", href: "/admin/ai" },
  { icon: List, label: "Queue Management", href: "/admin/queue" },
  { icon: Settings, label: "Settings & Security", href: "/admin/settings" },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-border bg-card transition-all duration-300",
          collapsed ? "w-16" : "w-64",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            {!collapsed && <h2 className="text-lg font-bold text-primary">CivicLink</h2>}
            <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="ml-auto">
              {collapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </Button>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto p-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn("w-full justify-start", collapsed ? "px-2" : "px-4")}
                  >
                    <Icon className={cn("h-5 w-5", !collapsed && "mr-3")} />
                    {!collapsed && <span>{item.label}</span>}
                  </Button>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      <div className={cn("transition-all duration-300", collapsed ? "ml-16" : "ml-64")} />
    </>
  )
}
