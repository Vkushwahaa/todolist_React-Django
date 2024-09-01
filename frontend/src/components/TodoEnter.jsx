import React from "react";
import { useState } from "react";

const TodoEnter = ({ FetchData }) => {
  const [todoData, setTodoData] = useState("");

  const creatTodo = async () => {
    const csrftoken = document.cookie.match(/csrftoken=([\w\-]+)/)[1];

    await fetch(`/api/todos/create/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },

      body: JSON.stringify({ body: todoData }),
    });
    setTodoData("");
    FetchData();
  };
  const handleCreateTodo = () => {
    if (todoData !== "") {
      creatTodo();
    }
  };
  return (
    <div className="text-container">
      <div>
        <input
          className="input"
          value={todoData}
          onChange={(e) => setTodoData(e.target.value)}
          placeholder="Enter your text"
        />
        <button className="add-button" onClick={() => handleCreateTodo()}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};
export default TodoEnter;
