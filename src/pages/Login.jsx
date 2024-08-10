import React, { useState } from "react";
import { PiSignInBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log("Form submitted");
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-lightBlue w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center bg-white items-center w-96 rounded-xl">
        <h1 className="font-playwrite font-extrabold text-3xl text-darkBlue p-16">
          My Finance
        </h1>
        <h3 className="text-purple-700 font-bold text-2xl pb-5">Hi, Welcome Back</h3>
        <p className="text-sm text-gray-400 pb-5">Enter your credentials to continue</p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center p-5 gap-8">
          <div className="w-full">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 rounded-xl border-2 ${errors.email ? "border-red-500 placeholder-red-500" : "border-gray-300"}`}
              placeholder="Email Address / Username"
              style={{ color: errors.email ? "red" : "inherit" }}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 pl-3">{errors.email}</p>}
          </div>
          <div className="w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 rounded-xl border-2 ${errors.password ? "border-red-500 placeholder-red-500" : "border-gray-300"}`}
              placeholder="Password"
              style={{ color: errors.password ? "red" : "inherit" }}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1 pl-3">{errors.password}</p>}
          </div>
          <div className="w-full flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="rememberMe" className="text-sm text-gray-500">Remember Me</label>
          </div>
          <button type="submit" className="flex gap-3 bg-purple-700 p-2 w-full justify-center items-center rounded-md">
            <h1 className="text-white font-medium">Sign in</h1>
            <PiSignInBold className="text-xl text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
