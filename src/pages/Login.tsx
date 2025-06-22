import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLoginMutation } from "../api/studentApi";
import { toast, type Id } from "react-toastify";
import { toastUpdate } from "../helper/helper";
import { useNavigate } from "react-router-dom";

const roles:Array<string> = [
  "Student",
  "Parent",
  "Admin",
  "Teacher",
  "Tutor",
  "HOD",
  "HOD Mentor"
];
type loginFormType = {
  role: string;
  email: string;
  password: string;
}

type errorConfig = {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    message: string;
  }[];
}

type loginResponse = {
  data? :  {
    [keys : string] : string
  },
  error : {
    [keys:string] : string
  }
}

type errorData = {
  email : string;
  password : string;
}

type loginResponseType = {
  data : {
    message : string;
    data : object;
  },
  error: {
    data: {
      message: string;
    };
  } | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}



const LoginPage: React.FC = () => {
  // console.log(import.meta.env.VITE_API_BASE_URL);
  const navigate = useNavigate();
  // collection form data.
  const [formData, setFromData] = useState<loginFormType>({
    role: roles[0],
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // define error for show on page.
  const [error, setError] = useState<errorData>({
    email: "",
    password: "",
  });

  // define error configuration for validation.
  const errorConfig:errorConfig = {
    email : [
      {required : true, message: "email is required"},
      {minLength: 3, message: "email must be at least 3 characters long"},
      {maxLength: 50, message: "email must be at most 50 characters long"},
    ],
    password : [
      {required : true, message: "Password is required"},
      {minLength: 8, message: "Password must be at least 8 characters long"},
      {maxLength: 50, message: "Password must be at most 50 characters long"},
      {pattern : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"},
    ]
  }

  //code for validation form.
  const validateForm = () : errorData => {  
    const error = {
      email: "",
      password: "",
    };
    Object.entries(errorConfig).forEach(([key, _]) => {
      errorConfig[key].some((rule) => {
        if (rule.required && !formData[key as keyof loginFormType]) {
          error[key as keyof errorData] = rule.message;
          return true; // Stop checking further rules for this field
        } 
        if (rule.minLength && formData[key as keyof loginFormType].length < rule.minLength) {
          error[key as keyof errorData] = rule.message;
          return true; // Stop checking further rules for this field
        } 
        if (rule.maxLength && formData[key as keyof loginFormType].length > rule.maxLength) {
          error[key as keyof errorData] = rule.message;
          return true; // Stop checking further rules for this field
        } 
        if (rule.pattern && !rule.pattern.test(formData[key as keyof loginFormType])) {
          error[key as keyof errorData] = rule.message;
          return true; // Stop checking further rules for this field
        }
      })
    })
    setError(error);
    return error;
  }

  // code for handle the user login event.
  const [loginUser] = useLoginMutation<loginResponseType>();
  const handleLogin = async (e : React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const error = validateForm();
    if(error.email || error.password) {
      console.log("Validation errors:", error);
      return;
    }
    let toastId : Id = "";
    
    toastId = toast.loading("Logging in...")
    
    try {
        // Call the login mutation with the form data
        
        const {data, error} = await loginUser({fcType : formData.role.toLocaleLowerCase(), credentials : {email: formData.email, password: formData.password}});

        if(data) {
          toastUpdate({toastId, message : data.message, type : "success"});
          navigate("/");
        }
        if(error) toastUpdate({toastId, message : error?.data?.message, type : "error"})
      
        

          // Redirect or perform any other action after successful login
        }

      catch (error : unknown) {
          toastUpdate({toastId, message : "Something went wrong", type : "error"})
    }
    // console.log("Role:", role);
    // console.log("email:", email);
    // console.log("Password:", password);
    // Add authentication logic here
  };

  //code for handle the change event of input and select elements.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({ ...prevData, [name]: value }));
    setError({email : "", password : ""});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Welcome Back</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
            <select
              value={formData?.role}
              name="role"
              onChange={handleChange}
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
              placeholder="email"
              value={formData?.email}
              onChange={handleChange}
              name="email"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p id="error" className="my-[10px] text-red-700 text-[14px]" >{error.email}</p>
          </div>

          <div className="relative">
            <MdOutlinePassword className="absolute left-3 top-3.5 text-gray-400 text-xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData?.password}
              onChange={handleChange}
              name="password"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div
              className="absolute right-3 top-3.5 text-xl text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
            <p id="error" className="my-[10px] text-red-700 text-[14px]" >{error.password}</p>
          </div>

          <input
            type="submit"
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md hover:cursor-pointer"
          
            value="Login" 
          />
        </div>

        <p className="text-center text-sm text-gray-500">
          Don't have an account? <span className="text-indigo-600 cursor-pointer hover:underline">Contact Admin</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
