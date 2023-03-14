import {
    createBrowserRouter,
} from "react-router-dom";
import {lazy} from "react";


const Home = lazy(() => import('./home'))
const SignIn = lazy(() => import('./sign-in'))
const SignUp = lazy(() => import('./sign-up'))


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
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
