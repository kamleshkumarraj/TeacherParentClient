import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div style={{
        height: '200px',
        width: '100%',
        background: `
          linear-gradient(
            to bottom,
            rgba(255, 153, 51, 0.4) 33.33%,    /* Saffron with 80% opacity */
            rgba(255, 255, 255, 0.4) 33.33%,   /* White with 80% opacity */
            rgba(255, 255, 255, 0.4) 66.66%,
            rgba(19, 136, 8, 0.4) 66.66%       /* Green with 80% opacity */
          ),
          url('https://images.shiksha.com/mediadata/images/1523350740phpi2sQbl.jpeg')
        `,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} className="min-h-screen  flex flex-col items-center justify-center text-white p-4">
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
