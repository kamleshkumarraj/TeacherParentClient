import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import {
  ArrowLeft,
  Trophy,
  Medal,
  Star,
  Award,
  Crown,
  Target,
  Calendar,
  Download,
  Share,
  Eye,
  Search,
  Filter,
  BookOpen,
  Users,
  Heart,
  Zap,
  Palette,
  Music,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function StudentAwards() {
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

  // Awards statistics
  const awardStats = {
    total: 15,
    thisYear: 8,
    thisMonth: 2,
    totalPoints: 450,
  };

  // Student's achievements
  const myAchievements = [
    {
      id: 1,
      title: "Mathematics Excellence Award",
      description: "Outstanding performance in advanced mathematics",
      category: "Academic",
      level: "School",
      date: "2024-01-15",
      points: 50,
      badge: "🏆",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certificateId: "CERT-001234",
      featured: true,
    },
    {
      id: 2,
      title: "Science Fair Winner",
      description: "First place in regional science fair",
      category: "Science",
      level: "Regional",
      date: "2024-01-10",
      points: 75,
      badge: "🥇",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certificateId: "CERT-001235",
      featured: true,
    },
    {
      id: 3,
      title: "Leadership Recognition",
      description: "Student council leadership excellence",
      category: "Leadership",
      level: "School",
      date: "2024-01-05",
      points: 40,
      badge: "👑",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certificateId: "CERT-001236",
      featured: false,
    },
    {
      id: 4,
      title: "Art Competition Champion",
      description: "Best artwork in state-level competition",
      category: "Arts",
      level: "State",
      date: "2023-12-20",
      points: 60,
      badge: "🎨",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      certificateId: "CERT-001237",
      featured: true,
    },
    {
      id: 5,
      title: "Community Service Hero",
      description: "200+ hours of community service",
      category: "Service",
      level: "Community",
      date: "2023-12-15",
      points: 45,
      badge: "❤️",
      certificateId: "CERT-001238",
      featured: false,
    },
    {
      id: 6,
      title: "Perfect Attendance",
      description: "100% attendance for the semester",
      category: "Attendance",
      level: "School",
      date: "2023-12-10",
      points: 25,
      badge: "⭐",
      certificateId: "CERT-001239",
      featured: false,
    },
  ];

  // Achievement categories
  const categories = [
    { name: "Academic", icon: BookOpen, count: 5, color: "text-blue-500" },
    { name: "Science", icon: Zap, count: 2, color: "text-green-500" },
    { name: "Arts", icon: Palette, count: 3, color: "text-purple-500" },
    { name: "Leadership", icon: Crown, count: 2, color: "text-yellow-500" },
    { name: "Service", icon: Heart, count: 2, color: "text-red-500" },
    { name: "Sports", icon: Trophy, count: 1, color: "text-orange-500" },
  ];

  // Achievement levels
  const achievementLevels = [
    { level: "School", count: 8, percentage: 53.3, color: "#10B981" },
    { level: "Regional", count: 4, percentage: 26.7, color: "#3B82F6" },
    { level: "State", count: 2, percentage: 13.3, color: "#8B5CF6" },
    { level: "National", count: 1, percentage: 6.7, color: "#F59E0B" },
  ];

  const getCategoryIcon = (category: string) => {
    const iconMap = {
      Academic: BookOpen,
      Science: Zap,
      Arts: Palette,
      Leadership: Crown,
      Service: Heart,
      Sports: Trophy,
      Music: Music,
      Technology: Zap,
      Attendance: Calendar,
    };
    return iconMap[category] || Award;
  };

  const getCategoryColor = (category: string) => {
    const colorMap = {
      Academic: "from-blue-500 to-blue-600",
      Science: "from-green-500 to-green-600",
      Arts: "from-purple-500 to-purple-600",
      Leadership: "from-yellow-500 to-orange-600",
      Service: "from-red-500 to-red-600",
      Sports: "from-orange-500 to-orange-600",
      Music: "from-pink-500 to-pink-600",
      Technology: "from-indigo-500 to-indigo-600",
      Attendance: "from-cyan-500 to-cyan-600",
    };
    return colorMap[category] || "from-gray-500 to-gray-600";
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "National":
        return "default";
      case "State":
        return "secondary";
      case "Regional":
        return "outline";
      case "School":
        return "outline";
      default:
        return "outline";
    }
  };

  const filteredAchievements = myAchievements.filter((achievement) => {
    const matchesSearch = achievement.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || achievement.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">{awardStats.total}</h3>
          <p className="text-muted-foreground">Total Awards</p>
          <p className="text-sm text-success mt-1">All time</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">{awardStats.thisYear}</h3>
          <p className="text-muted-foreground">This Academic Year</p>
          <p className="text-sm text-success mt-1">2023-2024</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">{awardStats.totalPoints}</h3>
          <p className="text-muted-foreground">Achievement Points</p>
          <p className="text-sm text-success mt-1">Lifetime total</p>
        </GlassCard>

        <GlassCard className="animate-card p-6 text-center hover group cursor-pointer">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Medal className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold">{awardStats.thisMonth}</h3>
          <p className="text-muted-foreground">This Month</p>
          <p className="text-sm text-success mt-1">January 2024</p>
        </GlassCard>
      </div>

      {/* Featured Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-6">🌟 Featured Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAchievements
            .filter((achievement) => achievement.featured)
            .map((achievement) => {
              const IconComponent = getCategoryIcon(achievement.category);
              return (
                <GlassCard
                  key={achievement.id}
                  className="animate-card overflow-hidden hover group cursor-pointer"
                >
                  {achievement.image && (
                    <div className="relative">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge variant={getLevelBadge(achievement.level)}>
                          {achievement.level}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-4xl mb-2">{achievement.badge}</div>
                      </div>
                    </div>
                  )}
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
                        <p className="text-sm font-medium">
                          {achievement.points} points
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

  const renderAllAwards = () => (
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
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Awards Grid */}
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
                  <span className="text-muted-foreground">Category:</span>
                  <Badge variant="secondary" className="text-xs">
                    {achievement.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{achievement.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Points:</span>
                  <span className="font-medium">{achievement.points}</span>
                </div>
              </div>

              <div className="flex space-x-2 pt-4 border-t border-white/10">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Certificate
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
          Download and share your verified digital certificates for all
          achievements.
        </p>
      </div>

      {/* Certificate Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myAchievements.slice(0, 6).map((achievement) => (
          <GlassCard
            key={achievement.id}
            className="animate-card overflow-hidden hover group cursor-pointer"
          >
            <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 p-6 text-center">
              <div className="absolute top-4 left-4 text-yellow-500">
                <Medal className="w-6 h-6" />
              </div>
              <div className="absolute top-4 right-4 text-yellow-500">
                <Medal className="w-6 h-6" />
              </div>

              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Certificate of Achievement
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  This certifies that
                </p>
                <p className="text-base font-bold text-gray-800 mb-2">
                  Your Name
                </p>
                <p className="text-xs text-gray-600 mb-3">has earned the</p>
                <p className="text-sm font-semibold text-gray-800 mb-3">
                  {achievement.title}
                </p>
                <p className="text-xs text-gray-500">{achievement.date}</p>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
              </div>
            </div>

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Certificate ID:</span>
                <span className="font-mono text-xs">
                  {achievement.certificateId}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Verified:</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-success text-xs">Blockchain</span>
                </div>
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
              My <span className="text-gradient">Awards</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase your achievements, awards, and digital certificates with
              verified credentials and detailed accomplishment tracking.
            </p>
          </div>

          {/* Awards Tabs */}
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
                value="awards"
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
            <TabsContent value="awards">{renderAllAwards()}</TabsContent>
            <TabsContent value="certificates">
              {renderCertificates()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
