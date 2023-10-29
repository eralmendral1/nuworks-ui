export type Todo  = {
    _id: string,
    title: string,
    done: boolean,
    created_at: string,
    updated_at: string
}

export type CreateTodo = {
    title: string,
    done: boolean
}

export type UpdateTodo = {
    _id: string,
    title ?: string,
    done ?: boolean
}