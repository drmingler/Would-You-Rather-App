import { combineReducers } from "redux";
import {loadingBarReducer} from "react-redux-loading";

import users from "./users";
import authUser from "./authUser";
import questions from "./questions";


export default combineReducers({
    users: users,
    authUser: authUser,
    questions : questions,
    loadingBar : loadingBarReducer

});


