import {Form, Link} from 'react-router-dom'
import Logo from "../../shared/components/logo";


const SignUp = () => {

    return <div className='max-w-[390px] bg-white shadow-card px-[30px] pt-[35px] pb-[63px] rounded-lg'>
        <Logo className='mb-[25px]'/>
        <h1 className='text-style-5'>Welcome!</h1>
        <h2 className='text-style-4 mt-1.5'>Sign up to start using Simpledo today.</h2>
        <Form className='mt-[43px]'>
            <fieldset className='space-y-[29px] mb-[22px]'>
                <input autoFocus className='form-input' type="text" required name='username' placeholder='Full Name'/>
                <input autoFocus className='form-input' type="email" required name='email' placeholder='Email'/>
                <input className="form-input" type="password" required name='password' placeholder='Password'
                       autoComplete='curren-password'/>
            </fieldset>
            <Link className='text-style-6 underline' to='/sign-in'>
                Do have an account? Sign in.
            </Link>

            <button type='submit' className='button w-full mt-[52px]'>Log In</button>
        </Form>
    </div>
}


export default SignUp
