import React, { useEffect, useState } from 'react'
import '/src/Css/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]); // Initialize with an empty array
  const navigate = useNavigate(); // Used to navigate to another page

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/register/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data, please try again later.");
      }
    };
    fetchUsers();
  }, []);

  const handle_submit = (e) => {
    e.preventDefault();

    // Find the user by email
    const foundUser = users.find((user) => user.user_email === email);

    if (foundUser) {
      if (foundUser.user_password === password) {
        alert("Login successful!");
        setError(""); // Clear any previous error messages
        setEmail(""); // Reset email field
        setPassword(""); // Reset password field
        navigate("/dashboard"); // Redirect user after login
      } else {
        setError("Incorrect password, please try again.");
      }
    } else {
      setError("User not found, please check your email.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="text-center">Login</h2>

        {/* Display error message if any */}
        {error && <p className="error-message">{error}</p>}

        <form method="post" onSubmit={handle_submit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
export default Login
