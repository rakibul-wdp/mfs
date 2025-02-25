import { useState } from "react";
import { cashIn } from "../../api.js";

const CashIn = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cashIn({ userId, amount, pin });
      alert("Cash-in successful");
    } catch (err) {
      alert("Cash-in failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button type="submit">Cash In</button>
    </form>
  );
};

export default CashIn;
