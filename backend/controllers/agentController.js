import Agent from "../models/Agent.js";
import Transaction from "../models/Transaction.js";

export const cashIn = async (req, res) => {
  const { userId, amount, pin } = req.body;
  try {
    const agent = await Agent.findById(req.user.id);
    const user = await User.findById(userId);

    if (!agent || !user)
      return res.status(404).json({ message: "User or agent not found" });
    if (agent.balance < amount)
      return res.status(400).json({ message: "Insufficient balance" });

    agent.balance -= amount;
    user.balance += amount;

    await agent.save();
    await user.save();

    const transaction = new Transaction({
      sender: agent._id,
      receiver: user._id,
      amount,
      type: "cash-in",
    });
    await transaction.save();

    res.status(200).json({ message: "Cash-in successful", transaction });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
