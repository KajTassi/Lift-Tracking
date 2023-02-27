import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import InputTodoTwo from "./components/InputTodo2";
import ListTodos from "./components/ListTodos";
import ListTodosTwo from "./components/ListTodos2";


function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
      <hr class="featurette-divider"></hr>
    </Fragment>
  );
}

export default App;

