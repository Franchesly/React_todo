import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddClick = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddClick}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
