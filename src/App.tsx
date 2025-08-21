import "@/components/ui/interactive-styles.css";
import "./global.css";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Interactive components
import { CustomCursor } from "@/components/ui/custom-cursor";
import { FloatingMenu } from "@/components/ui/floating-menu";
import { InteractiveBackground } from "@/components/ui/interactive-background";
import { LoadingAnimation } from "@/components/ui/loading-animation";
import { PageTransition } from "@/components/ui/page-transition";
import { ParticleSystem } from "@/components/ui/particle-system";
import { ScrollAnimations } from "@/components/ui/scroll-animations";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacultyProtectedRoute from "./components/protected/FacultyProtectedRoute";
import ParentProtectedRoute from "./components/protected/ParentProtectedRoute";
import StudentProtectedRoute from "./components/protected/StudentProtectedRoute";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Analytics from "./pages/Analytics";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import ParentDashboard from "./pages/ParentDashboard";
import ParentMessages from "./pages/ParentMessages";
import Partners from "./pages/Partners";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Terms from "./pages/Terms";
import ParentCommunications from "./pages/parent/ParentCommunications";
import ParentPortal from "./pages/parent/ParentPortal";
import ParentProfile from "./pages/parent/ParentProfile";
import ParentReports from "./pages/parent/ParentReports";
import StudentAssignments from "./pages/student/StudentAssignments";
import StudentAwards from "./pages/student/StudentAwards";
import StudentBehavior from "./pages/student/StudentBehavior";
import StudentParticipation from "./pages/student/StudentParticipation";
import StudentProfile from "./pages/student/StudentProfile";
import StudentProgress from "./pages/student/StudentProgress";
import StudentResults from "./pages/student/StudentResults";
import TeacherClasses from "./pages/teacher/TeacherClasses";
import TeacherGradebook from "./pages/teacher/TeacherGradebook";
import TeacherPortal from "./pages/teacher/TeacherPortal";
import TeacherProfile from "./pages/teacher/TeacherProfile";
import { useDirectLoginMutation } from "./store/api/user.api";
import { setAuth } from "./store/slice/authSlice";
import { store } from "./store/store";

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
            <Route
              path="/student"
              element={
                <StudentProtectedRoute>
                  <StudentDashboard />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/profile"
              element={
                <StudentProtectedRoute>
                  <StudentProfile />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/assignments"
              element={
                <StudentProtectedRoute>
                  <StudentAssignments />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/results"
              element={
                <StudentProtectedRoute>
                  <StudentResults />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/progress"
              element={
                <StudentProtectedRoute>
                  <StudentProgress />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/behavior"
              element={
                <StudentProtectedRoute>
                  <StudentBehavior />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/participation"
              element={
                <StudentProtectedRoute>
                  <StudentParticipation />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/student/awards"
              element={
                <StudentProtectedRoute>
                  <StudentAwards />
                </StudentProtectedRoute>
              }
            />

            <Route
              path="/teacher"
              element={
                <FacultyProtectedRoute>
                  <TeacherDashboard />
                </FacultyProtectedRoute>
              }
            />
            <Route
              path="/teacher/portal"
              element={
                <FacultyProtectedRoute>
                  <TeacherPortal />
                </FacultyProtectedRoute>
              }
            />
            <Route
              path="/teacher/profile"
              element={
                <FacultyProtectedRoute>
                  <TeacherProfile />
                </FacultyProtectedRoute>
              }
            />
            <Route
              path="/teacher/classes"
              element={
                <FacultyProtectedRoute>
                  <TeacherClasses />
                </FacultyProtectedRoute>
              }
            />
            <Route
              path="/teacher/gradebook"
              element={
                <FacultyProtectedRoute>
                  <TeacherGradebook />
                </FacultyProtectedRoute>
              }
            />

            <Route
              path="/parent"
              element={
                <ParentProtectedRoute>
                  <ParentDashboard />
                </ParentProtectedRoute>
              }
            />
            <Route
              path="/parent/portal"
              element={
                <ParentProtectedRoute>
                  <ParentPortal />
                </ParentProtectedRoute>
              }
            />
            <Route
              path="/parent/profile"
              element={
                <ParentProtectedRoute>
                  <ParentProfile />
                </ParentProtectedRoute>
              }
            />
            <Route
              path="/parent/reports"
              element={
                <ParentProtectedRoute>
                  <ParentReports />
                </ParentProtectedRoute>
              }
            />
            <Route
              path="/parent/communications"
              element={
                <ParentProtectedRoute>
                  <ParentCommunications />
                </ParentProtectedRoute>
              }
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

const Application = () => {
  const [login, {data, isSuccess, error, isLoading}] = useDirectLoginMutation();

  if(isLoading) return <LoadingAnimation />

  const dispatch = useDispatch();
  
  if(isSuccess) dispatch(setAuth({isAuthenticated: true, role: data?.data?.role}));
  useState(() => {
    login('')
  },[])  
  return (
    <>
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
      </>
  );
};

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Application />
  </Provider>
);
