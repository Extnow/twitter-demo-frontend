import { combineReducers } from 'redux';

function userInfoHasError(state = false, action) {
  switch (action.type) {
    case 'USER_DATA_HAS_ERROR':
      return action.hasError;

    default:
      return state;
  }
}

function userInfoIsLoading(state = false, action) {
  switch (action.type) {
    case 'USER_DATA_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

function userInfo(state = [], action) {
  switch (action.type) {
    case 'USER_INFO_FETCH_SUCCESS':
      return action.userInfo;

    default:
      return state;
  }
}

export default combineReducers({
  userInfo,
  userInfoHasError,
  userInfoIsLoading,
});
