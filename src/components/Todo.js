import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Todo = ({todo, onDelete}) => {
  return (
    <div className='todo'>
        <div className='text'>
            <h3>{todo.text}</h3>
            <p>{todo.time}</p>
        </div>
        <FaTrash className='trash' onClick={() => onDelete(todo.id)}/>
    </div>
  )
}

export default Todo
