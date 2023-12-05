import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const ErrorPage = () => {

    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logOut succefully ')
            })
            .catch(error => {
                console.error('logout error', error)
            })
    }
    const error = useRouteError()
    return (
        <div>
            <p className='text-red-500 font-bold text-center'>Something went Wrong</p>
            <p className=' text-center'>{error.statusText || error.message}</p>
            <p>please <button onClick={handleLogOut} className=' btn btn-accent'>Log Out </button></p>
        </div>
    );
};

export default ErrorPage;