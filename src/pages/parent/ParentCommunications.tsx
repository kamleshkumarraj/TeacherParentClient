import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import {
  Search,
  Plus,
  MessageSquare,
  Phone,
  Calendar,
  Bell,
  User,
  Mail,
  Video,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ParentCommunications() {
  const [searchTerm, setSearchTerm] = useState("");
  const communicationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (communicationsRef.current) {
      gsap.fromTo(
        communicationsRef.current.querySelectorAll(".animate-card"),
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

  const teachers = [
    {
      id: 1,
      name: "Ms. Sarah Smith",
      subject: "Mathematics",
      email: "sarah.smith@school.edu",
      phone: "+1 (555) 123-4567",
      officeHours: "Mon, Wed 2-4 PM",
      lastMessage: "Great progress on algebra!",
      messageTime: "2 hours ago",
      unreadCount: 2,
      online: true,
    },
    {
      id: 2,
      name: "Mr. John Davis",
      subject: "Science",
      email: "john.davis@school.edu",
      phone: "+1 (555) 234-5678",
      officeHours: "Tue, Thu 1-3 PM",
      lastMessage: "Science project feedback ready",
      messageTime: "1 day ago",
      unreadCount: 0,
      online: false,
    },
    {
      id: 3,
      name: "Ms. Emily Johnson",
      subject: "English",
      email: "emily.johnson@school.edu",
      phone: "+1 (555) 345-6789",
      officeHours: "Wed, Fri 3-5 PM",
      lastMessage: "Excellent essay submission!",
      messageTime: "3 days ago",
      unreadCount: 1,
      online: true,
    },
  ];

  const recentMessages = [
    {
      id: 1,
      from: "Ms. Smith",
      subject: "Emily's Math Progress",
      preview:
        "I wanted to update you on Emily's excellent progress in algebra...",
      time: "2 hours ago",
      unread: true,
      priority: "normal",
      type: "message",
    },
    {
      id: 2,
      from: "School Administration",
      subject: "Parent-Teacher Conference",
      preview: "Reminder: Your scheduled conference is tomorrow at 3 PM...",
      time: "1 day ago",
      unread: false,
      priority: "high",
      type: "announcement",
    },
    {
      id: 3,
      from: "Mr. Davis",
      subject: "Science Fair Participation",
      preview: "Emily has shown interest in participating in the upcoming...",
      time: "2 days ago",
      unread: false,
      priority: "normal",
      type: "message",
    },
  ];

  const upcomingMeetings = [
    {
      id: 1,
      teacher: "Ms. Smith",
      subject: "Mathematics Review",
      date: "2024-01-20",
      time: "3:00 PM",
      type: "In-Person",
      status: "Confirmed",
    },
    {
      id: 2,
      teacher: "Mr. Davis",
      subject: "Science Project Discussion",
      date: "2024-01-25",
      time: "2:30 PM",
      type: "Video Call",
      status: "Pending",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "Winter Break Schedule",
      content: "School will be closed from December 23rd to January 7th.",
      date: "2024-01-10",
      priority: "high",
      read: false,
    },
    {
      id: 2,
      title: "Science Fair Registration",
      content:
        "Registration for annual science fair is now open until January 20th.",
      date: "2024-01-08",
      priority: "normal",
      read: true,
    },
    {
      id: 3,
      title: "New Lunch Menu",
      content:
        "Updated cafeteria menu featuring healthier options starting next week.",
      date: "2024-01-05",
      priority: "low",
      read: true,
    },
  ];

  const communicationStats = [
    {
      title: "Unread Messages",
      value: "3",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Upcoming Meetings",
      value: "2",
      icon: Calendar,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Active Teachers",
      value: "6",
      icon: User,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "New Announcements",
      value: "1",
      icon: Bell,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Parent teacher communication"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Communication <span className="text-gradient">Hub</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Stay connected with teachers, schedule meetings, and never
                  miss important school updates.
                </p>
              </div>
            </div>
          </div>

          <div ref={communicationsRef}>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {communicationStats.map((stat, index) => (
                <GlassCard key={index} className="animate-card p-6 hover">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.color}`}
                    >
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Quick Actions */}
            <GlassCard className="animate-card p-6 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold">Communication Center</h2>
                  <p className="text-muted-foreground">
                    Connect with teachers and stay updated on school activities
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search messages..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Link to="/parent-messages">
                    <Button className="btn-gradient">
                      <Plus className="w-4 h-4 mr-2" />
                      New Message
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassCard>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Teachers Directory */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">Emily's Teachers</h3>
                <div className="space-y-4">
                  {teachers.map((teacher) => (
                    <div
                      key={teacher.id}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            {teacher.online && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold">{teacher.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {teacher.subject}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {teacher.officeHours}
                            </p>
                          </div>
                        </div>
                        {teacher.unreadCount > 0 && (
                          <Badge variant="destructive">
                            {teacher.unreadCount}
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm mb-3">
                        <p className="text-muted-foreground truncate">
                          {teacher.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {teacher.messageTime}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          Schedule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Recent Messages */}
              <GlassCard className="animate-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Recent Messages</h3>
                  <Link to="/parent-messages">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {recentMessages.map((message) => (
                    <div
                      key={message.id}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-sm">
                            {message.from}
                          </h4>
                          {message.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                          {message.priority === "high" && (
                            <Badge variant="destructive" className="text-xs">
                              High
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {message.time}
                        </span>
                      </div>
                      <h5 className="font-medium text-sm mb-1">
                        {message.subject}
                      </h5>
                      <p className="text-xs text-muted-foreground truncate">
                        {message.preview}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Upcoming Meetings and Announcements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Upcoming Meetings */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Upcoming Meetings
                </h3>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <div
                      key={meeting.id}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{meeting.subject}</h4>
                          <p className="text-sm text-muted-foreground">
                            with {meeting.teacher}
                          </p>
                        </div>
                        <Badge
                          variant={
                            meeting.status === "Confirmed"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {meeting.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{meeting.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{meeting.time}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {meeting.type}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          {meeting.type === "Video Call" ? (
                            <>
                              <Video className="w-4 h-4 mr-1" />
                              Join Call
                            </>
                          ) : (
                            <>
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Confirm
                            </>
                          )}
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Reschedule
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Schedule New Meeting
                  </Button>
                </div>
              </GlassCard>

              {/* School Announcements */}
              <GlassCard className="animate-card p-6">
                <h3 className="text-xl font-semibold mb-6">
                  School Announcements
                </h3>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-sm">
                            {announcement.title}
                          </h4>
                          {!announcement.read && (
                            <div className="w-2 h-2 bg-primary rounded-full" />
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {announcement.priority === "high" && (
                            <AlertCircle className="w-4 h-4 text-red-500" />
                          )}
                          <span className="text-xs text-muted-foreground">
                            {announcement.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {announcement.content}
                      </p>
                      <Badge
                        variant={
                          announcement.priority === "high"
                            ? "destructive"
                            : announcement.priority === "normal"
                              ? "default"
                              : "secondary"
                        }
                        className="mt-2 text-xs"
                      >
                        {announcement.priority === "high"
                          ? "Important"
                          : announcement.priority === "normal"
                            ? "General"
                            : "Info"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Quick Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
                <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Call School</h4>
                <p className="text-muted-foreground mb-4">
                  Direct line to school office
                </p>
                <Button variant="outline" className="w-full">
                  (555) 123-SCHOOL
                </Button>
              </GlassCard>

              <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Email Office</h4>
                <p className="text-muted-foreground mb-4">
                  Send email to administration
                </p>
                <Button variant="outline" className="w-full">
                  office@school.edu
                </Button>
              </GlassCard>

              <GlassCard className="animate-card p-6 text-center hover cursor-pointer">
                <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">Emergency</h4>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency contact
                </p>
                <Button variant="outline" className="w-full">
                  (555) 911-HELP
                </Button>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
