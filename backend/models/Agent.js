import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pin: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  nid: { type: String, required: true, unique: true },
  balance: { type: Number, default: 100000 }, // Initial balance for agents
  role: { type: String, enum: ["agent"], default: "agent" },
  isVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

agentSchema.pre("save", async function (next) {
  if (this.isModified("pin")) {
    this.pin = await bcrypt.hash(this.pin, 10);
  }
  next();
});

export default mongoose.model("Agent", agentSchema);
