import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  User,
  BookOpen,
  TrendingUp,
  Calendar,
  Heart,
  Star,
  Award,
  Clock,
  MessageSquare,
  Bell,
  AlertCircle,
  CheckCircle,
  Target,
  BarChart3,
  FileText,
  Users,
  Phone,
  Mail,
  Download,
  Eye,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dashboardRef.current) {
      gsap.fromTo(
        dashboardRef.current.querySelectorAll(".animate-card"),
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
  }, [activeTab]);

  // Sample student data
  const studentInfo = {
    name: "Emily Johnson",
    rollNumber: "2024001",
    class: "Grade 10",
    section: "A",
    photo: "/api/placeholder/150/150",
  };

  // Sample data for charts
  const gradesTrend = [
    { month: "Sep", math: 85, science: 78, english: 92, social: 76 },
    { month: "Oct", math: 88, science: 82, english: 90, social: 80 },
    { month: "Nov", math: 92, science: 85, english: 94, social: 78 },
    { month: "Dec", math: 89, science: 87, english: 88, social: 82 },
    { month: "Jan", math: 94, science: 90, english: 96, social: 85 },
  ];

  const attendanceData = [
    { month: "Sep", present: 20, absent: 2, late: 1 },
    { month: "Oct", present: 22, absent: 1, late: 0 },
    { month: "Nov", present: 21, absent: 1, late: 1 },
    { month: "Dec", present: 18, absent: 0, late: 0 },
    { month: "Jan", present: 19, absent: 1, late: 0 },
  ];

  const behaviorData = [
    { name: "Excellent", value: 70, color: "#10B981" },
    { name: "Good", value: 25, color: "#3B82F6" },
    { name: "Average", value: 5, color: "#F59E0B" },
    { name: "Needs Improvement", value: 0, color: "#EF4444" },
  ];

  const participationData = [
    { activity: "Class Discussion", score: 95, maxScore: 100 },
    { activity: "Group Projects", score: 88, maxScore: 100 },
    { activity: "Presentations", score: 92, maxScore: 100 },
    { activity: "Sports", score: 85, maxScore: 100 },
    { activity: "Arts & Crafts", score: 90, maxScore: 100 },
  ];

  const recentAssignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Algebra Quiz",
      dueDate: "2024-01-15",
      status: "submitted",
      grade: "A",
      submittedOn: "2024-01-14",
    },
    {
      id: 2,
      subject: "Science",
      title: "Solar System Project",
      dueDate: "2024-01-20",
      status: "pending",
      grade: null,
      submittedOn: null,
    },
    {
      id: 3,
      subject: "English",
      title: "Creative Writing",
      dueDate: "2024-01-12",
      status: "graded",
      grade: "A+",
      submittedOn: "2024-01-11",
    },
  ];

  const recentBehavior = [
    {
      id: 1,
      date: "2024-01-10",
      category: "Academic",
      description: "Excellent participation in math class",
      rating: "Excellent",
      teacher: "Ms. Smith",
    },
    {
      id: 2,
      date: "2024-01-08",
      category: "Social",
      description: "Helped classmate with homework",
      rating: "Good",
      teacher: "Mr. Johnson",
    },
    {
      id: 3,
      date: "2024-01-05",
      category: "Leadership",
      description: "Led group project effectively",
      rating: "Excellent",
      teacher: "Ms. Davis",
    },
  ];

  const quickStats = [
    {
      title: "Overall Grade",
      value: "A-",
      change: "+0.2",
      icon: TrendingUp,
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
      change: "1 pending",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Behavior Score",
      value: "95%",
      change: "+5%",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
    },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Student Info Card */}
      <GlassCard className="animate-card p-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{studentInfo.name}</h2>
            <p className="text-muted-foreground">
              Roll No: {studentInfo.rollNumber} • {studentInfo.class} - Section{" "}
              {studentInfo.section}
            </p>
          </div>
          <div className="flex space-x-3">
            <Link to="/parent-messages">
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message Teacher
              </Button>
            </Link>
            <Button className="btn-gradient">
              <Phone className="w-4 h-4 mr-2" />
              Contact School
            </Button>
          </div>
        </div>
      </GlassCard>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <GlassCard key={index} className="animate-card p-6 hover">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
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

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grades Trend */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Academic Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={gradesTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="math"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Mathematics"
              />
              <Line
                type="monotone"
                dataKey="science"
                stroke="#10B981"
                strokeWidth={2}
                name="Science"
              />
              <Line
                type="monotone"
                dataKey="english"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="English"
              />
              <Line
                type="monotone"
                dataKey="social"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Social Studies"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Attendance Overview */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Attendance Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="present" fill="#10B981" name="Present" />
              <Bar dataKey="absent" fill="#EF4444" name="Absent" />
              <Bar dataKey="late" fill="#F59E0B" name="Late" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Behavior and Participation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Behavior Distribution */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Behavior Assessment</h3>
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

        {/* Participation Scores */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Participation Scores</h3>
          <div className="space-y-6">
            {participationData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.activity}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.score}/{item.maxScore}
                  </span>
                </div>
                <Progress value={(item.score / item.maxScore) * 100} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Assignments */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Assignments</h3>
          <div className="space-y-4">
            {recentAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div>
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {assignment.subject} • Due: {assignment.dueDate}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  {assignment.grade && (
                    <Badge variant="default">{assignment.grade}</Badge>
                  )}
                  <Badge
                    variant={
                      assignment.status === "graded"
                        ? "default"
                        : assignment.status === "submitted"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {assignment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Behavior */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Behavior Notes</h3>
          <div className="space-y-4">
            {recentBehavior.map((behavior) => (
              <div
                key={behavior.id}
                className="p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{behavior.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {behavior.date}
                  </span>
                </div>
                <p className="text-sm mb-2">{behavior.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    By {behavior.teacher}
                  </span>
                  <Badge
                    variant={
                      behavior.rating === "Excellent" ? "default" : "secondary"
                    }
                  >
                    {behavior.rating}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );

  const renderAcademics = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Academic Performance</h2>
        <p className="text-muted-foreground">
          Detailed analysis of your child's academic progress and achievements.
        </p>
      </div>

      {/* Subject-wise Performance */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Subject-wise Performance</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={
              gradesTrend[gradesTrend.length - 1] &&
              Object.keys(gradesTrend[gradesTrend.length - 1])
                .filter((key) => key !== "month")
                .map((subject) => ({
                  subject: subject.charAt(0).toUpperCase() + subject.slice(1),
                  current: gradesTrend[gradesTrend.length - 1][subject],
                  previous: gradesTrend[gradesTrend.length - 2]?.[subject] || 0,
                }))
            }
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="current" fill="#8B5CF6" name="Current Month" />
            <Bar dataKey="previous" fill="#D1D5DB" name="Previous Month" />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Detailed Assignments */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Assignment Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3">Subject</th>
                <th className="text-left p-3">Assignment</th>
                <th className="text-left p-3">Due Date</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Grade</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentAssignments.map((assignment) => (
                <tr key={assignment.id} className="border-b border-white/5">
                  <td className="p-3">{assignment.subject}</td>
                  <td className="p-3">{assignment.title}</td>
                  <td className="p-3">{assignment.dueDate}</td>
                  <td className="p-3">
                    <Badge
                      variant={
                        assignment.status === "graded"
                          ? "default"
                          : assignment.status === "submitted"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {assignment.status}
                    </Badge>
                  </td>
                  <td className="p-3">
                    {assignment.grade ? (
                      <Badge variant="default">{assignment.grade}</Badge>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-3">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );

  const renderAttendance = () => {
    const monthlyAttendance = [
      {
        month: "Sep",
        present: 20,
        absent: 2,
        late: 1,
        total: 23,
        percentage: 87,
      },
      {
        month: "Oct",
        present: 22,
        absent: 1,
        late: 0,
        total: 23,
        percentage: 96,
      },
      {
        month: "Nov",
        present: 21,
        absent: 1,
        late: 1,
        total: 23,
        percentage: 91,
      },
      {
        month: "Dec",
        present: 18,
        absent: 0,
        late: 0,
        total: 18,
        percentage: 100,
      },
      {
        month: "Jan",
        present: 19,
        absent: 1,
        late: 0,
        total: 20,
        percentage: 95,
      },
    ];

    const attendanceAlerts = [
      {
        date: "2024-01-12",
        type: "Absent",
        reason: "Sick leave",
        verified: true,
      },
      {
        date: "2024-01-08",
        type: "Late",
        reason: "Traffic delay",
        verified: true,
      },
      {
        date: "2023-12-15",
        type: "Early leave",
        reason: "Doctor appointment",
        verified: true,
      },
    ];

    const weeklyPattern = [
      { day: "Monday", attendance: 95 },
      { day: "Tuesday", attendance: 98 },
      { day: "Wednesday", attendance: 92 },
      { day: "Thursday", attendance: 96 },
      { day: "Friday", attendance: 89 },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Attendance Tracking</h2>
          <p className="text-muted-foreground">
            Comprehensive attendance monitoring with detailed patterns and
            alerts.
          </p>
        </div>

        {/* Attendance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-3xl font-bold">95%</p>
              </div>
              <Calendar className="w-10 h-10 text-green-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Present</p>
                <p className="text-3xl font-bold">19</p>
              </div>
              <CheckCircle className="w-10 h-10 text-blue-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Absent</p>
                <p className="text-3xl font-bold">1</p>
              </div>
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Late Arrivals</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <Clock className="w-10 h-10 text-yellow-500" />
            </div>
          </GlassCard>
        </div>

        {/* Monthly Attendance Chart */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Monthly Attendance Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyAttendance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="percentage"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Pattern */}
          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">
              Weekly Attendance Pattern
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={weeklyPattern}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Bar dataKey="attendance" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Monthly Breakdown */}
          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">Monthly Breakdown</h3>
            <div className="space-y-4">
              {monthlyAttendance.slice(-3).map((month, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold">{month.month} 2024</h4>
                    <p className="text-sm text-muted-foreground">
                      {month.present} Present • {month.absent} Absent •{" "}
                      {month.late} Late
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">
                      {month.percentage}%
                    </p>
                    <Progress value={month.percentage} className="w-16 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Attendance Alerts */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Recent Attendance Alerts
          </h3>
          <div className="space-y-4">
            {attendanceAlerts.map((alert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    alert.type === "Absent"
                      ? "bg-red-500"
                      : alert.type === "Late"
                        ? "bg-yellow-500"
                        : "bg-orange-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{alert.type}</h4>
                    {alert.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.reason}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{alert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    );
  };

  const renderBehavior = () => {
    const behaviorTrends = [
      {
        week: "Week 1",
        excellent: 5,
        good: 2,
        average: 1,
        needs_improvement: 0,
      },
      {
        week: "Week 2",
        excellent: 6,
        good: 1,
        average: 1,
        needs_improvement: 0,
      },
      {
        week: "Week 3",
        excellent: 4,
        good: 3,
        average: 1,
        needs_improvement: 0,
      },
      {
        week: "Week 4",
        excellent: 7,
        good: 1,
        average: 0,
        needs_improvement: 0,
      },
    ];

    const behaviorCategories = [
      {
        category: "Academic Behavior",
        score: 95,
        description: "Participation, homework completion, focus",
      },
      {
        category: "Social Behavior",
        score: 92,
        description: "Peer interaction, cooperation, kindness",
      },
      {
        category: "Classroom Conduct",
        score: 88,
        description: "Following rules, respect, responsibility",
      },
      {
        category: "Leadership",
        score: 90,
        description: "Initiative, helping others, problem-solving",
      },
    ];

    const teacherFeedback = [
      {
        teacher: "Ms. Smith",
        subject: "Mathematics",
        date: "2024-01-15",
        feedback:
          "Emily showed excellent problem-solving skills during group work. She helped her teammates understand complex concepts.",
        rating: "Excellent",
      },
      {
        teacher: "Mr. Johnson",
        subject: "Science",
        date: "2024-01-12",
        feedback:
          "Consistently demonstrates curiosity and asks thoughtful questions. Great lab partner.",
        rating: "Excellent",
      },
      {
        teacher: "Ms. Davis",
        subject: "English",
        date: "2024-01-10",
        feedback:
          "Active participant in class discussions. Shows respect for different viewpoints.",
        rating: "Good",
      },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Behavior Monitoring</h2>
          <p className="text-muted-foreground">
            Track your child's social behavior, classroom conduct, and character
            development.
          </p>
        </div>

        {/* Behavior Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Score</p>
                <p className="text-3xl font-bold">91%</p>
              </div>
              <Heart className="w-10 h-10 text-pink-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Positive Notes</p>
                <p className="text-3xl font-bold">22</p>
              </div>
              <Star className="w-10 h-10 text-yellow-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Improvements</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Recognition</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <Award className="w-10 h-10 text-purple-500" />
            </div>
          </GlassCard>
        </div>

        {/* Behavior Trends */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Weekly Behavior Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={behaviorTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="excellent" fill="#10B981" name="Excellent" />
              <Bar dataKey="good" fill="#3B82F6" name="Good" />
              <Bar dataKey="average" fill="#F59E0B" name="Average" />
              <Bar
                dataKey="needs_improvement"
                fill="#EF4444"
                name="Needs Improvement"
              />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Behavior Categories */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Behavior Assessment by Category
          </h3>
          <div className="space-y-6">
            {behaviorCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">{category.category}</h4>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      {category.score}%
                    </span>
                  </div>
                </div>
                <Progress value={category.score} className="h-2" />
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Teacher Feedback */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Recent Teacher Feedback
          </h3>
          <div className="space-y-4">
            {teacherFeedback.map((feedback, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">{feedback.teacher}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feedback.subject}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={
                        feedback.rating === "Excellent"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {feedback.rating}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      {feedback.date}
                    </p>
                  </div>
                </div>
                <p className="text-sm">{feedback.feedback}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    );
  };

  const renderParticipation = () => {
    const participationTrends = [
      {
        month: "Sep",
        discussions: 85,
        projects: 90,
        presentations: 75,
        sports: 95,
        arts: 80,
      },
      {
        month: "Oct",
        discussions: 88,
        projects: 85,
        presentations: 82,
        sports: 92,
        arts: 85,
      },
      {
        month: "Nov",
        discussions: 92,
        projects: 95,
        presentations: 88,
        sports: 89,
        arts: 90,
      },
      {
        month: "Dec",
        discussions: 89,
        projects: 92,
        presentations: 85,
        sports: 94,
        arts: 88,
      },
      {
        month: "Jan",
        discussions: 95,
        projects: 88,
        presentations: 92,
        sports: 96,
        arts: 93,
      },
    ];

    const extracurricularActivities = [
      {
        activity: "School Choir",
        role: "Member",
        performance: "Excellent",
        attendance: "98%",
      },
      {
        activity: "Math Club",
        role: "Treasurer",
        performance: "Outstanding",
        attendance: "95%",
      },
      {
        activity: "Basketball Team",
        role: "Player",
        performance: "Good",
        attendance: "92%",
      },
      {
        activity: "Drama Club",
        role: "Stage Manager",
        performance: "Excellent",
        attendance: "100%",
      },
    ];

    const upcomingEvents = [
      {
        event: "Science Fair",
        date: "2024-01-25",
        role: "Participant",
        preparation: "On track",
      },
      {
        event: "Math Competition",
        date: "2024-02-10",
        role: "Team Member",
        preparation: "Prepared",
      },
      {
        event: "School Play",
        date: "2024-02-15",
        role: "Stage Manager",
        preparation: "Rehearsing",
      },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Participation & Activities
          </h2>
          <p className="text-muted-foreground">
            Monitor your child's engagement in academics and extracurricular
            activities.
          </p>
        </div>

        {/* Participation Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <GlassCard className="animate-card p-6 text-center">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Class Discussions</p>
            <p className="text-2xl font-bold">95%</p>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Group Projects</p>
            <p className="text-2xl font-bold">88%</p>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center">
            <FileText className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Presentations</p>
            <p className="text-2xl font-bold">92%</p>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Sports</p>
            <p className="text-2xl font-bold">96%</p>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Arts</p>
            <p className="text-2xl font-bold">93%</p>
          </GlassCard>
        </div>

        {/* Participation Trends */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Monthly Participation Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={participationTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="discussions"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Discussions"
              />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#10B981"
                strokeWidth={2}
                name="Projects"
              />
              <Line
                type="monotone"
                dataKey="presentations"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Presentations"
              />
              <Line
                type="monotone"
                dataKey="sports"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Sports"
              />
              <Line
                type="monotone"
                dataKey="arts"
                stroke="#EF4444"
                strokeWidth={2}
                name="Arts"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Extracurricular Activities */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Extracurricular Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {extracurricularActivities.map((activity, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold">{activity.activity}</h4>
                  <Badge variant="outline">{activity.role}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Performance:
                    </span>
                    <Badge
                      variant={
                        activity.performance === "Outstanding" ||
                        activity.performance === "Excellent"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {activity.performance}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Attendance:
                    </span>
                    <span className="text-sm font-medium">
                      {activity.attendance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Upcoming Events */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Upcoming Events & Competitions
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{event.event}</h4>
                  <p className="text-sm text-muted-foreground">
                    Role: {event.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{event.date}</p>
                  <Badge variant="outline" className="mt-1">
                    {event.preparation}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    );
  };

  const renderCommunication = () => {
    const recentMessages = [
      {
        from: "Ms. Smith",
        subject: "Math Progress Update",
        time: "2 hours ago",
        preview:
          "Emily is excelling in algebra and showing great improvement...",
        unread: true,
        priority: "normal",
      },
      {
        from: "Principal Johnson",
        subject: "Parent-Teacher Conference",
        time: "1 day ago",
        preview: "Reminder about upcoming parent-teacher conferences...",
        unread: false,
        priority: "high",
      },
      {
        from: "Mr. Davis",
        subject: "Science Project Feedback",
        time: "3 days ago",
        preview:
          "Great work on the solar system project. Emily demonstrated...",
        unread: false,
        priority: "normal",
      },
    ];

    const announcements = [
      {
        title: "Winter Break Schedule",
        date: "2024-01-10",
        type: "Important",
        content: "School will be closed from December 23rd to January 7th.",
      },
      {
        title: "Science Fair Registration",
        date: "2024-01-08",
        type: "Event",
        content: "Register for the annual science fair by January 20th.",
      },
      {
        title: "New Lunch Menu",
        date: "2024-01-05",
        type: "General",
        content: "Updated cafeteria menu featuring healthier options.",
      },
    ];

    const upcomingMeetings = [
      {
        title: "Parent-Teacher Conference",
        date: "2024-01-25",
        time: "3:00 PM",
        teacher: "Ms. Smith",
        subject: "Mathematics",
        type: "Scheduled",
      },
      {
        title: "Academic Review Meeting",
        date: "2024-02-05",
        time: "4:00 PM",
        teacher: "Mr. Johnson",
        subject: "General",
        type: "Requested",
      },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Communication Hub</h2>
          <p className="text-muted-foreground">
            Stay connected with teachers and school through messages,
            announcements, and meetings.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
            <Link to="/parent-messages">
              <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="font-semibold">Messages</p>
              <p className="text-sm text-muted-foreground">3 unread</p>
            </Link>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
            <Bell className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="font-semibold">Announcements</p>
            <p className="text-sm text-muted-foreground">2 new</p>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
            <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="font-semibold">Meetings</p>
            <p className="text-sm text-muted-foreground">1 upcoming</p>
          </GlassCard>
          <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
            <Phone className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="font-semibold">Contact School</p>
            <p className="text-sm text-muted-foreground">Direct line</p>
          </GlassCard>
        </div>

        {/* Recent Messages */}
        <GlassCard className="animate-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Recent Messages</h3>
            <Link to="/parent-messages">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentMessages.map((message, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{message.from}</h4>
                    {message.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    )}
                    {message.priority === "high" && (
                      <Badge variant="destructive" className="text-xs">
                        High Priority
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm font-medium truncate">
                    {message.subject}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {message.preview}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {message.time}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* School Announcements and Meetings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Announcements */}
          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">School Announcements</h3>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{announcement.title}</h4>
                    <Badge
                      variant={
                        announcement.type === "Important"
                          ? "destructive"
                          : announcement.type === "Event"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {announcement.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {announcement.content}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {announcement.date}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Upcoming Meetings */}
          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">Upcoming Meetings</h3>
            <div className="space-y-4">
              {upcomingMeetings.map((meeting, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold">{meeting.title}</h4>
                    <Badge
                      variant={
                        meeting.type === "Scheduled" ? "default" : "secondary"
                      }
                    >
                      {meeting.type}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Teacher: {meeting.teacher}</p>
                    <p>Subject: {meeting.subject}</p>
                    <p>
                      Date: {meeting.date} at {meeting.time}
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="outline">
                      Join Call
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Schedule New Meeting
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Section with Family Image */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Parent and child studying together"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Parent <span className="text-gradient">Dashboard</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Monitor your child's academic progress, behavior, and overall
                  development with comprehensive insights and real-time updates.
                </p>
              </div>
            </div>

            {/* Interactive family/education elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1569197388947-d59e0a82b3d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                alt="Family learning"
                className="w-16 h-16 rounded-xl object-cover"
              />
            </div>

            <div
              className="absolute bottom-8 right-24 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer"
              style={{ animationDelay: "-1.5s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                alt="Educational support"
                className="w-12 h-12 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div ref={dashboardRef}>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full max-w-4xl mx-auto glass">
                <TabsTrigger
                  value="overview"
                  className="flex items-center space-x-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
                <TabsTrigger
                  value="academics"
                  className="flex items-center space-x-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden sm:inline">Academics</span>
                </TabsTrigger>
                <TabsTrigger
                  value="attendance"
                  className="flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span className="hidden sm:inline">Attendance</span>
                </TabsTrigger>
                <TabsTrigger
                  value="behavior"
                  className="flex items-center space-x-2"
                >
                  <Heart className="w-4 h-4" />
                  <span className="hidden sm:inline">Behavior</span>
                </TabsTrigger>
                <TabsTrigger
                  value="participation"
                  className="flex items-center space-x-2"
                >
                  <Target className="w-4 h-4" />
                  <span className="hidden sm:inline">Activity</span>
                </TabsTrigger>
                <TabsTrigger
                  value="communication"
                  className="flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Messages</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-8">
                <TabsContent value="overview">{renderOverview()}</TabsContent>
                <TabsContent value="academics">{renderAcademics()}</TabsContent>
                <TabsContent value="attendance">
                  {renderAttendance()}
                </TabsContent>
                <TabsContent value="behavior">{renderBehavior()}</TabsContent>
                <TabsContent value="participation">
                  {renderParticipation()}
                </TabsContent>
                <TabsContent value="communication">
                  {renderCommunication()}
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
