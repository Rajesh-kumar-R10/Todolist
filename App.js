import React from "react";
import "./App.css";
import TodoApp from "./TodoApp";

function App() {
  return (
    <div className="App">
      <span className="title"><h1>Todo List</h1></span> <br />
      <TodoApp />
    </div>
  );
}

export default App;