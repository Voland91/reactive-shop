import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage.js";

// const initialState = {};
const middleWare = [thunk];

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
