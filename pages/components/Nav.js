import React from 'react'
import logo from '../../public/assets/images/logo1.png' 


const Nav = () => {
  return (
      <header>
        <nav>
            <div>
                <img alt='logo' className='logo' src={logo.src}/>
            </div>
            <div className='nav'>
                <a href='#' className='active'>Home</a>
                <a href='#'>about</a>
                <a href='#'>agent</a>
                <a href='#'>property</a>
                <a href='#'>contact</a>
            </div>
            <a className='property'>properties</a>
        </nav>
        
      </header>
    
  )
}

export default Nav