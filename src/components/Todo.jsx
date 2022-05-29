import React, { useEffect } from "react";

import { useState } from "react";
const Todo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const saveInfo = () => {
    fetch("https://4q528r.sse.codesandbox.io/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: newTodo
      })
    })
      .then((r) => r.json())
      .then((d) => {
        setTodo(...todo, d);
        setNewTodo("");
      });
  };

  useEffect(() => {
    fetch("https://4q528r.sse.codesandbox.io/todos?_page=1&_limit=3")
      .then((r) => r.json())
      .then((d) => {
        setTodo(d);
      });
  }, []);

  return (
    <div>
      Todos
      <div>
        <input
          value={newTodo}
          onChange={({ target }) => setNewTodo(target.value)}
        />
        <button onClick={saveInfo}>SAVE</button>
        {todo.map((todo) => (
          <div key={todo.id}>{todo.name}</div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
