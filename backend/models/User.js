import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pin: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  nid: { type: String, required: true, unique: true },
  balance: { type: Number, default: 40 }, // Bonus 40 Taka
  role: { type: String, enum: ["user"], default: "user" },
  isActive: { type: Boolean, default: true },
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("pin")) {
    this.pin = await bcrypt.hash(this.pin, 10);
  }
  next();
});

export default mongoose.model("User", userSchema);
