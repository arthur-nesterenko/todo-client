import {useCallback} from "react";
import {ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO} from "../../services/todo";
import {useMutation} from '@apollo/client'


type Options = {
    onCompleted?: () => void
    activeFilter?: null | boolean
}


export const useAddTodo = ({onCompleted}: Options) => {
    const [addTodoMutation, {loading}] = useMutation(ADD_TODO, {
        refetchQueries: [{
            query: GET_TODOS,
            variables: {
                completed: null
            },
            fetchPolicy: 'network-only'
        }],
        onCompleted
    });


    const onAddTodo = useCallback((title: string) => {
        addTodoMutation({
            variables: {
                data: {
                    title,
                }
            },
        })
    }, [addTodoMutation])

    return {
        onAddTodo,
        isMutating: loading,
    }
}

export const useDeleteTodo = ({onCompleted}: Options) => {
    const [deleteTodoMutation] = useMutation(DELETE_TODO, {
        ignoreResults: true,
        awaitRefetchQueries: true,
        refetchQueries: [{
            query: GET_TODOS,
            variables: {
                completed: null
            }
        }],
        onCompleted
    })

    const onDeleteTodo = useCallback((id: string) => {
        deleteTodoMutation({
            variables: {
                data: {
                    id
                },
            },
        })
    }, [deleteTodoMutation])

    return {
        onDeleteTodo
    }
}

export const useUpdateTodo = ({activeFilter = null}: Options) => {
    const [updateTodoMutation] = useMutation(UPDATE_TODO, {
        refetchQueries: [{
            query: GET_TODOS,
            variables: {
                completed: activeFilter,
            }
        }]
    });

    const onToggleTodo = useCallback((id: string, value: boolean) => {
        updateTodoMutation({
            variables: {
                data: {
                    id,
                    completed: value
                }
            }
        })
    }, [updateTodoMutation])


    return {
        onToggleTodo
    }
}


