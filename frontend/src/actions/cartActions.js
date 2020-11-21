import axios from "axios";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartTypes";

const addCartItem = (id, qty) => async (dispatch, getState) => {
  /* Thunk middleware gives us access to getState 
    which allows us to access the global state.
  */

  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  /*
    understanding the flow
    user clicks add to cart ----> addCartItem() is called with id and qty of product ----> we fetch the product from server ----> we dispatch it to the reducer where it creates a state of all the products in the cart ----> we then use localstorage to save the cart.
  */
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

const removeCartItem = id => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export { addCartItem, removeCartItem };
