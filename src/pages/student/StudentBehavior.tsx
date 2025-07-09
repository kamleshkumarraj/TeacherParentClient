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
  Heart,
  Users,
  Star,
  TrendingUp,
  Calendar,
  MessageSquare,
  Award,
  Target,
  CheckCircle,
  AlertCircle,
  Clock,
  Smile,
  ThumbsUp,
  User,
  Eye,
  Download,
} from "lucide-react";

export default function StudentBehavior() {
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

  // Behavior data
  const overallBehavior = {
    score: 94,
    improvement: 8.5,
    rank: 5,
    totalStudents: 45,
  };

  const behaviorCategories = [
    { category: "Classroom Conduct", score: 96, trend: "up", improvement: 4 },
    { category: "Peer Interaction", score: 92, trend: "up", improvement: 6 },
    {
      category: "Respect & Courtesy",
      score: 98,
      trend: "stable",
      improvement: 2,
    },
    { category: "Leadership", score: 89, trend: "up", improvement: 12 },
    { category: "Collaboration", score: 94, trend: "up", improvement: 7 },
    { category: "Initiative", score: 87, trend: "up", improvement: 9 },
  ];

  const weeklyBehavior = [
    {
      week: "Week 1",
      conduct: 92,
      interaction: 88,
      respect: 96,
      leadership: 85,
      collaboration: 90,
    },
    {
      week: "Week 2",
      conduct: 94,
      interaction: 90,
      respect: 97,
      leadership: 87,
      collaboration: 92,
    },
    {
      week: "Week 3",
      conduct: 95,
      interaction: 91,
      respect: 98,
      leadership: 88,
      collaboration: 93,
    },
    {
      week: "Week 4",
      conduct: 96,
      interaction: 92,
      respect: 98,
      leadership: 89,
      collaboration: 94,
    },
  ];

  const recentFeedback = [
    {
      id: 1,
      date: "2024-01-15",
      teacher: "Ms. Johnson",
      subject: "Mathematics",
      category: "Classroom Conduct",
      feedback:
        "Excellent participation in group discussions and helped classmates with difficult problems.",
      rating: "Excellent",
      points: 5,
    },
    {
      id: 2,
      date: "2024-01-12",
      teacher: "Mr. Smith",
      subject: "Science",
      category: "Leadership",
      feedback:
        "Took initiative in leading the laboratory experiment and ensured everyone followed safety protocols.",
      rating: "Very Good",
      points: 4,
    },
    {
      id: 3,
      date: "2024-01-10",
      teacher: "Ms. Davis",
      subject: "English",
      category: "Peer Interaction",
      feedback: "Respectful and encouraging during peer review sessions.",
      rating: "Excellent",
      points: 5,
    },
    {
      id: 4,
      date: "2024-01-08",
      teacher: "Mr. Wilson",
      subject: "History",
      category: "Initiative",
      feedback:
        "Volunteered to present additional research on the topic and shared resources with the class.",
      rating: "Outstanding",
      points: 5,
    },
  ];

  const behaviorTrends = [
    { month: "Sep", overall: 86, positive: 82, neutral: 8, negative: 2 },
    { month: "Oct", overall: 88, positive: 85, neutral: 7, negative: 1 },
    { month: "Nov", overall: 91, positive: 88, neutral: 6, negative: 1 },
    { month: "Dec", overall: 93, positive: 91, neutral: 5, negative: 0 },
    { month: "Jan", overall: 94, positive: 92, neutral: 4, negative: 0 },
  ];

  const socialSkills = [
    { skill: "Communication", score: 92 },
    { skill: "Empathy", score: 89 },
    { skill: "Conflict Resolution", score: 87 },
    { skill: "Teamwork", score: 94 },
    { skill: "Cultural Sensitivity", score: 91 },
    { skill: "Emotional Intelligence", score: 88 },
  ];

  const behaviorDistribution = [
    { type: "Exemplary", count: 45, percentage: 68, color: "#10B981" },
    { type: "Satisfactory", count: 18, percentage: 27, color: "#3B82F6" },
    { type: "Needs Improvement", count: 3, percentage: 5, color: "#F59E0B" },
    { type: "Concerning", count: 0, percentage: 0, color: "#EF4444" },
  ];

  const achievements = [
    {
      title: "Peer Helper Award",
      description: "Recognized for consistently helping classmates",
      date: "2024-01-10",
      points: 50,
    },
    {
      title: "Leadership Excellence",
      description: "Outstanding leadership in group projects",
      date: "2023-12-15",
      points: 40,
    },
    {
      title: "Positive Attitude",
      description: "Maintaining positive attitude throughout the semester",
      date: "2023-11-20",
      points: 30,
    },
  ];

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "Outstanding":
        return "text-green-600";
      case "Excellent":
        return "text-green-500";
      case "Very Good":
        return "text-blue-500";
      case "Good":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  const getRatingBadge = (rating: string) => {
    switch (rating) {
      case "Outstanding":
        return "default";
      case "Excellent":
        return "default";
      case "Very Good":
        return "secondary";
      case "Good":
        return "outline";
      default:
        return "destructive";
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">{overallBehavior.score}%</h3>
          <p className="text-muted-foreground">Overall Behavior</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success">
              +{overallBehavior.improvement}%
            </span>
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">#{overallBehavior.rank}</h3>
          <p className="text-muted-foreground">Class Rank</p>
          <p className="text-sm text-muted-foreground">
            out of {overallBehavior.totalStudents}
          </p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <ThumbsUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">92%</h3>
          <p className="text-muted-foreground">Positive Feedback</p>
          <div className="flex items-center justify-center space-x-1 mt-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm text-success">45 comments</span>
          </div>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">3</h3>
          <p className="text-muted-foreground">Behavior Awards</p>
          <p className="text-sm text-success">This semester</p>
        </GlassCard>
      </div>

      {/* Behavior Categories */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Behavior Categories Overview
        </h3>
        <div className="space-y-6">
          {behaviorCategories.map((category, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">{category.category}</h4>
                <div className="flex items-center space-x-3">
                  <Badge variant="outline">{category.score}%</Badge>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">
                      +{category.improvement}%
                    </span>
                  </div>
                </div>
              </div>
              <Progress value={category.score} />
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Trends */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">Weekly Behavior Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={weeklyBehavior}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="conduct"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Conduct"
              />
              <Line
                type="monotone"
                dataKey="interaction"
                stroke="#10B981"
                strokeWidth={2}
                name="Interaction"
              />
              <Line
                type="monotone"
                dataKey="respect"
                stroke="#8B5CF6"
                strokeWidth={2}
                name="Respect"
              />
              <Line
                type="monotone"
                dataKey="leadership"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Leadership"
              />
              <Line
                type="monotone"
                dataKey="collaboration"
                stroke="#EF4444"
                strokeWidth={2}
                name="Collaboration"
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Behavior Distribution */}
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Behavior Score Distribution
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={behaviorDistribution}
                dataKey="count"
                nameKey="type"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={({ type, percentage }) => `${type}: ${percentage}%`}
              >
                {behaviorDistribution.map((entry, index) => (
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

  const renderFeedback = () => (
    <div className="space-y-8">
      {/* Recent Feedback */}
      <div className="space-y-6">
        {recentFeedback.map((feedback) => (
          <GlassCard key={feedback.id} className="animate-card p-6 hover">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{feedback.teacher}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feedback.subject}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {feedback.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge
                  variant={getRatingBadge(feedback.rating)}
                  className="mb-2"
                >
                  {feedback.rating}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">
                    {feedback.points} pts
                  </span>
                </div>
              </div>
            </div>

            <Badge variant="outline" className="mb-3">
              {feedback.category}
            </Badge>

            <p className="text-muted-foreground leading-relaxed">
              "{feedback.feedback}"
            </p>

            <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
              <Button size="sm" variant="outline">
                <Eye className="w-4 h-4 mr-1" />
                View Details
              </Button>
              <Button size="sm" variant="outline">
                <MessageSquare className="w-4 h-4 mr-1" />
                Reply
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Behavior Trends Chart */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Monthly Behavior Trends</h3>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={behaviorTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="positive"
              stackId="1"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.8}
              name="Positive"
            />
            <Area
              type="monotone"
              dataKey="neutral"
              stackId="1"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.8}
              name="Neutral"
            />
            <Area
              type="monotone"
              dataKey="negative"
              stackId="1"
              stroke="#EF4444"
              fill="#EF4444"
              fillOpacity={0.8}
              name="Negative"
            />
          </AreaChart>
        </ResponsiveContainer>
      </GlassCard>
    </div>
  );

  const renderSocialSkills = () => (
    <div className="space-y-8">
      {/* Social Skills Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="animate-card p-6">
          <h3 className="text-xl font-semibold mb-6">
            Social Skills Assessment
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={socialSkills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={0} domain={[0, 100]} />
              <Radar
                name="Skills Score"
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
                      <Award className="w-4 h-4 text-white" />
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
        </GlassCard>
      </div>

      {/* Detailed Skills Breakdown */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">
          Social Skills Detailed Breakdown
        </h3>
        <div className="space-y-4">
          {socialSkills.map((skill, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{skill.skill}</h4>
                <Badge variant="outline">{skill.score}%</Badge>
              </div>
              <Progress value={skill.score} />
              <div className="mt-2 text-sm text-muted-foreground">
                {skill.score >= 90 && "Excellent proficiency in this area"}
                {skill.score >= 80 &&
                  skill.score < 90 &&
                  "Strong skills with room for growth"}
                {skill.score >= 70 &&
                  skill.score < 80 &&
                  "Developing well, continue practicing"}
                {skill.score < 70 && "Focus area for improvement"}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
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
              Behavior <span className="text-gradient">Analytics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tracking of your social behavior, classroom conduct,
              and personal development with detailed feedback from teachers.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-end space-x-3 mb-8">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          {/* Behavior Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-md mx-auto mb-8 glass">
              <TabsTrigger
                value="overview"
                className="flex items-center space-x-2"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="feedback"
                className="flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Feedback</span>
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Social Skills</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">{renderOverview()}</TabsContent>
            <TabsContent value="feedback">{renderFeedback()}</TabsContent>
            <TabsContent value="social">{renderSocialSkills()}</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
