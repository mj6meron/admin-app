import User from './User'

//for user management
const Tasks = ({tasks, onDelete}) => {

  return (
    <>
    {tasks.map((task, index)=> (
        <User key = {index} userBox = {task}
        onDelete = {onDelete}
        />
    
        ))}
    </>
  )
}



export default Tasks