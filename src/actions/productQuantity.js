import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_BASKET,
} from "./types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name,
    });
  };
};

export const clearProduct = (name) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: name,
    });
  };
};

export const clearBasket = () => {
  console.log("clearing the cart");
  return (dispatch) => {
    dispatch({
      type: CLEAR_BASKET,
    });
  };
};
