import React from 'react'

const TodoStatus: React.FC<{ total: number, completed: number }> = ({ total, completed }) => {
    return (
        <div>
            {total - completed > 0 &&
                <div className="flex">
                    <h1 className="ml-4 text-gray-400 text-sm">Completed: {completed} </h1>
                    <h1 className="ml-4 text-gray-400 text-sm">Remaining: {total - completed}</h1>
                </div>
            }

            {total === completed && total > 0 &&
                <p className="text-center text-green-500 font-bold text-lg my-3">You completed all your todos. You are amazing!</p>
            }

            {total === 0 &&
                <p>
                    No Current Todos.
                </p>}
        </div>
    )
}

export default TodoStatus