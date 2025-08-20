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
  Users,
  Briefcase,
  Edit,
  Save,
  Camera,
  Heart,
  Star,
  MessageSquare,
} from "lucide-react";
import { useGetAllChildrenQuery, useLazyGetParentProfileQuery } from "@/store/api/parent.api";

gsap.registerPlugin(ScrollTrigger);

export default function ParentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [getProfileData, {data}] = useLazyGetParentProfileQuery();
  const [profileData, setProfileData] = useState(data);
  const {data : children} = useGetAllChildrenQuery('');

  useEffect(() => {
    getProfileData('')
    setProfileData(data);
  },[data])

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

  const communicationPreferences = [
    { method: "Email", enabled: true },
    { method: "SMS", enabled: true },
    { method: "Phone Call", enabled: false },
    { method: "App Notifications", enabled: true },
  ];

  const recentInteractions = [
    {
      type: "Message",
      teacher: "Ms. Smith",
      subject: "Mathematics Progress",
      date: "2024-01-15",
    },
    {
      type: "Conference",
      teacher: "Mr. Davis",
      subject: "Parent-Teacher Meeting",
      date: "2024-01-10",
    },
    {
      type: "Report",
      teacher: "School System",
      subject: "Monthly Progress Report",
      date: "2024-01-05",
    },
  ];

  const childStats = [
    { label: "Current Grade", value: "A-", icon: Star },
    { label: "Attendance", value: "96%", icon: Calendar },
    { label: "Teachers", value: "6", icon: Users },
    { label: "Activities", value: "4", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-3xl mb-12">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Parent and child"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Parent <span className="text-gradient">Profile</span>
                </h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  Manage your profile, communication preferences, and stay
                  connected with your child's education.
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
                    <h2 className="text-3xl font-bold">{profileData?.parentProfile?.fullName}</h2>
                    <p className="text-muted-foreground text-lg">
                      {profileData?.parentProfile?.relationship} of{" "}
                      {children && children[0]?.studentProfile?.fullName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {profileData?.parentProfile?.occupation}
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

              {/* Child Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {childStats.map((stat, index) => (
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
              <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto glass">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="children">Children</TabsTrigger>
                <TabsTrigger value="communication">Communication</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
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
                              value={profileData?.parentProfile?.fullName}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  name: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData?.parentProfile?.fullName}</p>
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
                              value={profileData?.email}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  email: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData?.email}</p>
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
                              value={profileData?.parentProfile?.phoneNumber}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData?.parentProfile?.phoneNumber}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Emergency Contact
                        </label>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-muted-foreground" />
                          {isEditing ? (
                            <Input
                              value={profileData?.parentProfile?.contactInfo?.emergencyContact || "N/A"}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  emergencyContact: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">
                              {profileData?.contactInfo?.emergencyContact || "N/A"}
                            </p>
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
                              value={profileData?.parentProfile?.address || "N/A"}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  address: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData?.contactInfo?.address || "N/A"}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Occupation
                        </label>
                        <div className="flex items-center space-x-3">
                          <Briefcase className="w-5 h-5 text-muted-foreground" />
                          {isEditing ? (
                            <Input
                              value={profileData?.parentProfile?.occupation}
                              onChange={(e) =>
                                setProfileData({
                                  ...profileData,
                                  occupation: e.target.value,
                                })
                              }
                            />
                          ) : (
                            <p className="text-lg">{profileData?.parentProfile?.occupation}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Languages
                        </label>
                        {profileData?.parentProfile?.language && <div className="flex flex-wrap gap-2">
                          {profileData?.parentProfile?.language.map((language, index) => (
                            <Badge key={index} variant="outline">
                              {language}
                            </Badge>
                          ))}
                        </div>}
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Bio
                        </label>
                        {isEditing ? (
                          <textarea
                            className="w-full p-3 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm"
                            rows={3}
                            value={profileData?.parentProfile?.bio}
                            onChange={(e) =>
                              setProfileData({
                                ...profileData,
                                bio: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <p className="text-lg">{profileData?.parentProfile?.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TabsContent>

              <TabsContent value="children">
                <GlassCard className="animate-card p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Children Information
                  </h3>
                  {children && <div className="space-y-6">
                    {children?.map((child, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold">
                              {child?.studentProfile?.fullName}
                            </h4>
                            <p className="text-muted-foreground">
                              {child?.studentProfile?.batch?.batchName || "N/A"} - Section {child?.studentProfile?.section}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Roll No: {child?.studentProfile?.rollNumber || "N/A"}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold">A-</p>
                            <p className="text-xs text-muted-foreground">
                              Current Grade
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">96%</p>
                            <p className="text-xs text-muted-foreground">
                              Attendance
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">6</p>
                            <p className="text-xs text-muted-foreground">
                              Teachers
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">4</p>
                            <p className="text-xs text-muted-foreground">
                              Activities
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>}
                </GlassCard>
              </TabsContent>

              <TabsContent value="communication">
                <GlassCard className="animate-card p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Communication Preferences
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">
                        Preferred Communication Methods
                      </h4>
                      <div className="space-y-3">
                        {communicationPreferences.map((pref, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                          >
                            <span>{pref.method}</span>
                            <Badge
                              variant={pref.enabled ? "default" : "secondary"}
                            >
                              {pref.enabled ? "Enabled" : "Disabled"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">
                        Notification Settings
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Assignment Notifications",
                          "Attendance Alerts",
                          "Grade Updates",
                          "School Announcements",
                          "Teacher Messages",
                          "Event Reminders",
                        ].map((setting, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                          >
                            <span className="text-sm">{setting}</span>
                            <Badge variant="default">On</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </TabsContent>

              <TabsContent value="activity">
                <GlassCard className="animate-card p-8">
                  <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentInteractions.map((interaction, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">
                            {interaction.subject}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {interaction.type} with {interaction.teacher}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {interaction.date}
                          </p>
                        </div>
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
