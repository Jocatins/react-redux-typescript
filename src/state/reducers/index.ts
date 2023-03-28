import { combineReducers } from "redux";
// CombineReducers to accommodate number of different reducers to be exported

import bankReducer from "./bankReducer";
import countReducer from "./countReducer";

const reducers = combineReducers({
	bank: bankReducer,
	countReducer,
});
export default reducers;

export type StateApp = ReturnType<typeof reducers>;
