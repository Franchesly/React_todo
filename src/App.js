import React, { useReducer } from "react";
import TodoList from "./components/TodoList/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import { todoReducer } from "./reducer";
import "./styles/App.css";

const initialState = [
  { id: 1, text: "Find that missing sock", completed: false },
  { id: 2, text: "Finish React project", completed: false },
];

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <NewTodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
