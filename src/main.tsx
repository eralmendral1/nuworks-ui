import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { preload } from 'swr'
import { getTodos, todosApiEndpoint } from './api/todosApi.ts'

preload(todosApiEndpoint, getTodos)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
