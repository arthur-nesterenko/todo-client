import type {ChangeEvent} from 'react'
import {memo} from 'react'


export type Todo = {
    completed: boolean,
    title: string,
    id: string,
}

export type TodoActions = {
    onToggleTodo: (id: string, value: boolean) => void,
    onDeleteTodo: (id: string) => void
}

export type TodoItemProps = Todo & TodoActions
const TodoItem = ({completed, title, onToggleTodo, id, onDeleteTodo}: TodoItemProps) => {


    const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
        onToggleTodo(id, e.target.checked)
    }


    return <div className='grid grid-cols-[20px_1fr_20px] items-center gap-[14px] pr-2'>
        <input type="checkbox" defaultChecked={completed} onChange={onToggle}/>
        <span className='text-style-3'>
            {title}
        </span>
        <button onClick={() => onDeleteTodo(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                <path fill="#BFBFBF" fillRule="evenodd"
                      d="M10.68.32c-.426-.426-1.116-.426-1.542 0L5.545 3.912 1.953.32C1.525-.094.845-.088.423.333c-.42.42-.426 1.101-.012 1.53l3.592 3.592L.41 9.047c-.284.274-.398.68-.298 1.06.1.382.398.68.78.78.38.1.786-.014 1.06-.298l3.592-3.592 3.593 3.592c.428.414 1.108.408 1.53-.013.42-.42.426-1.101.012-1.53L7.088 5.456l3.592-3.593c.426-.426.426-1.116 0-1.542z"/>
            </svg>
        </button>
    </div>
}


export default memo(TodoItem)