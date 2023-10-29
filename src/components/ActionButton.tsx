import React from 'react'

const ActionButton: React.FC<any> = (props: any) => {
    return (
        <button {...props} className="mx-2 flex items-center bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-600">
            {props.children}
        </button>
    )
}

export default ActionButton