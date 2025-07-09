import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Eye, Users, FileText, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Privacy() {
  const privacyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (privacyRef.current) {
      gsap.fromTo(
        privacyRef.current.querySelectorAll(".animate-card"),
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

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Student academic records and performance data",
        "Contact information for parents and guardians",
        "Teacher credentials and professional information",
        "Communication records between all parties",
        "Platform usage analytics and preferences",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "Facilitate communication between students, parents, and teachers",
        "Provide academic progress tracking and reporting",
        "Generate insights to improve educational outcomes",
        "Ensure platform security and prevent unauthorized access",
        "Comply with educational regulations and legal requirements",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection Measures",
      content: [
        "End-to-end encryption for all sensitive communications",
        "Regular security audits and vulnerability assessments",
        "Multi-factor authentication for all user accounts",
        "Secure cloud infrastructure with enterprise-grade protection",
        "Regular staff training on data privacy best practices",
      ],
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We never sell or rent personal information to third parties",
        "Data is only shared within the educational ecosystem (school, teachers, parents)",
        "Anonymous analytics may be shared for educational research",
        "Legal compliance may require disclosure in specific circumstances",
        "All sharing is governed by strict data protection agreements",
      ],
    },
    {
      icon: Eye,
      title: "Your Rights and Choices",
      content: [
        "Access and review all personal information we have about you",
        "Request corrections or updates to inaccurate information",
        "Delete your account and associated data at any time",
        "Control communication preferences and notification settings",
        "Opt-out of non-essential data collection and analytics",
      ],
    },
    {
      icon: Calendar,
      title: "Data Retention",
      content: [
        "Student academic records retained per school district policies",
        "Communication logs kept for 3 years after graduation",
        "Account information deleted within 30 days of closure",
        "Analytics data anonymized after 2 years",
        "Backup data purged according to our retention schedule",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={privacyRef}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and
              protect your personal information on our platform.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Privacy Commitment */}
          <GlassCard className="animate-card p-8 mb-12 text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Privacy Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              EduTransparency is committed to protecting the privacy and
              security of students, parents, and educators. We follow the
              highest standards of data protection and comply with all
              applicable educational privacy laws, including FERPA and COPPA.
            </p>
          </GlassCard>

          {/* Privacy Sections */}
          <div className="space-y-8 mb-12">
            {sections.map((section, index) => (
              <GlassCard key={index} className="animate-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          {/* Compliance Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <GlassCard className="animate-card p-6">
              <h3 className="text-xl font-bold mb-4">FERPA Compliance</h3>
              <p className="text-muted-foreground mb-4">
                We fully comply with the Family Educational Rights and Privacy
                Act (FERPA), ensuring that student educational records are
                protected and only accessible to authorized individuals.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Parent consent required for data sharing</li>
                <li>• Student rights transfer at age 18</li>
                <li>• Annual notification of privacy rights</li>
                <li>• Secure handling of educational records</li>
              </ul>
            </GlassCard>

            <GlassCard className="animate-card p-6">
              <h3 className="text-xl font-bold mb-4">COPPA Compliance</h3>
              <p className="text-muted-foreground mb-4">
                For students under 13, we comply with the Children's Online
                Privacy Protection Act (COPPA), requiring parental consent for
                data collection and providing additional protections.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Parental consent for data collection</li>
                <li>• Limited data collection for minors</li>
                <li>• Enhanced security measures</li>
                <li>• Right to review and delete child's data</li>
              </ul>
            </GlassCard>
          </div>

          {/* International Users */}
          <GlassCard className="animate-card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">International Users</h2>
            <p className="text-muted-foreground mb-4">
              For users outside the United States, we comply with applicable
              international privacy laws, including the General Data Protection
              Regulation (GDPR) for European users.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">GDPR Rights</h3>
                <p className="text-sm text-muted-foreground">
                  Right to access, rectify, erase, and port your data
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Data Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Lawful basis for processing educational data
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Data Transfers</h3>
                <p className="text-sm text-muted-foreground">
                  Appropriate safeguards for international transfers
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Contact Information */}
          <GlassCard className="animate-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or our data
              practices, please don't hesitate to contact us.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Privacy Officer:</strong> privacy@edutransparency.com
              </p>
              <p>
                <strong>Data Protection Officer:</strong>{" "}
                dpo@edutransparency.com
              </p>
              <p>
                <strong>Legal Department:</strong> legal@edutransparency.com
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-6">
              This policy may be updated periodically. We will notify users of
              significant changes via email and platform notifications.
            </p>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
