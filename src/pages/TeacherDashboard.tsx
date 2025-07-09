import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "recharts";
import {
  Upload,
  FileText,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  BookOpen,
  Calendar,
  BarChart3,
  User,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  MessageSquare,
  Heart,
  Target,
  Bell,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
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

  // Sample data for charts
  const assignmentStats = [
    { month: "Jan", submitted: 85, pending: 15, graded: 80 },
    { month: "Feb", submitted: 92, pending: 8, graded: 90 },
    { month: "Mar", submitted: 78, pending: 22, graded: 75 },
    { month: "Apr", submitted: 95, pending: 5, graded: 92 },
    { month: "May", submitted: 88, pending: 12, graded: 85 },
    { month: "Jun", submitted: 94, pending: 6, graded: 90 },
  ];

  const studentPerformance = [
    { subject: "Mathematics", average: 85, improvement: 5 },
    { subject: "Science", average: 78, improvement: -2 },
    { subject: "English", average: 92, improvement: 8 },
    { subject: "History", average: 76, improvement: 3 },
    { subject: "Geography", average: 82, improvement: 6 },
  ];

  const behaviorData = [
    { name: "Excellent", value: 45, color: "#10B981" },
    { name: "Good", value: 35, color: "#3B82F6" },
    { name: "Average", value: 15, color: "#F59E0B" },
    { name: "Needs Improvement", value: 5, color: "#EF4444" },
  ];

  const attendanceData = [
    { week: "Week 1", attendance: 95 },
    { week: "Week 2", attendance: 87 },
    { week: "Week 3", attendance: 92 },
    { week: "Week 4", attendance: 89 },
    { week: "Week 5", attendance: 94 },
    { week: "Week 6", attendance: 91 },
  ];

  const recentAssignments = [
    {
      id: 1,
      title: "Mathematics Quiz - Chapter 5",
      subject: "Mathematics",
      dueDate: "2024-01-15",
      submitted: 28,
      total: 30,
      status: "active",
    },
    {
      id: 2,
      title: "Science Project - Solar System",
      subject: "Science",
      dueDate: "2024-01-20",
      submitted: 25,
      total: 30,
      status: "active",
    },
    {
      id: 3,
      title: "English Essay - My Hero",
      subject: "English",
      dueDate: "2024-01-12",
      submitted: 30,
      total: 30,
      status: "completed",
    },
  ];

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      rollNo: "2024001",
      class: "10A",
      attendance: 95,
      avgGrade: "A",
      behavior: "Excellent",
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      name: "Bob Smith",
      rollNo: "2024002",
      class: "10A",
      attendance: 88,
      avgGrade: "B+",
      behavior: "Good",
      lastActivity: "1 day ago",
    },
    {
      id: 3,
      name: "Carol Williams",
      rollNo: "2024003",
      class: "10A",
      attendance: 92,
      avgGrade: "A-",
      behavior: "Excellent",
      lastActivity: "3 hours ago",
    },
  ];

  const quickStats = [
    {
      title: "Total Students",
      value: "156",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Assignments Pending",
      value: "24",
      change: "-8%",
      icon: FileText,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Average Grade",
      value: "B+",
      change: "+5%",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Class Attendance",
      value: "94%",
      change: "+2%",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Assignment Statistics */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Assignment Statistics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={assignmentStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="submitted" fill="#10B981" name="Submitted" />
              <Bar dataKey="pending" fill="#F59E0B" name="Pending" />
              <Bar dataKey="graded" fill="#3B82F6" name="Graded" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Student Performance */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Subject Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={studentPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="average"
                stroke="#8B5CF6"
                strokeWidth={3}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Behavior Distribution */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Behavior Distribution</h3>
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

        {/* Attendance Trend */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Weekly Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="attendance"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Messages Summary */}
      <GlassCard className="animate-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Recent Messages</h3>
          <Link to="/messages">
            <Button variant="outline" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              View All
            </Button>
          </Link>
        </div>
        <div className="space-y-3">
          {[
            {
              from: "Sarah Williams",
              subject: "Emily's Math Progress",
              time: "2 hours ago",
              unread: true,
            },
            {
              from: "Michael Chen",
              subject: "David's Science Project",
              time: "5 hours ago",
              unread: false,
            },
            {
              from: "Lisa Rodriguez",
              subject: "Conference Request",
              time: "1 day ago",
              unread: true,
            },
          ].map((message, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{message.from}</p>
                  {message.unread && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {message.subject}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {message.time}
              </span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Recent Activities */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Recent Assignments</h3>
        <div className="space-y-4">
          {recentAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {assignment.subject} • Due: {assignment.dueDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {assignment.submitted}/{assignment.total} submitted
                  </p>
                  <Progress
                    value={(assignment.submitted / assignment.total) * 100}
                    className="w-20"
                  />
                </div>
                <Badge
                  variant={
                    assignment.status === "completed" ? "default" : "secondary"
                  }
                >
                  {assignment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold">Assignment Management</h2>
          <p className="text-muted-foreground">
            Create, manage, and grade assignments
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search assignments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <Button className="btn-gradient">
            <Plus className="w-4 h-4 mr-2" />
            New Assignment
          </Button>
        </div>
      </div>

      {/* Assignment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentAssignments.map((assignment) => (
          <GlassCard key={assignment.id} className="animate-card p-6 hover">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <Badge
                variant={
                  assignment.status === "completed" ? "default" : "secondary"
                }
              >
                {assignment.status}
              </Badge>
            </div>
            <h3 className="font-semibold mb-2">{assignment.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {assignment.subject}
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Submissions:</span>
                <span className="font-medium">
                  {assignment.submitted}/{assignment.total}
                </span>
              </div>
              <Progress
                value={(assignment.submitted / assignment.total) * 100}
              />
              <div className="flex justify-between text-sm">
                <span>Due Date:</span>
                <span className="font-medium">{assignment.dueDate}</span>
              </div>
              <div className="flex space-x-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}

        {/* Create New Assignment Card */}
        <GlassCard className="animate-card p-6 hover border-dashed border-2 border-primary/30 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Create New Assignment</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Add a new assignment for your students
            </p>
            <Button className="btn-gradient">Get Started</Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h2 className="text-2xl font-bold">Student Management</h2>
          <p className="text-muted-foreground">
            Monitor student progress and behavior
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search students..." className="pl-10 w-64" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <GlassCard key={student.id} className="animate-card p-6 hover">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold">{student.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {student.rollNo} • {student.class}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Attendance:
                </span>
                <div className="flex items-center space-x-2">
                  <Progress value={student.attendance} className="w-16" />
                  <span className="text-sm font-medium">
                    {student.attendance}%
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Grade:</span>
                <Badge variant="outline">{student.avgGrade}</Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Behavior:</span>
                <Badge
                  variant={
                    student.behavior === "Excellent" ? "default" : "secondary"
                  }
                >
                  {student.behavior}
                </Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Last Active:
                </span>
                <span className="text-sm">{student.lastActivity}</span>
              </div>
            </div>

            <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
              <Button size="sm" variant="outline" className="flex-1">
                <Eye className="w-4 h-4 mr-1" />
                Profile
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <MessageSquare className="w-4 h-4 mr-1" />
                Message
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );

  const renderResults = () => {
    const resultData = [
      {
        exam: "Mid-term Math",
        average: 85,
        highest: 98,
        lowest: 62,
        submissions: 28,
      },
      {
        exam: "Science Quiz",
        average: 78,
        highest: 95,
        lowest: 55,
        submissions: 30,
      },
      {
        exam: "English Essay",
        average: 92,
        highest: 100,
        lowest: 78,
        submissions: 29,
      },
      {
        exam: "History Test",
        average: 76,
        highest: 91,
        lowest: 48,
        submissions: 27,
      },
    ];

    const gradeDistribution = [
      { grade: "A+", count: 8, percentage: 27 },
      { grade: "A", count: 6, percentage: 20 },
      { grade: "B+", count: 7, percentage: 23 },
      { grade: "B", count: 5, percentage: 17 },
      { grade: "C+", count: 3, percentage: 10 },
      { grade: "C", count: 1, percentage: 3 },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Results Management</h2>
            <p className="text-muted-foreground">
              Upload, analyze, and manage student exam results
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Upload Results
            </Button>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              New Exam
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Exams</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Class Average</p>
                <p className="text-3xl font-bold">83.2%</p>
              </div>
              <Star className="w-10 h-10 text-yellow-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Grades</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <Clock className="w-10 h-10 text-orange-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Performers</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <Award className="w-10 h-10 text-green-500" />
            </div>
          </GlassCard>
        </div>

        {/* Results Table */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Exam Results</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3">Exam</th>
                  <th className="text-left p-3">Average</th>
                  <th className="text-left p-3">Highest</th>
                  <th className="text-left p-3">Lowest</th>
                  <th className="text-left p-3">Submissions</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {resultData.map((result, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="p-3 font-medium">{result.exam}</td>
                    <td className="p-3">{result.average}%</td>
                    <td className="p-3 text-green-500">{result.highest}%</td>
                    <td className="p-3 text-red-500">{result.lowest}%</td>
                    <td className="p-3">{result.submissions}/30</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Grade Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">Grade Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gradeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">Performance Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={resultData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="exam" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#10B981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>
    );
  };

  const renderBehavior = () => {
    const behaviorRecords = [
      {
        student: "Alice Johnson",
        date: "2024-01-15",
        type: "Positive",
        note: "Excellent participation in group project",
        severity: "high",
      },
      {
        student: "Bob Smith",
        date: "2024-01-14",
        type: "Neutral",
        note: "Late submission of homework",
        severity: "medium",
      },
      {
        student: "Carol Williams",
        date: "2024-01-13",
        type: "Positive",
        note: "Helped classmate with difficult concept",
        severity: "high",
      },
      {
        student: "David Brown",
        date: "2024-01-12",
        type: "Negative",
        note: "Disruptive during lecture",
        severity: "low",
      },
    ];

    const behaviorStats = [
      { type: "Positive", count: 45, color: "#10B981" },
      { type: "Neutral", count: 12, color: "#F59E0B" },
      { type: "Negative", count: 8, color: "#EF4444" },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Behavior Tracking</h2>
            <p className="text-muted-foreground">
              Monitor and record student behavior patterns
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Add Record
            </Button>
          </div>
        </div>

        {/* Behavior Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {behaviorStats.map((stat, index) => (
            <GlassCard key={index} className="animate-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {stat.type} Records
                  </p>
                  <p className="text-3xl font-bold">{stat.count}</p>
                </div>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: stat.color + "20" }}
                >
                  <Heart className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Behavior Chart */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Behavior Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={behaviorStats}
                dataKey="count"
                nameKey="type"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ type, count }) => `${type}: ${count}`}
              >
                {behaviorStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Recent Records */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Recent Behavior Records
          </h3>
          <div className="space-y-4">
            {behaviorRecords.map((record, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    record.type === "Positive"
                      ? "bg-green-500"
                      : record.type === "Negative"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{record.student}</h4>
                    <Badge
                      variant={
                        record.type === "Positive"
                          ? "default"
                          : record.type === "Negative"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {record.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {record.note}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{record.date}</p>
                  <div className="flex space-x-1 mt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    );
  };

  const renderParticipation = () => {
    const participationData = [
      {
        activity: "Class Discussion",
        week1: 85,
        week2: 92,
        week3: 78,
        week4: 88,
      },
      {
        activity: "Group Projects",
        week1: 90,
        week2: 85,
        week3: 95,
        week4: 92,
      },
      { activity: "Presentations", week1: 75, week2: 82, week3: 88, week4: 85 },
      { activity: "Lab Work", week1: 95, week2: 90, week3: 93, week4: 96 },
    ];

    const topParticipants = [
      { name: "Alice Johnson", score: 96, activities: 15 },
      { name: "Carol Williams", score: 94, activities: 14 },
      { name: "Emily Davis", score: 91, activities: 13 },
      { name: "Michael Chen", score: 89, activities: 12 },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Participation Tracking</h2>
            <p className="text-muted-foreground">
              Monitor student engagement and participation levels
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Record Activity
            </Button>
          </div>
        </div>

        {/* Participation Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Activities
                </p>
                <p className="text-3xl font-bold">48</p>
              </div>
              <Target className="w-10 h-10 text-primary" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Avg Participation
                </p>
                <p className="text-3xl font-bold">87%</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Students</p>
                <p className="text-3xl font-bold">28</p>
              </div>
              <Users className="w-10 h-10 text-blue-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <Calendar className="w-10 h-10 text-purple-500" />
            </div>
          </GlassCard>
        </div>

        {/* Participation Trends */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Weekly Participation Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={participationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="activity" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="week1"
                stroke="#8B5CF6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="week2"
                stroke="#10B981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="week3"
                stroke="#F59E0B"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="week4"
                stroke="#EF4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Top Participants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">Top Participants</h3>
            <div className="space-y-4">
              {topParticipants.map((participant, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{participant.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {participant.activities} activities
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">
                      {participant.score}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="animate-card p-6">
            <h3 className="text-xl font-semibold mb-6">Activity Categories</h3>
            <div className="space-y-4">
              {[
                { name: "Class Discussions", count: 15, color: "bg-blue-500" },
                { name: "Group Projects", count: 12, color: "bg-green-500" },
                { name: "Presentations", count: 8, color: "bg-purple-500" },
                { name: "Lab Activities", count: 13, color: "bg-yellow-500" },
              ].map((category, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${category.color}`} />
                  <div className="flex-1">
                    <p className="font-medium">{category.name}</p>
                  </div>
                  <Badge variant="outline">{category.count}</Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    );
  };

  const renderAwards = () => {
    const awardTemplates = [
      {
        id: 1,
        name: "Academic Excellence",
        category: "Academic",
        icon: "🏆",
        color: "from-yellow-500 to-yellow-600",
      },
      {
        id: 2,
        name: "Perfect Attendance",
        category: "Attendance",
        icon: "📅",
        color: "from-green-500 to-green-600",
      },
      {
        id: 3,
        name: "Leadership",
        category: "Behavior",
        icon: "⭐",
        color: "from-blue-500 to-blue-600",
      },
      {
        id: 4,
        name: "Most Improved",
        category: "Progress",
        icon: "📈",
        color: "from-purple-500 to-purple-600",
      },
    ];

    const recentAwards = [
      {
        student: "Alice Johnson",
        award: "Academic Excellence",
        date: "2024-01-15",
        verified: true,
      },
      {
        student: "Bob Smith",
        award: "Perfect Attendance",
        date: "2024-01-14",
        verified: true,
      },
      {
        student: "Carol Williams",
        award: "Leadership",
        date: "2024-01-13",
        verified: false,
      },
      {
        student: "David Brown",
        award: "Most Improved",
        date: "2024-01-12",
        verified: true,
      },
    ];

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Awards Management</h2>
            <p className="text-muted-foreground">
              Create and manage student awards and recognitions
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Certificates
            </Button>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Create Award
            </Button>
          </div>
        </div>

        {/* Award Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Awards</p>
                <p className="text-3xl font-bold">42</p>
              </div>
              <Award className="w-10 h-10 text-yellow-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verified</p>
                <p className="text-3xl font-bold">38</p>
              </div>
              <CheckCircle className="w-10 h-10 text-blue-500" />
            </div>
          </GlassCard>
          <GlassCard className="animate-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Categories</p>
                <p className="text-3xl font-bold">4</p>
              </div>
              <Star className="w-10 h-10 text-purple-500" />
            </div>
          </GlassCard>
        </div>

        {/* Award Templates */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Award Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardTemplates.map((template) => (
              <div
                key={template.id}
                className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${template.color} flex items-center justify-center text-2xl mb-4 mx-auto`}
                >
                  {template.icon}
                </div>
                <h4 className="font-semibold text-center mb-2">
                  {template.name}
                </h4>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {template.category}
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Use Template
                </Button>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Awards */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Awards</h3>
          <div className="space-y-4">
            {recentAwards.map((award, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{award.student}</h4>
                    {award.verified && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{award.award}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{award.date}</p>
                  <div className="flex space-x-1 mt-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Section with Interactive Banner */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Teacher in modern classroom"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Teacher <span className="text-gradient">Dashboard</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Comprehensive tools for assignment management, student
                  monitoring, and academic progress tracking.
                </p>
              </div>
            </div>

            {/* Interactive educational elements */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                alt="Teaching tools"
                className="w-12 h-12 rounded-xl object-cover"
              />
            </div>

            <div
              className="absolute bottom-8 right-20 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer"
              style={{ animationDelay: "-2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                alt="Digital learning"
                className="w-10 h-10 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Dashboard Tabs */}
          <div ref={dashboardRef}>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 w-full max-w-4xl mx-auto glass">
                <TabsTrigger
                  value="overview"
                  className="flex items-center space-x-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden sm:inline">Overview</span>
                </TabsTrigger>
                <TabsTrigger
                  value="assignments"
                  className="flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span className="hidden sm:inline">Assignments</span>
                </TabsTrigger>
                <TabsTrigger
                  value="results"
                  className="flex items-center space-x-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Results</span>
                </TabsTrigger>
                <TabsTrigger
                  value="students"
                  className="flex items-center space-x-2"
                >
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Students</span>
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
                  value="awards"
                  className="flex items-center space-x-2"
                >
                  <Award className="w-4 h-4" />
                  <span className="hidden sm:inline">Awards</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-8">
                <TabsContent value="overview">{renderOverview()}</TabsContent>
                <TabsContent value="assignments">
                  {renderAssignments()}
                </TabsContent>
                <TabsContent value="results">{renderResults()}</TabsContent>
                <TabsContent value="students">{renderStudents()}</TabsContent>
                <TabsContent value="behavior">{renderBehavior()}</TabsContent>
                <TabsContent value="participation">
                  {renderParticipation()}
                </TabsContent>
                <TabsContent value="awards">{renderAwards()}</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
