import { useState } from "react";
import { requestBalance } from "../../api.js";

const BalanceRequest = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestBalance({ amount });
      alert("Balance request submitted");
    } catch (err) {
      alert("Balance request failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Request Balance</button>
    </form>
  );
};

export default BalanceRequest;
