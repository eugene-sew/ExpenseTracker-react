import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  // get all amounts into an array
  const amounts = transactions.map((transaction) => transaction.amount);
  // add all the amounts in the array
  const total = amounts
    .reduce((totalValue, currentValue) => (totalValue += currentValue), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="text-xl font-bold text-gray-600">¢{total}</h1>
    </>
  );
};
