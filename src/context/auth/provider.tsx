import type {ReactNode} from 'react'
import {useReducer, useEffect, useCallback, useMemo} from 'react'
import AuthContext from './context'
import type {AuthContextType, AuthAction, AuthState} from './types'
import TokenService from '../../services/token'
import {useApolloClient} from '@apollo/client';
import {GET_ME} from '../../services/user'


const initialState: AuthState = {
    isLoggedIn: false,
    isLoading: true,
}

const reducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
            }
        case "RESTORE_TOKEN":
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            }
        default:
            return state
    }
}


const AuthProvider = ({children}: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const client = useApolloClient()
    const signOut = useCallback(() => {
        dispatch({type: 'SIGN_OUT'});
        TokenService.remove();
        client.clearStore();
    }, [client]);

    const signIn = useCallback(async (token: string) => {
        TokenService.set(token);
        await client.query({
            query: GET_ME,
        });
        dispatch({
            type: 'SIGN_IN',
        });
    }, [client]);


    useEffect(() => {
        const configureUserSession = async () => {
            try {
                const token = TokenService.get();

                if (token) {
                    // Prefetch user data
                    await client.query({
                        query: GET_ME,
                    });
                }
                dispatch({
                    payload: {
                        isLoggedIn: TokenService.exists(),
                    },
                    type: 'RESTORE_TOKEN'
                });
            } catch {
                // Restoring token failed
                signOut();
            }
        };

        configureUserSession().then();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const value = useMemo<AuthContextType>(
        () => ({
            ...state,
            signIn,
            signOut,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [state],
    );


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}


export default AuthProvider
