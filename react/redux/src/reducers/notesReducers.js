initialNote = {
  id: 0,
  content: {},
};
initialState = [initialNote];

// ADD_NOTE - dodaje notatkę o polach: id oraz content
// DELETE_NOTE - usuwa notatkę o podanym id

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      const temp = state.splice(
        state.findIndex((note) => {
          note.id === action.id;
        }),
        1
      );
      return temp;
    default:
      return state;
  }
};

export default notesReducer;
