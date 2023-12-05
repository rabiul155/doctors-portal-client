import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Navbar from '../../Shared/Navbar/Navbar';

const DashbordLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashbord'>My appointment </Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashbord/allUsers'> All Users</Link></li>
                                <li><Link to='/dashbord/addDoctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashbord/manageDoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;