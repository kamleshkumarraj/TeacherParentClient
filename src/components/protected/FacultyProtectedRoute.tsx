import { getAuthData } from '@/store/slice/authSlice';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function FacultyProtectedRoute({children}) {
    const user = useSelector(getAuthData);
    const navigate = useNavigate();
    if(!user || user?.role != 'faculty') {
        navigate('/login');
        return null;
    }
  return children;
}

export default FacultyProtectedRoute
