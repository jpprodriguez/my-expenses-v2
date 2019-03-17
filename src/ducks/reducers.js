import types from './types';

const initialState = {
  isLoggedIn: false
};

const { LOGGED_IN } = types;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.newValue
      };
    default:
      return state;
  }
};

export default reducer;
