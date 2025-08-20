import { getAuthData } from '@/store/slice/authSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function StudentProtectedRoute({children}) {
    const user = useSelector(getAuthData);
    const navigate = useNavigate();
    if(!user || user?.role != 'student') {
        toast.error("You are not authorized to access this page.");
        navigate('/login');
        return null;
    }
  return children
}

export default StudentProtectedRoute
