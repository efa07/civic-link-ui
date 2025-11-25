import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, UserCheck, ClipboardList } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-balance">CivicLink</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Smart Civil Service Platform for Modern Governance
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Streamline citizen services, track employee performance, and enhance transparency with our comprehensive
            platform designed for efficient civil service management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Portal</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Complete oversight with analytics, employee management, and performance tracking.
              </p>
              <Link href="/admin">
                <Button className="w-full">Access Admin Dashboard</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Employee Portal</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Manage tasks, track hours, and view performance metrics in real-time.
              </p>
              <Link href="/employee">
                <Button className="w-full">Access Employee Dashboard</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <ClipboardList className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Citizen Portal</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Request services, track applications, and provide feedback seamlessly.
              </p>
              <Link href="/citizen">
                <Button className="w-full">Access Citizen Dashboard</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
