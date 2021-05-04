import { combineReducers } from "redux";
import navBarReducer from "./navBarReducer";

const rootReducer = combineReducers({
  navBar: navBarReducer,
});

export default rootReducer;
