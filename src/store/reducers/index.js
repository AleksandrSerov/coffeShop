import { handleActions } from "redux-actions";
import actions from "../actions";
import { combineReducers } from "redux";

export const items = handleActions(
  {
    [actions.setInitialState](state, { payload }) {
      console.log(payload);
      return { ...payload };
    }
  },
  {}
);

export default combineReducers({ items });
