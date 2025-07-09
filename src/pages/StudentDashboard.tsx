import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import {
  BookOpen,
  User,
  FileText,
  TrendingUp,
  Heart,
  Trophy,
  Star,
  ArrowRight,
} from "lucide-react";

export default function StudentDashboard() {
  const menuItems = [
    {
      title: "Student Profile",
      description: "View and manage your profile information",
      icon: User,
      href: "/student/profile",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Assignment Review",
      description: "Check submitted assignments and feedback",
      icon: FileText,
      href: "/student/assignments",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Results",
      description: "View exam results and grades",
      icon: TrendingUp,
      href: "/student/results",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your academic progress",
      icon: BookOpen,
      href: "/student/progress",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Behavior Records",
      description: "View behavior feedback and improvements",
      icon: Heart,
      href: "/student/behavior",
      color: "from-red-500 to-red-600",
    },
    {
      title: "Participation",
      description: "Track participation in activities",
      icon: Star,
      href: "/student/participation",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Awards & Achievements",
      description: "View your accomplishments and certificates",
      icon: Trophy,
      href: "/student/awards",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Students studying together"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Welcome to Your{" "}
                  <span className="text-gradient">Dashboard</span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Access all your academic information, track progress, and stay
                  connected with your educational journey.
                </p>
              </div>
            </div>

            {/* Floating educational elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                alt="Books"
                className="w-10 h-10 rounded-lg object-cover"
              />
            </div>

            <div
              className="absolute bottom-8 right-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                alt="Learning"
                className="w-8 h-8 rounded object-cover"
              />
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <GlassCard key={index} className="p-6 hover group cursor-pointer">
                <Link to={item.href} className="block">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                        <span>Access Now</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </GlassCard>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Submit Assignment</h3>
                <p className="text-sm text-muted-foreground">
                  Upload your latest assignment
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Check Results</h3>
                <p className="text-sm text-muted-foreground">
                  View your latest grades
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">View Behavior</h3>
                <p className="text-sm text-muted-foreground">
                  Check behavior feedback
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">My Awards</h3>
                <p className="text-sm text-muted-foreground">
                  View achievements
                </p>
              </GlassCard>
            </div>
          </div>

          {/* Achievement Highlight */}
          <div className="mt-16">
            <GlassCard className="p-8 text-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                ✨ All Sections Now Available!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Your complete student dashboard is ready with real-time progress
                tracking, detailed analytics, comprehensive behavior monitoring,
                and digital certificates.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">
                    ✅ Interactive Progress Charts
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">✅ Assignment Feedback System</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">✅ Behavior Analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">✅ Digital Certificates</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
