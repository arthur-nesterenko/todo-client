import {
    createBrowserRouter,
} from "react-router-dom";
import {lazy} from "react";
import {ProtectedLayout} from "../layout";

const SignIn = lazy(() => import('./sign-in'))
const SignUp = lazy(() => import('./sign-up'))


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
        path: "/sign-in",
        element: <SignIn/>,
    },
    {
        path: "/sign-up",
        element: <SignUp/>,
    }
]);


export default router
