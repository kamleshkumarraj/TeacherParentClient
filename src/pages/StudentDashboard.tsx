import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, BookOpen, ClipboardList, FileText, Users, ShieldCheck } from "lucide-react";
import { Outlet } from "react-router-dom";

const sideMenu = [
  { label: "Profile", icon: User },
  { label: "Assignments", icon: BookOpen },
  { label: "Results", icon: ClipboardList },
  { label: "Projects", icon: FileText },
  { label: "Parent Connect", icon: Users },
  { label: "Transparency", icon: ShieldCheck },
];


export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="col-span-2 bg-white shadow-md p-4 space-y-4">
        {sideMenu.map((item, idx) => (
          <Button
            key={idx}
            variant="ghost"
            className="w-full justify-start text-left text-gray-700 hover:bg-gray-200"
          >
            <item.icon className="mr-2 w-4 h-4" />
            {item.label}
          </Button>
        ))}
      </aside>

      <Outlet />
     
    </div>
  );
}
