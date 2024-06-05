import React from 'react'

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark text-light text-center ">
        <h1 className='fs-1 m-auto'>{props.title}</h1> 
      </nav>
    </div>
  )
}

export default Header
