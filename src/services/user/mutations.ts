import {gql} from '@apollo/client';






export const SIGN_IN = gql`
    mutation login($signin: loginInput!){
        loginUser(data: $signin) {
            token
        }
    }

`


export const SIGN_UP = gql`
    mutation signup($signup:signupInput!){
        signupUser(data: $signup) {
            token
        }
    }
`
