import { useEffect, useState } from "react";
import { getAllAgents } from "../../api.js";

const ManageAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAllAgents();
        setAgents(data);
      } catch (err) {
        alert("Failed to fetch agents");
      }
    };
    fetchAgents();
  }, []);

  return (
    <div>
      <h2>Manage Agents</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent._id}>
            {agent.name} - {agent.mobileNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageAgents;
