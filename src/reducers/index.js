import {combineReducers} from "redux";
import  uiReducer  from "./uiReducer";
import clientReducer from "./clientReducer";

export default combineReducers({

    ui: uiReducer,
    client: clientReducer
})
