import TodoItem, {Todo, TodoActions} from "./todo-item";


type TodoListProps = TodoActions & {
    todos: Todo[],
}


const TodoList = ({todos, ...props}: TodoListProps) => {


    if (todos.length === 0) return <div className='text-style-3 mt-7 text-center'>No todos found</div>
    return <ul className='space-y-4 mt-7'>
        {todos.map(todo => <li key={todo.id}>
            <TodoItem {...todo} {...props}/>
        </li>)}
    </ul>
}


export default TodoList
