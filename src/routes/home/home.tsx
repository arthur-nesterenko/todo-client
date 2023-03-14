import {useState} from "react";
import Logo from '../../shared/components/logo';
import AddTodoForm from "./components/add-todo-form";

import TodoList from "./components/todo-list";
import Filters from "./components/filters";
import {useTodos, useAddTodo, useDeleteTodo, useUpdateTodo} from '../../shared/hooks'


export const Component = () => {
    const [activeFilter, setActiveFilter] = useState<boolean | null>(null)
    const {loading, todos, error} = useTodos(activeFilter)

    const {onAddTodo, isMutating} = useAddTodo({
        onCompleted: () => {
            setActiveFilter(null)
        }
    })
    const {onDeleteTodo} = useDeleteTodo({
            onCompleted: () => setActiveFilter(null)
        }
    )
    const {onToggleTodo} = useUpdateTodo({activeFilter})


    const onFilterChange = (filter: boolean | null) => {
        setActiveFilter(filter)
    }


    return <div className='max-w-[440px] w-full shadow-card px-[30px] py-[35px] bg-white rounded-lg'>
        <Logo className='mb-[25px]'/>
        <h1 className='text-style'>Todo List</h1>
        <AddTodoForm onSubmit={onAddTodo} isSubmitting={isMutating}/>
        {error ? <div className='text-red-500'>{error?.message}</div>
            : <>
                <div className='overflow-y-auto h-32 scroll-mx-0.5 scroll-px-0.5'>
                    {loading ? <div>Loading</div> : <TodoList
                        onToggleTodo={onToggleTodo}
                        onDeleteTodo={onDeleteTodo}
                        todos={todos}/>}
                </div>
                <Filters activeFilter={activeFilter} className='mt-[50px]' onChange={onFilterChange}/>
            </>
        }
    </div>
}


Component.displayName = "HomePage";
