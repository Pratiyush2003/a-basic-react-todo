import React from "react";

const Todos = ({ todos, setTodo , setId }) => {
    const deleteTodo = (id) => {
        const DeleteTodo = todos.filter((p) => p.id !== id)
        setTodo(DeleteTodo)
    }
  return (
    <ul>
      {todos.map((ele) => (
        <div key={ele.id}>
          <li>{ele.text}</li>
          <li>{ele.work}</li>
          <button onClick={() => deleteTodo(ele.id)}>Delete</button>
          <button onClick={() => setId(ele.id)}>Edit</button>
        </div>
      ))}
    </ul>
  );
};

export default Todos;
