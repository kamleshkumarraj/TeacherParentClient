import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthData } from "../../store/slice/authSlice";
import { toast } from "react-toastify";

function ParentProtectedRoute({ children }) {
  const navigate = useNavigate();
  const user = useSelector(getAuthData);
  useEffect(() => {
    if(user?.isAuthenticated && user?.role != 'parent'){
          navigate('/page-not-found');
          toast.error("You are not authorized to access this page.");
        }
    else if (!user || user?.role != "parent") {
      navigate("/login");
      toast.error("You are not authorized to access this page.");
    }
  },[user]);

  if (!user || user?.role != "parent") {
    return null;
  }
  else if(user?.isAuthenticated && user?.role != 'parent') return null;
  return children;
}

export default ParentProtectedRoute;
