import { useState } from 'react';
import axios from 'axios';
import UserAdmin from './UserAdmin';


const UpdateUser = () => {
    
const [updatedUser, setUpdatedUser] = useState({
        email: "",
        password: "",
        is_admin: false,
      });
      


  function handleUpdate(event) {
    const { name, value } = event.target;
    const { checked, value_boolean} = event.currentTarget.checked;
    setUpdatedUser((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
        [checked]: value_boolean,
      };
    });
    console.log(updatedUser);
  }
  

  


  return (
    <div>Date from UpdateUser.js
    
    <form className='add-form' onSubmit={handleUpdate}>

    <div className='form-control'>
      <label>New Email</label>
      <input type="text" placeholder="Update Email" name="email" value={updatedUser.email}
      onChange={handleUpdate}/>
    </div>
  
    <div className='form-control'>
      <label>New Password</label>
      <input type="text" placeholder="Update Password" name="password" value={updatedUser.password} 
      onChange={handleUpdate}/>
    </div>
  
    <div className='form-control form-control-check'>
      <label>Set as Admin</label>
      <input type="checkbox" checked={updatedUser.is_admin} value_boolean={updatedUser.is_admin ? 'false' : 'true'} onChange={handleUpdate}/>
    </div>
  
  
    <input type="submit" value='Update' className='btn btn-block' onClick={() => UserAdmin.updateUser(updatedUser._id)}/>
  
  </form>
  </div>
 )
}
export default UpdateUser