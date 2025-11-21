import { Card } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  description?: string
  trend?: {
    value: string
    isPositive: boolean
  }
}

export function StatCard({ title, value, icon: Icon, description, trend }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          {trend && (
            <p className={`text-sm mt-2 ${trend.isPositive ? "text-primary" : "text-destructive"}`}>
              {trend.isPositive ? "↑" : "↓"} {trend.value}
            </p>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  )
}
