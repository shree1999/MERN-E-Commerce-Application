import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from "../constants/userTypes";

const userLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        isLoading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        isLoading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      return {
        isLoading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export { userLoginReducers };
