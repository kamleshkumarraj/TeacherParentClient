import { getAuthData } from "@/store/slice/authSlice";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function FacultyProtectedRoute({ children }) {
  const user = useSelector(getAuthData);
  const navigate = useNavigate();
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

export default FacultyProtectedRoute;
