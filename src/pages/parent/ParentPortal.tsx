import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import {
  User,
  FileText,
  MessageSquare,
  Calendar,
  BarChart3,
  Heart,
  Trophy,
  Bell,
  Phone,
  BookOpen,
  TrendingUp,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ParentPortal() {
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
      description: "Manage your profile and family information",
      icon: User,
      link: "/parent/profile",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Academic Reports",
      description: "View comprehensive progress reports and analytics",
      icon: FileText,
      link: "/parent/reports",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Communication Hub",
      description: "Connect with teachers and school administration",
      icon: MessageSquare,
      link: "/parent/communications",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Child's Dashboard",
      description: "View Emily's complete academic overview",
      icon: BarChart3,
      link: "/parent",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Attendance Tracking",
      description: "Monitor attendance patterns and alerts",
      icon: Calendar,
      link: "/parent#attendance",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Behavior Monitoring",
      description: "Track social behavior and teacher feedback",
      icon: Heart,
      link: "/parent#behavior",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Achievements & Awards",
      description: "Celebrate your child's accomplishments",
      icon: Trophy,
      link: "/parent#achievements",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Teacher Messages",
      description: "Direct communication with Emily's teachers",
      icon: MessageSquare,
      link: "/parent-messages",
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Academic Progress",
      description: "Detailed subject-wise performance tracking",
      icon: TrendingUp,
      link: "/parent#academics",
      color: "from-red-500 to-red-600",
    },
  ];

  const quickActions = [
    {
      title: "New Messages",
      count: "3 unread",
      icon: MessageSquare,
      link: "/parent-messages",
    },
    {
      title: "Attendance Alert",
      count: "1 absence",
      icon: Calendar,
      link: "/parent#attendance",
    },
    {
      title: "Grade Update",
      count: "2 new grades",
      icon: BookOpen,
      link: "/parent#academics",
    },
    {
      title: "Notifications",
      count: "5 new",
      icon: Bell,
      link: "/parent#notifications",
    },
  ];

  const childInfo = {
    name: "Emily Johnson",
    grade: "Grade 10",
    section: "A",
    rollNo: "2024001",
    overallGrade: "A-",
    attendance: "96%",
    currentActivities: 4,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Parent portal"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Parent <span className="text-gradient">Portal</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Stay connected with your child's educational journey through
                  comprehensive monitoring and communication tools.
                </p>
              </div>
            </div>
          </div>

          <div ref={portalRef}>
            {/* Child Overview */}
            <GlassCard className="animate-card p-6 mb-8">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{childInfo.name}</h2>
                  <p className="text-muted-foreground">
                    {childInfo.grade} - Section {childInfo.section}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Roll No: {childInfo.rollNo}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">
                    {childInfo.overallGrade}
                  </p>
                  <p className="text-sm text-muted-foreground">Overall Grade</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">
                    {childInfo.attendance}
                  </p>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-500">
                    {childInfo.currentActivities}
                  </p>
                  <p className="text-sm text-muted-foreground">Activities</p>
                </div>
              </div>
            </GlassCard>

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

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-4">This Week</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Math Quiz</p>
                      <p className="text-sm text-muted-foreground">
                        Scored A- (92%)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Science Project Award</p>
                      <p className="text-sm text-muted-foreground">
                        Excellence in Research
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Teacher Feedback</p>
                      <p className="text-sm text-muted-foreground">
                        Positive comments from Ms. Smith
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Parent-Teacher Conference</p>
                      <p className="text-sm text-muted-foreground">
                        Jan 20, 3:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Mid-term Results</p>
                      <p className="text-sm text-muted-foreground">
                        Available Jan 25
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">School Event</p>
                      <p className="text-sm text-muted-foreground">
                        Science Fair - Feb 1
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Emergency Contact */}
            <GlassCard className="animate-card p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <Phone className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-medium">School Office</p>
                    <p className="text-sm text-muted-foreground">
                      (555) 123-SCHOOL
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <MessageSquare className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className="font-medium">Emergency Line</p>
                    <p className="text-sm text-muted-foreground">
                      (555) 911-HELP
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <Clock className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri 8AM-5PM
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
