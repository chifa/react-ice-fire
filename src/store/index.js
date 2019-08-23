import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import api from "../middlewares/api";

const enhancer = applyMiddleware(
  thunk,
  api
);

export default initialState => createStore(reducer, initialState, enhancer);
