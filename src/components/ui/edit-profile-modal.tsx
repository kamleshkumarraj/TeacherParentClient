import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Camera,
  Upload,
  Save,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Edit,
  Check,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentData: {
    name: string;
    rollNumber: string;
    class: string;
    section: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    address: string;
    parentContact: string;
    admissionDate: string;
    bloodGroup: string;
    emergencyContact: string;
  };
  onSave: (data: any) => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  studentData,
  onSave,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState(studentData);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isLoading, setSIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState("personal");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setSIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const updatedData = {
        ...formData,
        profileImage: profileImage || undefined,
      };

      onSave(updatedData);
      onClose();
    } catch (error) {
      console.error("Failed to save profile:", error);
    } finally {
      setSIsLoading(false);
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {/* Profile Image Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-16 h-16 text-white" />
            )}
          </div>
          <label
            htmlFor="profile-image"
            className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          >
            <Camera className="w-5 h-5 text-gray-600" />
          </label>
          <input
            id="profile-image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Click the camera icon to upload a new profile picture
        </p>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={cn("pl-10", errors.name && "border-destructive")}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="text-sm text-destructive flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={cn("pl-10", errors.email && "border-destructive")}
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-destructive flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className={cn("pl-10", errors.phone && "border-destructive")}
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-destructive flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              className={cn(
                "pl-10",
                errors.dateOfBirth && "border-destructive",
              )}
            />
          </div>
          {errors.dateOfBirth && (
            <p className="text-sm text-destructive flex items-center space-x-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.dateOfBirth}</span>
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="bloodGroup">Blood Group</Label>
          <Select
            value={formData.bloodGroup}
            onValueChange={(value) => handleInputChange("bloodGroup", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select blood group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+</SelectItem>
              <SelectItem value="A-">A-</SelectItem>
              <SelectItem value="B+">B+</SelectItem>
              <SelectItem value="B-">B-</SelectItem>
              <SelectItem value="AB+">AB+</SelectItem>
              <SelectItem value="AB-">AB-</SelectItem>
              <SelectItem value="O+">O+</SelectItem>
              <SelectItem value="O-">O-</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address *</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className={cn(
              "pl-10 min-h-[100px]",
              errors.address && "border-destructive",
            )}
            placeholder="Enter your full address"
          />
        </div>
        {errors.address && (
          <p className="text-sm text-destructive flex items-center space-x-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.address}</span>
          </p>
        )}
      </div>
    </div>
  );

  const renderAcademicInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="rollNumber">Roll Number</Label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="rollNumber"
              value={formData.rollNumber}
              className="pl-10 bg-muted cursor-not-allowed"
              placeholder="Roll number"
              disabled
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Roll number cannot be changed
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="admissionDate">Admission Date</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="admissionDate"
              type="date"
              value={formData.admissionDate}
              className="pl-10 bg-muted cursor-not-allowed"
              disabled
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Admission date cannot be changed
          </p>
        </div>

        <div className="space-y-2">
          <Label>Class & Section</Label>
          <div className="flex space-x-2">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {formData.class}
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              Section {formData.section}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">
            Contact administration to change class assignment
          </p>
        </div>
      </div>
    </div>
  );

  const renderContactInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="parentContact">Parent Contact</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="parentContact"
              value={formData.parentContact}
              onChange={(e) =>
                handleInputChange("parentContact", e.target.value)
              }
              className="pl-10"
              placeholder="Parent's phone number"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="emergencyContact">Emergency Contact</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              id="emergencyContact"
              value={formData.emergencyContact}
              onChange={(e) =>
                handleInputChange("emergencyContact", e.target.value)
              }
              className="pl-10"
              placeholder="Emergency contact number"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "academic", label: "Academic Info", icon: BookOpen },
    { id: "contact", label: "Contact Info", icon: Phone },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Edit className="w-5 h-5" />
            <span>Edit Profile</span>
          </DialogTitle>
          <DialogDescription>
            Update your profile information. Fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-muted p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors",
                  activeTab === tab.id
                    ? "bg-background shadow-sm"
                    : "hover:bg-background/50",
                )}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "personal" && renderPersonalInfo()}
            {activeTab === "academic" && renderAcademicInfo()}
            {activeTab === "contact" && renderContactInfo()}
          </div>
        </div>

        <DialogFooter className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4" />
            <span>Changes will be reflected immediately after saving</span>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} disabled={isLoading}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isLoading}
              className="btn-gradient"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
