import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import houses from "./houses";
import characters from "./characters";
import history from "../history";

export default combineReducers({
  houses,
  characters,
  router: connectRouter(history)
});
