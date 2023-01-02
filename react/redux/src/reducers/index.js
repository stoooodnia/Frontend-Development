import { combineReducers } from "redux";
import notesReducer from "./notesReducers";
import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
  note: notesReducer,
});

export default rootReducer;
