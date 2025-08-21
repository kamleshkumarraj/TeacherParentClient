import { getAuthData } from "@/store/slice/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentProtectedRoute({ children }) {
  const user = useSelector(getAuthData);
  const navigate = useNavigate();

  useEffect(() => {
    if(user?.isAuthenticated && user?.role != 'student'){
      navigate('/page-not-found');
    }
    else if (user?.role != "student") {
      navigate("/login");
    }
  }, [user]);
  if (!user || user?.role != "student") {
    return null;
  }
  else if(user?.isAuthenticated && user?.role != 'student') return null;
  return children;
}

export default StudentProtectedRoute;
