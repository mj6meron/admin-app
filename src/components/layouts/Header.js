import React from 'react'
import Button from './Button'

const Header = ({title, onAdd}) => {
//onAdd is showAddTask function
    

  return (
    <header className='header'>
        <h1 style ={headingStyle}>
            {title}
        </h1><br/>
     <Button color = 'green' text = 'Add User' onClick={onAdd}/>
    </header>
  )
}

const headingStyle ={
    color: 'blue',
    backgroundColor: 'yellow'
}

Header.defaultProps ={
    title:'DashBoard for Admin'
}

export default Header