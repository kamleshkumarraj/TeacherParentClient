import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/layout/Header";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  Edit,
  Save,
  Camera,
  Star,
  Trophy,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Ms. Sarah Johnson",
    email: "sarah.johnson@school.edu",
    phone: "+1 (555) 123-4567",
    address: "123 Education Street, Learning City, LC 12345",
    department: "Mathematics",
    joiningDate: "2018-08-15",
    employeeId: "TCH-2018-001",
    qualification: "M.Ed in Mathematics",
    experience: "6 years",
    subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
    classes: ["Grade 9A", "Grade 10B", "Grade 11C"],
    bio: "Passionate mathematics educator with 6 years of experience in creating engaging learning environments for students.",
  });

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current.querySelectorAll(".animate-card"),
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

  const achievements = [
    { title: "Teacher of the Year", year: "2023", icon: Trophy },
    { title: "Innovation in Education", year: "2022", icon: Star },
    { title: "Student Favorite", year: "2021", icon: Award },
  ];

  const stats = [
    { label: "Students Taught", value: "156", icon: Users },
    { label: "Subjects", value: "4", icon: BookOpen },
    { label: "Experience", value: "6 Years", icon: Clock },
    { label: "Classes", value: "3", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Teacher classroom"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Teacher <span className="text-gradient">Profile</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Manage your professional information, achievements, and
                  teaching preferences.
                </p>
              </div>
            </div>
          </div>

          <div ref={profileRef}>
            {/* Profile Overview */}
            <GlassCard className="animate-card p-8 mb-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <Button
                      size="sm"
                      className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{profileData.name}</h2>
                    <p className="text-muted-foreground text-lg">
                      {profileData.department} Teacher
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Employee ID: {profileData.employeeId}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-gradient mt-4 lg:mt-0"
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <GlassCard key={index} className="p-4 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </GlassCard>

            {/* Profile Details */}
            <Tabs defaultValue="personal" className="space-y-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto glass">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <GlassCard className="animate-card p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Full Name
                        </label>
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-muted-foreground" />
                          {isEditing ? (
                            <Input
                              value={profileData.name}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  name: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData.name}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-muted-foreground" />
                          {isEditing ? (
                            <Input
                              type="email"
                              value={profileData.email}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  email: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Phone
                        </label>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-muted-foreground" />
                          {isEditing ? (
                            <Input
                              value={profileData.phone}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Address
                        </label>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                          {isEditing ? (
                            <Input
                              value={profileData.address}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  address: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData.address}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Joining Date
                        </label>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-muted-foreground" />
                          <p className="text-lg">{profileData.joiningDate}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Bio
                        </label>
                        {isEditing ? (
                          <textarea
                            className="w-full p-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
                            rows={3}
                            value={profileData.bio}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                bio: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <p className="text-lg">{profileData.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TabsContent>

              <TabsContent value="professional">
                <GlassCard className="animate-card p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Professional Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Department
                        </label>
                        <p className="text-lg">{profileData.department}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Qualification
                        </label>
                        <p className="text-lg">{profileData.qualification}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Experience
                        </label>
                        <p className="text-lg">{profileData.experience}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Subjects Teaching
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {profileData.subjects.map((subject, index) => (
                            <Badge key={index} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Classes Assigned
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {profileData.classes.map((className, index) => (
                            <Badge key={index} variant="secondary">
                              {className}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TabsContent>

              <TabsContent value="achievements">
                <GlassCard className="animate-card p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Achievements & Recognition
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/5 rounded-lg border border-white/10 text-center"
                      >
                        <achievement.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h4 className="font-bold text-lg mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {achievement.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
