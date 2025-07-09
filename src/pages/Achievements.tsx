import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/layout/Header";
import {
  Trophy,
  Medal,
  Star,
  Award,
  Crown,
  Target,
  BookOpen,
  Users,
  Calendar,
  Download,
  Share,
  Eye,
  Search,
  Filter,
  Plus,
  TrendingUp,
  Zap,
  Heart,
  Brain,
  Palette,
  Music,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
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

  // Achievement statistics
  const achievementStats = [
    {
      title: "Total Awards",
      value: "1,247",
      change: "+23%",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Students Recognized",
      value: "892",
      change: "+15%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Categories",
      value: "12",
      change: "+2",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "This Month",
      value: "147",
      change: "+8%",
      icon: Calendar,
      color: "from-green-500 to-green-600",
    },
  ];

  // Featured achievements
  const featuredAchievements = [
    {
      id: 1,
      title: "National Science Olympiad Winner",
      description: "First place in National Science Olympiad 2024",
      student: "Emily Rodriguez",
      date: "2024-01-15",
      category: "Academic",
      level: "National",
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      badge: "🥇",
      featured: true,
    },
    {
      id: 2,
      title: "Outstanding Leadership Award",
      description: "Student Council President - Exceptional leadership",
      student: "Marcus Johnson",
      date: "2024-01-10",
      category: "Leadership",
      level: "School",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      badge: "🌟",
      featured: true,
    },
    {
      id: 3,
      title: "Art Competition Champion",
      description: "Regional Art Competition - Abstract Category",
      student: "Sophie Chen",
      date: "2024-01-05",
      category: "Arts",
      level: "Regional",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      badge: "🎨",
      featured: true,
    },
  ];

  // All achievements data
  const allAchievements = [
    ...featuredAchievements,
    {
      id: 4,
      title: "Math Excellence Award",
      description: "Perfect score in Advanced Calculus",
      student: "David Kim",
      date: "2024-01-12",
      category: "Academic",
      level: "School",
      badge: "📊",
    },
    {
      id: 5,
      title: "Community Service Hero",
      description: "200+ hours of community service",
      student: "Sarah Williams",
      date: "2024-01-08",
      category: "Service",
      level: "Community",
      badge: "❤️",
    },
    {
      id: 6,
      title: "Debate Tournament Winner",
      description: "State-level debate championship",
      student: "Michael Brown",
      date: "2024-01-03",
      category: "Academic",
      level: "State",
      badge: "🗣️",
    },
    {
      id: 7,
      title: "Sports Excellence Award",
      description: "Basketball team captain - State finals",
      student: "Jessica Davis",
      date: "2023-12-28",
      category: "Sports",
      level: "State",
      badge: "🏀",
    },
    {
      id: 8,
      title: "Innovation Award",
      description: "AI-powered learning app development",
      student: "Alex Turner",
      date: "2023-12-25",
      category: "Technology",
      level: "National",
      badge: "💡",
    },
  ];

  // Categories
  const categories = [
    { name: "Academic", icon: BookOpen, count: 324, color: "text-blue-500" },
    { name: "Sports", icon: Trophy, count: 186, color: "text-green-500" },
    { name: "Arts", icon: Palette, count: 142, color: "text-purple-500" },
    { name: "Leadership", icon: Crown, count: 98, color: "text-yellow-500" },
    { name: "Service", icon: Heart, count: 156, color: "text-red-500" },
    { name: "Technology", icon: Zap, count: 89, color: "text-indigo-500" },
    { name: "Music", icon: Music, count: 127, color: "text-pink-500" },
    { name: "Global", icon: Globe, count: 67, color: "text-cyan-500" },
  ];

  // Achievement levels
  const achievementLevels = [
    { level: "School", count: 456, percentage: 36.6, color: "#10B981" },
    { level: "Regional", count: 289, percentage: 23.2, color: "#3B82F6" },
    { level: "State", count: 234, percentage: 18.8, color: "#8B5CF6" },
    { level: "National", count: 178, percentage: 14.3, color: "#F59E0B" },
    { level: "International", count: 90, percentage: 7.1, color: "#EF4444" },
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      Academic: BookOpen,
      Sports: Trophy,
      Arts: Palette,
      Leadership: Crown,
      Service: Heart,
      Technology: Zap,
      Music: Music,
      Global: Globe,
    };
    return iconMap[category] || Award;
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      Academic: "from-blue-500 to-blue-600",
      Sports: "from-green-500 to-green-600",
      Arts: "from-purple-500 to-purple-600",
      Leadership: "from-yellow-500 to-orange-600",
      Service: "from-red-500 to-red-600",
      Technology: "from-indigo-500 to-indigo-600",
      Music: "from-pink-500 to-pink-600",
      Global: "from-cyan-500 to-cyan-600",
    };
    return colorMap[category] || "from-gray-500 to-gray-600";
  };

  const filteredAchievements = allAchievements.filter((achievement) => {
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || achievement.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementStats.map((stat, index) => (
          <GlassCard
            key={index}
            className="animate-card p-6 hover group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-success mt-1">{stat.change}</p>
              </div>
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Featured Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-6">🌟 Featured Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAchievements.map((achievement) => {
            const IconComponent = getCategoryIcon(achievement.category);
            return (
              <GlassCard
                key={achievement.id}
                className="animate-card overflow-hidden hover group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-black"
                    >
                      {achievement.level}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-4xl mb-2">{achievement.badge}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${getCategoryColor(achievement.category)}`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="outline">{achievement.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">
                        {achievement.student}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.date}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Categories Overview */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Achievement Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <GlassCard
              key={index}
              className="animate-card p-4 text-center hover group cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${category.color} bg-opacity-20`}
              >
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
              <p className="text-2xl font-bold">{category.count}</p>
              <p className="text-xs text-muted-foreground">awards</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="btn-gradient">
          <Plus className="w-4 h-4 mr-2" />
          Add Achievement
        </Button>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAchievements.map((achievement) => {
          const IconComponent = getCategoryIcon(achievement.category);
          return (
            <GlassCard
              key={achievement.id}
              className="animate-card p-6 hover group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${getCategoryColor(achievement.category)} group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-2xl mb-1">{achievement.badge}</div>
                  <Badge variant="outline" className="text-xs">
                    {achievement.level}
                  </Badge>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {achievement.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Student:</span>
                  <span className="font-medium">{achievement.student}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{achievement.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <Badge variant="secondary" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
              </div>

              <div className="flex space-x-2 pt-4 border-t border-white/10">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {filteredAchievements.length === 0 && (
        <div className="text-center py-12">
          <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No achievements found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );

  const renderCertificates = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Digital Certificates</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Download and share verified digital certificates for all achievements.
        </p>
      </div>

      {/* Certificate Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredAchievements.map((achievement) => (
          <GlassCard
            key={achievement.id}
            className="animate-card overflow-hidden hover group cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 p-8 text-center">
              <div className="absolute top-4 left-4 text-yellow-500">
                <Medal className="w-8 h-8" />
              </div>
              <div className="absolute top-4 right-4 text-yellow-500">
                <Medal className="w-8 h-8" />
              </div>

              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Certificate of Achievement
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  This certifies that
                </p>
                <p className="text-lg font-bold text-gray-800 mb-2">
                  {achievement.student}
                </p>
                <p className="text-sm text-gray-600 mb-4">has earned the</p>
                <p className="text-base font-semibold text-gray-800 mb-4">
                  {achievement.title}
                </p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Certificate ID:</span>
                <span className="font-mono text-xs">
                  CERT-{achievement.id.toString().padStart(6, "0")}
                </span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Share className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Certificate Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Blockchain Verified</h3>
          <p className="text-sm text-muted-foreground">
            All certificates are secured with blockchain technology for
            authenticity.
          </p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Share className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Easy Sharing</h3>
          <p className="text-sm text-muted-foreground">
            Share certificates directly to social media or professional
            networks.
          </p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Download className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold mb-2">Multiple Formats</h3>
          <p className="text-sm text-muted-foreground">
            Download in PDF, PNG, or SVG formats for any use case.
          </p>
        </GlassCard>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={pageRef}>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Awards and achievements ceremony"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Student <span className="text-gradient">Achievements</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Celebrating excellence, recognizing talent, and inspiring
                  future success through comprehensive achievement tracking.
                </p>
              </div>
            </div>

            {/* Floating Achievement Elements */}
            <div className="absolute top-8 right-8 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer">
              <Trophy className="w-12 h-12 text-white" />
            </div>

            <div
              className="absolute bottom-8 right-20 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer"
              style={{ animationDelay: "-2s" }}
            >
              <Medal className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Achievement Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full max-w-md mx-auto mb-8 glass">
              <TabsTrigger
                value="overview"
                className="flex items-center space-x-2"
              >
                <Star className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="flex items-center space-x-2"
              >
                <Trophy className="w-4 h-4" />
                <span className="hidden sm:inline">All Awards</span>
              </TabsTrigger>
              <TabsTrigger
                value="certificates"
                className="flex items-center space-x-2"
              >
                <Medal className="w-4 h-4" />
                <span className="hidden sm:inline">Certificates</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">{renderOverview()}</TabsContent>
            <TabsContent value="achievements">
              {renderAchievements()}
            </TabsContent>
            <TabsContent value="certificates">
              {renderCertificates()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
