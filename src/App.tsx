import { TodoWrapper } from './components/TodoWrapper'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (<div className="container mx-auto p-4">
        <TodoWrapper />
        <ToastContainer position='bottom-center' autoClose={1000} hideProgressBar />
    </div>
    )
}

export default App
