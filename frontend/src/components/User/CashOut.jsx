import { useState } from "react";
import { cashOut } from "../../api.js";

const CashOut = () => {
  const [agentId, setAgentId] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await cashOut({ agentId, amount, pin });
      alert("Cash-out successful");
    } catch (err) {
      alert("Cash-out failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agent ID"
        value={agentId}
        onChange={(e) => setAgentId(e.target.value)}
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
      <button type="submit">Cash Out</button>
    </form>
  );
};

export default CashOut;
