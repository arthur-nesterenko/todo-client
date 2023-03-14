export type AuthContextType = {
    isLoggedIn: boolean;
    signIn: (token: string) => void;
    signOut: () => void;
}


export type AuthState = {
    isLoggedIn: boolean;
    isLoading: boolean;
}

export type AuthAction =
    | { type: 'SIGN_IN' }
    | { payload: { isLoggedIn: boolean }; type: 'RESTORE_TOKEN' }
    | { type: 'SIGN_OUT' };

