import React from 'react'
import useSWR from 'swr'
import { getTodos } from '../api/todosApi'
import TodoItem from './TodoItem'
import { Todo } from '../types/Todo'
import TodoStatus from './TodoStatus'

const TodoList: React.FC = () => {
    const { isLoading, error, data: todos } = useSWR('todos', getTodos, {
        onSuccess: data => data.sort((a: Todo, b: Todo) => {
            return +(new Date(b.created_at)) - +(new Date(a.created_at))
        })
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error encountered loading data.</div>

    const completed = todos.filter((todo: Todo) => todo.done)

    return (
        <div>
            <TodoStatus completed={completed.length} total={todos.length}/>

            {todos && todos.map((todo: Todo) => <TodoItem key={todo._id} todo={todo} />)}
        </div>
    )
}

export default TodoList