import React, { useState } from 'react'
import { Todo } from '../types/Todo'
import { deleteTodo, updateTodo } from '../api/todosApi'
import { useSWRConfig } from 'swr'
import { toast } from 'react-toastify'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheckSquare } from 'react-icons/ai'
import ActionButton from './ActionButton'

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {

    const [edittable, setEdittable] = useState<boolean>(false)
    const [title, setTitle] = useState(todo.title)

    const { mutate } = useSWRConfig()

    const remove = async (id: string) => {
        try {
            await deleteTodo(id)
            mutate('todos')
            toast.success("Todo removed.")
        } catch (error) {
            console.error('Error:', error)
            toast.error("Error encountered removing todo.")
        }
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!title) {
            toast.warn("Title field is required")
            return
        }

        try {
            await updateTodo({ ...todo, title })
            setEdittable(false)
            mutate('todos')
            toast.success("Todo updated.")
        } catch (error) {
            console.error('Error:', error)
            toast.error("Error encountered updating todo.")
        }
    }

    const complete = async () => {
        try {
            await updateTodo({ ...todo, done: true })
            mutate('todos')
            toast.success("Todo completed.")
        } catch (error) {
            console.error('Error:', error)
            toast.error("Error encountered completing todo.")
        }
    }

    return (
        <div className={`flex items-center justify-between w-full my-2 p-3 rounded shadow-xl  ${todo.done ? 'bg-slate-600' : 'bg-white'}`} >
            {edittable ? <div>
                <form onSubmit={update} className='flex items-center'>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }}
                        placeholder='Update todo'
                        className="max-w-[360px] border border-gray-400 w-full p-2 rounded focus:outline-none text-gray-600 my-2" />
                    <ActionButton onClick={() => setEdittable(false)}>
                        <p className="text-rose-600">Cancel</p>
                    </ActionButton>
                    <ActionButton type="submit">
                        <p className="text-indigo-600">Update</p>
                    </ActionButton>
                </form>

            </div> :
                <div className="flex items-center justify-between w-full px-6">
                    <div className="flex items-center">
                        {!todo.done && <button title="complete todo" onClick={complete}><AiOutlineCheckSquare size={32} className="text-green-600 mr-6" /></button>}
                        <h1 className="font-semibold text-lg text-gray-700">{todo.title}</h1>
                    </div>
                    <div>
                        {!todo.done && <button title="edit todo" onClick={() => setEdittable(true)}><AiOutlineEdit size={32} className="text-indigo-600 mx-1" /></button>}
                        <button title="delete todo" onClick={() => remove(todo._id)}><AiOutlineDelete size={32} className="text-rose-600 mx-1" /></button>
                    </div>
                </div>
            }

        </div>
    )
}

export default TodoItem