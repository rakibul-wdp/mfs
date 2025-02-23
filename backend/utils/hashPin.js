import bcrypt from "bcryptjs";

export const hashPin = async (pin) => {
  return await bcrypt.hash(pin, 10);
};
