import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/home/Home";
import Errorpage from "../components/Errorpage";
import Login from "../pages/accounts/Login";

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
                    path:'/login',
                    element:<Login/>,
                },
            ]
        }
    ]
);

export default routers;