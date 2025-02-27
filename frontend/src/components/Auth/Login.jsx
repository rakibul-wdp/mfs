import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api.js";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ identifier, pin });
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Mobile/Email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
