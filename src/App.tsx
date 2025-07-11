import "./global.css";
import "@/components/ui/interactive-styles.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Interactive components
import { ParticleSystem } from "@/components/ui/particle-system";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { FloatingMenu } from "@/components/ui/floating-menu";
import { InteractiveBackground } from "@/components/ui/interactive-background";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollAnimations } from "@/components/ui/scroll-animations";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentAssignments from "./pages/student/StudentAssignments";
import StudentResults from "./pages/student/StudentResults";
import StudentProgress from "./pages/student/StudentProgress";
import StudentBehavior from "./pages/student/StudentBehavior";
import StudentParticipation from "./pages/student/StudentParticipation";
import StudentAwards from "./pages/student/StudentAwards";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherProfile from "./pages/teacher/TeacherProfile";
import TeacherClasses from "./pages/teacher/TeacherClasses";
import TeacherGradebook from "./pages/teacher/TeacherGradebook";
import TeacherPortal from "./pages/teacher/TeacherPortal";
import ParentDashboard from "./pages/ParentDashboard";
import ParentProfile from "./pages/parent/ParentProfile";
import ParentReports from "./pages/parent/ParentReports";
import ParentCommunications from "./pages/parent/ParentCommunications";
import ParentPortal from "./pages/parent/ParentPortal";
import Analytics from "./pages/Analytics";
import Achievements from "./pages/Achievements";
import Messages from "./pages/Messages";
import ParentMessages from "./pages/ParentMessages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import {Provider} from 'react-redux'
import { store } from "./store/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
      <TooltipProvider>
        {/* Interactive background elements */}
        <InteractiveBackground />
        <ParticleSystem />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Floating action menu */}
        <FloatingMenu />

        {/* Scroll animations */}
        <ScrollAnimations />

        {/* Scroll progress indicator */}
        <ScrollProgress />

        {/* Toast notifications */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/student/profile" element={<StudentProfile />} />
              <Route
                path="/student/assignments"
                element={<StudentAssignments />}
              />
              <Route path="/student/results" element={<StudentResults />} />
              <Route path="/student/progress" element={<StudentProgress />} />
              <Route path="/student/behavior" element={<StudentBehavior />} />
              <Route
                path="/student/participation"
                element={<StudentParticipation />}
              />
              <Route path="/student/awards" element={<StudentAwards />} />
              <Route path="/teacher" element={<TeacherDashboard />} />
              <Route path="/teacher/portal" element={<TeacherPortal />} />
              <Route path="/teacher/profile" element={<TeacherProfile />} />
              <Route path="/teacher/classes" element={<TeacherClasses />} />
              <Route path="/teacher/gradebook" element={<TeacherGradebook />} />
              <Route path="/parent" element={<ParentDashboard />} />
              <Route path="/parent/portal" element={<ParentPortal />} />
              <Route path="/parent/profile" element={<ParentProfile />} />
              <Route path="/parent/reports" element={<ParentReports />} />
              <Route
                path="/parent/communications"
                element={<ParentCommunications />}
              />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/parent-messages" element={<ParentMessages />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/news" element={<News />} />
              <Route path="/partners" element={<Partners />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </BrowserRouter>
      </TooltipProvider>
  );
};

createRoot(document.getElementById("root")!).render(

    <Provider store={store}>
      <ToastContainer
        closeButton={true}
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
      />
      <App />
    </Provider>
);
