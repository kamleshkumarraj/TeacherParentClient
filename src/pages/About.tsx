import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Users,
  Target,
  Award,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Star,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current.querySelectorAll(".animate-card"),
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

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description:
        "We believe in open communication between all stakeholders in education.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Student-Centered",
      description:
        "Every decision we make puts student success and wellbeing at the center.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to improve educational outcomes and experiences.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "We protect student and family data with the highest security standards.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Our platform is designed to be accessible to all families and educators.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code to customer service.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Students Served" },
    { number: "2,500+", label: "Teachers Connected" },
    { number: "35,000+", label: "Parents Engaged" },
    { number: "500+", label: "Schools Partnered" },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former educator with 15 years of experience in educational technology.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Software architect passionate about building scalable educational platforms.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "UX designer focused on creating intuitive interfaces for education.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "David Wilson",
      role: "Head of Engineering",
      bio: "Full-stack developer committed to reliable and secure educational technology.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={aboutRef}>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                  About <span className="text-gradient">EduTransparency</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  We're building the future of educational transparency,
                  connecting students, parents, and teachers through innovative
                  technology and meaningful insights.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <GlassCard className="animate-card p-8 mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To bridge the communication gap between students, parents, and
              educators by providing a transparent, comprehensive platform that
              promotes student success through collaborative monitoring,
              real-time insights, and meaningful engagement in the educational
              journey.
            </p>
          </GlassCard>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="animate-card p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </GlassCard>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <GlassCard className="animate-card p-8">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  EduTransparency was born from a simple observation: parents,
                  teachers, and students often struggled to stay connected in
                  meaningful ways. As educators and parents ourselves, we
                  experienced firsthand the challenges of maintaining clear
                  communication about student progress.
                </p>
                <p>
                  Founded in 2020 by a team of educators and technologists, we
                  set out to create a platform that would make educational
                  transparency accessible, actionable, and engaging for all
                  stakeholders.
                </p>
                <p>
                  Today, we're proud to serve thousands of families and
                  educators worldwide, helping them build stronger relationships
                  and better support student success through our comprehensive
                  monitoring and communication platform.
                </p>
              </div>
            </GlassCard>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Educational collaboration"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students learning"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <GlassCard
                  key={index}
                  className="animate-card p-6 text-center hover"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <GlassCard
                  key={index}
                  className="animate-card p-6 text-center hover"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <GlassCard className="animate-card p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to transform educational transparency at your school? Let's
              work together to create better outcomes for students, parents, and
              educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient">Get Started Today</Button>
              <Button variant="outline">Contact Our Team</Button>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
