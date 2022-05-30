import React from 'react'
import iconMoon from "../images/icon-moon.svg"

export default function Header({setTodoArray, todoArray}) {
    const [val, setVal] = React.useState('');
    
    const setTodoVal = (event) => {
        setVal(event.target.value)
    }
    const addToList = (event) => {
        if (event.key === 'Enter') {
            setTodoArray(prev => [...prev, {text:val, completed:false, id:parseInt(Math.random() *1000)}])
            setVal('')   
        }
    }
    
    return (
        <header className='header'>
            <div className="top">
                <h1>Todo App with React</h1>
                <img src= {iconMoon} alt="header-background" />
            </div>
            <input onChange={setTodoVal} onKeyDown={addToList} type="text" name="todo" value={val} className="todo-input" placeholder="Create a new todo..."></input>
        </header>
    )
}