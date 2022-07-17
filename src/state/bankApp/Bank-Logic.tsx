import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, StateApp } from "..";
// import { StateApp } from "../reducers";

const BankLogic = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: StateApp) => state.bank);

  return (
    <>
      <h3>{amount}</h3>
      <button onClick={() => depositMoney(400)}>Deposit</button>
      <button onClick={() => withdrawMoney(200)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </>
  );
};
export default BankLogic;
