import { host, accesToken } from '../utils';

function userInfoHasError(bool) {
  return {
    type: 'USER_DATA_HAS_ERROR',
    hasError: bool,
  };
}

function userInfoIsLoading(bool) {
  return {
    type: 'USER_DATA_IS_LOADING',
    isLoading: bool,
  };
}

function userInfoFetchSuccess(userInfo) {
  return {
    type: 'USER_INFO_FETCH_SUCCESS',
    userInfo,
  };
}

export default function userInfoFetchData(id) {
  return (dispatch) => {
    dispatch(userInfoIsLoading(true));

    fetch(`${host}/api/v1/accounts/${id}?access_token=${accesToken}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(userInfoIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(userInfo => dispatch(userInfoFetchSuccess(userInfo)))
      .catch(() => dispatch(userInfoHasError(true)));
  };
}