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
    }
    else if (!user || user?.role != "faculty") {
      navigate("/login");
    }
  },[user]);
  if (!user || user?.role != "faculty") {
    return null;
  }
  else if(user?.isAuthenticated && user?.role != 'faculty') return null;

  return children;
}

export default FacultyProtectedRoute;
