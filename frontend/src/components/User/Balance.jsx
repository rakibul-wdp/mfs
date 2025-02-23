import { useState } from "react";
import { getBalance } from "../../api.js";

const Balance = () => {
  const [balance, setBalance] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const fetchBalance = async () => {
    try {
      const data = await getBalance();
      setBalance(data.balance);
    } catch (err) {
      alert("Failed to fetch balance");
    }
  };

  return (
    <div>
      <h2>Your Balance</h2>
      {balance !== null && (
        <p onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? `৳${balance}` : "******"}
        </p>
      )}
      <button onClick={fetchBalance}>Check Balance</button>
    </div>
  );
};

export default Balance;
