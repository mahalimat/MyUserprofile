import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import usersReducer from "./usersReducer";

export default combineReducers({
  auth,
  form: formReducer,
  users: usersReducer
});
