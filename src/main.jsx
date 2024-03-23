import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './mainLayout/MainLayout';
import Blog from './pages/blog/Blog';
import Bookmar from './pages/bookmark/Bookmar';


const router=createBrowserRouter([

{
 path:'/',
  element:<MainLayout></MainLayout>,
  children:[
{
  index:true,
  element:<Home></Home>
},
{
  path:'/blogs',
  element:<Blog></Blog>
},
{
  path:'/bookmarks',
  element:<Bookmar></Bookmar>
}


  ]
}








])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
