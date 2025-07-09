import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
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
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Target,
  BookOpen,
  Calendar,
  Clock,
  Star,
  Award,
  Brain,
  Zap,
  Eye,
  Download,
  Filter,
} from "lucide-react";

export default function StudentProgress() {
  const [activeTab, setActiveTab] = useState("overview");
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
  }, [activeTab]);

  // Progress data
  const overallProgress = [
    {
      subject: "Mathematics",
      current: 87,
      target: 90,
      previous: 82,
      trend: "up",
      completion: 94,
    },
    {
      subject: "Science",
      current: 84,
      target: 88,
      previous: 81,
      trend: "up",
      completion: 91,
    },
    {
      subject: "English",
      current: 91,
      target: 92,
      previous: 89,
      trend: "up",
      completion: 96,
    },
    {
      subject: "History",
      current: 79,
      target: 85,
      previous: 77,
      trend: "up",
      completion: 88,
    },
    {
      subject: "Geography",
      current: 88,
      target: 90,
      previous: 86,
      trend: "up",
      completion: 93,
    },
  ];

  const weeklyProgress = [
    {
      week: "Week 1",
      math: 78,
      science: 76,
      english: 85,
      history: 72,
      geography: 80,
    },
    {
      week: "Week 2",
      math: 81,
      science: 78,
      english: 87,
      history: 74,
      geography: 82,
    },
    {
      week: "Week 3",
      math: 83,
      science: 80,
      english: 89,
      history: 76,
      geography: 84,
    },
    {
      week: "Week 4",
      math: 85,
      science: 82,
      english: 90,
      history: 77,
      geography: 86,
    },
    {
      week: "Week 5",
      math: 87,
      science: 84,
      english: 91,
      history: 79,
      geography: 88,
    },
  ];

  const skillsDevelopment = [
    { skill: "Problem Solving", current: 85, target: 90, improvement: 12 },
    { skill: "Critical Thinking", current: 88, target: 92, improvement: 15 },
    { skill: "Communication", current: 91, target: 95, improvement: 18 },
    { skill: "Creativity", current: 82, target: 88, improvement: 10 },
    { skill: "Collaboration", current: 89, target: 93, improvement: 14 },
    { skill: "Time Management", current: 77, target: 85, improvement: 8 },
  ];

  const learningGoals = [
    {
      id: 1,
      title: "Master Quadratic Equations",
      subject: "Mathematics",
      progress: 87,
      target: 95,
      deadline: "2024-02-15",
      status: "on-track",
      milestones: 8,
      completed: 7,
    },
    {
      id: 2,
      title: "Complete Science Project",
      subject: "Science",
      progress: 65,
      target: 100,
      deadline: "2024-02-20",
      status: "behind",
      milestones: 5,
      completed: 3,
    },
    {
      id: 3,
      title: "Improve Essay Writing",
      subject: "English",
      progress: 92,
      target: 95,
      deadline: "2024-02-10",
      status: "ahead",
      milestones: 6,
      completed: 6,
    },
  ];

  const studyHours = [
    { day: "Mon", planned: 4, actual: 3.5, subjects: ["Math", "Science"] },
    { day: "Tue", planned: 3, actual: 3.2, subjects: ["English", "History"] },
    { day: "Wed", planned: 4, actual: 4.1, subjects: ["Math", "Geography"] },
    { day: "Thu", planned: 3, actual: 2.8, subjects: ["Science", "English"] },
    { day: "Fri", planned: 3, actual: 3.3, subjects: ["History", "Math"] },
    { day: "Sat", planned: 5, actual: 4.7, subjects: ["All Subjects"] },
    { day: "Sun", planned: 2, actual: 2.1, subjects: ["Review"] },
  ];

  const comprehensionLevels = [
    { level: "Mastered", value: 45, color: "#10B981" },
    { level: "Proficient", value: 30, color: "#3B82F6" },
    { level: "Developing", value: 20, color: "#F59E0B" },
    { level: "Beginning", value: 5, color: "#EF4444" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ahead":
        return "text-green-500";
      case "on-track":
        return "text-blue-500";
      case "behind":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ahead":
        return "default";
      case "on-track":
        return "secondary";
      case "behind":
        return "destructive";
      default:
        return "outline";
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">87.2%</h3>
          <p className="text-muted-foreground">Overall Progress</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">+5.2%</span>
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">94%</h3>
          <p className="text-muted-foreground">Completion Rate</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">+2.1%</span>
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">12</h3>
          <p className="text-muted-foreground">Goals in Progress</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">8 on track</span>
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">24.7h</h3>
          <p className="text-muted-foreground">Weekly Study Time</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">+3.2h</span>
          </div>
        </GlassCard>
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subject Progress */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Subject Progress Overview
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={overallProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="current" fill="#8B5CF6" name="Current Score" />
              <Bar dataKey="target" fill="#10B981" name="Target Score" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Weekly Trends */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Weekly Progress Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[60, 100]} />
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
                dataKey="history"
                stroke="#F59E0B"
                strokeWidth={2}
                name="History"
              />
              <Line
                type="monotone"
                dataKey="geography"
                stroke="#EF4444"
                strokeWidth={2}
                name="Geography"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Subject Details */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Detailed Subject Analysis
        </h3>
        <div className="space-y-6">
          {overallProgress.map((subject, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-lg">{subject.subject}</h4>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">{subject.current}%</Badge>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">
                      +{subject.current - subject.previous}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current Progress</span>
                    <span>{subject.current}%</span>
                  </div>
                  <Progress value={subject.current} />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Target Achievement</span>
                    <span>{subject.target}%</span>
                  </div>
                  <Progress
                    value={(subject.current / subject.target) * 100}
                    className="bg-green-500/20"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Course Completion</span>
                    <span>{subject.completion}%</span>
                  </div>
                  <Progress
                    value={subject.completion}
                    className="bg-blue-500/20"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );

  const renderGoals = () => (
    <div className="space-y-8">
      {/* Learning Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningGoals.map((goal) => (
          <GlassCard key={goal.id} className="animate-card p-6 hover">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <Badge variant={getStatusBadge(goal.status)}>{goal.status}</Badge>
            </div>

            <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{goal.subject}</p>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} />
              </div>

              <div className="flex justify-between text-sm">
                <span>Milestones:</span>
                <span>
                  {goal.completed}/{goal.milestones}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Deadline:</span>
                <span>{goal.deadline}</span>
              </div>
            </div>

            <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
              <Button size="sm" variant="outline" className="flex-1">
                <Eye className="w-4 h-4 mr-1" />
                View
              </Button>
              <Button size="sm" className="flex-1 btn-gradient">
                Update
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Skills Development */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Skills Development Progress
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={skillsDevelopment}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={0} domain={[0, 100]} />
              <Radar
                name="Current"
                dataKey="current"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>

          <div className="space-y-4">
            {skillsDevelopment.map((skill, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{skill.skill}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{skill.current}%</Badge>
                    <span className="text-sm text-success">
                      +{skill.improvement}%
                    </span>
                  </div>
                </div>
                <Progress value={skill.current} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Current: {skill.current}%</span>
                  <span>Target: {skill.target}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* Study Hours Analysis */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Study Hours Analysis</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={studyHours}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="planned" fill="#3B82F6" name="Planned Hours" />
            <Bar dataKey="actual" fill="#10B981" name="Actual Hours" />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Comprehension Levels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Comprehension Levels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={comprehensionLevels}
                dataKey="value"
                nameKey="level"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ level, value }) => `${level}: ${value}%`}
              >
                {comprehensionLevels.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Learning Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Brain className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-500">Strength Area</h4>
                  <p className="text-sm mt-1">
                    English shows consistent high performance with 91% average
                    score.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Target className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-500">Focus Area</h4>
                  <p className="text-sm mt-1">
                    History requires more attention to reach target of 85%.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-500">
                    Improvement Trend
                  </h4>
                  <p className="text-sm mt-1">
                    Overall progress increased by 5.2% this month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );

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
              Progress <span className="text-gradient">Tracking</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time insights into your academic journey with detailed
              analytics, goal tracking, and personalized recommendations.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-end space-x-3 mb-8">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Progress Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-md mx-auto mb-8 glass">
              <TabsTrigger
                value="overview"
                className="flex items-center space-x-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="goals"
                className="flex items-center space-x-2"
              >
                <Target className="w-4 h-4" />
                <span className="hidden sm:inline">Goals</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex items-center space-x-2"
              >
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">{renderOverview()}</TabsContent>
            <TabsContent value="goals">{renderGoals()}</TabsContent>
            <TabsContent value="analytics">{renderAnalytics()}</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
