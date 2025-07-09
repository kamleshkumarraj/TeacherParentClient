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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts";
import {
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Award,
  FileText,
  Calendar,
  Target,
  Star,
  Download,
  Eye,
} from "lucide-react";

export default function StudentResults() {
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
  }, []);

  // Sample exam results data
  const examResults = [
    {
      id: 1,
      examName: "Mid-Term Examination",
      date: "2024-01-15",
      type: "Term Exam",
      subjects: [
        { name: "Mathematics", score: 95, total: 100, grade: "A+" },
        { name: "Science", score: 88, total: 100, grade: "A" },
        { name: "English", score: 92, total: 100, grade: "A" },
        { name: "History", score: 85, total: 100, grade: "B+" },
        { name: "Geography", score: 90, total: 100, grade: "A" },
      ],
      overall: { score: 450, total: 500, percentage: 90, grade: "A", rank: 5 },
    },
    {
      id: 2,
      examName: "Unit Test - December",
      date: "2024-12-10",
      type: "Unit Test",
      subjects: [
        { name: "Mathematics", score: 92, total: 100, grade: "A" },
        { name: "Science", score: 85, total: 100, grade: "B+" },
        { name: "English", score: 88, total: 100, grade: "A" },
        { name: "History", score: 82, total: 100, grade: "B+" },
        { name: "Geography", score: 87, total: 100, grade: "A" },
      ],
      overall: { score: 434, total: 500, percentage: 87, grade: "A", rank: 8 },
    },
  ];

  // Sample trend data
  const performanceTrend = [
    {
      month: "Sep",
      math: 82,
      science: 75,
      english: 85,
      history: 78,
      geography: 80,
    },
    {
      month: "Oct",
      math: 85,
      science: 78,
      english: 87,
      history: 80,
      geography: 82,
    },
    {
      month: "Nov",
      math: 88,
      science: 82,
      english: 90,
      history: 82,
      geography: 85,
    },
    {
      month: "Dec",
      math: 92,
      science: 85,
      english: 88,
      history: 82,
      geography: 87,
    },
    {
      month: "Jan",
      math: 95,
      science: 88,
      english: 92,
      history: 85,
      geography: 90,
    },
  ];

  const subjectAnalysis = [
    {
      subject: "Mathematics",
      current: 95,
      previous: 92,
      improvement: 3,
      trend: "up",
    },
    {
      subject: "Science",
      current: 88,
      previous: 85,
      improvement: 3,
      trend: "up",
    },
    {
      subject: "English",
      current: 92,
      previous: 88,
      improvement: 4,
      trend: "up",
    },
    {
      subject: "History",
      current: 85,
      previous: 82,
      improvement: 3,
      trend: "up",
    },
    {
      subject: "Geography",
      current: 90,
      previous: 87,
      improvement: 3,
      trend: "up",
    },
  ];

  const skillsRadar = [
    { skill: "Problem Solving", score: 90, maxScore: 100 },
    { skill: "Critical Thinking", score: 85, maxScore: 100 },
    { skill: "Communication", score: 88, maxScore: 100 },
    { skill: "Creativity", score: 82, maxScore: 100 },
    { skill: "Collaboration", score: 87, maxScore: 100 },
    { skill: "Leadership", score: 80, maxScore: 100 },
  ];

  const classComparison = [
    {
      metric: "Your Score",
      mathematics: 95,
      science: 88,
      english: 92,
      history: 85,
      geography: 90,
    },
    {
      metric: "Class Average",
      mathematics: 78,
      science: 75,
      english: 80,
      history: 72,
      geography: 76,
    },
    {
      metric: "Top Score",
      mathematics: 98,
      science: 95,
      english: 96,
      history: 92,
      geography: 94,
    },
  ];

  const getCurrentGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green-500";
      case "A":
        return "bg-blue-500";
      case "B+":
        return "bg-yellow-500";
      case "B":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Current Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">A</h3>
          <p className="text-muted-foreground">Overall Grade</p>
          <p className="text-sm text-success mt-1">+0.2 from last exam</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">90%</h3>
          <p className="text-muted-foreground">Last Exam Score</p>
          <p className="text-sm text-success mt-1">450/500 marks</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">#5</h3>
          <p className="text-muted-foreground">Class Rank</p>
          <p className="text-sm text-success mt-1">out of 45 students</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">8.5</h3>
          <p className="text-muted-foreground">GPA</p>
          <p className="text-sm text-success mt-1">+0.3 improvement</p>
        </GlassCard>
      </div>

      {/* Performance Trend Chart */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Performance Trend</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={performanceTrend}>
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

      {/* Subject Analysis */}
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Subject-wise Analysis</h3>
        <div className="space-y-6">
          {subjectAnalysis.map((subject, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">{subject.subject}</h4>
                <div className="flex items-center space-x-3">
                  <Badge variant="default">{subject.current}%</Badge>
                  <div className="flex items-center space-x-1">
                    {subject.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                    <span
                      className={`text-sm ${subject.trend === "up" ? "text-success" : "text-destructive"}`}
                    >
                      {subject.improvement > 0 ? "+" : ""}
                      {subject.improvement}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Current Score</span>
                    <span>{subject.current}%</span>
                  </div>
                  <Progress value={subject.current} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Previous Score</span>
                    <span>{subject.previous}%</span>
                  </div>
                  <Progress value={subject.previous} className="opacity-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );

  const renderDetailedResults = () => (
    <div className="space-y-8">
      {examResults.map((exam, index) => (
        <GlassCard key={exam.id} className="animate-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold">{exam.examName}</h3>
              <p className="text-muted-foreground">
                {exam.date} • {exam.type}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient">
                {exam.overall.percentage}%
              </div>
              <Badge variant="default">{exam.overall.grade}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold">
                {exam.overall.score}/{exam.overall.total}
              </div>
              <p className="text-sm text-muted-foreground">Total Marks</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold">#{exam.overall.rank}</div>
              <p className="text-sm text-muted-foreground">Class Rank</p>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold">{exam.overall.grade}</div>
              <p className="text-sm text-muted-foreground">Overall Grade</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Subject-wise Performance</h4>
            {exam.subjects.map((subject, subIndex) => (
              <div
                key={subIndex}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-4 h-4 rounded-full ${getCurrentGradeColor(subject.grade)}`}
                  />
                  <span className="font-medium">{subject.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="font-semibold">
                      {subject.score}/{subject.total}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {Math.round((subject.score / subject.total) * 100)}%
                    </div>
                  </div>
                  <Badge variant="outline">{subject.grade}</Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-3 mt-6 pt-4 border-t border-white/10">
            <Button size="sm" variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
            <Button size="sm" variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </GlassCard>
      ))}
    </div>
  );

  const renderSkillsAnalysis = () => (
    <div className="space-y-8">
      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Skills Assessment</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={skillsRadar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
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
          <div className="space-y-4">
            {skillsRadar.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.skill}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.score}/{skill.maxScore}
                  </span>
                </div>
                <Progress value={(skill.score / skill.maxScore) * 100} />
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      <GlassCard className="animate-card p-6">
        <h3 className="text-xl font-semibold mb-6">Class Comparison</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={[
              {
                subject: "Math",
                "Your Score": 95,
                "Class Average": 78,
                "Top Score": 98,
              },
              {
                subject: "Science",
                "Your Score": 88,
                "Class Average": 75,
                "Top Score": 95,
              },
              {
                subject: "English",
                "Your Score": 92,
                "Class Average": 80,
                "Top Score": 96,
              },
              {
                subject: "History",
                "Your Score": 85,
                "Class Average": 72,
                "Top Score": 92,
              },
              {
                subject: "Geography",
                "Your Score": 90,
                "Class Average": 76,
                "Top Score": 94,
              },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="Your Score" fill="#8B5CF6" name="Your Score" />
            <Bar dataKey="Class Average" fill="#6B7280" name="Class Average" />
            <Bar dataKey="Top Score" fill="#10B981" name="Top Score" />
          </BarChart>
        </ResponsiveContainer>
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
              Academic <span className="text-gradient">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive analysis of your academic performance with detailed
              insights and skill assessments.
            </p>
          </div>

          {/* Results Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="detailed">Detailed Results</TabsTrigger>
              <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">{renderOverview()}</TabsContent>
            <TabsContent value="detailed">
              {renderDetailedResults()}
            </TabsContent>
            <TabsContent value="skills">{renderSkillsAnalysis()}</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
