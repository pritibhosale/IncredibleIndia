import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { userSignupReducer, userSigninReducer } from "./Reducers/UserReducer";

const reducer = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
});

let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
