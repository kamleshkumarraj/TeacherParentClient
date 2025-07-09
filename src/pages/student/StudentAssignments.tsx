import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
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
} from "recharts";
import {
  ArrowLeft,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Upload,
  Search,
  Filter,
  Star,
  TrendingUp,
} from "lucide-react";

export default function StudentAssignments() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current.querySelectorAll(".animate-card"),
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

  // Sample assignment data
  const assignments = [
    {
      id: 1,
      title: "Algebra Quiz - Quadratic Equations",
      subject: "Mathematics",
      type: "Quiz",
      dueDate: "2024-01-15",
      submittedDate: "2024-01-14",
      status: "graded",
      grade: "A",
      score: 95,
      maxScore: 100,
      feedback: "Excellent work! Show more detailed steps in problem 5.",
      teacher: "Ms. Johnson",
    },
    {
      id: 2,
      title: "Solar System Research Project",
      subject: "Science",
      type: "Project",
      dueDate: "2024-01-20",
      submittedDate: null,
      status: "pending",
      grade: null,
      score: null,
      maxScore: 100,
      feedback: null,
      teacher: "Mr. Smith",
    },
    {
      id: 3,
      title: "Creative Writing - My Future",
      subject: "English",
      type: "Essay",
      dueDate: "2024-01-12",
      submittedDate: "2024-01-11",
      status: "submitted",
      grade: null,
      score: null,
      maxScore: 100,
      feedback: null,
      teacher: "Ms. Davis",
    },
    {
      id: 4,
      title: "World War II Timeline",
      subject: "History",
      type: "Assignment",
      dueDate: "2024-01-18",
      submittedDate: "2024-01-17",
      status: "graded",
      grade: "B+",
      score: 87,
      maxScore: 100,
      feedback: "Good research! Add more primary sources next time.",
      teacher: "Mr. Wilson",
    },
  ];

  // Sample data for charts
  const performanceData = [
    { month: "Sep", average: 82 },
    { month: "Oct", average: 85 },
    { month: "Nov", average: 88 },
    { month: "Dec", average: 90 },
    { month: "Jan", average: 92 },
  ];

  const subjectPerformance = [
    { subject: "Math", completed: 12, pending: 1, average: 90 },
    { subject: "Science", completed: 8, pending: 2, average: 85 },
    { subject: "English", completed: 10, pending: 0, average: 88 },
    { subject: "History", completed: 6, pending: 1, average: 87 },
  ];

  const statusDistribution = [
    { name: "Completed", value: 75, color: "#10B981" },
    { name: "Pending", value: 15, color: "#F59E0B" },
    { name: "Overdue", value: 5, color: "#EF4444" },
    { name: "Draft", value: 5, color: "#6B7280" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "graded":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "submitted":
        return <Clock className="w-5 h-5 text-warning" />;
      case "pending":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "graded":
        return "default";
      case "submitted":
        return "secondary";
      case "pending":
        return "destructive";
      default:
        return "outline";
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch = assignment.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "pending" && assignment.status === "pending") ||
      (activeTab === "submitted" && assignment.status === "submitted") ||
      (activeTab === "graded" && assignment.status === "graded");
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={pageRef}>
          {/* Back Button */}
          <Link
            to="/student"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Assignment <span className="text-gradient">Review</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track your assignments, view feedback, and monitor your academic
              progress with detailed analytics.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <GlassCard className="animate-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">36</h3>
              <p className="text-muted-foreground">Completed</p>
            </GlassCard>
            <GlassCard className="animate-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">4</h3>
              <p className="text-muted-foreground">Pending</p>
            </GlassCard>
            <GlassCard className="animate-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">A-</h3>
              <p className="text-muted-foreground">Average Grade</p>
            </GlassCard>
            <GlassCard className="animate-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">+5%</h3>
              <p className="text-muted-foreground">Improvement</p>
            </GlassCard>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Trend */}
            <GlassCard className="animate-card p-6">
              <h3 className="text-xl font-semibold mb-6">Performance Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
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

            {/* Subject Performance */}
            <GlassCard className="animate-card p-6">
              <h3 className="text-xl font-semibold mb-6">
                Subject Performance
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="subject" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="average" fill="#3B82F6" name="Average Score" />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          {/* Status Distribution */}
          <GlassCard className="animate-card p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6">
              Assignment Status Distribution
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusDistribution}
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
                    {statusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-4">
                {statusDistribution.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Assignments List */}
          <GlassCard className="animate-card p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 space-y-4 md:space-y-0">
              <h3 className="text-xl font-semibold">My Assignments</h3>
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
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full max-w-md mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="submitted">Submitted</TabsTrigger>
                <TabsTrigger value="graded">Graded</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                <div className="space-y-4">
                  {filteredAssignments.map((assignment) => (
                    <div
                      key={assignment.id}
                      className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          {getStatusIcon(assignment.status)}
                          <div>
                            <h4 className="font-semibold text-lg">
                              {assignment.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {assignment.subject} • {assignment.type} • By{" "}
                              {assignment.teacher}
                            </p>
                          </div>
                        </div>
                        <Badge variant={getStatusColor(assignment.status)}>
                          {assignment.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Due Date
                          </p>
                          <p className="font-medium">{assignment.dueDate}</p>
                        </div>
                        {assignment.submittedDate && (
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Submitted
                            </p>
                            <p className="font-medium">
                              {assignment.submittedDate}
                            </p>
                          </div>
                        )}
                        {assignment.score !== null && (
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Score
                            </p>
                            <p className="font-medium">
                              {assignment.score}/{assignment.maxScore}
                            </p>
                          </div>
                        )}
                        {assignment.grade && (
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Grade
                            </p>
                            <Badge variant="default">{assignment.grade}</Badge>
                          </div>
                        )}
                      </div>

                      {assignment.score !== null && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>
                              {Math.round(
                                (assignment.score / assignment.maxScore) * 100,
                              )}
                              %
                            </span>
                          </div>
                          <Progress
                            value={
                              (assignment.score / assignment.maxScore) * 100
                            }
                          />
                        </div>
                      )}

                      {assignment.feedback && (
                        <div className="mb-4 p-4 bg-white/5 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-1">
                            Teacher Feedback:
                          </p>
                          <p className="text-sm">{assignment.feedback}</p>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        {assignment.status === "pending" && (
                          <Button size="sm" className="btn-gradient">
                            <Upload className="w-4 h-4 mr-2" />
                            Submit
                          </Button>
                        )}
                        {assignment.status === "graded" && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
