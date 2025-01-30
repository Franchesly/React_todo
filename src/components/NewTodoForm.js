import React, { useState } from "react";

const NewTodoForm = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo(""); // Reset the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
