import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd}) => {
//onAdd is showAddTask function
    const location = useLocation()

  return (
    <header className='header'>
        <h1 style ={headingStyle}>
            {title}
        </h1>
       
        
    
    <Button color = 'green' text = 'Add User' onClick={onAdd}/>
    
    

    {location.pathname === '../dashbord/Product/ProductAdmin' && (
    <Button color = 'green' text = 'Add Product' onClick={onAdd}/>
    )}   
    </header>
  )
}

const headingStyle ={
    color: 'blue',
    backgroundColor: 'yellow'
}

Header.defaultProps ={
    
    title:'DashBoard for Admin',
    
}

export default Header