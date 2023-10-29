import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export const TodoWrapper: React.FC = () => (
    <>
        <div className="mx-auto max-w-[720px] mt-12">
            <h1 className='font-bold text-3xl text-gray-600'>Nuworks Todos</h1>
            <TodoForm />
            {/* todo: Record here, show completed count, and uncompleted count */}
            <TodoList />
        </div>
    </>
)
