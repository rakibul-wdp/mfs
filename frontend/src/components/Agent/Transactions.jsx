import { useEffect, useState } from "react";
import { getTransactions } from "../../api.js";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (err) {
        alert("Failed to fetch transactions");
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            {tx.type} - ৳{tx.amount} (Fee: ৳{tx.fee})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
