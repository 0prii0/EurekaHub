import React from "react";
import Auth from "../components/Auth";
const Login = () => {
  const handleLogin = (data) => {
    console.log("🚀 ~ handleLogin ~ data:", data);
    alert("Logging In...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Auth type="login" onSubmit={handleLogin} />

        <p className="mt-4 text-sm text-center">
          Don't have an account?{""}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
