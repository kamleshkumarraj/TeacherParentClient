import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-lg">Welcome to Our College Portal</h1>

      <p className="text-lg md:text-xl max-w-2xl text-center mb-8">
        Stay connected with your faculty, parents, and students. View academic records, communicate instantly, and never miss an update.
      </p>

      <img
        src="https://assets.collegedunia.com/public/college_data/images/appImage/159627636400JIET.jpg"
        alt="College Activities"
        className="w-full max-w-4xl rounded-3xl shadow-2xl mb-10 object-cover"
      />

      <button
        onClick={handleLoginRedirect}
        className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition duration-300"
      >
        Login to Continue
      </button>
    </div>
  );
};

export default HomePage;
