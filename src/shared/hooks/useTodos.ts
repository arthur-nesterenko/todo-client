import {GET_TODOS} from "../../services/todo";
import {useQuery} from '@apollo/client'

export const useTodos = (activeFilter: null | boolean) => {
    const {loading, data, error} = useQuery(GET_TODOS, {
        variables: {
            completed: activeFilter,
        },
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
    })


    return {
        loading,
        todos: data?.todos ?? [],
        error,
    }


}
