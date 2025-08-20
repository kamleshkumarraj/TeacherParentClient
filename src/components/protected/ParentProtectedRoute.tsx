import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getAuthData} from '../../store/slice/authSlice'
import {toast} from 'react-toastify'

function ParentProtectedRoute({children}) {
    const navigate = useNavigate();
    const user = useSelector(getAuthData);
    if(!user || user?.role != 'parent') {
        toast.error("You are not authorized to access this page.");
        navigate('/login');
        return null;
    }
    return children
}

export default ParentProtectedRoute
