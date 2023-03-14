import type {SyntheticEvent} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../shared/components/logo'
import {useMutation} from '@apollo/client'
import {useAuth} from "../../context/auth";
import {SIGN_IN} from "../../services/user";


export const Component = () => {

    const {signIn} = useAuth()
    const [signInMutation, {loading, error, reset}] = useMutation(SIGN_IN, {
        onCompleted: (data) => {
            signIn(data.loginUser.token)
        },
    });

    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        reset()
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        signInMutation({
            variables: {
                signin: {
                    email,
                    password
                }
            }
        })
    }

    return <div className='max-w-[390px] bg-white shadow-card px-[30px] pt-[35px] pb-[63px] rounded-lg'>
        <Logo className='mb-[25px]'/>
        <h1 className='text-style-5'>Welcome back!</h1>
        <h2 className='text-style-4 mt-1.5'>Log in to continue.</h2>
        <form onChange={reset} onSubmit={onSubmit} className='mt-[43px]'>
            <fieldset disabled={loading} className='space-y-[29px] mb-[22px]'>
                <input autoFocus className='form-input' type="email" required name='email' placeholder='Email'/>
                <input className="form-input" type="password" required name='password' placeholder='Password'
                       autoComplete='curren-password'/>
            </fieldset>
            <Link className='text-style-6 underline' to='/sign-up'>
                Don’t have an account? Sign up.
            </Link>

            <button disabled={loading || Boolean(error)} type='submit' className='button w-full mt-[52px]'>
                {loading ? 'Submitting...' : 'Log In'}
            </button>
            <div className='transition-all ease-in delay-100 text-style-6 !text-red-500  mt-[10px]'>
                {error?.message}
            </div>
        </form>
    </div>
}

Component.displayName = 'SignInPage'
