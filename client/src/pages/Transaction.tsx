import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecords } from "../contexts/financial-record-contect";
import { useNavigate } from 'react-router-dom';

const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
//   const { addRecord } = useFinancialRecords();
  const navigate = useNavigate()
  const submitRecord = () =>{
    navigate('/')
  }
  const { user } = useUser();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const newRecord = {
    //   userId: user?.id ?? "",
    //   date: new Date(),
    //   description: description,
    //   amount: parseFloat(amount),
    //   category: category,
    // };

    // addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="form-container bg-gradient-to-b from-[#F7FFE5] to-[#C0EABD] items-center py-10 h-full">
      <form onSubmit={handleSubmit}>
        <div className="form-field p-5">
          <label className="font-bold text-[#446741]">Description:</label>
          <input
            type="text"
            required
            className="input shadow-lg rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-field flex w-100% p-5">
          <label className="font-bold text-[#446741]">Amount:</label>
          <input
            type="number"
            required
            className="input shadow-lg rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-field p-5">
          <label className="font-bold text-[#446741]">Category:</label>
          <select
            required
            className="input shadow-lg rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="items-center">
        <button onClick={submitRecord} type="submit" className="rounded-full shadow-lg button py-2 px-3 bg-[#C7EA79] text-[#446741]">
          Add Record
        </button>
        </div>
      </form>
    </div>
  );
};


export default FinancialRecordForm