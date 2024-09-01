import React from "react";
import { useState, useEffect } from "react";
import TodoEnter from "./TodoEnter";

const TodoList = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    let response = await fetch(`/api/todos/`);
    let data = await response.json();
    setData(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleMoveUp = (id) => {
    const index = data.findIndex((todo) => todo.id === id);
    if (index === 0) return data;

    const newData = [...data];
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    setData(newData);
  };

  const handleMovedown = (id) => {
    const index = data.findIndex((todo) => todo.id === id);
    if (index === data.length - 1) return data;

    const newData = [...data];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    setData(newData);
  };

  const handleDeleteTodo = async (event) => {
        const csrftoken = document.cookie.match(/csrftoken=([\w\-]+)/)[1];

    const id = event.currentTarget.dataset.id;
    await fetch(`/api/todos/${id}/delete/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
    });
    await FetchData();
  };
  return (
    <div className="container">
      <div>
        <TodoEnter FetchData={FetchData} />
      </div>

      <div>
        {data.map((data) => (
          <div className="child-container" key={data.id}>
            <h3 className="text">{data?.body}</h3>
            <button
              className="delete-button"
              onClick={handleDeleteTodo}
              data-id={data.id}
            >
              <i className="bi bi-trash3"></i>
            </button>
            <button className="up-button" onClick={() => handleMoveUp(data.id)}>
              <i className="bi bi-arrow-up"></i>
            </button>
            <button
              className="down-button"
              onClick={() => handleMovedown(data.id)}
            >
              <i className="bi bi-arrow-down"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
