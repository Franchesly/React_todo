export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [{ id: Date.now(), text: action.text, completed: false }, ...state];
      case "TOGGLE_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.id);
      case "EDIT_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, text: action.newText } : todo
        );
      default:
        return state;
    }
  };
  