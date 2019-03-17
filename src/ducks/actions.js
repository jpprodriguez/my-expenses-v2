import types from './types';

const { LOGGED_IN } = types;

const userLoggedIn = value => ({
  type: LOGGED_IN,
  newValue: value
});

export default { userLoggedIn };
