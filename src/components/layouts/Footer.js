import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Control Units</p>
        
        <button><Link to="../dashbord/User/UserAdmin">Users Management</Link></button>
        <br />
        <button><Link to="../dashbord/User/ProductAdmin">Products Management</Link></button>
    </footer>
  )
}

export default Footer