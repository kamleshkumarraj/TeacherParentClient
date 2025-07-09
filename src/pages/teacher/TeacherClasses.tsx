import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import {
  Users,
  Search,
  Filter,
  Calendar,
  Clock,
  BookOpen,
  TrendingUp,
  Award,
  Eye,
  MessageSquare,
  Plus,
  User,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeacherClasses() {
  const [searchTerm, setSearchTerm] = useState("");
  const classesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (classesRef.current) {
      gsap.fromTo(
        classesRef.current.querySelectorAll(".animate-card"),
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

  const classes = [
    {
      id: 1,
      name: "Grade 9A - Mathematics",
      subject: "Mathematics",
      grade: "9A",
      students: 28,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      room: "Room 205",
      avgGrade: 85,
      attendance: 92,
      assignments: 12,
      completedAssignments: 10,
    },
    {
      id: 2,
      name: "Grade 10B - Algebra",
      subject: "Algebra",
      grade: "10B",
      students: 25,
      schedule: "Tue, Thu - 11:00 AM",
      room: "Room 207",
      avgGrade: 78,
      attendance: 88,
      assignments: 8,
      completedAssignments: 7,
    },
    {
      id: 3,
      name: "Grade 11C - Calculus",
      subject: "Calculus",
      grade: "11C",
      students: 22,
      schedule: "Mon, Wed, Fri - 2:00 PM",
      room: "Room 209",
      avgGrade: 82,
      attendance: 95,
      assignments: 15,
      completedAssignments: 13,
    },
  ];

  const upcomingClasses = [
    {
      time: "9:00 AM",
      class: "Grade 9A - Mathematics",
      room: "Room 205",
      duration: "45 min",
    },
    {
      time: "11:00 AM",
      class: "Grade 10B - Algebra",
      room: "Room 207",
      duration: "45 min",
    },
    {
      time: "2:00 PM",
      class: "Grade 11C - Calculus",
      room: "Room 209",
      duration: "45 min",
    },
  ];

  const quickStats = [
    {
      title: "Total Classes",
      value: "3",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Students",
      value: "75",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Avg Attendance",
      value: "92%",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Active Assignments",
      value: "35",
      icon: Award,
      color: "from-orange-500 to-orange-600",
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
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Classroom environment"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  My <span className="text-gradient">Classes</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Manage all your classes, monitor student progress, and track
                  performance metrics.
                </p>
              </div>
            </div>
          </div>

          <div ref={classesRef}>
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

            {/* Search and Filter */}
            <GlassCard className="animate-card p-6 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold">Class Management</h2>
                  <p className="text-muted-foreground">
                    Monitor and manage all your classes
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search classes..."
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
                    New Class
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Classes List */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">All Classes</h3>
                {classes.map((classItem) => (
                  <GlassCard
                    key={classItem.id}
                    className="animate-card p-6 hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">
                          {classItem.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {classItem.schedule}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {classItem.room}
                        </p>
                      </div>
                      <Badge variant="outline">{classItem.grade}</Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-2xl font-bold">
                          {classItem.students}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Students
                        </p>
                      </div>
                      <div className="text-center">
                        <BarChart3 className="w-5 h-5 text-green-500 mx-auto mb-1" />
                        <p className="text-2xl font-bold">
                          {classItem.avgGrade}%
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Avg Grade
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Attendance</span>
                          <span>{classItem.attendance}%</span>
                        </div>
                        <Progress value={classItem.attendance} />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Assignments</span>
                          <span>
                            {classItem.completedAssignments}/
                            {classItem.assignments}
                          </span>
                        </div>
                        <Progress
                          value={
                            (classItem.completedAssignments /
                              classItem.assignments) *
                            100
                          }
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Today's Schedule */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Today's Schedule</h3>
                <GlassCard className="animate-card p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-semibold">Today's Classes</h4>
                  </div>
                  <div className="space-y-4">
                    {upcomingClasses.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="w-16 text-center">
                          <Clock className="w-4 h-4 text-muted-foreground mx-auto mb-1" />
                          <p className="text-sm font-medium">{item.time}</p>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold">{item.class}</h5>
                          <p className="text-sm text-muted-foreground">
                            {item.room} • {item.duration}
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          Join
                        </Button>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Recent Activity */}
                <GlassCard className="animate-card p-6">
                  <h4 className="text-lg font-semibold mb-4">
                    Recent Activity
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        action: "Assignment graded",
                        class: "Grade 9A",
                        time: "2 hours ago",
                      },
                      {
                        action: "New student enrolled",
                        class: "Grade 10B",
                        time: "4 hours ago",
                      },
                      {
                        action: "Attendance updated",
                        class: "Grade 11C",
                        time: "1 day ago",
                      },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.class} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
