import { combineReducers } from "redux";
import loginReducer from "./login";
import languageReducer from "./language";
import fiatReducer from "./fiat";

const rootReducer = combineReducers({
    login:loginReducer,
    language:languageReducer,
    fiat:fiatReducer
});

export default rootReducer;