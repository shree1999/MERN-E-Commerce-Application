/*
  steps to follow when working with redux
  1. create some dispatch types. like in this file
  2. go to reducers and define what does this types do and according to that change the global state
  3. combine the reducers.
  4. Create an action for the above reducer we have created.
*/
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
