import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Header from "@/components/layout/Header";
import {
  Send,
  Paperclip,
  Search,
  Phone,
  Video,
  MoreVertical,
  Smile,
  User,
  MessageCircle,
  Clock,
  CheckCheck,
  Check,
  AlertCircle,
  Star,
  Archive,
  Trash2,
  Filter,
  Plus,
  Users,
  BookOpen,
  Calendar,
  Image,
  File,
  Download,
  Eye,
  GraduationCap,
  Bell,
  Settings,
} from "lucide-react";

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: "teacher" | "parent" | "student";
  content: string;
  timestamp: string;
  status: "sent" | "delivered" | "read";
  attachments?: Attachment[];
  replyTo?: string;
}

interface Attachment {
  id: string;
  name: string;
  type: "image" | "document" | "video";
  url: string;
  size: string;
}

interface ChatThread {
  id: string;
  participants: Participant[];
  lastMessage: Message;
  unreadCount: number;
  subject: string;
  teacherName: string;
  subjectArea: string;
  isGroup: boolean;
  priority: "normal" | "high" | "urgent";
}

interface Participant {
  id: string;
  name: string;
  role: "teacher" | "parent" | "student";
  avatar?: string;
  online: boolean;
}

export default function ParentMessages() {
  const [selectedThread, setSelectedThread] = useState<ChatThread | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);
  const [currentUser] = useState({
    id: "parent-1",
    name: "Sarah Williams",
    role: "parent" as const,
  });
  const pageRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current.querySelectorAll(".animate-fade"),
        { opacity: 0, y: 20 },
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedThread]);

  // Sample data from parent perspective
  const chatThreads: ChatThread[] = [
    {
      id: "thread-1",
      participants: [
        {
          id: "parent-1",
          name: "Sarah Williams",
          role: "parent",
          online: true,
        },
        {
          id: "teacher-1",
          name: "Ms. Johnson",
          role: "teacher",
          online: true,
        },
      ],
      lastMessage: {
        id: "msg-1",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "Emily has been doing excellent work in class! I'd be happy to schedule a meeting to discuss her progress further.",
        timestamp: "2024-01-15T15:30:00Z",
        status: "read",
      },
      unreadCount: 0,
      subject: "Emily's Mathematics Progress",
      teacherName: "Ms. Johnson",
      subjectArea: "Mathematics",
      isGroup: false,
      priority: "normal",
    },
    {
      id: "thread-2",
      participants: [
        {
          id: "parent-1",
          name: "Sarah Williams",
          role: "parent",
          online: true,
        },
        {
          id: "teacher-2",
          name: "Mr. Davis",
          role: "teacher",
          online: false,
        },
      ],
      lastMessage: {
        id: "msg-2",
        senderId: "teacher-2",
        senderName: "Mr. Davis",
        senderRole: "teacher",
        content:
          "Emily's science project presentation was outstanding! She showed great understanding of the concepts.",
        timestamp: "2024-01-15T13:15:00Z",
        status: "delivered",
      },
      unreadCount: 1,
      subject: "Science Project Feedback",
      teacherName: "Mr. Davis",
      subjectArea: "Science",
      isGroup: false,
      priority: "normal",
    },
    {
      id: "thread-3",
      participants: [
        {
          id: "parent-1",
          name: "Sarah Williams",
          role: "parent",
          online: true,
        },
        {
          id: "teacher-3",
          name: "Mrs. Chen",
          role: "teacher",
          online: true,
        },
      ],
      lastMessage: {
        id: "msg-3",
        senderId: "teacher-3",
        senderName: "Mrs. Chen",
        senderRole: "teacher",
        content:
          "I wanted to discuss Emily's participation in the upcoming school play. She has a natural talent for drama!",
        timestamp: "2024-01-15T11:45:00Z",
        status: "read",
      },
      unreadCount: 0,
      subject: "Drama Club Opportunity",
      teacherName: "Mrs. Chen",
      subjectArea: "Arts",
      isGroup: false,
      priority: "high",
    },
    {
      id: "thread-4",
      participants: [
        {
          id: "parent-1",
          name: "Sarah Williams",
          role: "parent",
          online: true,
        },
        {
          id: "teacher-4",
          name: "Coach Martinez",
          role: "teacher",
          online: true,
        },
      ],
      lastMessage: {
        id: "msg-4",
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "Thank you for including Emily in the varsity team! She's so excited about the upcoming tournament.",
        timestamp: "2024-01-15T10:20:00Z",
        status: "delivered",
      },
      unreadCount: 0,
      subject: "Varsity Basketball Team",
      teacherName: "Coach Martinez",
      subjectArea: "Physical Education",
      isGroup: false,
      priority: "normal",
    },
    {
      id: "thread-5",
      participants: [
        {
          id: "parent-1",
          name: "Sarah Williams",
          role: "parent",
          online: true,
        },
        {
          id: "teacher-1",
          name: "Ms. Johnson",
          role: "teacher",
          online: true,
        },
        {
          id: "teacher-5",
          name: "Principal Roberts",
          role: "teacher",
          online: false,
        },
      ],
      lastMessage: {
        id: "msg-5",
        senderId: "teacher-5",
        senderName: "Principal Roberts",
        senderRole: "teacher",
        content:
          "We're pleased to inform you that Emily has been selected for the Academic Excellence Program.",
        timestamp: "2024-01-14T16:00:00Z",
        status: "read",
      },
      unreadCount: 2,
      subject: "Academic Excellence Program",
      teacherName: "Principal Roberts",
      subjectArea: "Administration",
      isGroup: true,
      priority: "urgent",
    },
  ];

  const messages: Record<string, Message[]> = {
    "thread-1": [
      {
        id: "msg-1-1",
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "Hi Ms. Johnson, I hope you're having a great week! I wanted to check in about Emily's progress in mathematics.",
        timestamp: "2024-01-15T14:00:00Z",
        status: "read",
      },
      {
        id: "msg-1-2",
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "She's been showing more confidence with her homework lately, and I'm curious about how she's doing in class.",
        timestamp: "2024-01-15T14:02:00Z",
        status: "read",
      },
      {
        id: "msg-1-3",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "Hello Sarah! Thank you for reaching out. I'm delighted to share that Emily has been doing exceptionally well.",
        timestamp: "2024-01-15T14:15:00Z",
        status: "read",
      },
      {
        id: "msg-1-4",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "She's shown remarkable improvement in algebra and has been actively participating in class discussions. Her problem-solving approach has become much more systematic.",
        timestamp: "2024-01-15T14:16:00Z",
        status: "read",
      },
      {
        id: "msg-1-5",
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "That's wonderful to hear! She mentioned struggling with word problems at home. Are there any specific areas we should focus on?",
        timestamp: "2024-01-15T14:25:00Z",
        status: "read",
      },
      {
        id: "msg-1-6",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "Emily has been doing excellent work in class! I'd be happy to schedule a meeting to discuss her progress further and share some additional practice materials.",
        timestamp: "2024-01-15T15:30:00Z",
        status: "read",
      },
    ],
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      return date.toLocaleDateString();
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3 text-gray-400" />;
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case "read":
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      default:
        return "bg-green-500";
    }
  };

  const getSubjectColor = (subject: string) => {
    const colors = {
      Mathematics: "from-blue-500 to-blue-600",
      Science: "from-green-500 to-green-600",
      Arts: "from-purple-500 to-purple-600",
      "Physical Education": "from-orange-500 to-orange-600",
      Administration: "from-yellow-500 to-yellow-600",
      English: "from-pink-500 to-pink-600",
    };
    return colors[subject] || "from-gray-500 to-gray-600";
  };

  const sendMessage = () => {
    if (!messageInput.trim() || !selectedThread) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderRole: currentUser.role,
      content: messageInput,
      timestamp: new Date().toISOString(),
      status: "sent",
    };

    // Add message to the thread (in real app, this would be an API call)
    setMessageInput("");
  };

  const filteredThreads = chatThreads.filter(
    (thread) =>
      thread.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      thread.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      thread.subjectArea.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl" ref={pageRef}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Parent <span className="text-gradient">Messages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected with your child's teachers. Discuss progress, share
              concerns, and collaborate for your child's success.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <GlassCard className="p-4 text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="text-xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">
                Active Conversations
              </div>
            </GlassCard>

            <GlassCard className="p-4 text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <div className="text-xl font-bold">8</div>
              <div className="text-xs text-muted-foreground">
                Teachers Connected
              </div>
            </GlassCard>

            <GlassCard className="p-4 text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Bell className="w-4 h-4 text-white" />
              </div>
              <div className="text-xl font-bold">3</div>
              <div className="text-xs text-muted-foreground">
                Unread Messages
              </div>
            </GlassCard>

            <GlassCard className="p-4 text-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="text-xl font-bold">2</div>
              <div className="text-xs text-muted-foreground">
                Scheduled Meetings
              </div>
            </GlassCard>
          </div>

          {/* Chat Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Chat List */}
            <div className="lg:col-span-1">
              <GlassCard className="animate-fade h-full flex flex-col">
                {/* Search and Actions */}
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search teachers or subjects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Dialog
                      open={showNewMessageModal}
                      onOpenChange={setShowNewMessageModal}
                    >
                      <DialogTrigger asChild>
                        <Button size="icon" className="btn-gradient">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>New Message to Teacher</DialogTitle>
                          <DialogDescription>
                            Start a conversation with your child's teacher.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">
                              Teacher:
                            </label>
                            <Input placeholder="Select teacher..." />
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              Subject:
                            </label>
                            <Input placeholder="Message subject..." />
                          </div>
                          <div>
                            <label className="text-sm font-medium">
                              Message:
                            </label>
                            <Textarea
                              placeholder="Type your message..."
                              rows={4}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setShowNewMessageModal(false)}
                          >
                            Cancel
                          </Button>
                          <Button className="btn-gradient">Send Message</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Filter className="w-3 h-3 mr-1" />
                      All
                    </Button>
                    <Button size="sm" variant="ghost">
                      Unread
                    </Button>
                    <Button size="sm" variant="ghost">
                      Urgent
                    </Button>
                  </div>
                </div>

                {/* Chat Threads */}
                <ScrollArea className="flex-1">
                  <div className="space-y-1 p-2">
                    {filteredThreads.map((thread) => (
                      <div
                        key={thread.id}
                        onClick={() => setSelectedThread(thread)}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedThread?.id === thread.id
                            ? "bg-primary/20 border border-primary/30"
                            : "hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${getSubjectColor(thread.subjectArea)}`}
                            >
                              <GraduationCap className="w-5 h-5 text-white" />
                            </div>
                            {thread.participants.some((p) => p.online) && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-sm truncate">
                                {thread.teacherName}
                              </h3>
                              <div className="flex items-center space-x-1">
                                {thread.priority !== "normal" && (
                                  <div
                                    className={`w-2 h-2 rounded-full ${getPriorityColor(thread.priority)}`}
                                  />
                                )}
                                <span className="text-xs text-muted-foreground">
                                  {formatTime(thread.lastMessage.timestamp)}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {thread.subjectArea}
                              </Badge>
                              {thread.isGroup && (
                                <Badge variant="secondary" className="text-xs">
                                  Group
                                </Badge>
                              )}
                            </div>

                            <p className="text-sm text-muted-foreground truncate mb-1">
                              {thread.subject}
                            </p>

                            <p className="text-xs text-muted-foreground truncate">
                              {thread.lastMessage.senderRole === "parent" && (
                                <span className="text-blue-500">You: </span>
                              )}
                              {thread.lastMessage.content}
                            </p>

                            {thread.unreadCount > 0 && (
                              <div className="flex justify-end mt-1">
                                <Badge className="bg-primary text-xs">
                                  {thread.unreadCount}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </GlassCard>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-2">
              {selectedThread ? (
                <GlassCard className="animate-fade h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="p-4 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${getSubjectColor(selectedThread.subjectArea)}`}
                        >
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {selectedThread.teacherName}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {selectedThread.subjectArea}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {selectedThread.subject}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="icon" variant="ghost">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Calendar className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages[selectedThread.id]?.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.senderId === currentUser.id
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[70%] ${
                              message.senderId === currentUser.id
                                ? "bg-primary text-white"
                                : "bg-white/10"
                            } rounded-lg p-3`}
                          >
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-xs font-medium">
                                {message.senderName}
                              </span>
                              <Badge
                                variant={
                                  message.senderRole === "teacher"
                                    ? "default"
                                    : "secondary"
                                }
                                className="text-xs px-1"
                              >
                                {message.senderRole}
                              </Badge>
                            </div>
                            <p className="text-sm">{message.content}</p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs opacity-70">
                                {formatTime(message.timestamp)}
                              </span>
                              {message.senderId === currentUser.id && (
                                <div className="flex items-center">
                                  {getStatusIcon(message.status)}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="p-4 border-t border-white/10">
                    <div className="flex items-end space-x-2">
                      <Button size="icon" variant="ghost">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Type your message..."
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                              e.preventDefault();
                              sendMessage();
                            }
                          }}
                          rows={1}
                          className="resize-none"
                        />
                      </div>
                      <Button size="icon" variant="ghost">
                        <Smile className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={sendMessage}
                        disabled={!messageInput.trim()}
                        className="btn-gradient"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              ) : (
                <GlassCard className="animate-fade h-full flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Select a teacher
                    </h3>
                    <p className="text-muted-foreground">
                      Choose a conversation to start messaging with your child's
                      teacher
                    </p>
                  </div>
                </GlassCard>
              )}
            </div>
          </div>

          {/* Teacher Directory */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Your Child's Teachers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Ms. Johnson",
                  subject: "Mathematics",
                  email: "johnson@school.edu",
                  online: true,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "Mr. Davis",
                  subject: "Science",
                  email: "davis@school.edu",
                  online: false,
                  color: "from-green-500 to-green-600",
                },
                {
                  name: "Mrs. Chen",
                  subject: "Arts",
                  email: "chen@school.edu",
                  online: true,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  name: "Coach Martinez",
                  subject: "Physical Education",
                  email: "martinez@school.edu",
                  online: true,
                  color: "from-orange-500 to-orange-600",
                },
              ].map((teacher, index) => (
                <GlassCard key={index} className="p-6 text-center hover">
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-gradient-to-br ${teacher.color}`}
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    {teacher.online && (
                      <div className="absolute bottom-1 right-1/2 transform translate-x-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{teacher.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {teacher.subject}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {teacher.email}
                  </p>
                  <Button size="sm" className="w-full btn-gradient">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
