import Transaction from "../models/Transaction.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      $or: [{ sender: req.user.id }, { receiver: req.user.id }],
    })
      .sort({ timestamp: -1 })
      .limit(100);
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
