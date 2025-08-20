import { getAuthData } from "@/store/slice/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

function StudentProtectedRoute({ children }) {
  const user = useSelector(getAuthData);
  const navigate = useNavigate();

  useEffect(() => {
    if(user?.isAuthenticated && user?.role != 'student'){
      navigate('/page-not-found');
      toast.error("You are not authorized to access this page.");
    }
    else if (user?.role != "student") {
      navigate("/login");
      toast.error("You are not authorized to access this page.");
    }
  }, [user]);
  if (!user || user?.role != "student") {
    return null;
  }
  else if(user?.isAuthenticated && user?.role != 'student') return null;
  return children;
}

export default StudentProtectedRoute;
