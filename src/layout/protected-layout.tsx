import {useAuth} from '../context/auth'

import {
    useLocation,
    Navigate,
    Outlet
} from "react-router-dom";

const ProtectedLayout = () => {
    const {isLoggedIn, signOut} = useAuth();
    let location = useLocation();
    if (!isLoggedIn) {
        return <Navigate to="/sign-in" state={{from: location}} replace/>;
    }

    return <>
        <header className='absolute right-2 top-2'>
            <button className='text-style-6 hover:underline' onClick={signOut}>
                Logout
            </button>
        </header>
        <Outlet/>
    </>
}


export default ProtectedLayout
