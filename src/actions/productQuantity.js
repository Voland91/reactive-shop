import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log("inside prod quantity");
    console.log("the action is ", action);
    console.log("the name is ", name);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: name,
    });
  };
};
