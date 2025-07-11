import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Menu,
  X,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  BarChart3,
  User,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetUserDataQuery, useLoginMutation, useLogoutMutation, userApi } from "@/store/api/user.api";
import { useMutation } from "@/hooks/useMutation.hook";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "@/store/slice/authSlice";

const navigation = [
  { name: "Home", href: "/", icon: GraduationCap },
  { name: "Student Portal", href: "/student", icon: BookOpen, role : "student" },
  { name: "Teacher Portal", href: "/teacher", icon: Users , role : "teacher" },
  { name: "Parent Portal", href: "/parent", icon: User, role: "parent" },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Achievements", href: "/achievements", icon: Award },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const authData = useSelector(getAuthData);
  console.log(authData)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [logout] = useMutation(useLogoutMutation);
  const logoutHandler = () => {
    
    logout({toastMessage: "Logging out...", args: {}});
    dispatch(userApi.util.resetApiState());
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <GlassCard
          className={cn(
            "transition-all duration-300",
            isScrolled ? "px-6 py-3" : "px-8 py-4",
          )}
        >
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">
                  EduTransparency
                </h1>
                <p className="text-xs text-muted-foreground">
                  Student-Parent Portal
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <>
                  { item?.role ? item?.role === authData?.role &&
                     <Link key={item.name} to={authData?.isAuthenticated ? item.href : "/login"}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "flex items-center space-x-2 transition-all duration-300",
                        isActive
                          ? "gradient-primary text-white shadow-glow"
                          : "hover:bg-white/10",
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link> : 
                     <Link key={item.name} to={authData?.isAuthenticated ? item.href : "/login"}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={cn(
                        "flex items-center space-x-2 transition-all duration-300",
                        isActive
                          ? "gradient-primary text-white shadow-glow"
                          : "hover:bg-white/10",
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Button>
                  </Link>}
                  </>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">{
              authData?.isAuthenticated ?
              <Button onClick={logoutHandler} variant="outline" size="sm" className="glass-nav">
                  Logout
                </Button> :
              <Link to="/login">
                <Button variant="outline" size="sm" className="glass-nav">
                  Login
                </Button>
              </Link>  }
              <Link to="/register">
                <Button size="sm" className="btn-gradient">
                  Register
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={cn(
                          "w-full justify-start space-x-2",
                          isActive && "gradient-primary text-white",
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Button>
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full btn-gradient">Register</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </GlassCard>
      </div>
    </header>
  );
}
