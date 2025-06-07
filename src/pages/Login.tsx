import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const roles = [
  "Student",
  "Parent",
  "Admin",
  "Teacher",
  "Tutor",
  "HOD",
  "HOD Mentor"
];

const LoginPage: React.FC = () => {
  const [role, setRole] = useState<string>("Student");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    console.log("Role:", role);
    console.log("Username:", username);
    console.log("Password:", password);
    // Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Welcome Back</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <FaUserShield className="absolute left-3 top-3.5 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative">
            <MdOutlinePassword className="absolute left-3 top-3.5 text-gray-400 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div
              className="absolute right-3 top-3.5 text-xl text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Don't have an account? <span className="text-indigo-600 cursor-pointer hover:underline">Contact Admin</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
