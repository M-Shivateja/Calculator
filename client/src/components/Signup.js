import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [operator, setOperator] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/auth/signup", {
        name,
        email,
        password,
        operator,
      });
      alert("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          onChange={(e) => setName(e.target.value)}
        />
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
        <select
          className="border border-gray-300 p-2 w-full mb-4 rounded"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="">Select Operator</option>
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
        </select>
        <button
          className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
