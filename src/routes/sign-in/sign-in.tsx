import {Form, Link} from 'react-router-dom'
import Logo from '../../shared/components/logo'

const SignIn = () => {

    return <div className='max-w-[390px] bg-white shadow-card px-[30px] pt-[35px] pb-[63px] rounded-lg'>
        <Logo className='mb-[25px]'/>
        <h1 className='text-style-5'>Welcome back!</h1>
        <h2 className='text-style-4 mt-1.5'>Log in to continue.</h2>
        <Form className='mt-[43px]'>
            <fieldset className='space-y-[29px] mb-[22px]'>
                <input autoFocus className='form-input' type="email" required name='email' placeholder='Email'/>
                <input className="form-input" type="password" required name='password' placeholder='Password'
                       autoComplete='curren-password'/>
            </fieldset>
            <Link className='text-style-6 underline' to='/sign-up'>
                Don’t have an account? Sign up.
            </Link>

            <button type='submit' className='button w-full mt-[52px]'>Sign up</button>
        </Form>
    </div>
}

export default SignIn
