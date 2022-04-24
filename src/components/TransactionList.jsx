import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mt-8 w-full ">
      <h3 className="font-bold text-base w-full py-2 border-b-2 border-b-gray-400 mb-3">
        History
      </h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
};
