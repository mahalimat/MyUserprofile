import axios from "axios";
import { AUTH_USER, AUTH_ERROR, FETCH_USERS } from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/signup", formProps);
    console.log("response:", response);

    dispatch({ type: AUTH_USER, payload: response.data });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/signin", formProps);

    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = callback => async dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({ type: AUTH_USER, payload: "" });
  callback();
};

export const fetchUsers = () => async dispatch => {
  try {
    const response = await axios.get("/api/users");
    console.log("response:", response.data);

    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
