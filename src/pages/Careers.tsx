import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Code,
  Palette,
  Users,
  BarChart3,
  Shield,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  GraduationCap,
  Coffee,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  const careersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (careersRef.current) {
      gsap.fromTo(
        careersRef.current.querySelectorAll(".animate-card"),
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

  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Build beautiful, responsive user interfaces for our educational platform using React, TypeScript, and modern web technologies.",
      requirements: [
        "3+ years of React/TypeScript experience",
        "Strong understanding of modern web development",
        "Experience with responsive design and accessibility",
        "Passion for education technology",
      ],
      icon: Code,
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Design intuitive, accessible interfaces that make educational transparency easy and engaging for all users.",
      requirements: [
        "2+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Experience with user research and testing",
        "Understanding of educational workflows",
      ],
      icon: Palette,
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Drive product strategy and roadmap for features that improve educational outcomes and user engagement.",
      requirements: [
        "4+ years of product management experience",
        "Experience with educational technology",
        "Strong analytical and communication skills",
        "Background in user-centered design",
      ],
      icon: BarChart3,
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Ensure our platform is secure, scalable, and reliable for schools and families worldwide.",
      requirements: [
        "3+ years of DevOps/Infrastructure experience",
        "Experience with AWS, Docker, and Kubernetes",
        "Knowledge of security best practices",
        "Understanding of educational data compliance",
      ],
      icon: Shield,
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Chicago / Remote",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Help schools and educators get the most value from our platform through onboarding, training, and ongoing support.",
      requirements: [
        "2+ years in customer success or account management",
        "Experience in education or EdTech",
        "Excellent communication and problem-solving skills",
        "Passion for helping educators succeed",
      ],
      icon: Users,
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "1+ years",
      description:
        "Develop and execute marketing strategies to reach educators, parents, and school administrators.",
      requirements: [
        "1+ years of digital marketing experience",
        "Experience with content marketing and SEO",
        "Knowledge of education market preferred",
        "Strong writing and creative skills",
      ],
      icon: Heart,
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
    },
    {
      icon: Coffee,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Professional development budget and conference attendance",
    },
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-competitive compensation and equity",
    },
    {
      icon: Clock,
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and stay productive",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative, inclusive, and mission-driven team",
    },
  ];

  const values = [
    {
      title: "Student-First",
      description:
        "Every decision we make prioritizes student success and wellbeing.",
    },
    {
      title: "Transparency",
      description:
        "We practice what we preach with open communication and honest feedback.",
    },
    {
      title: "Innovation",
      description:
        "We're always looking for better ways to serve the education community.",
    },
    {
      title: "Collaboration",
      description:
        "Great products come from great teamwork across all disciplines.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={careersRef}>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team working together"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                  Join Our <span className="text-gradient">Mission</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Help us transform education through transparency and
                  technology. Build the future of student-parent-teacher
                  communication.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <GlassCard className="animate-card p-8 mb-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Why EduTransparency?</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're building technology that makes a real difference in
              students' lives. Every feature we ship helps teachers teach
              better, parents stay informed, and students succeed. Join a team
              that's passionate about education and committed to creating
              meaningful impact.
            </p>
          </GlassCard>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <GlassCard key={index} className="animate-card p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <GlassCard key={index} className="animate-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <GlassCard key={index} className="animate-card p-8">
                  <div className="flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                          <position.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">
                            {position.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline">
                              {position.department}
                            </Badge>
                            <Badge variant="secondary">{position.type}</Badge>
                            <Badge variant="outline">
                              {position.experience}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {position.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">
                          Key Requirements:
                        </h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button className="btn-gradient">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Don't See Your Role */}
          <GlassCard className="animate-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate
              about education. Send us your resume and tell us how you'd like to
              contribute to our mission.
            </p>
            <Button className="btn-gradient">
              <Heart className="w-4 h-4 mr-2" />
              Submit Your Interest
            </Button>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
