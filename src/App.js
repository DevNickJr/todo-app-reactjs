import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import './App.css'

function App() {
  const [todoArray, setTodoArray] = React.useState([]);
  const [filteredObj, setfilteredObj] = React.useState([]);

  useEffect(() => {
    setfilteredObj(todoArray)
  }, [todoArray])

  return(
    <>
      <Header setTodoArray={setTodoArray} todoArray={todoArray} />
      <Main setTodoArray={setTodoArray} todoArray={todoArray} filteredObj={filteredObj} setfilteredObj={setfilteredObj} />
    </>
  
   )
}

export default App;
