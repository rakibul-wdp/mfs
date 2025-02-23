import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api.js";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    pin: "",
    mobileNumber: "",
    email: "",
    nid: "",
    role: "user",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="password"
        placeholder="5-digit PIN"
        value={formData.pin}
        onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={(e) =>
          setFormData({ ...formData, mobileNumber: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="NID"
        value={formData.nid}
        onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
      />
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="user">User</option>
        <option value="agent">Agent</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
