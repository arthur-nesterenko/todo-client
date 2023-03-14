import {createBrowserRouter} from "react-router-dom";

import {ProtectedLayout, AuthLayout} from "../layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedLayout/>,
        children: [
            {
                index: true,
                lazy: () => import("./home"),
            }
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "/sign-in",
                lazy: () => import("./sign-in"),
            },
            {
                path: "/sign-up",
                lazy: () => import("./sign-up"),
            }
        ]
    },

]);


export default router
