import Admin from "../models/Admin.js";
import Agent from "../models/Agent.js";
import Transaction from "../models/Transaction.js";

export const approveAgent = async (req, res) => {
  const { agentId } = req.params;
  try {
    const agent = await Agent.findById(agentId);
    if (!agent) return res.status(404).json({ message: "Agent not found" });

    agent.isVerified = true;
    await agent.save();

    res.status(200).json({ message: "Agent approved successfully", agent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addMoneyToAgent = async (req, res) => {
  const { agentId, amount } = req.body;
  try {
    const agent = await Agent.findById(agentId);
    if (!agent) return res.status(404).json({ message: "Agent not found" });

    agent.balance += amount;
    await agent.save();

    const transaction = new Transaction({
      sender: req.user.id,
      receiver: agent._id,
      amount,
      type: "add-money",
    });
    await transaction.save();

    res
      .status(200)
      .json({ message: "Money added to agent successfully", transaction });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
