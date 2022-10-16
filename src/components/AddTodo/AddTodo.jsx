import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./AddTodo.css";

const LOCAL_STORAGE_KEY = "Gleem";

const AddTodo = () => {
  const [AddToList, setList] = useState("");
  const [TodoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [Change, setChange] = useState("complete");

  const TodoNameRef = useRef();

  const handleChange = (event) => {
    const name = TodoNameRef.current.value;
    if (name === "") return;
    setList(name);
  };

  const AddList = () => {
    const task = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
      taskName: AddToList,
      completed: false,
    };
    const NewList = [...TodoList, task];
    setTodoList(NewList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(NewList));
    TodoNameRef.current.value = null;
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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(NewListDlt));
  };

  const handleAdd = (id) => {
    const NewTodo = [...TodoList];
    const task = NewTodo.find((task) => task.id === id);
    if (task.completed === false) {
      task.completed = !task.completed;
      setCompletedList(NewTodo);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(NewTodo));
    } else {
      task.completed = true;
    }
  };

  useEffect(() => {
    const TodoData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (TodoData) setTodoList(TodoData);
  }, []);

  return (
    <>
      <div className="leftblock">
        <input
          type="text"
          placeholder="Add Todo"
          name="TodoEntry"
          id="input"
          onChange={handleChange}
          ref={TodoNameRef}
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
                  onClick={() => {
                    {
                      handleAdd(task.id);
                    }
                  }}
                  style={{
                    backgroundColor: task.completed
                      ? "palegreen"
                      : "lightseagreen",
                  }}
                >
                  {Change}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rightblock">
        <h2>Tracker</h2>
        <hr className="horizontal2"></hr>
        <div className="inner">
          {completedList.map((task) => {
            return (
              <div
                className="done"
                style={{
                  backgroundColor: task.completed
                    ? "palegreen"
                    : "paleturquoise",
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
