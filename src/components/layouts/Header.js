import React from 'react'
import Button from './Button'
import './layout.css'

const Header = ({title, onAdd}) => {
//onAdd is showAddTask function
    

  return (
    <header className='header'>
        <h1 className='header-title'>
            {title}
        </h1>
     <Button color = 'green' text = 'Add User' onClick={onAdd}/>
    </header>
  )
}


Header.defaultProps ={
    title:'User Administration'
}

export default Header