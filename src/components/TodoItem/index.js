// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {text, id} = todoDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="card-container">
      <p className="todo-text"> {text} </p>

      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
