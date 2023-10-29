import axios from 'axios'
import { CreateTodo, UpdateTodo } from '../types/Todo'

const todosApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const todosApiEndpoint = '/todos'

export const getTodos = async () => {
    const response = await todosApi.get(todosApiEndpoint)
    return response.data
}

export const addTodo = async (todo: CreateTodo) => {
    const response = await todosApi.post(todosApiEndpoint, todo)
    return response.data
}

export const updateTodo = async (todo: UpdateTodo) => {
    const response = await todosApi.put(`${todosApiEndpoint}/${todo._id}`, todo)
    return response.data
}

export const deleteTodo = async (id: string) => {
    return await todosApi.delete(`${todosApiEndpoint}/${id}`)
}