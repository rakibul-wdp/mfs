import { useEffect, useState } from "react";
import { getRechargeRequests } from "../../api.js";

const RechargeRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getRechargeRequests();
        setRequests(data);
      } catch (err) {
        alert("Failed to fetch recharge requests");
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Recharge Requests</h2>
      <ul>
        {requests.map((req) => (
          <li key={req._id}>
            Agent: {req.agentId} - Amount: ৳{req.amount} - Status: {req.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RechargeRequests;
