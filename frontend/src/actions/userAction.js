import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
} from "../constants/userTypes";

const userLoginAction = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    // creating config because browser should know of what type of data we are sending to the database
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/auth/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    console.log(err);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
