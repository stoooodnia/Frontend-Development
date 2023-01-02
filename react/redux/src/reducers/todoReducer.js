const initialObj = {
  id: 0,
  title: "init",
  done: true,
};

const initialState = [initialObj];

// ADD_TODO - dodaje do store'a nowy element typu todo
// DELETE_TODO - usuwa element todo
// UPDATE_TODO - aktualizuje tytuł elementu todo o danym id
// FINISH_TODO - zmienia wartość flagi done na true w elemencie o danym id.

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      const temp = state.splice(
        state.findIndex((todo) => todo.id === action.id),
        1
      );
      return temp;
    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, ...action.updatedTitle };
        }
        return todo;
      });
    case "FINISH_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !state.done };
        }
      });
    default:
      return state;
  }
};

export default todoReducer;
