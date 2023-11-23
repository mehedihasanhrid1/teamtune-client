import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Errorpage from "../components/Errorpage";

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
            ]
        }
    ]
);

export default routers;