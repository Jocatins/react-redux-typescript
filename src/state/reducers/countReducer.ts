import { ActionType } from "../action-types";
import { Action } from "../actions";

const initState = 0;

const countReducer = (state: number = initState, action: Action) => {
	switch (action.type) {
		case ActionType.DECREMENT:
			return state - action.payload;
		case ActionType.INCREMENT:
			return state + action.payload;
		default:
			return state;
	}
};
export default countReducer;
