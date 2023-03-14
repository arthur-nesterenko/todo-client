import type {SyntheticEvent} from 'react'
import {useRef} from 'react'


type AddTodoFormProps = {
    onSubmit: (title: string) => void
    isSubmitting: boolean
}
const AddTodoForm = ({onSubmit, isSubmitting}: AddTodoFormProps) => {

    const formRef = useRef<HTMLFormElement>(null)
    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const title = formData.get('title')
        onSubmit(title as string)
        formRef.current?.reset()
    }

    return <form ref={formRef} onSubmit={handleSubmit} className='mt-[35px]'>
        <input disabled={isSubmitting} className='form-input w-full' type="text" name='title'
               placeholder='Add a new todo'
               required/>
    </form>
}


export default AddTodoForm
