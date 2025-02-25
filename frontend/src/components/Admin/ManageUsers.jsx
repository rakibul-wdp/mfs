import { useEffect, useState } from "react";
import { getAllUsers } from "../../api.js";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        alert("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.mobileNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
