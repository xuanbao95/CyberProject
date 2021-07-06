
import { combineReducers } from "redux";
import { AdminReducer } from "./AdminReducer";
import movieReducer from "./movieReducer";
import { NguoiDungReducer } from "./NguoiDungReducer";
import userReducer from "./userReducer";
export const rootReducers = combineReducers({
    movieReducer: movieReducer,
    userReducer: userReducer,
    NguoiDungReducer: NguoiDungReducer,
    AdminReducer: AdminReducer,

})