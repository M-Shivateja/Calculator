import { useState } from "react";
import axios from "axios";
import Calculator from "./Calculator";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [operator, setOperator] = useState(null);
  const [userName, setUserName] = useState(null); // Store user name
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      setOperator(response.data.operator);
      setUserName(response.data.name); // Set user name from response
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(
        "Login Error:",
        error.response ? error.response.data : error.message
      );
      alert(
        "Login failed: " +
          (error.response ? error.response.data.error : error.message)
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setUserName(null);
    setOperator(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        {!isLoggedIn ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2 w-full mb-4 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 w-full mb-4 rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">
              Welcome, {userName}!
            </h2>{" "}
            {/* Show user name */}
            <p className="text-center mb-4">
              You have registered for {operator}.
            </p>
            <Calculator operator={operator} userEmail={userName} />
            <button
              className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600 transition duration-200 mt-4"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
