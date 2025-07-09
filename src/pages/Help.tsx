import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Search,
  Book,
  Video,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  User,
  Users,
  GraduationCap,
  Lightbulb,
  Settings,
  Shield,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Help() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (helpRef.current) {
      gsap.fromTo(
        helpRef.current.querySelectorAll(".animate-card"),
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

  const categories = [
    {
      icon: User,
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      articles: 12,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "For Parents",
      description: "Parent-specific guides and tutorials",
      articles: 8,
      color: "from-green-500 to-green-600",
    },
    {
      icon: GraduationCap,
      title: "For Teachers",
      description: "Teacher resources and best practices",
      articles: 15,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Book,
      title: "For Students",
      description: "Student guides and tips for success",
      articles: 6,
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Settings,
      title: "Account Management",
      description: "Profile settings and account preferences",
      articles: 10,
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Data protection and privacy controls",
      articles: 7,
      color: "from-teal-500 to-teal-600",
    },
  ];

  const popularArticles = [
    {
      title: "How to Set Up Your Parent Account",
      category: "Getting Started",
      views: "2.3k views",
      difficulty: "Beginner",
    },
    {
      title: "Understanding Your Child's Progress Reports",
      category: "For Parents",
      views: "1.8k views",
      difficulty: "Beginner",
    },
    {
      title: "Creating and Managing Assignments",
      category: "For Teachers",
      views: "1.5k views",
      difficulty: "Intermediate",
    },
    {
      title: "Setting Up Grade Notifications",
      category: "Account Management",
      views: "1.2k views",
      difficulty: "Beginner",
    },
    {
      title: "Privacy Settings for Student Data",
      category: "Privacy & Security",
      views: "987 views",
      difficulty: "Advanced",
    },
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking the 'Forgot Password' link on the login page. Enter your email address and we'll send you a reset link.",
      category: "Account",
    },
    {
      question: "Can I have multiple children on one parent account?",
      answer:
        "Yes! You can add multiple children to your parent account. Go to Account Settings > Children and click 'Add Child' to connect additional student profiles.",
      category: "Account",
    },
    {
      question: "How often is the data updated?",
      answer:
        "Student data is updated in real-time as teachers input information. Grades, attendance, and behavior reports are immediately available to parents.",
      category: "Data",
    },
    {
      question: "Is my child's information secure?",
      answer:
        "Absolutely. We use enterprise-grade security measures including data encryption, secure servers, and strict access controls to protect all student information.",
      category: "Security",
    },
    {
      question: "How do I contact my child's teacher through the platform?",
      answer:
        "Use the Messages feature to communicate directly with teachers. You can access this from your parent dashboard or the dedicated Messages page.",
      category: "Communication",
    },
    {
      question: "What should I do if I notice an error in my child's grades?",
      answer:
        "Contact the relevant teacher immediately through our messaging system. Include details about the specific assignment or grade in question.",
      category: "Support",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={helpRef}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              How can we <span className="text-gradient">help you?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Find answers to your questions, explore our guides, or get in
              touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg glass border-white/20"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
              <Book className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Browse Articles</h3>
              <p className="text-muted-foreground">
                Explore our comprehensive knowledge base
              </p>
            </GlassCard>

            <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
              <Video className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Watch Tutorials</h3>
              <p className="text-muted-foreground">
                Step-by-step video guides for all features
              </p>
            </GlassCard>

            <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
              <MessageSquare className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
              <p className="text-muted-foreground">
                Get personalized help from our team
              </p>
            </GlassCard>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <GlassCard
                  key={index}
                  className="animate-card p-6 hover cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">
                      {category.articles} articles
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <GlassCard
                    key={index}
                    className="animate-card p-4 hover cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{article.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.views}</span>
                          <Badge
                            variant={
                              article.difficulty === "Beginner"
                                ? "default"
                                : article.difficulty === "Intermediate"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {article.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <GlassCard key={index} className="animate-card">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <span className="font-semibold">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {faq.category}
                        </Badge>
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* Still Need Help */}
          <GlassCard className="animate-card p-8 text-center">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to
              help you get the most out of EduTransparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline">
                <Video className="w-4 h-4 mr-2" />
                Schedule a Demo
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
