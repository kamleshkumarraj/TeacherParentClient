import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthData } from "../../store/slice/authSlice";
import { toast } from "react-toastify";

function ParentProtectedRoute({ children }) {
  const navigate = useNavigate();
  const user = useSelector(getAuthData);
  useEffect(() => {
    if (!user || user?.role != "student") {
      navigate("/login");
      toast.error("You are not authorized to access this page.");
    }
  },[user]);
  
  if (!user || user?.role != "student") {
    return null;
  }
  return children;
}

export default ParentProtectedRoute;
