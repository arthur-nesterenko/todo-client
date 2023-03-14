import {Outlet} from "react-router-dom";


const AuthLayout = () => {


    return <div className='h-screen flex flex-col items-center justify-center bg-[#f6f7f8]'>
        <Outlet/>
    </div>
}


export default AuthLayout
