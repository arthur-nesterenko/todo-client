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

    return <div className='h-screen flex flex-col items-center justify-center bg-[#f6f7f8]'>
        <Outlet/>
    </div>
}


export default AuthLayout
