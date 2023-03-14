import {
    useLocation,
    Navigate,
    Outlet
} from "react-router-dom";
import {useAuth} from "../context/auth";


const AuthLayout = () => {

    const {isLoggedIn} = useAuth();
    let location = useLocation();

    if (isLoggedIn) {
        const redirect = location.state?.from?.pathname ?? '/'
        return <Navigate to={redirect} replace/>
    }

    return <Outlet/>

}


export default AuthLayout
