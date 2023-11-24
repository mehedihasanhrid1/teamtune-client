import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import Errorpage from "../components/Errorpage";
import Login from "../pages/accounts/Login";
import Contactus from "../pages/about/Contactus";
import Register from "../pages/accounts/Register";

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
            ]
        }
    ]
);

export default routers;