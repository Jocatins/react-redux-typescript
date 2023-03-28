import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

// Action creators are functions that dispatch actions
// DEPOSIT ACTION TYPE
export const depositMoney = (amount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DEPOSIT,
			payload: amount,
		});
	};
};
// WITHDRAW ACTION TYPE
export const withdrawMoney = (amount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.WITHDRAW,
			payload: amount,
		});
	};
};
// BANKRUPT ACTION TYPE
export const bankrupt = () => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.BANKRUPT,
		});
	};
};
// INCREMENT ACTION TYPE
export const increment = (amount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.INCREMENT,
			payload: amount,
		});
	};
};
// INCREMENT ACTION TYPE
export const decrement = (amount: number) => {
	return (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.DECREMENT,
			payload: amount,
		});
	};
};
