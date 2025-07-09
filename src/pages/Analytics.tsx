import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/layout/Header";
import { ChartErrorBoundary } from "@/components/ui/chart-error-boundary";
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  Award,
  Calendar,
  Target,
  Download,
  Filter,
  RefreshCw,
  Activity,
  PieChart as PieChartIcon,
  Brain,
  Zap,
  Trophy,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("6months");
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

  // Comprehensive analytics data
  const overallMetrics = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12.3%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Average Performance",
      value: "87.2%",
      change: "+4.5%",
      trend: "up",
      icon: Target,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Engagement Rate",
      value: "94.8%",
      change: "+2.1%",
      trend: "up",
      icon: Activity,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Completion Rate",
      value: "91.5%",
      change: "-1.2%",
      trend: "down",
      icon: BookOpen,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const performanceTrend = [
    {
      month: "Jan",
      performance: 85.2,
      engagement: 87.4,
      students: 2650,
    },
    {
      month: "Feb",
      performance: 86.1,
      engagement: 88.2,
      students: 2720,
    },
    {
      month: "Mar",
      performance: 87.5,
      engagement: 89.1,
      students: 2780,
    },
    {
      month: "Apr",
      performance: 86.8,
      engagement: 90.3,
      students: 2820,
    },
    {
      month: "May",
      performance: 88.2,
      engagement: 91.5,
      students: 2847,
    },
    {
      month: "Jun",
      performance: 87.2,
      engagement: 94.8,
      students: 2847,
    },
  ];

  const subjectAnalysis = [
    {
      subject: "Mathematics",
      avgScore: 84.5,
      students: 2847,
      improvement: 3.2,
      difficulty: "Hard",
    },
    {
      subject: "Science",
      avgScore: 87.2,
      students: 2847,
      improvement: 5.1,
      difficulty: "Medium",
    },
    {
      subject: "English",
      avgScore: 89.8,
      students: 2847,
      improvement: 2.8,
      difficulty: "Medium",
    },
    {
      subject: "History",
      avgScore: 82.1,
      students: 2847,
      improvement: 4.5,
      difficulty: "Medium",
    },
    {
      subject: "Arts",
      avgScore: 91.8,
      students: 1423,
      improvement: 7.2,
      difficulty: "Easy",
    },
  ];

  const gradeDistribution = [
    { grade: "A+", count: 485, percentage: 17.0, color: "#10B981" },
    { grade: "A", count: 712, percentage: 25.0, color: "#3B82F6" },
    { grade: "B+", count: 626, percentage: 22.0, color: "#8B5CF6" },
    { grade: "B", count: 427, percentage: 15.0, color: "#F59E0B" },
    { grade: "C+", count: 342, percentage: 12.0, color: "#EF4444" },
    { grade: "C", count: 199, percentage: 7.0, color: "#6B7280" },
    { grade: "Below C", count: 56, percentage: 2.0, color: "#374151" },
  ];

  const attendancePatterns = [
    { day: "Monday", attendance: 94.2, lateArrivals: 3.1 },
    { day: "Tuesday", attendance: 96.1, lateArrivals: 2.4 },
    { day: "Wednesday", attendance: 95.8, lateArrivals: 2.7 },
    { day: "Thursday", attendance: 94.9, lateArrivals: 3.3 },
    { day: "Friday", attendance: 93.1, lateArrivals: 4.2 },
    { day: "Saturday", attendance: 89.7, lateArrivals: 5.8 },
  ];

  const learningStyles = [
    { style: "Visual", count: 1139, percentage: 40 },
    { style: "Auditory", count: 854, percentage: 30 },
    { style: "Kinesthetic", count: 569, percentage: 20 },
    { style: "Reading/Writing", count: 285, percentage: 10 },
  ];

  const skillsRadar = [
    { skill: "Critical Thinking", score: 85 },
    { skill: "Problem Solving", score: 82 },
    { skill: "Communication", score: 88 },
    { skill: "Collaboration", score: 90 },
    { skill: "Creativity", score: 78 },
    { skill: "Leadership", score: 75 },
    { skill: "Digital Literacy", score: 92 },
    { skill: "Time Management", score: 80 },
  ];

  const predictiveAnalytics = [
    { month: "Jul", predicted: 89.2, confidence: 92 },
    { month: "Aug", predicted: 90.1, confidence: 88 },
    { month: "Sep", predicted: 91.0, confidence: 85 },
    { month: "Oct", predicted: 90.5, confidence: 82 },
    { month: "Nov", predicted: 91.8, confidence: 79 },
    { month: "Dec", predicted: 92.3, confidence: 76 },
  ];

  const departmentComparison = [
    {
      department: "STEM",
      performance: 86.2,
      satisfaction: 8.4,
      resources: 9.1,
    },
    {
      department: "Humanities",
      performance: 88.7,
      satisfaction: 8.8,
      resources: 8.3,
    },
    {
      department: "Arts",
      performance: 91.2,
      satisfaction: 9.2,
      resources: 7.9,
    },
    {
      department: "Sports",
      performance: 83.5,
      satisfaction: 8.9,
      resources: 8.7,
    },
    {
      department: "Languages",
      performance: 89.8,
      satisfaction: 8.6,
      resources: 8.1,
    },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallMetrics.map((metric, index) => (
          <GlassCard
            key={index}
            className="animate-card p-6 hover group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-3xl font-bold">{metric.value}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span
                    className={`text-sm ${metric.trend === "up" ? "text-success" : "text-destructive"}`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${metric.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <metric.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Performance & Engagement Trends
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={performanceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" domain={[70, 100]} />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[2000, 3000]}
              />
              <Tooltip />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="performance"
                fill="#8B5CF6"
                fillOpacity={0.3}
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Performance %"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="engagement"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                name="Engagement Score"
              />
              <Bar
                yAxisId="right"
                dataKey="students"
                fill="#3B82F6"
                opacity={0.6}
                name="Total Students"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Grade Distribution</h3>
          <div className="space-y-4">
            {gradeDistribution.map((grade, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: grade.color }}
                  />
                  <span className="font-medium">{grade.grade}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-white/10 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${grade.percentage}%`,
                          backgroundColor: grade.color,
                        }}
                      />
                    </div>
                    <span className="text-sm font-semibold w-12">
                      {grade.percentage}%
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({grade.count} students)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Subject Analysis */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Subject Performance Analysis
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Subject Performance Chart</h4>
            {subjectAnalysis.map((subject, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <span className="font-medium">{subject.subject}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${subject.avgScore}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold w-12">
                    {subject.avgScore}%
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {subjectAnalysis.map((subject, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{subject.subject}</h4>
                  <Badge
                    variant={
                      subject.difficulty === "Easy"
                        ? "default"
                        : subject.difficulty === "Medium"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {subject.difficulty}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Avg Score:</span>
                    <span className="ml-2 font-medium">
                      {subject.avgScore}%
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Improvement:</span>
                    <span className="ml-2 font-medium text-success">
                      +{subject.improvement}%
                    </span>
                  </div>
                </div>
                <Progress value={subject.avgScore} className="mt-3" />
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );

  const renderAdvanced = () => (
    <div className="space-y-8">
      {/* Skills Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            21st Century Skills Assessment
          </h3>
          <div className="space-y-4">
            {skillsRadar.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <span className="font-medium">{skill.skill}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold w-12">
                    {skill.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Learning Styles Distribution
          </h3>
          <div className="space-y-4">
            {learningStyles.map((style, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
              >
                <span className="font-medium">{style.style}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
                      style={{ width: `${style.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold w-12">
                    {style.percentage}%
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({style.count} students)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Attendance Patterns */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Weekly Attendance Patterns
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={attendancePatterns}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[85, 100]} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
              name="Attendance %"
            />
            <Line
              type="monotone"
              dataKey="lateArrivals"
              stroke="#EF4444"
              strokeWidth={2}
              name="Late Arrivals %"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Department Comparison */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Department Performance Comparison
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {departmentComparison.map((dept, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <h4 className="font-semibold text-lg mb-3">{dept.department}</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Performance:
                  </span>
                  <span className="font-medium">{dept.performance}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Satisfaction:
                  </span>
                  <span className="font-medium">{dept.satisfaction}/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Resources:
                  </span>
                  <span className="font-medium">{dept.resources}/10</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );

  const renderPredictive = () => (
    <div className="space-y-8">
      <GlassCard className="animate-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold">
              Predictive Performance Analytics
            </h3>
            <p className="text-muted-foreground">
              AI-powered predictions based on historical data
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">ML Model v2.1</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={predictiveAnalytics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[85, 95]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#8B5CF6"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
              name="Predicted Performance"
            />
            <Line
              type="monotone"
              dataKey="confidence"
              stroke="#10B981"
              strokeWidth={2}
              name="Confidence %"
            />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Risk Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="animate-card p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <TrendingDown className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-red-500">127</h3>
          <p className="text-muted-foreground">At-Risk Students</p>
          <p className="text-sm text-red-500 mt-1">
            Requires immediate attention
          </p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-yellow-500">284</h3>
          <p className="text-muted-foreground">Needs Monitoring</p>
          <p className="text-sm text-yellow-600 mt-1">
            Early intervention recommended
          </p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-500">2,436</h3>
          <p className="text-muted-foreground">Performing Well</p>
          <p className="text-sm text-green-500 mt-1">On track for success</p>
        </GlassCard>
      </div>

      {/* AI Insights */}
      <GlassCard className="animate-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Zap className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">AI-Generated Insights</h3>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-500">
                  Performance Improvement Opportunity
                </h4>
                <p className="text-sm mt-1">
                  Mathematics scores show 15% improvement potential with
                  targeted practice in algebra concepts.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-500">
                  Attendance Pattern Alert
                </h4>
                <p className="text-sm mt-1">
                  Friday attendance drops by 6% compared to Tuesday. Consider
                  scheduling engaging activities.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-500">
                  Excellence Recognition
                </h4>
                <p className="text-sm mt-1">
                  Arts department shows exceptional 91.8% average performance
                  with high student satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={dashboardRef}>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Data analytics and charts"
              className="w-full h-80 object-cover hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Advanced <span className="text-gradient">Analytics</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Comprehensive insights into academic performance, engagement
                  patterns, and predictive analytics powered by AI.
                </p>
              </div>
            </div>

            {/* Floating Analytics Elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer">
              <BarChart3 className="w-12 h-12 text-white" />
            </div>

            <div
              className="absolute bottom-8 right-20 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer"
              style={{ animationDelay: "-2s" }}
            >
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-48 glass border-white/20">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="1year">Last Year</SelectItem>
                  <SelectItem value="2years">Last 2 Years</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Analytics Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-lg mx-auto mb-8 glass">
              <TabsTrigger
                value="overview"
                className="flex items-center space-x-2"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="advanced"
                className="flex items-center space-x-2"
              >
                <PieChartIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Advanced</span>
              </TabsTrigger>
              <TabsTrigger
                value="predictive"
                className="flex items-center space-x-2"
              >
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">Predictive</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">{renderOverview()}</TabsContent>
            <TabsContent value="advanced">{renderAdvanced()}</TabsContent>
            <TabsContent value="predictive">{renderPredictive()}</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
