import React, { useState } from 'react'
import { useSWRConfig } from 'swr'
import { addTodo } from '../api/todosApi'
import { toast } from 'react-toastify'
import { AiOutlinePlus } from 'react-icons/ai'

const TodoForm: React.FC = () => {
    const [todo, setTodo] = useState<string>("")

    const { mutate } = useSWRConfig()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!todo) {
            toast.warn('Title field is required.')
            return
        }

        try {
            await addTodo({ title: todo, done: false })
            mutate('todos')
            setTodo("")
            toast.success('Created')
        } catch (error) {
            console.error("Error:", error)
            toast.error('Error encountered creating todo.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex my-5'>
            <input
                type="text"
                placeholder="Type your todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className=" border border-yellow-400 w-full px-2 py-3 rounded focus:outline-none text-gray-600"
            />
            <button className="focus:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 bg-yellow-500 transition duration-150 ease-in-out hover:bg-yellow-600 rounded text-white px-5  ml-3 text-lg ">
                <div className="text-gray-700 flex justify-center items-center">Add <AiOutlinePlus className="ml-2 text-xl font-bold" /></div>
            </button>
        </form>)
}


export default TodoForm