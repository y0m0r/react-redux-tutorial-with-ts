import {combineReducers} from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

const rootReducer = combineReducers({todos, visibilityFilter});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
