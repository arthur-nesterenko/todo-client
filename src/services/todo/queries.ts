import {gql} from '@apollo/client';





export const GET_TODOS = gql`
    query Todos($completed: Boolean) {
        todos(completed: $completed)  {
            completed 
            id 
            title 
        }
    }
`;
