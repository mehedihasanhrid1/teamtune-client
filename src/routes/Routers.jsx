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
                    element:<Dashboard/>,
                    children: [
                        {
                            path:'hr',
                            element:<HrRoutes><Hrhome/></HrRoutes>,
                        },
                        {
                            path:'admin',
                            element:<AdminRoutes><AdminHome/></AdminRoutes>,
                        },
                        {
                            path:'employee',
                            element: <EmployeeRoutes><EmployeeHome/></EmployeeRoutes>
                        }
                    ]
                },
            ]
        },
    ]
);

export default routers;