import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import EditProfileModal from "@/components/ui/edit-profile-modal";
import Header from "@/components/layout/Header";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  ArrowLeft,
  Edit,
  Camera,
  CheckCircle,
  Save,
} from "lucide-react";
import { useLazyGetStudentProfileQuery } from "@/store/api/student.api";

export default function StudentProfile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [getProfileData, {data : studentData}] = useLazyGetStudentProfileQuery();


  useEffect(() => {
    getProfileData('');
  },[])
  // const [studentData, setStudentData] = useState({
  //   name: "John Doe",
  //   rollNumber: "2024001",
  //   class: "Grade 10",
  //   section: "A",
  //   email: "john.doe@school.edu",
  //   phone: "+1 (555) 123-4567",
  //   dateOfBirth: "2008-05-15",
  //   address: "123 Main Street, City, State 12345",
  //   parentContact: "+1 (555) 987-6543",
  //   admissionDate: "2020-08-15",
  //   bloodGroup: "O+",
  //   emergencyContact: "+1 (555) 111-2222",
  // });

   const handleSaveProfile = () => {};


  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/student"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Student <span className="text-gradient">Profile</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              View and manage your personal information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <GlassCard className="p-6 text-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Education pattern"
                    className="w-full h-full object-cover rounded-bl-3xl"
                  />
                </div>

                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <img
                      src={studentData?.avatar?.url}
                      alt="Student profile"
                      className="w-full h-full object-cover"
                    />
                    
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-2 right-2 rounded-full w-8 h-8 bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                  >
                    <Camera className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>
                <h2 className="text-2xl font-bold mb-2">{studentData?.studentProfile?.fullName || "......"}</h2>
                <p className="text-muted-foreground mb-1">
                  Roll No: {studentData?.studentProfile?.rollNumber}
                </p>
                <p className="text-muted-foreground mb-6">
                  {studentData?.class || 'A1'} - Section {studentData?.studentProfile?.section}
                </p>

                {saveSuccess && (
                  <div className="mb-4 p-3 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm text-success">
                      Profile updated successfully!
                    </span>
                  </div>
                )}

                <Button
                  className="w-full btn-gradient"
                  onClick={() => setIsEditModalOpen(true)}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </GlassCard>

              {/* Quick Stats */}
              <GlassCard className="p-6 mt-6">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Attendance</span>
                    <span className="font-semibold text-success">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Grade Average</span>
                    <span className="font-semibold text-primary">A-</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Assignments</span>
                    <span className="font-semibold">24/26</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rank</span>
                    <span className="font-semibold text-yellow-600">#5</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Information Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    Personal Information
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Full Name
                        </p>
                        <p className="font-medium">{studentData?.studentProfile?.fullName}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium text-[14px]">{studentData?.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{studentData?.studentProfile?.phoneNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Date of Birth
                        </p>
                        <p className="font-medium">
                          {new Date(studentData?.studentProfile?.dateOfBirth).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Roll Number
                        </p>
                        <p className="font-medium">{studentData?.studentProfile?.rollNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Class</p>
                        <p className="font-medium">
                          {studentData?.studentProfile?.batch?.batchName} - Section {studentData?.studentProfile?.section}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Admission Date
                        </p>
                        <p className="font-medium">
                          {studentData?.admissionDate || "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Blood Group
                        </p>
                        <p className="font-medium">{studentData?.bloodGroup || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Contact Information */}
              {studentData?.contactInfo && <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">{studentData.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Parent Contact
                      </p>
                      <p className="font-medium">{studentData.parentContact}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Emergency Contact
                      </p>
                      <p className="font-medium">
                        {studentData.emergencyContact}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>}

              {/* Academic Progress Summary */}
              <GlassCard className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Academic Progress Summary
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">A-</span>
                    </div>
                    <p className="font-semibold">Overall Grade</p>
                    <p className="text-sm text-muted-foreground">
                      Current Semester
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">95%</span>
                    </div>
                    <p className="font-semibold">Attendance</p>
                    <p className="text-sm text-muted-foreground">This Month</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">#5</span>
                    </div>
                    <p className="font-semibold">Class Rank</p>
                    <p className="text-sm text-muted-foreground">Out of 45</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {/* {<EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        studentData={studentData}
        onSave={handleSaveProfile}
      />} */}
    </div>
  );
}
