import { combineReducers } from "redux";
import loginReducer from "./login";
import languageReducer from "./language";

const rootReducer = combineReducers({
    login:loginReducer,
    language:languageReducer
});

export default rootReducer;