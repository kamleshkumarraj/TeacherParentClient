import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import {
  User,
  Users,
  BookOpen,
  Calculator,
  MessageSquare,
  BarChart3,
  Award,
  Calendar,
  FileText,
  TrendingUp,
  Settings,
  Bell,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeacherPortal() {
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (portalRef.current) {
      gsap.fromTo(
        portalRef.current.querySelectorAll(".animate-card"),
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

  const menuItems = [
    {
      title: "My Profile",
      description: "Manage your personal and professional information",
      icon: User,
      link: "/teacher/profile",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "My Classes",
      description: "View and manage all your assigned classes",
      icon: Users,
      link: "/teacher/classes",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Digital Gradebook",
      description: "Track student grades and academic performance",
      icon: Calculator,
      link: "/teacher/gradebook",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Assignment Management",
      description: "Create, assign, and grade student assignments",
      icon: BookOpen,
      link: "/teacher#assignments",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Student Management",
      description: "Monitor student progress and behavior",
      icon: TrendingUp,
      link: "/teacher#students",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Messages",
      description: "Communicate with parents and administration",
      icon: MessageSquare,
      link: "/messages",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Reports & Analytics",
      description: "View detailed performance analytics and reports",
      icon: BarChart3,
      link: "/teacher#analytics",
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Awards & Recognition",
      description: "Manage student awards and achievements",
      icon: Award,
      link: "/teacher#awards",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Schedule & Calendar",
      description: "View your teaching schedule and important dates",
      icon: Calendar,
      link: "/teacher#schedule",
      color: "from-red-500 to-red-600",
    },
  ];

  const quickActions = [
    {
      title: "Grade Assignments",
      count: "12 pending",
      icon: FileText,
      link: "/teacher/gradebook",
    },
    {
      title: "New Messages",
      count: "5 unread",
      icon: MessageSquare,
      link: "/messages",
    },
    {
      title: "Class Today",
      count: "3 classes",
      icon: Clock,
      link: "/teacher/classes",
    },
    {
      title: "Notifications",
      count: "8 new",
      icon: Bell,
      link: "/teacher#notifications",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Teacher portal"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Teacher <span className="text-gradient">Portal</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Comprehensive teaching tools for class management, student
                  monitoring, and academic excellence.
                </p>
              </div>
            </div>
          </div>

          <div ref={portalRef}>
            {/* Quick Actions */}
            <GlassCard className="animate-card p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <action.icon className="w-6 h-6 text-primary" />
                        <h3 className="font-semibold">{action.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {action.count}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </GlassCard>

            {/* Main Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <Link key={index} to={item.link}>
                  <GlassCard className="animate-card p-8 hover group cursor-pointer h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:btn-gradient transition-all duration-300"
                      >
                        Access Now
                      </Button>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Today's Highlights
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Grade 9A Mathematics</p>
                      <p className="text-sm text-muted-foreground">
                        9:00 AM - Room 205
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Algebra Quiz Due</p>
                      <p className="text-sm text-muted-foreground">
                        28 submissions received
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Parent Meetings</p>
                      <p className="text-sm text-muted-foreground">
                        2 scheduled for today
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Student Recognition</p>
                      <p className="text-sm text-muted-foreground">
                        5 awards given this week
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Grade Improvements</p>
                      <p className="text-sm text-muted-foreground">
                        12 students showing progress
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Reports Generated</p>
                      <p className="text-sm text-muted-foreground">
                        3 progress reports sent
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
