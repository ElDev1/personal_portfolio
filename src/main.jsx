import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import ErrorPage from './pages/ErrorPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import InfoProject from './pages/InfoProject'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'projects/',
    element: <InfoProject />,
    errorElement: <ErrorPage />
  },
  {
    path: 'project/:projectId',
    element: <InfoProject />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
