import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  const [ todos, setTodos] = useState(
    [
        {
            id: 1,
            text: "Hit the gym",
            time: "December 4th"
        },
        {
            id: 2,
            text: "Write some codes",
            time: "December 5th"
        },
        {
            id: 3,
            text: "Do house chores",
            time: "December 4th"
        },
        {
            id: 4,
            text: "Read Novels",
            time: "December 7th"
        }
    ]
  );

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <Header name="MY TODOS"/>
      <AddTodo onAdd={addTodo}/>
      {todos.length > 0 ? <Todos todos={todos} onDelete={deleteTodo}/> : <h2>No more Todos, add new list</h2>}
    </div>
  );
}

export default App;
