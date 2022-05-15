import {useState} from 'react'
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

const AddUser = ({onAdd}) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onSubmit = (e)=>{
    e.preventDefault()
    if(!email){
        alert('add new user')
        return
    }
    onAdd({email, password})
    setEmail('')
    setPassword('')
}

<<<<<<< Updated upstream
  return (
=======
return (
>>>>>>> Stashed changes
   <form className='add-form' onSubmit={onSubmit}>

       <div className='form-control'>
           <label>Email</label>
           <input type="text" placeholder="Add Email" value={email} 
           onChange={(e) => setEmail(e.target.value)}/>
       </div>

       <div className='form-control'>
           <label>Password</label>
           <input type="text" placeholder="Add Password" value={password} 
           onChange={(e) => setPassword(e.target.value)}/>
       </div>

    

       <input type="submit" value='Add' className='btn btn-block'/>

   </form>
  )
}
 export default AddUser