import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, refPath: "senderType" },
  receiver: { type: mongoose.Schema.Types.ObjectId, refPath: "receiverType" },
  senderType: { type: String, enum: ["User", "Agent", "Admin"] },
  receiverType: { type: String, enum: ["User", "Agent", "Admin"] },
  amount: { type: Number, required: true },
  fee: { type: Number, default: 0 },
  type: {
    type: String,
    enum: ["send-money", "cash-in", "cash-out"],
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Transaction", transactionSchema);
