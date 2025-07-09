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
  studentName?: string;
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

export default function Messages() {
  const [selectedThread, setSelectedThread] = useState<ChatThread | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);
  const [currentUser] = useState({
    id: "teacher-1",
    name: "Ms. Johnson",
    role: "teacher" as const,
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

  // Sample data
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
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "Hi Ms. Johnson, I wanted to discuss Emily's progress in mathematics. Could we schedule a meeting?",
        timestamp: "2024-01-15T14:30:00Z",
        status: "read",
      },
      unreadCount: 0,
      subject: "Emily Williams - Math Progress",
      studentName: "Emily Williams",
      isGroup: false,
      priority: "normal",
    },
    {
      id: "thread-2",
      participants: [
        {
          id: "parent-2",
          name: "Michael Chen",
          role: "parent",
          online: false,
        },
        {
          id: "teacher-1",
          name: "Ms. Johnson",
          role: "teacher",
          online: true,
        },
      ],
      lastMessage: {
        id: "msg-2",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "David has shown excellent improvement in his science project. I've attached his latest report.",
        timestamp: "2024-01-15T13:15:00Z",
        status: "delivered",
        attachments: [
          {
            id: "att-1",
            name: "David_Science_Report.pdf",
            type: "document",
            url: "#",
            size: "2.3 MB",
          },
        ],
      },
      unreadCount: 2,
      subject: "David Chen - Science Project Update",
      studentName: "David Chen",
      isGroup: false,
      priority: "normal",
    },
    {
      id: "thread-3",
      participants: [
        {
          id: "parent-3",
          name: "Lisa Rodriguez",
          role: "parent",
          online: true,
        },
        {
          id: "parent-4",
          name: "James Rodriguez",
          role: "parent",
          online: false,
        },
        {
          id: "teacher-1",
          name: "Ms. Johnson",
          role: "teacher",
          online: true,
        },
      ],
      lastMessage: {
        id: "msg-3",
        senderId: "parent-3",
        senderName: "Lisa Rodriguez",
        senderRole: "parent",
        content:
          "Thank you for the detailed feedback. We'll work on the homework schedule at home.",
        timestamp: "2024-01-15T11:45:00Z",
        status: "read",
      },
      unreadCount: 0,
      subject: "Sofia Rodriguez - Homework Discussion",
      studentName: "Sofia Rodriguez",
      isGroup: true,
      priority: "high",
    },
    {
      id: "thread-4",
      participants: [
        {
          id: "parent-5",
          name: "Amanda Johnson",
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
        id: "msg-4",
        senderId: "parent-5",
        senderName: "Amanda Johnson",
        senderRole: "parent",
        content: "Is there a parent-teacher conference scheduled this month?",
        timestamp: "2024-01-15T10:20:00Z",
        status: "delivered",
      },
      unreadCount: 1,
      subject: "Alex Johnson - Conference Request",
      studentName: "Alex Johnson",
      isGroup: false,
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
          "Hi Ms. Johnson, I hope you're doing well. I wanted to reach out regarding Emily's recent performance in mathematics.",
        timestamp: "2024-01-15T14:00:00Z",
        status: "read",
      },
      {
        id: "msg-1-2",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "Hello Sarah! Thank you for reaching out. Emily has been doing quite well overall. She's shown significant improvement in algebra concepts.",
        timestamp: "2024-01-15T14:15:00Z",
        status: "read",
      },
      {
        id: "msg-1-3",
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "That's wonderful to hear! I noticed she's been more confident with her homework. Are there any areas where she could use additional support?",
        timestamp: "2024-01-15T14:25:00Z",
        status: "read",
      },
      {
        id: "msg-1-4",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "She could benefit from extra practice with word problems. I can provide some additional resources if you'd like.",
        timestamp: "2024-01-15T14:28:00Z",
        status: "read",
      },
      {
        id: "msg-1-5",
        senderId: "parent-1",
        senderName: "Sarah Williams",
        senderRole: "parent",
        content:
          "That would be fantastic! Could we also schedule a brief meeting to discuss her progress in more detail?",
        timestamp: "2024-01-15T14:30:00Z",
        status: "read",
      },
    ],
    "thread-2": [
      {
        id: "msg-2-1",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "Hi Mr. Chen, I wanted to update you on David's excellent progress in his science project.",
        timestamp: "2024-01-15T13:00:00Z",
        status: "delivered",
      },
      {
        id: "msg-2-2",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "He's demonstrated remarkable understanding of the scientific method and his research on renewable energy is impressive.",
        timestamp: "2024-01-15T13:10:00Z",
        status: "delivered",
        attachments: [
          {
            id: "att-1",
            name: "David_Science_Report.pdf",
            type: "document",
            url: "#",
            size: "2.3 MB",
          },
          {
            id: "att-2",
            name: "Project_Photos.jpg",
            type: "image",
            url: "#",
            size: "1.8 MB",
          },
        ],
      },
      {
        id: "msg-2-3",
        senderId: "teacher-1",
        senderName: "Ms. Johnson",
        senderRole: "teacher",
        content:
          "I've attached his latest report and some photos of his project setup. He should be very proud of his work!",
        timestamp: "2024-01-15T13:15:00Z",
        status: "delivered",
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
      thread.participants.some((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const renderAttachment = (attachment: Attachment) => (
    <div
      key={attachment.id}
      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 max-w-xs"
    >
      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
        {attachment.type === "image" ? (
          <Image className="w-4 h-4 text-white" />
        ) : (
          <File className="w-4 h-4 text-white" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{attachment.name}</p>
        <p className="text-xs text-muted-foreground">{attachment.size}</p>
      </div>
      <div className="flex space-x-1">
        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
          <Eye className="w-3 h-3" />
        </Button>
        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
          <Download className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <Header />

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-7xl" ref={pageRef}>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-gradient">Messages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Communicate directly with parents and students. Share updates,
              discuss progress, and maintain strong educational partnerships.
            </p>
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
                        placeholder="Search conversations..."
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
                          <DialogTitle>New Message</DialogTitle>
                          <DialogDescription>
                            Start a new conversation with a parent or student.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">To:</label>
                            <Input placeholder="Select recipient..." />
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
                      Priority
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
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              {thread.isGroup ? (
                                <Users className="w-5 h-5 text-white" />
                              ) : (
                                <User className="w-5 h-5 text-white" />
                              )}
                            </div>
                            {thread.participants.some((p) => p.online) && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-sm truncate">
                                {thread.studentName}
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

                            <p className="text-xs text-muted-foreground mb-1">
                              {thread.participants
                                .filter((p) => p.id !== currentUser.id)
                                .map((p) => p.name)
                                .join(", ")}
                            </p>

                            <p className="text-sm text-muted-foreground truncate">
                              {thread.lastMessage.senderRole === "teacher" && (
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
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          {selectedThread.isGroup ? (
                            <Users className="w-5 h-5 text-white" />
                          ) : (
                            <User className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {selectedThread.studentName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedThread.participants
                              .filter((p) => p.id !== currentUser.id)
                              .map((p) => p.name)
                              .join(", ")}
                          </p>
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
                                variant="secondary"
                                className="text-xs px-1"
                              >
                                {message.senderRole}
                              </Badge>
                            </div>
                            <p className="text-sm">{message.content}</p>
                            {message.attachments && (
                              <div className="mt-2 space-y-2">
                                {message.attachments.map(renderAttachment)}
                              </div>
                            )}
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
                      Select a conversation
                    </h3>
                    <p className="text-muted-foreground">
                      Choose a conversation from the left to start messaging
                    </p>
                  </div>
                </GlassCard>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Group Message</h3>
                <p className="text-sm text-muted-foreground">
                  Send updates to multiple parents
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Schedule Meeting</h3>
                <p className="text-sm text-muted-foreground">
                  Book parent-teacher conferences
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Share Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Send study materials and guides
                </p>
              </GlassCard>

              <GlassCard className="p-6 text-center hover group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Send Alert</h3>
                <p className="text-sm text-muted-foreground">
                  Important notifications and updates
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
