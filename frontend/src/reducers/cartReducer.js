import { CART_ADD_ITEM } from "../constants/cartTypes";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // check if item already exists in cartItems by marching the product ids
      const itemExists = state.cartItems.find(
        ele => ele.product === item.product
      );

      if (itemExists) {
        // what is happening is that if product exits then add to cart without repeating it otherwise add original items
        return {
          ...state,
          cartItems: state.cartItems.map(ele =>
            ele.product === item.product ? item : ele
          ),
        };
      } else {
        // if item doesn't exists in the cartItem then we push it on cart
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};

export { cartReducer };
