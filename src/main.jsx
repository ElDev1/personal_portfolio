import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App'
import ErrorPage from './pages/ErrorPage'
import InfoProject from './pages/InfoProject'
import ProjectDetails from './pages/ProjectDetails'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects/:projectType',
    element: <InfoProject />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects/:projectType/:id',
    element: <ProjectDetails />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
