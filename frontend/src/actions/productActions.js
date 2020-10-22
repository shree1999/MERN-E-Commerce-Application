import axios from "axios";

import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productTypes";

const listProducts = () => async dispatch => {
  try {
    // first we are setting our appliction that a request is about to be fired
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const res = await axios.get("/api/products");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const getProduct = productId => async dispatch => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQUEST });

    const res = await axios.get(`/api/products/${productId}`);

    dispatch({ type: PRODUCT_DETAIL_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export { listProducts, getProduct };
