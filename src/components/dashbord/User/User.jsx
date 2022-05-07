import {FaTimes} from 'react-icons/fa'

//for user management
const Task = ({task, onDelete}) => {
  return (
    <div className = 'userBox'>
        <h3>
            {task.text}   
            <FaTimes style={ {color:'red'} }
            onClick ={() => onDelete(task.id)}/>
        </h3> 
        <p>{task.email}</p> 
    </div>
  )
}



export default Task
