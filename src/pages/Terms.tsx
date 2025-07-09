import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GlassCard } from "@/components/ui/glass-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  Scale,
  Gavel,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Terms() {
  const termsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (termsRef.current) {
      gsap.fromTo(
        termsRef.current.querySelectorAll(".animate-card"),
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={termsRef}>
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our educational
              transparency platform.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          {/* Quick Overview */}
          <GlassCard className="animate-card p-8 mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Terms Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              By accessing and using EduTransparency, you agree to be bound by
              these Terms of Service. These terms govern your use of our
              platform and outline your rights and responsibilities as a user.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">Educational Use Only</h3>
                <p className="text-sm text-muted-foreground">
                  Our platform is designed exclusively for educational purposes
                  and authorized school communications.
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="font-semibold mb-2">User Responsibilities</h3>
                <p className="text-sm text-muted-foreground">
                  Users must maintain account security and use the platform
                  appropriately and lawfully.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Main Terms Sections */}
          <div className="space-y-8 mb-12">
            {/* Acceptance of Terms */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Scale className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By creating an account or using any part of the
                  EduTransparency platform, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service
                  and our Privacy Policy.
                </p>
                <p>
                  If you are using this service on behalf of a school or
                  educational institution, you represent that you have the
                  authority to bind that entity to these terms.
                </p>
              </div>
            </GlassCard>

            {/* User Accounts and Responsibilities */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">
                  2. User Accounts and Responsibilities
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">
                  Account Creation
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>
                    • You must provide accurate and complete information when
                    creating your account
                  </li>
                  <li>
                    • You are responsible for maintaining the confidentiality of
                    your login credentials
                  </li>
                  <li>
                    • You must notify us immediately of any unauthorized use of
                    your account
                  </li>
                  <li>
                    • One person may not create multiple accounts for the same
                    role
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground">
                  Account Usage
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>
                    • Use the platform only for its intended educational
                    purposes
                  </li>
                  <li>• Respect the privacy and rights of other users</li>
                  <li>
                    • Do not share account access with unauthorized individuals
                  </li>
                  <li>
                    • Report any suspicious activity or security concerns
                    immediately
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Acceptable Use Policy */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">3. Acceptable Use Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">
                  Permitted Uses
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>
                    • Communicating about student academic progress and behavior
                  </li>
                  <li>• Sharing educational resources and assignments</li>
                  <li>• Tracking and monitoring student performance</li>
                  <li>
                    • Coordinating parent-teacher conferences and meetings
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-foreground">
                  Prohibited Activities
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>
                    • Uploading or sharing inappropriate, harmful, or illegal
                    content
                  </li>
                  <li>• Harassment, bullying, or threatening other users</li>
                  <li>
                    • Attempting to gain unauthorized access to other accounts
                    or data
                  </li>
                  <li>
                    • Using the platform for commercial purposes without
                    authorization
                  </li>
                  <li>
                    • Interfering with the security or integrity of the platform
                  </li>
                </ul>
              </div>
            </GlassCard>

            {/* Data and Privacy */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">4. Data and Privacy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our collection, use, and
                  protection of your personal information is governed by our
                  Privacy Policy, which is incorporated into these terms by
                  reference.
                </p>
                <p>
                  By using our platform, you consent to the collection and use
                  of your information as described in our Privacy Policy. We
                  comply with all applicable privacy laws, including FERPA and
                  COPPA.
                </p>
              </div>
            </GlassCard>

            {/* Intellectual Property */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <Gavel className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The EduTransparency platform, including its software, design,
                  text, graphics, and other content, is owned by EduTransparency
                  and is protected by copyright, trademark, and other
                  intellectual property laws.
                </p>
                <p>
                  You retain ownership of any content you submit to the
                  platform, but grant us a license to use, store, and process
                  that content as necessary to provide our services.
                </p>
              </div>
            </GlassCard>

            {/* Limitations and Disclaimers */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">
                  6. Limitations and Disclaimers
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-lg font-semibold text-foreground">
                  Service Availability
                </h3>
                <p>
                  While we strive to provide continuous service, we do not
                  guarantee that the platform will be available 100% of the
                  time. We may perform maintenance, updates, or experience
                  technical difficulties that could temporarily affect service.
                </p>

                <h3 className="text-lg font-semibold text-foreground">
                  Limitation of Liability
                </h3>
                <p>
                  EduTransparency shall not be liable for any indirect,
                  incidental, special, or consequential damages arising from
                  your use of the platform, even if we have been advised of the
                  possibility of such damages.
                </p>
              </div>
            </GlassCard>

            {/* Termination */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">7. Termination</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  You may terminate your account at any time by contacting us or
                  using the account deletion feature in your settings. We may
                  terminate or suspend your account if you violate these terms
                  or engage in prohibited activities.
                </p>
                <p>
                  Upon termination, your access to the platform will cease, and
                  we may delete your account data in accordance with our data
                  retention policies and applicable law.
                </p>
              </div>
            </GlassCard>

            {/* Changes to Terms */}
            <GlassCard className="animate-card p-8">
              <div className="flex items-start space-x-4 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">8. Changes to Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We may update these Terms of Service from time to time to
                  reflect changes in our services, legal requirements, or
                  business practices. We will notify users of significant
                  changes via email and platform notifications.
                </p>
                <p>
                  Your continued use of the platform after such changes
                  constitutes acceptance of the updated terms.
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Contact Information */}
          <GlassCard className="animate-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Terms?</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please
              contact our legal team.
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Legal Department:</strong> legal@edutransparency.com
              </p>
              <p>
                <strong>General Inquiries:</strong> contact@edutransparency.com
              </p>
              <p>
                <strong>Address:</strong> 123 Education Street, Learning City,
                LC 12345
              </p>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
