import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Handshake,
  Users,
  Building2,
  GraduationCap,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Partners() {
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (partnersRef.current) {
      gsap.fromTo(
        partnersRef.current.querySelectorAll(".animate-card"),
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

  const partnerTypes = [
    {
      icon: Building2,
      title: "School Districts",
      description:
        "Partner with us to implement transparency solutions across your entire district.",
      benefits: [
        "District-wide licensing discounts",
        "Dedicated implementation support",
        "Custom training programs",
        "Priority technical support",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Technology Partners",
      description:
        "Integrate with our platform to enhance your educational technology offerings.",
      benefits: [
        "API access and documentation",
        "Technical integration support",
        "Co-marketing opportunities",
        "Revenue sharing programs",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: GraduationCap,
      title: "Educational Consultants",
      description:
        "Become a certified partner to help schools implement our transparency solutions.",
      benefits: [
        "Certification training program",
        "Implementation resources",
        "Ongoing professional development",
        "Referral commission structure",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Globe,
      title: "International Distributors",
      description:
        "Bring EduTransparency to new markets and regions around the world.",
      benefits: [
        "Exclusive territory rights",
        "Localization support",
        "Marketing materials",
        "Training and certification",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const currentPartners = [
    {
      name: "EduTech Solutions",
      type: "Technology Partner",
      description: "Student information system integration",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Learning Analytics Corp",
      type: "Technology Partner",
      description: "Advanced analytics and reporting",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Global Education Consultants",
      type: "Educational Consultant",
      description: "Implementation and training services",
      logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
    {
      name: "Metro School District",
      type: "School District",
      description: "50+ schools, 25,000+ students",
      logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    },
  ];

  const partnershipProcess = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Reach out to our partnerships team to discuss your goals",
    },
    {
      step: "2",
      title: "Discovery Call",
      description: "We'll learn about your organization and partnership needs",
    },
    {
      step: "3",
      title: "Proposal Review",
      description: "Receive a customized partnership proposal and agreement",
    },
    {
      step: "4",
      title: "Onboarding",
      description: "Complete training and get access to partner resources",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={partnersRef}>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Partnership handshake"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                  Partner With <span className="text-gradient">Us</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Join our mission to transform education through transparency.
                  Together, we can create better outcomes for students,
                  teachers, and families.
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Value Proposition */}
          <GlassCard className="animate-card p-8 mb-16 text-center">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              EduTransparency is rapidly growing in the education technology
              space. By partnering with us, you'll gain access to cutting-edge
              technology, a passionate team, and a proven platform that's making
              a real difference in schools worldwide.
            </p>
          </GlassCard>

          {/* Partnership Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Partnership Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <GlassCard key={index} className="animate-card p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6`}
                  >
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {type.description}
                  </p>
                  <h4 className="font-semibold mb-3">Partner Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Current Partners */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPartners.map((partner, index) => (
                <GlassCard
                  key={index}
                  className="animate-card p-6 text-center hover"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold mb-2">{partner.name}</h3>
                  <p className="text-sm text-primary mb-2">{partner.type}</p>
                  <p className="text-xs text-muted-foreground">
                    {partner.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Partnership Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              How to Become a Partner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipProcess.map((process, index) => (
                <GlassCard key={index} className="animate-card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{process.step}</span>
                  </div>
                  <h3 className="font-bold mb-3">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {process.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Partner Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <GlassCard className="animate-card p-8">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Partner Resources</h3>
              <p className="text-muted-foreground mb-6">
                Access comprehensive resources to help you succeed as an
                EduTransparency partner.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Technical documentation and API guides</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Marketing materials and co-branding guidelines</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Training programs and certification courses</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Dedicated partner support team</span>
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="animate-card p-8">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Support & Training</h3>
              <p className="text-muted-foreground mb-6">
                We're committed to your success with ongoing support and
                professional development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Quarterly partner webinars and updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Annual partner conference and networking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Priority technical support and account management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span>Sales training and lead generation support</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Call to Action */}
          <GlassCard className="animate-card p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to bring educational
              transparency to more schools and families. Contact our
              partnerships team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-gradient">
                <Handshake className="w-4 h-4 mr-2" />
                Become a Partner
              </Button>
              <Button variant="outline">
                <ArrowRight className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>
                <strong>Partnerships Team:</strong> partners@edutransparency.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-PARTNER
              </p>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
