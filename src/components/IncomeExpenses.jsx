import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  // get all amounts into an array
  const amounts = transactions.map((transaction) => transaction.amount);
  // get income and expenses using filter
  // get income : filter all numbers greater than zero(positive numbers)
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((totalValue, currentValue) => (totalValue += currentValue), 0)
    .toFixed(2);

  // get income : filter all numbers less than zero(negative numbers)
  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((totalValue, currentValue) => (totalValue += currentValue), 0) *
    -(1).toFixed(2);

  return (
    <div className="flex justify-center items-center gap-10 px-5 py-3 bg-white shadow-md w-full h-fit mt-2 ">
      <div className="text-center px-2 ">
        <h4>Income</h4>
        <p className="text-green-600">¢{income}</p>
      </div>
      <div className="text-center px-2">
        <h4>Expense</h4>
        <p className="text-red-600">¢{expense}</p>
      </div>
    </div>
  );
};
