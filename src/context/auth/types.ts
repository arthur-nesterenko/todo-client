export type AuthContextType = {
    isLoggedIn: boolean;
}


export type AuthState = {
    isLoggedIn: boolean;
    isLoading: boolean;
}

type RestoreTokenPayload = {
    token: string | null;
};

export type AuthAction =
    | { type: 'SIGN_IN' }
    | { payload: { isLoggedIn: boolean }; type: 'RESTORE_TOKEN' }
    | { type: 'SIGN_OUT' };

