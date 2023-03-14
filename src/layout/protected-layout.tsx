import {useAuth} from '../context/auth'

import {
    useLocation,
    Navigate,
    Outlet
} from "react-router-dom";

const ProtectedLayout = () => {
    const {isLoggedIn} = useAuth();
    let location = useLocation();
    if (!isLoggedIn) {
        return <Navigate to="/sign-in" state={{from: location}} replace/>;
    }

    return <Outlet/>
}


export default ProtectedLayout
