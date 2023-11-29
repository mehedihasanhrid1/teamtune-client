import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import Errorpage from "../components/Errorpage";
import Login from "../pages/accounts/Login";
import Contactus from "../pages/about/Contactus";
import Register from "../pages/accounts/Register";
import axios from 'axios';
import Dashboard from "../dashboard/Dashboard";
import Hrhome from "../dashboard/hr/Hrhome";
import HrRoutes from "./HrRoutes";
import AdminRoutes from "./AdminRoutes";
import AdminHome from "../dashboard/admin/AdminHome";
import EmployeeRoutes from "./EmployeeRoutes";
import EmployeeHome from "../dashboard/employee/EmployeeHome";
import PrivateRoute from "./PrivateRoute";
import HrProfile from "../dashboard/hr/HrProfile";
import EmployeeList from "../dashboard/hr/EmployeeList";
import Progress from "../dashboard/hr/Progress";
import AdminProfile from "../dashboard/admin/AdminProfile";
import EmployeeProfile from "../dashboard/employee/EmployeeProfile";
import AllEmployee from "../dashboard/admin/AllEmployee";
import PaymentHistory from "../dashboard/employee/PaymentHistory";
import WorkSheet from "../dashboard/employee/WorkSheet";
import UserDetails from "../dashboard/hr/UserDetails";

axios.defaults.withCredentials = true;

const routers = createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            errorElement:<Errorpage/>,
            children: [
                {
                    path:'/',
                    element:<Home/>,
                },
                {
                    path:'/contactus',
                    element:<Contactus/>,
                },
                {
                    path:'/login',
                    element:<Login/>,
                },
                {
                    path:'/register',
                    element:<Register/>,
                },
                {
                    path:'/dashboard',
                    element:<PrivateRoute><Dashboard/></PrivateRoute>,
                    children: [
                        {
                            path:'hr',
                            element:<HrRoutes><Hrhome/></HrRoutes>,
                            children:[
                                {
                                    path:'profile',
                                    element:<HrRoutes><HrProfile/></HrRoutes>,
                                },
                                {
                                    path:'employee-list',
                                    element:<HrRoutes><EmployeeList/></HrRoutes>,
                                },
                                {
                                    path:'progress',
                                    element:<HrRoutes><Progress/></HrRoutes>,
                                },
                                {
                                    path:'employee-details/:userEmail',
                                    element:<HrRoutes><UserDetails/></HrRoutes>,
                                }
                            ]
                        },
                        {
                            path:'admin',
                            element:<AdminRoutes><AdminHome/></AdminRoutes>,
                            children:[
                                {
                                    path:'profile',
                                    element:<AdminRoutes><AdminProfile/></AdminRoutes>
                                },
                                {
                                    path:'all-employee-list',
                                    element:<AdminRoutes><AllEmployee/></AdminRoutes>
                                }
                            ]
                        },
                        {
                            path:'employee',
                            element: <EmployeeRoutes><EmployeeHome/></EmployeeRoutes>,
                            children:[
                                {
                                    path:'profile',
                                    element:<EmployeeRoutes><EmployeeProfile/></EmployeeRoutes>
                                },
                                {
                                    path:'payment-history',
                                    element:<EmployeeRoutes><PaymentHistory/></EmployeeRoutes>
                                },
                                {
                                    path:'work-sheet',
                                    element:<EmployeeRoutes><WorkSheet/></EmployeeRoutes>
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ]
);

export default routers;