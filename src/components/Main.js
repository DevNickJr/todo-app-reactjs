import React from 'react'
import deleteBtn from '../images/icon-cross.svg'


export default function Main({todoArray, setTodoArray, filteredObj, setfilteredObj}) {
    //functions/Event Handlers

    const clearTodoHandler = (event) => {
        setTodoArray(todoArray.filter((item) => !item.completed))
    }

    const deleteTodo = (event) => {
        setTodoArray(todoArray.filter(item => JSON.stringify(item.id) !== event.target.parentElement.id))
    }

    const setCompleted = (event) => {
        const todoList = []
        for (let todo of todoArray) {
            if (JSON.stringify(todo.id) === event.target.parentElement.id) {
                todoList.push({...todo, completed: !todo.completed});
            }
            else {
                todoList.push(todo)
            }
        }
        setTodoArray(todoList)
    }
    
    const allTodos = () => {
        setfilteredObj(todoArray)
    }
    const activeTodos = () => {
        setfilteredObj(todoArray.filter(item => item.completed === false))
    }
    const completedTodos = () => {
        setfilteredObj(todoArray.filter(item => item.completed === true))
    }
    // const k = filteredObj ? filteredObj: todoArray
    console.log(filteredObj)
    
    const todoItem = filteredObj.map(item => {
        return (
            <label className='todo-list__item' id={item.id} key={item.id} draggable={true}>
                <input onChange={setCompleted} className='todo-item__check' checked={item.completed} type='checkbox'></input>
                <li className='todo-text'>{item.text}</li>
                <img onClick={deleteTodo} src={deleteBtn} alt='delete btn' height={12} />
            </label>
        )})
   
    return (
        <main className='main'>
            <div className="container">
                <div className="todo-list" id="todo-list"><ul>{todoItem}</ul></div>
                <div className="todo-list-footer">
                    <p className="items-left">items left</p>
                    <div className="states">
                        <button onClick={allTodos} className="all">All</button>
                        <button onClick={activeTodos} className="active">Active</button>
                        <button onClick={completedTodos} className="completed">Completed</button>
                    </div>
                    <p className="clear" onClick={clearTodoHandler}><button>Clear Completed</button></p>
                </div>
            </div>
            <div className="foot">Drag and drop to reorder list</div>
        </main>
    )
}
