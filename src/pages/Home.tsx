import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  GraduationCap,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  BarChart3,
  Target,
  Shield,
  Heart,
  Zap,
  ArrowRight,
  Play,
  Quote,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
      );
    }

    // Stats counter animation
    if (statsRef.current) {
      gsap.fromTo(
        ".stat-number",
        { innerText: 0 },
        {
          innerText: (i, target) => target.getAttribute("data-count"),
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // Features stagger animation
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.querySelectorAll(".feature-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  const stats = [
    { number: "50000", label: "Active Students", suffix: "+" },
    { number: "2500", label: "Dedicated Teachers", suffix: "+" },
    { number: "98", label: "Parent Satisfaction", suffix: "%" },
    { number: "95", label: "Placement Rate", suffix: "%" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description:
        "Track student activities, assignments, and behavior in real-time",
      color: "text-blue-500",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Detailed insights into academic performance and progress",
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Multi-role Access",
      description: "Separate dashboards for students, teachers, and parents",
      color: "text-purple-500",
    },
    {
      icon: Heart,
      title: "Behavior Tracking",
      description: "Monitor social behavior and personality development",
      color: "text-red-500",
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Recognize and celebrate student accomplishments",
      color: "text-yellow-500",
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Stay updated with real-time alerts and notifications",
      color: "text-indigo-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content:
        "Finally, I can stay connected with my child's academic journey. The transparency is amazing!",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Teacher",
      content:
        "This platform has revolutionized how I track and report student progress.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Student",
      content:
        "I love seeing my progress and achievements in one place. It motivates me to do better!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-10" />

        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Students collaborating in modern classroom"
            className="w-full h-full object-cover opacity-10 blur-sm hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-40 h-40 gradient-secondary rounded-full opacity-20 blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />

        {/* Interactive Education Elements */}
        <div className="absolute top-32 right-32 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            alt="Student with laptop"
            className="w-12 h-12 rounded-xl object-cover"
          />
        </div>

        <div
          className="absolute bottom-32 left-32 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float hover:scale-110 transition-transform cursor-pointer"
          style={{ animationDelay: "-2s" }}
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            alt="Teachers collaborating"
            className="w-16 h-16 rounded-xl object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">
                Trusted by 50,000+ families
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Transform</span> Educational
              <br />
              Transparency
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Bridge the gap between students, parents, and teachers with our
              comprehensive monitoring and transparency platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/register">
                <Button size="lg" className="btn-gradient text-lg px-8 py-4">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="glass-nav text-lg px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Preview */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat, index) => (
                <GlassCard key={index} className="p-6 text-center hover">
                  <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                    <span className="stat-number" data-count={stat.number}>
                      0
                    </span>
                    {stat.suffix}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About College Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">
                  About Our Institution
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Excellence in Education Since{" "}
                <span className="text-gradient">1985</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                We are committed to providing world-class education with
                complete transparency. Our innovative approach combines
                traditional academic excellence with modern technology to ensure
                every student reaches their full potential.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "NAAC A+ Accredited Institution",
                  "ISO 9001:2015 Certified",
                  "Award-winning Faculty",
                  "State-of-the-art Infrastructure",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button className="btn-gradient">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* Hero Image for About Section */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern university campus with students"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">
                    Excellence in Education
                  </h4>
                  <p className="text-sm opacity-90">
                    State-of-the-art facilities for modern learning
                  </p>
                </div>
              </div>

              <GlassCard className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="relative w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-semibold mb-2">Academic Programs</h3>
                    <p className="text-sm text-muted-foreground">50+ Courses</p>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="relative w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Faculty</h3>
                    <p className="text-sm text-muted-foreground">
                      PhD Qualified
                    </p>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-semibold mb-2">Awards</h3>
                    <p className="text-sm text-muted-foreground">
                      100+ Recognitions
                    </p>
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="font-semibold mb-2">Growth Rate</h3>
                    <p className="text-sm text-muted-foreground">
                      25% Annually
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Additional Interactive Elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1581726690015-c9861c0e8835?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Students in library"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="font-semibold mb-1">Digital Library</h4>
                      <p className="text-xs opacity-90">10,000+ E-Books</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Science laboratory"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-600/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="font-semibold mb-1">Research Labs</h4>
                      <p className="text-xs opacity-90">Advanced Equipment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Student Behavior, Teacher Performance, etc. */}
      <section ref={featuresRef} className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive{" "}
              <span className="text-gradient">Monitoring System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track every aspect of the educational journey with our advanced
              monitoring and analytics platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassCard
                key={index}
                className="feature-card p-8 text-center hover group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${
                    feature.color === "text-blue-500"
                      ? "from-blue-500 to-blue-600"
                      : feature.color === "text-green-500"
                        ? "from-green-500 to-green-600"
                        : feature.color === "text-purple-500"
                          ? "from-purple-500 to-purple-600"
                          : feature.color === "text-red-500"
                            ? "from-red-500 to-red-600"
                            : feature.color === "text-yellow-500"
                              ? "from-yellow-500 to-yellow-600"
                              : "from-indigo-500 to-indigo-600"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Records Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80"
            alt="Corporate office buildings"
            className="w-full h-full object-cover opacity-5 hero-image"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Outstanding{" "}
              <span className="text-gradient">Placement Records</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our students consistently achieve excellent placement rates with
              top companies worldwide.
            </p>
          </div>

          {/* Company Logos Showcase */}
          <div className="mb-16 overflow-hidden">
            <div className="flex items-center space-x-8 animate-pulse">
              <div className="w-24 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold opacity-60">Google</span>
              </div>
              <div className="w-24 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold opacity-60">
                  Microsoft
                </span>
              </div>
              <div className="w-24 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold opacity-60">Amazon</span>
              </div>
              <div className="w-24 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold opacity-60">Apple</span>
              </div>
              <div className="w-24 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <span className="text-sm font-semibold opacity-60">Meta</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Graduation celebration"
                  className="w-16 h-16 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-full" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-4">95%</div>
              <h3 className="text-xl font-semibold mb-2">Placement Rate</h3>
              <p className="text-muted-foreground">
                Students placed in top companies
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Success celebration"
                  className="w-16 h-16 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-4">₹8.5L</div>
              <h3 className="text-xl font-semibold mb-2">Average Package</h3>
              <p className="text-muted-foreground">
                Annual salary for graduates
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="relative mb-6">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Corporate partnerships"
                  className="w-16 h-16 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">Partner Companies</h3>
              <p className="text-muted-foreground">
                Global recruitment partners
              </p>
            </GlassCard>
          </div>

          {/* Success Stories Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Student success story"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold mb-2">
                  Sarah's Success Story
                </h4>
                <p className="text-sm opacity-90">
                  From student to Software Engineer at Google
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Alumni achievement"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-lg font-bold mb-2">Industry Recognition</h4>
                <p className="text-sm opacity-90">
                  Alumni leading innovation worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Community Says</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from parents, students, and teachers who have experienced the
              power of educational transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard className="p-8 hover group cursor-pointer">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="ml-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Finally, I can stay connected with my child's academic journey.
                The transparency is amazing!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Parent</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 hover group cursor-pointer">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Dr. Michael Chen"
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="ml-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "This platform has revolutionized how I track and report student
                progress."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Dr. Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">Teacher</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 hover group cursor-pointer">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Emily Davis"
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="ml-4">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "I love seeing my progress and achievements in one place. It
                motivates me to do better!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Emily Davis</h4>
                  <p className="text-sm text-muted-foreground">Student</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-animated opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <GlassCard className="p-16 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience{" "}
              <span className="text-gradient">True Transparency</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Join thousands of families who have transformed their educational
              journey with our comprehensive monitoring platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/register">
                <Button size="lg" className="btn-gradient text-lg px-12 py-4">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-nav text-lg px-12 py-4"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
