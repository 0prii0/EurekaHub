import React, { useState } from "react";

const Auth = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value});
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation for password === confirmpassword
    if(type === "register"){
      if (formData.password !== FormData.confirmPassword) {
        setError("Password do not match");
        return;
      }
    }


    // validation for logins

    if(type === "login") {
      if(!formData.email || formData.password) {
        setError("Please fill in all fields")
        return;
      }
    }


    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === "register" && (
        <input
          type="text"
          name="fullName"
          placeholder="Enter your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="xyz@gmail.com"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      {type === "register" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}



      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <button 
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default Auth;
