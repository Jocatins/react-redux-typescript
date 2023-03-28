import { ActionType } from "../action-types";

interface DepositAction {
	type: ActionType.DEPOSIT;
	payload: number;
}

interface WithdrawAction {
	type: ActionType.WITHDRAW;
	payload: number;
}

interface BankruptAction {
	type: ActionType.BANKRUPT;
}

interface IncrementAction {
	type: ActionType.INCREMENT;
	payload: number;
}
interface decrementAction {
	type: ActionType.DECREMENT;
	payload: number;
}

export type Action =
	| DepositAction
	| WithdrawAction
	| BankruptAction
	| IncrementAction
	| decrementAction;
