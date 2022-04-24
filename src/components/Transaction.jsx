import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={`flex justify-between relative ${
        sign === "-" ? "border-r-red-400" : "border-r-green-400"
      }  border-r-4 bg-white px-2 py-2 shadow items-center my-2 group`}
    >
      <h1 className="flex justify-between w-full">
        {transaction.text}{" "}
        <span>
          {sign}¢{Math.abs(transaction.amount)}
        </span>
      </h1>
      <button
        className=" hover:bg-red-600 w-8 h-8 text-center text-white rounded-full cursor-pointer absolute -left-10"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
