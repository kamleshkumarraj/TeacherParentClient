import { getAuthData } from "@/store/slice/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function FacultyProtectedRoute({ children }) {
  const user = useSelector(getAuthData);
  const navigate = useNavigate();
  useEffect(() => {
    if(user?.isAuthenticated && user?.role != 'faculty'){
      navigate('/page-not-found');
      toast.error("You are not authorized to access this page.");
    }
    else if (!user || user?.role != "faculty") {
      navigate("/login");
      toast.error("You are not authorized to access this page.");
    }
  },[user]);
  if (!user || user?.role != "faculty") {
    return null;
  }
  else if(user?.isAuthenticated && user?.role != 'faculty') return null;

  return children;
}

export default FacultyProtectedRoute;
