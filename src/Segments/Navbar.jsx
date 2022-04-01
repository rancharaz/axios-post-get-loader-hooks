import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
   
    <nav className='navbar '>
        <div className="logo ">
       <Link to="/">LOGO</Link>   
        </div>

        <ul className='flex text-white p-7 float-right justify-between'>
        <Link to='/aboutus'> About us </Link>   
        <Link to='/gallery'>Gallery </Link>   
        <Link to='/signup'> Sign up </Link>   
        <Link to='/create'> Create </Link>
        <Link to='/show'> Show </Link>
        <Link to='/signoff'> signoff </Link>
        <Link to="/morepages"> Morepages</Link>
        </ul>

    </nav>
     
    
    </>
  )
}

export default Navbar