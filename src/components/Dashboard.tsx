import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the backend
    fetch(`${process.env.REACT_APP_BASE_URL}/home`, {
      credentials: "include", // Include cookies for session management
    })
      .then((res) => {
        if (res.status === 401) {
          // Redirect to login if not authenticated
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data.user);
      })
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, [navigate]);

  const handleLogout = async () => {
    await fetch("http://localhost:5000/auth/logout", {
      credentials: "include",
    });
    window.location.href = "/login";
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <p className="text-gray-700">Email: {user.email}</p>
      <img className="w-16 h-16 rounded-full" src={user.avatar} alt="Profile" />
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
