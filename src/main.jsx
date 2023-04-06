import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/About'
import About from './Components/About'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:'about',
    element: <About></About>
  },
{
  path:'books',
  element: <About></About>
}
]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
