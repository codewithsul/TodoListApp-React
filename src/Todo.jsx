import React from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import Gleem from "./components/gleem/Gleem";
import Head from "./components/Head/head";

const Todo = () => {
  return (
    <>
      <Head />
      <AddTodo />
      <Gleem />
    </>
  );
};

export default Todo;
