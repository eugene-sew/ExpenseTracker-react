import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: parseFloat(amount),
    };
    addTransaction(newTransaction);
  };

  return (
    <div className="mt-5">
      <h3 className="text-xl font-bold my-2">Add New Transaction</h3>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col w-full">
          <label>Text</label>
          <input
            type="text"
            placeholder="enter text...."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="inp-field"
          />
        </div>
        <div>
          <label>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="text"
            placeholder="enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="inp-field"
          />
        </div>
        <button className="w-full bg-purple-400 font-bold text-white py-2 hover:bg-purple-600">
          Add Transaction
        </button>
      </form>
    </div>
  );
};
