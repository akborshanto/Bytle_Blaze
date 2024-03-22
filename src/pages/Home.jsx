import React from 'react'
import Navbar from './header/Navbar'
import Blog from './blog/Blog'
import Bookmar from './bookmark/Bookmar'

const Home = () => {
  return (
    <div>
<div className='h-[80px]'>
<Navbar></Navbar>

</div>
      <Blog></Blog>
      <Bookmar></Bookmar>
    </div>
  )
}

export default Home
