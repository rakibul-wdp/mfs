import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Agent from "../models/Agent.js";
import Admin from "../models/Admin.js";

export const registerUser = async (req, res) => {
  const { name, pin, mobileNumber, email, nid } = req.body;
  try {
    const user = new User({ name, pin, mobileNumber, email, nid });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  const { identifier, pin } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ mobileNumber: identifier }, { email: identifier }],
    });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPinValid = await bcrypt.compare(pin, user.pin);
    if (!isPinValid) return res.status(400).json({ message: "Invalid PIN" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
