import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../../layout/DashbordLayout/DashbordLayout";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppontment from "../../Pages/Dashboard/MyAppointment/MyAppontment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/dashbord',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute> <DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {
                path: '/dashbord',
                element: <MyAppontment></MyAppontment>
            },
            {
                path: '/dashbord/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashbord/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashbord/manageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashbord/payment/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`),
                element: <AdminRoute><Payment></Payment></AdminRoute>,

            },
        ]
    }
])

export default router;