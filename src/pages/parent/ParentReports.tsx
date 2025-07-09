import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Download,
  Calendar,
  TrendingUp,
  Award,
  Clock,
  BookOpen,
  User,
  FileText,
  Eye,
  Filter,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ParentReports() {
  const [selectedPeriod, setSelectedPeriod] = useState("current-term");
  const reportsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reportsRef.current) {
      gsap.fromTo(
        reportsRef.current.querySelectorAll(".animate-card"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
    }
  }, []);

  const academicProgress = [
    { subject: "Mathematics", q1: 85, q2: 88, q3: 92, q4: 89 },
    { subject: "Science", q1: 78, q2: 82, q3: 85, q4: 87 },
    { subject: "English", q1: 92, q2: 90, q3: 94, q4: 96 },
    { subject: "History", q1: 76, q2: 80, q3: 78, q4: 82 },
    { subject: "Geography", q1: 82, q2: 85, q3: 88, q4: 85 },
  ];

  const attendanceData = [
    { month: "Sep", present: 20, absent: 2 },
    { month: "Oct", present: 22, absent: 1 },
    { month: "Nov", present: 21, absent: 1 },
    { month: "Dec", present: 18, absent: 0 },
    { month: "Jan", present: 19, absent: 1 },
  ];

  const behaviorData = [
    { name: "Excellent", value: 70, color: "#10B981" },
    { name: "Good", value: 25, color: "#3B82F6" },
    { name: "Average", value: 5, color: "#F59E0B" },
    { name: "Needs Improvement", value: 0, color: "#EF4444" },
  ];

  const recentReports = [
    {
      id: 1,
      title: "Quarter 2 Progress Report",
      date: "2024-01-15",
      type: "Academic",
      status: "Available",
      teacher: "Multiple Teachers",
    },
    {
      id: 2,
      title: "Attendance Summary",
      date: "2024-01-10",
      type: "Attendance",
      status: "Available",
      teacher: "School System",
    },
    {
      id: 3,
      title: "Behavior Assessment",
      date: "2024-01-05",
      type: "Behavior",
      status: "Available",
      teacher: "Ms. Johnson",
    },
    {
      id: 4,
      title: "Extracurricular Report",
      date: "2023-12-20",
      type: "Activities",
      status: "Available",
      teacher: "Activity Coordinator",
    },
  ];

  const quickStats = [
    {
      title: "Overall Grade",
      value: "A-",
      change: "+0.2",
      icon: Award,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Attendance",
      value: "96%",
      change: "+2%",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Assignments",
      value: "24/25",
      change: "96%",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Behavior Score",
      value: "95%",
      change: "+5%",
      icon: TrendingUp,
      color: "from-pink-500 to-pink-600",
    },
  ];

  const subjectDetails = [
    {
      subject: "Mathematics",
      teacher: "Ms. Smith",
      grade: "A-",
      assignments: "12/12",
      tests: "3/3",
      participation: "95%",
    },
    {
      subject: "Science",
      teacher: "Mr. Davis",
      grade: "B+",
      assignments: "10/11",
      tests: "2/3",
      participation: "88%",
    },
    {
      subject: "English",
      teacher: "Ms. Johnson",
      grade: "A",
      assignments: "8/8",
      tests: "3/3",
      participation: "98%",
    },
    {
      subject: "History",
      teacher: "Mr. Wilson",
      grade: "B",
      assignments: "9/10",
      tests: "2/2",
      participation: "85%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Academic reports and analytics"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Academic <span className="text-gradient">Reports</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Comprehensive reports and analytics tracking your child's
                  academic progress and development.
                </p>
              </div>
            </div>
          </div>

          <div ref={reportsRef}>
            {/* Controls */}
            <GlassCard className="animate-card p-6 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold">Progress Reports</h2>
                  <p className="text-muted-foreground">
                    Track Emily's academic journey with detailed insights
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <select
                    className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                  >
                    <option value="current-term">Current Term</option>
                    <option value="previous-term">Previous Term</option>
                    <option value="year-to-date">Year to Date</option>
                    <option value="all-time">All Time</option>
                  </select>
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                  <Button className="btn-gradient">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {quickStats.map((stat, index) => (
                <GlassCard key={index} className="animate-card p-6 hover">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-sm text-success">{stat.change}</p>
                    </div>
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color}`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Academic Progress Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Subject Performance */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Subject Performance Trends
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={academicProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[70, 100]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="q1"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      name="Q1"
                    />
                    <Line
                      type="monotone"
                      dataKey="q2"
                      stroke="#10B981"
                      strokeWidth={2}
                      name="Q2"
                    />
                    <Line
                      type="monotone"
                      dataKey="q3"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      name="Q3"
                    />
                    <Line
                      type="monotone"
                      dataKey="q4"
                      stroke="#F59E0B"
                      strokeWidth={2}
                      name="Q4"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </GlassCard>

              {/* Attendance Overview */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Monthly Attendance
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="present" fill="#10B981" name="Present" />
                    <Bar dataKey="absent" fill="#EF4444" name="Absent" />
                  </BarChart>
                </ResponsiveContainer>
              </GlassCard>
            </div>

            {/* Behavior and Detailed Reports */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Behavior Distribution */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Behavior Assessment
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={behaviorData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {behaviorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </GlassCard>

              {/* Subject Details */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">Subject Details</h3>
                <div className="space-y-4">
                  {subjectDetails.map((subject, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{subject.subject}</h4>
                          <p className="text-sm text-muted-foreground">
                            {subject.teacher}
                          </p>
                        </div>
                        <Badge
                          variant={
                            subject.grade.startsWith("A")
                              ? "default"
                              : "secondary"
                          }
                        >
                          {subject.grade}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Assignments</p>
                          <p className="font-medium">{subject.assignments}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Tests</p>
                          <p className="font-medium">{subject.tests}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Participation</p>
                          <p className="font-medium">{subject.participation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Available Reports */}
            <GlassCard className="animate-card p-6">
              <h3 className="text-xl font-semibold mb-6">Available Reports</h3>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{report.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {report.teacher} • {report.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge variant="default">{report.status}</Badge>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <GlassCard className="animate-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">
                  Strongest Subject
                </h4>
                <p className="text-2xl font-bold">English</p>
                <p className="text-muted-foreground">96% Average</p>
              </GlassCard>

              <GlassCard className="animate-card p-6 text-center">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Most Improved</h4>
                <p className="text-2xl font-bold">Science</p>
                <p className="text-muted-foreground">+9 points</p>
              </GlassCard>

              <GlassCard className="animate-card p-6 text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Recognition</h4>
                <p className="text-2xl font-bold">5 Awards</p>
                <p className="text-muted-foreground">This Term</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
