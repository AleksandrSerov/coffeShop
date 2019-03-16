import actions from "../actions";

export const handleSetInitialState = data => async dispatch => {
  data.then(r => dispatch(actions.setInitialState(r)));
};
