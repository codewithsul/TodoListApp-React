import React from "react";
import { useState } from "react";
import "./AddTodo.css";

const AddTodo = () => {
  const [AddToList, setList] = useState("");
  const [TodoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const handleChange = (event) => {
    setList(event.target.value);
  };

  const AddList = () => {
    const task = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
      taskName: AddToList,
      completed: false,
    };
    const NewList = [...TodoList, task];
    setTodoList(NewList);
  };

  const handleDelete = (id) => {
    const NewListDlt = TodoList.filter((task) => {
      if (task.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setTodoList(NewListDlt);
  };

  const handleAdd = (id) => {
    setTodoList(
      TodoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return { ...task, completed: false };
        }
      })
    );
    setCompletedList(TodoList);
  };

  return (
    <>
      <div className="leftblock">
        <input
          type="text"
          placeholder="Add Todo"
          name="TodoEntry"
          id="input"
          onChange={handleChange}
        ></input>
        <button type="submit" id="btn" onClick={AddList}>
          Add
        </button>
        <hr className="horizontal"></hr>
        <div className="TodoList">
          {TodoList.map((task) => {
            return (
              <div className="Todos">
                <h5>{task.taskName}</h5>
                <button className="dlt" onClick={() => handleDelete(task.id)}>
                  x
                </button>
                <button
                  className="completed"
                  onClick={() => handleAdd(task.id)}
                >
                  Add to Completed
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightblock">
        <div className="head">
          <span className="dot"></span>
          <h5>Completed</h5>
        </div>
        <hr className="horizontal2"></hr>
        <div className="inner">
          {completedList.map((task) => {
            return (
              <div
                className="done"
                style={{
                  backgroundColor: "palegreen",
                }}
              >
                <h5>{task.taskName}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddTodo;
