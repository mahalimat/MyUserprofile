import { FETCH_USERS, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  users: [],
  user: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
