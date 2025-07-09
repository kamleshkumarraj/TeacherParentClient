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
} from "recharts";
import {
  ArrowLeft,
  Target,
  Users,
  Star,
  TrendingUp,
  Calendar,
  MessageSquare,
  Award,
  Activity,
  CheckCircle,
  Clock,
  Mic,
  Hand,
  Lightbulb,
  Eye,
  Download,
  Trophy,
  Zap,
  Heart,
} from "lucide-react";

export default function StudentParticipation() {
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

  // Participation data
  const participationStats = {
    overall: 89,
    classDiscussions: 92,
    groupProjects: 87,
    presentations: 94,
    qnasSessions: 85,
    improvement: 12.5,
  };

  const participationCategories = [
    {
      category: "Class Discussions",
      score: 92,
      frequency: 45,
      quality: 88,
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Group Projects",
      score: 87,
      frequency: 12,
      quality: 90,
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      category: "Presentations",
      score: 94,
      frequency: 8,
      quality: 95,
      icon: Mic,
      color: "from-purple-500 to-purple-600",
    },
    {
      category: "Q&A Sessions",
      score: 85,
      frequency: 32,
      quality: 82,
      icon: Hand,
      color: "from-orange-500 to-orange-600",
    },
    {
      category: "Creative Activities",
      score: 91,
      frequency: 15,
      quality: 93,
      icon: Lightbulb,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      category: "Peer Collaboration",
      score: 88,
      frequency: 28,
      quality: 86,
      icon: Heart,
      color: "from-pink-500 to-pink-600",
    },
  ];

  const weeklyParticipation = [
    {
      week: "Week 1",
      discussions: 8,
      projects: 2,
      presentations: 1,
      questions: 12,
      creative: 3,
    },
    {
      week: "Week 2",
      discussions: 10,
      projects: 3,
      presentations: 2,
      questions: 15,
      creative: 4,
    },
    {
      week: "Week 3",
      discussions: 12,
      projects: 2,
      presentations: 1,
      questions: 18,
      creative: 2,
    },
    {
      week: "Week 4",
      discussions: 15,
      projects: 4,
      presentations: 3,
      questions: 20,
      creative: 6,
    },
  ];

  const subjectParticipation = [
    {
      subject: "Mathematics",
      participation: 88,
      engagement: 85,
      contributions: 42,
    },
    {
      subject: "Science",
      participation: 92,
      engagement: 90,
      contributions: 38,
    },
    {
      subject: "English",
      participation: 95,
      engagement: 93,
      contributions: 51,
    },
    {
      subject: "History",
      participation: 82,
      engagement: 79,
      contributions: 29,
    },
    {
      subject: "Geography",
      participation: 87,
      engagement: 84,
      contributions: 35,
    },
    { subject: "Arts", participation: 96, engagement: 94, contributions: 28 },
  ];

  const participationTrends = [
    { month: "Sep", overall: 78, frequency: 25, quality: 80 },
    { month: "Oct", overall: 82, frequency: 30, quality: 84 },
    { month: "Nov", overall: 85, frequency: 35, quality: 87 },
    { month: "Dec", overall: 87, frequency: 40, quality: 89 },
    { month: "Jan", overall: 89, frequency: 45, quality: 91 },
  ];

  const activityTypes = [
    { type: "Verbal Participation", score: 90, sessions: 45 },
    { type: "Written Contributions", score: 88, sessions: 32 },
    { type: "Demonstration", score: 93, sessions: 12 },
    { type: "Peer Teaching", score: 86, sessions: 8 },
    { type: "Research Sharing", score: 91, sessions: 15 },
    { type: "Problem Solving", score: 89, sessions: 28 },
  ];

  const engagementLevels = [
    { level: "Highly Engaged", value: 45, color: "#10B981" },
    { level: "Moderately Engaged", value: 35, color: "#3B82F6" },
    { level: "Occasionally Engaged", value: 15, color: "#F59E0B" },
    { level: "Limited Engagement", value: 5, color: "#EF4444" },
  ];

  const recentActivities = [
    {
      id: 1,
      date: "2024-01-15",
      subject: "Science",
      activity: "Led group discussion on renewable energy",
      type: "Group Leadership",
      score: 95,
      feedback: "Excellent facilitation and knowledge sharing",
    },
    {
      id: 2,
      date: "2024-01-12",
      subject: "English",
      activity: "Presented book analysis to class",
      type: "Presentation",
      score: 92,
      feedback: "Clear communication and insightful analysis",
    },
    {
      id: 3,
      date: "2024-01-10",
      subject: "Mathematics",
      activity: "Solved complex problem on whiteboard",
      type: "Problem Solving",
      score: 88,
      feedback: "Good approach, helped others understand the concept",
    },
    {
      id: 4,
      date: "2024-01-08",
      subject: "History",
      activity: "Contributed to timeline creation project",
      type: "Collaborative Work",
      score: 90,
      feedback: "Great research and collaborative spirit",
    },
  ];

  const achievements = [
    {
      title: "Discussion Champion",
      description: "Most active participant in class discussions this month",
      date: "2024-01-15",
      points: 50,
      icon: MessageSquare,
    },
    {
      title: "Presentation Excellence",
      description: "Outstanding presentation skills demonstration",
      date: "2024-01-10",
      points: 40,
      icon: Mic,
    },
    {
      title: "Collaboration Star",
      description: "Exceptional teamwork in group projects",
      date: "2024-01-05",
      points: 35,
      icon: Users,
    },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">{participationStats.overall}%</h3>
          <p className="text-muted-foreground">Overall Participation</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">
              +{participationStats.improvement}%
            </span>
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">
            {participationStats.classDiscussions}%
          </h3>
          <p className="text-muted-foreground">Class Discussions</p>
          <p className="text-sm text-success">45 contributions</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">
            {participationStats.presentations}%
          </h3>
          <p className="text-muted-foreground">Presentations</p>
          <p className="text-sm text-success">8 delivered</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">
            {participationStats.groupProjects}%
          </h3>
          <p className="text-muted-foreground">Group Projects</p>
          <p className="text-sm text-success">12 completed</p>
        </GlassCard>
      </div>

      {/* Participation Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {participationCategories.map((category, index) => (
          <GlassCard
            key={index}
            className="animate-card p-6 hover group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <Badge variant="outline">{category.score}%</Badge>
            </div>

            <h3 className="font-semibold text-lg mb-2">{category.category}</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Overall Score</span>
                  <span>{category.score}%</span>
                </div>
                <Progress value={category.score} />
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Frequency:</span>
                  <span className="ml-1 font-medium">{category.frequency}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Quality:</span>
                  <span className="ml-1 font-medium">{category.quality}%</span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Participation Trends */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Monthly Participation Trends
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={participationTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[70, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="overall"
                stroke="#8B5CF6"
                strokeWidth={3}
                name="Overall Score"
              />
              <Line
                type="monotone"
                dataKey="frequency"
                stroke="#10B981"
                strokeWidth={2}
                name="Frequency"
              />
              <Line
                type="monotone"
                dataKey="quality"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Quality"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Engagement Levels */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Engagement Level Distribution
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={engagementLevels}
                dataKey="value"
                nameKey="level"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={({ level, value }) => `${level}: ${value}%`}
              >
                {engagementLevels.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-8">
      {/* Recent Activities */}
      <div className="space-y-6">
        {recentActivities.map((activity) => (
          <GlassCard key={activity.id} className="animate-card p-6 hover">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{activity.activity}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline">{activity.subject}</Badge>
                    <Badge variant="secondary">{activity.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient">
                  {activity.score}%
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm">Excellent</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm font-medium text-blue-600 mb-1">
                Teacher Feedback:
              </p>
              <p className="text-sm">"{activity.feedback}"</p>
            </div>

            <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </Button>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4 mr-1" />
                Download Certificate
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Weekly Activity Chart */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Weekly Activity Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={weeklyParticipation}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="discussions" fill="#3B82F6" name="Discussions" />
            <Bar dataKey="projects" fill="#10B981" name="Projects" />
            <Bar dataKey="presentations" fill="#8B5CF6" name="Presentations" />
            <Bar dataKey="questions" fill="#F59E0B" name="Questions" />
            <Bar dataKey="creative" fill="#EF4444" name="Creative" />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* Subject Participation */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Subject-wise Participation Analysis
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={subjectParticipation}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar
              dataKey="participation"
              fill="#8B5CF6"
              name="Participation %"
            />
            <Bar dataKey="engagement" fill="#10B981" name="Engagement %" />
          </BarChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* Activity Types Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Activity Types Performance
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={activityTypes}>
              <PolarGrid />
              <PolarAngleAxis dataKey="type" />
              <PolarRadiusAxis angle={0} domain={[0, 100]} />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Achievements</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="default">{achievement.points} pts</Badge>
                    <p className="text-xs text-muted-foreground mt-1">
                      {achievement.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Participation Insights */}
          <div className="mt-6 space-y-3">
            <h4 className="font-semibold">Key Insights</h4>
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-600">
                    Strong Performance
                  </p>
                  <p className="text-xs text-green-700">
                    Presentations show highest engagement levels
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Zap className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Growth Opportunity
                  </p>
                  <p className="text-xs text-blue-700">
                    History participation could be increased
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
              Participation <span className="text-gradient">Analytics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track your engagement in class activities, group projects,
              presentations, and collaborative learning with detailed insights
              and performance metrics.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-end space-x-3 mb-8">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Participation Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-md mx-auto mb-8 glass">
              <TabsTrigger
                value="overview"
                className="flex items-center space-x-2"
              >
                <Activity className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="flex items-center space-x-2"
              >
                <Trophy className="w-4 h-4" />
                <span className="hidden sm:inline">Activities</span>
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="flex items-center space-x-2"
              >
                <Target className="w-4 h-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">{renderOverview()}</TabsContent>
            <TabsContent value="activities">{renderActivities()}</TabsContent>
            <TabsContent value="analytics">{renderAnalytics()}</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
