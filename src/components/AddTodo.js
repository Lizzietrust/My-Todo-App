import {useState} from 'react';

const AddTodo = ({onAdd}) => {

    const [text, setText] = useState("");
    const [time, setTime] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Can't submit an empty field")
            return
        }

        onAdd({text, time})

        setText("")
        setTime("")
    };

  return (
    <form className='add-todo' onSubmit={onSubmit}>
        <div className='form'>
            <label>Todo</label>
            <input type="text" placeholder='Add Todo' className='input-text' 
            value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form'>
            <label>Time</label>
            <input type="text" placeholder='Add Time' className='input-text'
            value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>
        <div>
            <input type="submit" className='btn'/>
            <input type="reset" className='btn btn-reset'/>
        </div>
    </form>
  )
}

export default AddTodo
