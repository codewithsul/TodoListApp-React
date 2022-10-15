import React from "react";
import "./head.css";

const head = () => {
  return (
    <div>
      <div className="header">
        <h1>MyTodos</h1>
      </div>
      <div className="head">
      <span className="dot"></span>
      <h5>Completed</h5>
      <span className="dott"></span>
      <h5>Not completed</h5>
    </div>
    </div>
  );
};

export default head;
