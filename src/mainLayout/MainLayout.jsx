import React from 'react'
import Navbar from './../pages/header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/header/Footer';

const MainLayout = () => {
  return (
    <div>
<div className='h-[80px]'>
      
<Navbar></Navbar>
</div>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default MainLayout
