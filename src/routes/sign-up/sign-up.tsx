import {SyntheticEvent} from 'react'
import {Link} from 'react-router-dom'
import Logo from "../../shared/components/logo";
import {useMutation} from "@apollo/client";
import {SIGN_UP} from "../../services/user";
import {useAuth} from "../../context/auth";


export const Component = () => {

    const {signIn} = useAuth()
    const [signUpMutation, {loading, error, reset}] = useMutation(SIGN_UP, {
        onCompleted: (data) => {
            signIn(data.signupUser.token)
        }
    })


    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        reset()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const email = formData.get('email')
        const password = formData.get('password')
        signUpMutation({
            variables: {
                signup: {
                    username,
                    email,
                    password
                }
            }
        })
    }


    return <div className='max-w-[390px] bg-white shadow-card px-[30px] pt-[35px] pb-[63px] rounded-lg'>
        <Logo className='mb-[25px]'/>
        <h1 className='text-style-5'>Welcome!</h1>
        <h2 className='text-style-4 mt-1.5'>Sign up to start using Simpledo today.</h2>
        <form onChange={reset} onSubmit={onSubmit}
              className='mt-[43px]'>
            <fieldset disabled={loading} className='space-y-[29px] mb-[22px]'>
                <input autoFocus className='form-input' type="text" required name='username' placeholder='Full Name'/>
                <input className='form-input' type="email" required name='email' placeholder='Email'/>
                <input className="form-input" pattern=".{5,}" type="password" required name='password'
                       placeholder='Password'
                       title="Password must be at least 5 characters long"
                       autoComplete='curren-password'/>
            </fieldset>
            <Link className='text-style-6 underline' to='/sign-in'>
                Do have an account? Sign in.
            </Link>
            <button disabled={loading || Boolean(error)} type='submit' className='button w-full mt-[52px]'>
                {loading ? 'Submitting...' : 'Sign Up'}
            </button>
            <div className='transition-all ease-in delay-100 text-style-6 !text-red-500  mt-[10px]'>
                {error?.message}
            </div>
        </form>
    </div>
}


Component.displayName = 'SignUpPage'
