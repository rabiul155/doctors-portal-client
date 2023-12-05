import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className=' flex justify-center mt-8'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full  animate-spin border-violet-900"></div>
        </div>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace > </Navigate>
    }

};

export default PrivateRoute;
