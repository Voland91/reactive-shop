import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";
import ItemsService from "../services/ItemsService";

const products = ItemsService.getCartObjects();

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: products,
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };

      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);

      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].amount,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].amount,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      if (productSelected.numbers === 1)
        return {
          ...state,
          cartCost: state.cartCost,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };
      else {
        productSelected.numbers -= 1;
        return {
          ...state,
          cartCost: state.cartCost - state.products[action.payload].amount,
          products: {
            ...state.products,
            [action.payload]: productSelected,
          },
        };
      }
    default:
      return state;
  }
};
