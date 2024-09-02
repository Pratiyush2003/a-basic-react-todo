import React, { useEffect, useState } from "react";

const Addtodo = ({ todos, setTodo, id, setId }) => {
  const [text, setTodoOne] = useState("");
  const [work, setTodotwo] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.ceil(Math.random() * 1000),
      text,
      work,
    };
    setTodo([...todos, obj]);
  };

  useEffect(() => {
    if (id) {
      const updateTodo = todos.filter((ele) => ele.id === id);
      setTodoOne(updateTodo[0].text);
      setTodotwo(updateTodo[0].work);
    }
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    const obj = {
      text,
      work,
    };
    setTodo((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
    setId(null);
    setTodoOne("");
    setTodotwo("");
  };

  return (
    <form onSubmit={id ? update : addTodoHandler}>
      <label>Add todo</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setTodoOne(e.target.value)}
      />
      <label>Another</label>
      <input
        type="text"
        value={work}
        onChange={(e) => setTodotwo(e.target.value)}
      />
      {id ? (
        <button type="submit">
          Edit
        </button>
      ) : (
        <button type="submit" >
          Addtodo
        </button>
      )}
    </form>
  );
};

export default Addtodo;
