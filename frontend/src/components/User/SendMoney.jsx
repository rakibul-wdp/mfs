import { useState } from "react";
import { sendMoney } from "../../api.js";

const SendMoney = () => {
  const [receiverPhone, setReceiverPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMoney({ receiverPhone, amount });
      alert("Money sent successfully");
    } catch (err) {
      alert("Failed to send money");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Receiver Phone"
        value={receiverPhone}
        onChange={(e) => setReceiverPhone(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Send Money</button>
    </form>
  );
};

export default SendMoney;
