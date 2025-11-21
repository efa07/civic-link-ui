import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  Users,
  Clock,
  AlertCircle,
  Timer,
  TrendingUp,
  Star,
  Activity,
  Trophy,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const activeRequests = [
  {
    id: "#REQ-1024",
    citizen: "አብነት ተፈራ (Abnet Tefera)",
    service: "ID Renewal",
    status: "processing",
    worker: "ጽጌረዳ ገበየሁ (Tsigereda Gebeyehu)",
    progress: 75,
  },
  {
    id: "#REQ-1023",
    citizen: "ሜሮን ጥላሁን (Mihret Tilahun)",
    service: "Birth Certificate",
    status: "review",
    worker: "ዳዊት ወልዴ (Dawit Wolde)",
    progress: 45,
  },
  {
    id: "#REQ-1022",
    citizen: "ዮናስ ከበደ (Yonas Kebede)",
    service: "Tax Payment",
    status: "submitted",
    worker: "አዜብ አስፋው (Azeb Asfaw)",
    progress: 20,
  },
  {
    id: "#REQ-1021",
    citizen: "ሰላማዊት ሞላ (Selamawit Molla)",
    service: "Business License",
    status: "processing",
    worker: "ታምራት በቀለ (Tamrat Bekele)",
    progress: 60,
  },
];

const recentRatings = [
  {
    worker: "ጽጌረዳ ገበየሁ (Tsigereda Gebeyehu)",
    service: "ID Renewal",
    rating: 5,
    feedback: "Excellent service, very professional",
  },
  {
    worker: "ዳዊት ወልዴ (Dawit Wolde)",
    service: "Document Verification",
    rating: 4,
    feedback: "Good but took longer than expected",
  },
  {
    worker: "አዜብ አስፋው (Azeb Asfaw)",
    service: "Tax Filing",
    rating: 5,
    feedback: "Fast and efficient",
  },
];

const clockedInEmployees = [
  {
    name: "ጽጌረዳ ገበየሁ (Tsigereda Gebeyehu)",
    role: "Document Officer",
    hours: "7h 45m",
    status: "active",
  },
  {
    name: "ዳዊት ወልዴ (Dawit Wolde)",
    role: "Verification Specialist",
    hours: "8h 12m",
    status: "active",
  },
  {
    name: "አዜብ አስፋው (Azeb Asfaw)",
    role: "Tax Officer",
    hours: "6h 30m",
    status: "active",
  },
  {
    name: "ታምራት በቀለ (Tamrat Bekele)",
    role: "License Officer",
    hours: "7h 20m",
    status: "break",
  },
];

const leaderboard = [
  {
    rank: 1,
    name: "ጽጌረዳ ገበየሁ (Tsigereda Gebeyehu)",
    points: 2450,
    tasks: 87,
    speed: "95%",
  },
  {
    rank: 2,
    name: "ዳዊት ወልዴ (Dawit Wolde)",
    points: 2280,
    tasks: 82,
    speed: "92%",
  },
  {
    rank: 3,
    name: "አዜብ አስፋው (Azeb Asfaw)",
    points: 2150,
    tasks: 79,
    speed: "90%",
  },
  {
    rank: 4,
    name: "ታምራት በቀለ (Tamrat Bekele)",
    points: 2020,
    tasks: 75,
    speed: "88%",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of all system activities and performance
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Requests"
          value="1,284"
          icon={ClipboardList}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <StatCard
          title="Active Workers"
          value="24"
          icon={Users}
          description="Currently clocked in"
        />
        <StatCard
          title="Avg Task Time"
          value="2.4h"
          icon={Timer}
          trend={{ value: "15% faster", isPositive: true }}
        />
        <StatCard
          title="Complaints"
          value="12"
          icon={AlertCircle}
          trend={{ value: "8 resolved", isPositive: true }}
        />
        <StatCard
          title="Extra Hours"
          value="156h"
          icon={Clock}
          description="This month"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Real-Time Working Hours Monitor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clockedInEmployees.map((employee) => (
                <div
                  key={employee.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {employee.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        employee.status === "active" ? "default" : "secondary"
                      }
                    >
                      {employee.status}
                    </Badge>
                    <p className="text-sm font-medium mt-1">{employee.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Employee Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.map((employee) => (
                <div key={employee.rank} className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full font-bold",
                      employee.rank === 1 &&
                        "bg-primary text-primary-foreground",
                      employee.rank === 2 &&
                        "bg-primary/70 text-primary-foreground",
                      employee.rank === 3 &&
                        "bg-primary/50 text-primary-foreground",
                      employee.rank > 3 && "bg-muted text-muted-foreground"
                    )}
                  >
                    {employee.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {employee.tasks} tasks • {employee.speed} speed
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{employee.points}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-primary" />
            Active Requests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>Citizen</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Assigned Worker</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activeRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>{request.citizen}</TableCell>
                  <TableCell>{request.service}</TableCell>
                  <TableCell>{request.worker}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        request.status === "processing"
                          ? "default"
                          : request.status === "review"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {request.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={request.progress} className="w-20" />
                      <span className="text-sm">{request.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="ghost">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Recent Citizen Ratings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRatings.map((rating, index) => (
              <div
                key={index}
                className="border-b border-border pb-4 last:border-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{rating.worker}</p>
                    <p className="text-sm text-muted-foreground">
                      {rating.service}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rating.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {rating.feedback}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            AI Assistant Activity Snapshot
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,847</p>
                <p className="text-sm text-muted-foreground">Queries Handled</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">1.2s</p>
                <p className="text-sm text-muted-foreground">
                  Avg Response Time
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">96%</p>
                <p className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
