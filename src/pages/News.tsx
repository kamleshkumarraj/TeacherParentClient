import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Newspaper } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function News() {
  const newsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (newsRef.current) {
      gsap.fromTo(
        newsRef.current.querySelectorAll(".animate-card"),
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

  const newsArticles = [
    {
      title: "EduTransparency Launches Advanced AI Analytics",
      excerpt:
        "New predictive analytics features help teachers identify at-risk students earlier and provide targeted interventions.",
      date: "January 15, 2024",
      author: "Marketing Team",
      category: "Product Update",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Partnership with 500+ Schools Nationwide",
      excerpt:
        "EduTransparency now serves over 50,000 students across the United States, expanding our impact on educational transparency.",
      date: "January 10, 2024",
      author: "Communications",
      category: "Company News",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "New Parent Mobile App Released",
      excerpt:
        "Stay connected with your child's education on-the-go with our new mobile application for iOS and Android.",
      date: "December 20, 2023",
      author: "Product Team",
      category: "Product Update",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "EduTransparency Wins EdTech Innovation Award",
      excerpt:
        "Recognized for excellence in educational technology and commitment to improving student-parent-teacher communication.",
      date: "December 15, 2023",
      author: "Press Release",
      category: "Awards",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Enhanced Security Features for Student Data",
      excerpt:
        "New encryption protocols and security measures ensure maximum protection for sensitive educational information.",
      date: "November 30, 2023",
      author: "Security Team",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Research Study: Impact on Student Outcomes",
      excerpt:
        "Independent study shows 23% improvement in student engagement when using our transparency platform.",
      date: "November 15, 2023",
      author: "Research Team",
      category: "Research",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={newsRef}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Latest <span className="text-gradient">News</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest developments, product releases, and
              insights from EduTransparency.
            </p>
          </div>

          {/* Featured Article */}
          <GlassCard className="animate-card mb-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">{newsArticles[0].category}</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  {newsArticles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{newsArticles[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{newsArticles[0].author}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </GlassCard>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <GlassCard
                key={index}
                className="animate-card overflow-hidden hover cursor-pointer group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <Badge className="mb-3" variant="outline">
                    {article.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Newsletter Signup */}
          <GlassCard className="animate-card p-8 text-center mt-16">
            <Newspaper className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest news, product
              updates, and educational insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
