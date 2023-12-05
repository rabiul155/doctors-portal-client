import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div className=' flex justify-center mt-8'>
            <div className="w-16 h-16 border-8 border-dashed rounded-full  animate-spin border-violet-900"></div>
        </div>
    }

    if (user && isAdmin) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace > </Navigate>
    }

};

export default AdminRoute;
