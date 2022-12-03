import React from 'react';
import Todo from './Todo';

const Todos = ({todos, onDelete}) => {
    
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete}/>
      ))}
    </div>
  )
};

export default Todos
