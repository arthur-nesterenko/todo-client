import {gql} from '@apollo/client';




export const ADD_TODO = gql`
    mutation Mutation($data: todoInput!) {
        createTodo(data: $data) {
            title
            completed
            id
        }
    }

`

export const DELETE_TODO = gql`
    mutation DeleteTodo($data: todoDeleteInput!) {
        deleteTodo(data: $data) {
            id
        }
    }
`

export const UPDATE_TODO = gql`
    mutation UpdateTodo($data: todoUpdateInput!) {
        updateTodo(data: $data) {
            title
            completed
        }
    }
`
