import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Users,
  Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    role: "parent",
  });

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current.querySelectorAll(".animate-card"),
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@edutransparency.com",
      description: "Send us an email and we'll respond within 24 hours",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak with our support team Monday to Friday, 9AM-6PM EST",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Education Street, Learning City, LC 12345",
      description: "Schedule an in-person meeting at our headquarters",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday, 9:00 AM - 6:00 PM EST",
      description: "We're here to help during business hours",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const supportOptions = [
    {
      icon: Users,
      title: "General Inquiries",
      description: "Questions about our platform, pricing, or features",
      email: "info@edutransparency.com",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Having trouble with the platform? We're here to help",
      email: "support@edutransparency.com",
    },
    {
      icon: MessageSquare,
      title: "Partnership Opportunities",
      description: "Interested in partnering with us or becoming a reseller?",
      email: "partnerships@edutransparency.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4" ref={contactRef}>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl mb-16">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Contact us"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Have questions? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <GlassCard
                key={index}
                className="animate-card p-6 text-center hover"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                <p className="text-primary font-medium mb-2">{info.details}</p>
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <GlassCard className="animate-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      I am a...
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                      <option value="administrator">
                        School Administrator
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-white/20 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-gradient w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Support Options */}
            <div className="space-y-6">
              <GlassCard className="animate-card p-6">
                <h2 className="text-2xl font-bold mb-6">How Can We Help?</h2>
                <div className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{option.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {option.description}
                          </p>
                          <a
                            href={`mailto:${option.email}`}
                            className="text-primary text-sm font-medium hover:underline"
                          >
                            {option.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="animate-card p-6">
                <h3 className="text-lg font-bold mb-4">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">
                      How quickly will I get a response?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to all inquiries within 24 hours
                      during business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Is there a phone support option?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! Call us at +1 (555) 123-4567 during business hours
                      for immediate assistance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Can I schedule a demo?</h4>
                    <p className="text-sm text-muted-foreground">
                      Absolutely! Mention "demo request" in your message and
                      we'll set up a personalized demonstration.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Emergency Contact */}
          <GlassCard className="animate-card p-8 text-center bg-red-500/10 border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 text-red-500">
              Emergency Contact
            </h2>
            <p className="text-muted-foreground mb-4">
              For urgent technical issues affecting student safety or critical
              school operations:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency: +1 (555) 911-HELP
              </Button>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                emergency@edutransparency.com
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
