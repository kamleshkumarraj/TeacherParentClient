import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div style={{backgroundImage : `linear-gradient(rgba(255, 153, 51, 0.3), rgba(19, 136, 8, 0.3)), url(https://assets.collegedunia.com/public/college_data/images/appImage/159627636400JIET.jpg)`, backgroundRepeat : 'no-repeat', backgroundSize : '100% 100%', }} className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center drop-shadow-lg text-red-400">Welcome to Our College Portal</h1>

      <p className="text-lg text-blue-600 font-[500]  md:text-xl max-w-2xl text-center mb-8">
        Stay connected with your faculty, parents, and students. View academic records, communicate instantly, and never miss an update.
      </p>

      

      <button
        onClick={handleLoginRedirect}
        className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 hover:cursor-pointer transition duration-300"
      >
        Login to Continue
      </button>
    </div>
  );
};

export default HomePage;
