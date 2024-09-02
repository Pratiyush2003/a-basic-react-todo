import React, { useState } from 'react'
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';

const App = () => {
  const [todos, setTodo] = useState([{id : Math.random(), text : "hello just for logic" , work : "sample work"}]); 
  const [id , setId] = useState(null);

  return (
    <>
      <Addtodo todos = {todos} setTodo= {setTodo} id={id} setId={setId}/>
      <Todos todos = {todos} setTodo= {setTodo} id={id} setId= {setId}/>
    </>
  )
}

export default App