import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
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
} from "recharts";
import {
  Search,
  Filter,
  Download,
  Edit,
  Save,
  TrendingUp,
  Users,
  Award,
  Star,
  Plus,
  Calculator,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeacherGradebook() {
  const [selectedClass, setSelectedClass] = useState("Grade 9A");
  const [searchTerm, setSearchTerm] = useState("");
  const gradebookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gradebookRef.current) {
      gsap.fromTo(
        gradebookRef.current.querySelectorAll(".animate-card"),
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

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      rollNo: "2024001",
      midterm: 85,
      quiz1: 92,
      quiz2: 78,
      assignment1: 88,
      assignment2: 95,
      final: 82,
      total: 86.7,
      grade: "A-",
    },
    {
      id: 2,
      name: "Bob Smith",
      rollNo: "2024002",
      midterm: 78,
      quiz1: 85,
      quiz2: 82,
      assignment1: 90,
      assignment2: 88,
      final: 79,
      total: 83.7,
      grade: "B+",
    },
    {
      id: 3,
      name: "Carol Williams",
      rollNo: "2024003",
      midterm: 92,
      quiz1: 88,
      quiz2: 90,
      assignment1: 95,
      assignment2: 92,
      final: 94,
      total: 91.8,
      grade: "A",
    },
    {
      id: 4,
      name: "David Brown",
      rollNo: "2024004",
      midterm: 75,
      quiz1: 80,
      quiz2: 76,
      assignment1: 82,
      assignment2: 78,
      final: 77,
      total: 78.0,
      grade: "B-",
    },
  ];

  const gradeDistribution = [
    { grade: "A+", count: 2, percentage: 14 },
    { grade: "A", count: 4, percentage: 29 },
    { grade: "A-", count: 3, percentage: 21 },
    { grade: "B+", count: 4, percentage: 29 },
    { grade: "B", count: 1, percentage: 7 },
    { grade: "B-", count: 0, percentage: 0 },
  ];

  const performanceTrend = [
    { assessment: "Quiz 1", average: 85 },
    { assessment: "Assignment 1", average: 88 },
    { assessment: "Midterm", average: 82 },
    { assessment: "Quiz 2", average: 84 },
    { assessment: "Assignment 2", average: 89 },
    { assessment: "Final", average: 86 },
  ];

  const quickStats = [
    {
      title: "Class Average",
      value: "85.1%",
      icon: Calculator,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Students",
      value: "28",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Top Performers",
      value: "6",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Improvement",
      value: "+3.2%",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
      case "A":
        return "bg-green-500";
      case "A-":
        return "bg-green-400";
      case "B+":
        return "bg-blue-500";
      case "B":
        return "bg-blue-400";
      case "B-":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Gradebook and assessment"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Digital <span className="text-gradient">Gradebook</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Comprehensive grade management with detailed analytics and
                  performance tracking.
                </p>
              </div>
            </div>
          </div>

          <div ref={gradebookRef}>
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

            {/* Controls */}
            <GlassCard className="animate-card p-6 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold">Gradebook Management</h2>
                  <p className="text-muted-foreground">
                    Track and manage student grades and assessments
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <select
                    className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="Grade 9A">Grade 9A - Mathematics</option>
                    <option value="Grade 10B">Grade 10B - Algebra</option>
                    <option value="Grade 11C">Grade 11C - Calculus</option>
                  </select>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button className="btn-gradient">
                    <Plus className="w-4 h-4 mr-2" />
                    New Assessment
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Grade Distribution */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Grade Distribution
                </h3>
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

              {/* Performance Trend */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Class Performance Trend
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceTrend}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assessment" />
                    <YAxis domain={[70, 95]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="average"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </GlassCard>
            </div>

            {/* Gradebook Table */}
            <GlassCard className="animate-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Student Grades</h3>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit Mode
                  </Button>
                  <Button size="sm" variant="outline">
                    <Save className="w-4 h-4 mr-1" />
                    Save Changes
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-3">Student</th>
                      <th className="text-left p-3">Roll No</th>
                      <th className="text-left p-3">Midterm</th>
                      <th className="text-left p-3">Quiz 1</th>
                      <th className="text-left p-3">Quiz 2</th>
                      <th className="text-left p-3">Assign 1</th>
                      <th className="text-left p-3">Assign 2</th>
                      <th className="text-left p-3">Final</th>
                      <th className="text-left p-3">Total</th>
                      <th className="text-left p-3">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b border-white/5">
                        <td className="p-3 font-medium">{student.name}</td>
                        <td className="p-3 text-muted-foreground">
                          {student.rollNo}
                        </td>
                        <td className="p-3">{student.midterm}%</td>
                        <td className="p-3">{student.quiz1}%</td>
                        <td className="p-3">{student.quiz2}%</td>
                        <td className="p-3">{student.assignment1}%</td>
                        <td className="p-3">{student.assignment2}%</td>
                        <td className="p-3">{student.final}%</td>
                        <td className="p-3 font-bold">{student.total}%</td>
                        <td className="p-3">
                          <Badge
                            className={`text-white ${getGradeColor(
                              student.grade,
                            )}`}
                          >
                            {student.grade}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {students.length} students
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    Previous
                  </Button>
                  <Button size="sm" variant="outline">
                    Next
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Assessment Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <GlassCard className="animate-card p-6 text-center">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">
                  Highest Performer
                </h4>
                <p className="text-2xl font-bold">Carol Williams</p>
                <p className="text-muted-foreground">91.8% Average</p>
              </GlassCard>

              <GlassCard className="animate-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Most Improved</h4>
                <p className="text-2xl font-bold">Bob Smith</p>
                <p className="text-muted-foreground">+8.5% Improvement</p>
              </GlassCard>

              <GlassCard className="animate-card p-6 text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Class Ranking</h4>
                <p className="text-2xl font-bold">#2</p>
                <p className="text-muted-foreground">Out of 12 Classes</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
