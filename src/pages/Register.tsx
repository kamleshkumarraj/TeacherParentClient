import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/glass-card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  BookOpen,
  Users,
  User,
  ArrowLeft,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // Student Specific
    rollNumber: "",
    class: "",
    section: "",
    dateOfBirth: "",
    address: "",
    // Teacher Specific
    employeeId: "",
    department: "",
    subject: "",
    qualification: "",
    experience: "",
    // Parent Specific
    occupation: "",
    studentRollNumber: "",
    relationship: "",
    emergencyContact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration data:", { ...formData, userType });
  };

  const userTypes = [
    {
      value: "student",
      label: "Student",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      description: "Access assignments, results, and track your progress",
    },
    {
      value: "teacher",
      label: "Teacher",
      icon: Users,
      color: "from-green-500 to-green-600",
      description: "Manage students, upload assignments and results",
    },
    {
      value: "parent",
      label: "Parent",
      icon: User,
      color: "from-purple-500 to-purple-600",
      description: "Monitor your child's academic progress and behavior",
    },
  ];

  const steps = [
    { id: 1, title: "Account Type", description: "Choose your role" },
    { id: 2, title: "Basic Info", description: "Personal information" },
    { id: 3, title: "Additional Details", description: "Role-specific info" },
    { id: 4, title: "Verification", description: "Confirm your details" },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Choose Your Role</h3>
              <p className="text-muted-foreground">
                Select the option that best describes you
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {userTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setUserType(type.value)}
                  className={cn(
                    "p-6 rounded-xl border-2 transition-all duration-300 text-left",
                    userType === type.value
                      ? "border-primary bg-primary/10 scale-105"
                      : "border-white/20 hover:border-white/40 hover:bg-white/5",
                  )}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                        type.color,
                      )}
                    >
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">
                        {type.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {type.description}
                      </p>
                    </div>
                    {userType === type.value && (
                      <CheckCircle className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Basic Information</h3>
              <p className="text-muted-foreground">
                Tell us a bit about yourself
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="glass border-white/20 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="glass border-white/20 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-10 glass border-white/20 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="pl-10 glass border-white/20 focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="pl-10 pr-10 glass border-white/20 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="pl-10 pr-10 glass border-white/20 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Additional Details</h3>
              <p className="text-muted-foreground">
                {userType === "student" && "Student-specific information"}
                {userType === "teacher" && "Teaching credentials and details"}
                {userType === "parent" && "Parental information"}
              </p>
            </div>

            {userType === "student" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rollNumber">Roll Number</Label>
                    <Input
                      id="rollNumber"
                      placeholder="2024001"
                      value={formData.rollNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, rollNumber: e.target.value })
                      }
                      className="glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Select
                      value={formData.class}
                      onValueChange={(value) =>
                        setFormData({ ...formData, class: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                        <SelectItem value="6">Grade 6</SelectItem>
                        <SelectItem value="7">Grade 7</SelectItem>
                        <SelectItem value="8">Grade 8</SelectItem>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                        <SelectItem value="11">Grade 11</SelectItem>
                        <SelectItem value="12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="section">Section</Label>
                    <Select
                      value={formData.section}
                      onValueChange={(value) =>
                        setFormData({ ...formData, section: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Select section" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Section A</SelectItem>
                        <SelectItem value="B">Section B</SelectItem>
                        <SelectItem value="C">Section C</SelectItem>
                        <SelectItem value="D">Section D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      className="pl-10 glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Textarea
                      id="address"
                      placeholder="Enter your full address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="pl-10 glass border-white/20 focus:border-primary min-h-[100px]"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {userType === "teacher" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input
                      id="employeeId"
                      placeholder="EMP001"
                      value={formData.employeeId}
                      onChange={(e) =>
                        setFormData({ ...formData, employeeId: e.target.value })
                      }
                      className="glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) =>
                        setFormData({ ...formData, department: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="social-studies">
                          Social Studies
                        </SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="physical-education">
                          Physical Education
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Specialization</Label>
                  <Input
                    id="subject"
                    placeholder="e.g., Physics, Chemistry, Biology"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Highest Qualification</Label>
                    <Select
                      value={formData.qualification}
                      onValueChange={(value) =>
                        setFormData({ ...formData, qualification: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) =>
                        setFormData({ ...formData, experience: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {userType === "parent" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input
                      id="occupation"
                      placeholder="Your profession"
                      value={formData.occupation}
                      onChange={(e) =>
                        setFormData({ ...formData, occupation: e.target.value })
                      }
                      className="glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Select
                      value={formData.relationship}
                      onValueChange={(value) =>
                        setFormData({ ...formData, relationship: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                        <SelectItem value="grandparent">Grandparent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentRollNumber">
                    Student's Roll Number
                  </Label>
                  <Input
                    id="studentRollNumber"
                    placeholder="Enter your child's roll number"
                    value={formData.studentRollNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentRollNumber: e.target.value,
                      })
                    }
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyContact">Emergency Contact</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="emergencyContact"
                      type="tel"
                      placeholder="Alternative contact number"
                      value={formData.emergencyContact}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emergencyContact: e.target.value,
                        })
                      }
                      className="pl-10 glass border-white/20 focus:border-primary"
                      required
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Review & Confirm</h3>
              <p className="text-muted-foreground">
                Please review your information before submitting
              </p>
            </div>

            <GlassCard className="p-6 space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br",
                    userTypes.find((t) => t.value === userType)?.color,
                  )}
                >
                  {(() => {
                    const selectedType = userTypes.find(
                      (t) => t.value === userType,
                    );
                    if (selectedType) {
                      const IconComponent = selectedType.icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    }
                    return null;
                  })()}
                </div>
                <div>
                  <h4 className="font-semibold">
                    {userTypes.find((t) => t.value === userType)?.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">Account Type</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span>
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span>{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span>{formData.phone}</span>
                </div>

                {userType === "student" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Roll Number:
                      </span>
                      <span>{formData.rollNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Class:</span>
                      <span>
                        Grade {formData.class} - Section {formData.section}
                      </span>
                    </div>
                  </>
                )}

                {userType === "teacher" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Employee ID:
                      </span>
                      <span>{formData.employeeId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department:</span>
                      <span className="capitalize">{formData.department}</span>
                    </div>
                  </>
                )}

                {userType === "parent" && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Occupation:</span>
                      <span>{formData.occupation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Child's Roll No:
                      </span>
                      <span>{formData.studentRollNumber}</span>
                    </div>
                  </>
                )}
              </div>
            </GlassCard>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="rounded border-primary/20"
                />
                <label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-10" />

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 gradient-secondary rounded-full opacity-20 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      {/* Back to home button */}
      <Link
        to="/"
        className="absolute top-8 left-8 z-10 flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>

      <div className="relative w-full max-w-2xl mx-auto p-6">
        <GlassCard className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-gradient">
                  EduTransparency
                </h1>
                <p className="text-xs text-muted-foreground">
                  Student-Parent Portal
                </p>
              </div>
            </Link>

            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-muted-foreground">
              Join thousands of families experiencing educational transparency
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                      currentStep >= step.id
                        ? "bg-primary text-white"
                        : "bg-white/10 text-muted-foreground",
                    )}
                  >
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        "w-full h-0.5 mx-2 transition-all duration-300",
                        currentStep > step.id ? "bg-primary" : "bg-white/20",
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">
                {steps[currentStep - 1]?.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {steps[currentStep - 1]?.description}
              </p>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit}>
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="glass border-white/20"
              >
                Previous
              </Button>

              {currentStep < 4 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  disabled={
                    (currentStep === 1 && !userType) ||
                    (currentStep === 2 &&
                      (!formData.firstName ||
                        !formData.lastName ||
                        !formData.email ||
                        !formData.phone ||
                        !formData.password ||
                        formData.password !== formData.confirmPassword))
                  }
                  className="btn-gradient"
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="btn-gradient">
                  Create Account
                </Button>
              )}
            </div>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
