import React, { useState } from "react";

const TodoItem = ({ todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: todo.id });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", id: todo.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({ type: "EDIT_TODO", id: todo.id, newText });
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={handleDelete} disabled={!todo.completed}>
        Delete
      </button>
      <button onClick={handleEdit} disabled={isEditing}>
        Edit
      </button>
      {isEditing && <button onClick={handleSave}>Save</button>}
    </li>
  );
};

export default TodoItem;
