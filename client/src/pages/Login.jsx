import React from "react";
import Auth from "../components/Auth";
import { motion as Motion } from "framer-motion";



const Login = () => {
  const handleLogin = (data) => {
    console.log("🚀 ~ handleLogin ~ data:", data);
    alert("Logging In...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300">
      <Motion.div
        className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl"
        whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 drop-shadow-md">Login</h2>
        <Auth type="login" onSubmit={handleLogin} />

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{""}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </Motion.div>
    </div>
  );
};

export default Login;
